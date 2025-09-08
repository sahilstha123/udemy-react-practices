# 💰 Investment Calculator (React + Vite + Tailwind)
 This project is a simple **Investment Calculator** built with **react, Vite and TailwindCSS**.
 It allows users to calculate their invetsment growth based on:
- Initial Investment
- Annual Investment
- Expected Return (%)
- Duration (Years)
The app shows results in a **paginated table** with detailed breakdowns of yearly growth, interest, and invested capital.
---

## 🚀 Features

✅ User-friendly investment form  
✅ Calculates yearly investment growth  
✅ Displays results in a styled, responsive table  
✅ Pagination support for large durations  
✅ TailwindCSS styling with clean UI  
✅ Input validation (ensures duration > 0)  

---

## 🛠️ Tech Stack

- **Frontend:** React (with Vite)  
- **Styling:** Tailwind CSS  
- **Utilities:** Custom investment calculation function  

---

## 📂 Project Structure
├── src
│ ├── Components
│ │ ├── Navbar.jsx
│ │ ├── CalculatorForm.jsx
│ │ └── TableForm.jsx
│ ├── util
│ │ └── investment.js
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── index.html
├── package.json
└── README.md
---

## ⚡ Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/investment-calculator.git
cd investment-calculator
npm install
npm run dev
```