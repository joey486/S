# S Language Emulator

This is a minimal web-based emulator for the theoretical "S" programming language, designed for learning about computability and low-level programming models. It supports basic operations, label jumps, and conditional branching.

---

## 🔧 Features
- Minimal and responsive UI  
- Supports `+1`, `-1`, and `+0`/`-0` operations (copying values)  
- Label definition and `GOTO` support  
- Conditional branching with `IF A != B GOTO LBL`  
- Dark/light mode toggle  
- Infinite loop detection after 10,000 steps  

---

## 💡 Language Syntax
```
[START] 
X <- Y + 1 
X <- Y - 1 
X <- Y + 0 
IF X != Y GOTO END 
GOTO START
```
---

## 🖥 Try it out
Open the web interface locally or host it yourself.  
All logic is embedded in a single HTML file with no dependencies.

Live example available in your portfolio:  
👉 [My Portfolio](https://portfolio-z2hk.onrender.com/)

---

## 📚 Related Reading
- [Computability Theory - Wikipedia](https://en.wikipedia.org/wiki/Computability_theory)
- [Register Machines (S-language) - Wikipedia](https://en.wikipedia.org/wiki/Register_machine)
- [GOTO and Structured Programming](https://en.wikipedia.org/wiki/Spaghetti_code)

---

## 🚀 Future Improvements
- Add support for output instructions (e.g. `PRINT X`)
- Add input field for register initialization
- Add share/export features (e.g. shareable code snippets)

---

## 📁 File Structure
- `index.html` — UI and emulator logic combined  
- `README.md` — This file  

---

## 📜 License
MIT License — feel free to use, modify, and share.

---

Made with ❤️ by [joey486](https://portfolio-z2hk.onrender.com/)