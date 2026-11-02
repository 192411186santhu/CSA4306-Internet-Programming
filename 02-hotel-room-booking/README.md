# Hotel Room Booking System

A responsive hotel room booking demonstration built with HTML, CSS and JavaScript.

## Features
- Home dashboard with room and booking summaries
- Browse standard, deluxe and family suite room options
- Booking form with guest details and date validation
- View and cancel reservations
- Responsive design for desktop and mobile
- Browser local storage for demo data

## Project structure
```text
02-hotel-room-booking/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── pages/
│   ├── rooms.html
│   ├── book.html
│   └── bookings.html
├── index.html
├── package.json
├── serve.js
└── README.md
```

## Run locally
Open `index.html` in a browser, or run `npm install` (no external packages are required) followed by `npm start`, then visit `http://localhost:3001`.

## Academic project note
This is a frontend demonstration. It stores bookings in browser local storage and does not include real payment processing, authentication, room inventory synchronization or a server database.
