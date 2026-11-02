# Experiment 5 – Online Flight Reservation System

## Aim
To design and implement a simple online flight reservation interface using HTML, CSS and JavaScript.

## Features
- Search sample flights by source, destination and travel date.
- Select a travel class and an available seat.
- Enter passenger details and confirm a simulated booking.
- Generate a demo PNR and display a printable ticket.
- View booking history and cancel a confirmed demo booking.
- Store demo bookings in browser localStorage.

## Project structure
```text
05-flight-reservation-system/
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── book.js
│   └── bookings.js
├── pages/
│   ├── book.html
│   └── bookings.html
├── index.html
├── package.json
├── serve.js
└── README.md
```

## How to run
1. Extract the project folder.
2. Open the folder in VS Code.
3. Run `npm start` in the terminal, or open `index.html` in a browser.
4. Search using sample routes such as Chennai to Bengaluru, Chennai to Hyderabad, or Bengaluru to Mumbai.
5. Select a flight, choose a seat, enter passenger details and confirm the demo booking.

## Technologies
- HTML5
- CSS3
- JavaScript
- Browser localStorage

## Note
This is an academic frontend demonstration. Flight schedules, fares and seats are sample data. It does not connect to airline systems, verify real-time availability, process actual payments, or send emails.
