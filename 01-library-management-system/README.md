# Campus Library Management System

A simple responsive Library Management System built with HTML, CSS and JavaScript.

## Features
- Dashboard showing total, available and borrowed books, and registered members
- Add, search, issue, return and delete books
- Register and delete library members
- Responsive layout for desktop and mobile
- Browser local storage so demo data remains after refresh

## Project structure
```text
01-library-management-system/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── pages/
│   ├── books.html
│   ├── members.html
│   └── issue.html
├── index.html
├── package.json
├── serve.js
└── README.md
```

## Run the project
1. Download or clone this folder.
2. Open `index.html` in a browser, or use the optional local server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000`.

## Notes
This is an academic demonstration project. Data is stored in browser local storage, not a shared database. Clearing browser data will reset the demo data. Add authentication and a database before using it in a real library.
