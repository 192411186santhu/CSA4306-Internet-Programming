# Online Bus Ticket Booking System

A responsive bus ticket booking demonstration built with HTML, CSS and JavaScript.

## Features
- Search buses by source and destination
- View bus operators, route, timings, fares and sample seat availability
- Select seats and enter passenger details
- Generate a demo PNR for each booking
- View booking history and cancel a ticket
- Responsive interface for desktop and mobile
- Browser local storage for demo records

## Project structure
```text
03-bus-ticket-booking/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── pages/
│   ├── buses.html
│   ├── book.html
│   └── bookings.html
├── index.html
├── README.md
├── package.json
└── serve.js
```

## Run the project
Open `index.html` in a browser, or run:
```bash
npm start
```
Then visit `http://localhost:3002`.

## Academic project note
This is a frontend demonstration. It uses sample bus data and browser local storage. It does not connect to live bus operators, send confirmation emails, provide real authentication, or process actual payments.
