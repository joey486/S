function runCode() {
    const code = document.getElementById("code").value;
    const output = document.getElementById("output");
    const lines = code.split("\n").map(l => l.trim()).filter(l => l !== "");
    const registers = {};
    let labels = {};
    let pc = 0;
    let steps = 0;
    const maxSteps = 10000;
    output.textContent = "";

    // First pass: collect labels
    lines.forEach((line, idx) => {
        const labelMatch = line.match(/^\[(\w+)\]$/);
        if (labelMatch) {
            labels[labelMatch[1]] = idx;
        }
    });

    // Second pass: execute
    while (pc < lines.length && steps < maxSteps) {
        let line = lines[pc];

        // Skip label lines
        if (/^\[\w+\]$/.test(line) || line.startsWith(';')) { pc++; continue; }

        let match;

        // Handle increment/decrement
        match = line.match(/^(\w+)\s*<\-\s*(\w+)\s*([+-])\s*1$/);
        if (match) {
            const [_, target, source, op] = match;
            const val = registers[source] || 0;
            registers[target] = op === '+' ? val + 1 : Math.max(val - 1, 0);
            pc++;
            steps++;
            continue;
        }

        // Handle GOTO
        match = line.match(/^GOTO\s+(\w+)$/);
        if (match) {
            const label = match[1];
            pc = labels[label] ?? -1;
            if (pc === -1) {
                output.textContent += `Label not found: ${label}\n`;
                break;
            }
            steps++;
            continue;
        }

        // Handle conditional GOTO
        match = line.match(/^IF\s+(\w+)\s*(==|!=)\s*(\w+)\s+GOTO\s+(\w+)$/);
        if (match) {
            const [_, left, operator, right, label] = match;
            const lval = registers[left] || 0;
            const rval = registers[right] || 0;
            const cond = operator === '==' ? lval === rval : lval !== rval;
            if (cond) {
                pc = labels[label] ?? -1;
                if (pc === -1) {
                    output.textContent += `Label not found: ${label}\n`;
                    break;
                }
            } else {
                pc++;
            }
            steps++;
            continue;
        }

        output.textContent += `Invalid instruction at line ${pc + 1}: ${line}\n`;
        break;
    }

    if (steps >= maxSteps) {
        output.textContent += `\nProgram terminated after ${maxSteps} steps — possible infinite loop detected.\n`;
    }

    output.textContent += `\nFinal Register State:\n`;
    for (const [reg, val] of Object.entries(registers)) {
        output.textContent += `${reg} = ${val}\n`;
    }
}