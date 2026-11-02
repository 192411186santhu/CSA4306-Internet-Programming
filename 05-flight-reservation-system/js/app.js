const sampleFlights=[
 {id:"SK101",airline:"SkyAir",from:"Chennai",to:"Bengaluru",depart:"07:30",arrive:"08:35",duration:"1h 05m",fare:3200,seats:["1A","1B","2A","2B","3A","3B"]},
 {id:"IN204",airline:"Indigo Demo",from:"Chennai",to:"Bengaluru",depart:"11:15",arrive:"12:20",duration:"1h 05m",fare:3850,seats:["1A","2A","2B","3A","3B","4A"]},
 {id:"SK315",airline:"SkyAir",from:"Chennai",to:"Hyderabad",depart:"16:40",arrive:"18:00",duration:"1h 20m",fare:4100,seats:["1A","1B","2A","2B","3A"]},
 {id:"IN420",airline:"Indigo Demo",from:"Bengaluru",to:"Mumbai",depart:"09:00",arrive:"10:45",duration:"1h 45m",fare:5200,seats:["1A","1B","2A","3A","3B"]}
];
const readBookings=()=>JSON.parse(localStorage.getItem("skybookBookings")||"[]");
const saveBookings=b=>localStorage.setItem("skybookBookings",JSON.stringify(b));
function money(n){return "₹"+Number(n).toLocaleString("en-IN")}
function getFlight(id){return sampleFlights.find(f=>f.id===id)}
function showFlights(list){const root=document.getElementById("flightResults");if(!root)return;document.getElementById("resultCount").textContent=`${list.length} sample flight(s) found`;root.innerHTML=list.length?list.map(f=>`<article class="flight-card"><div><h3>${f.airline}</h3><span class="muted">${f.id} · ${document.getElementById("travelClass")?.value||"Economy"}</span></div><div><strong>${f.depart} → ${f.arrive}</strong><div class="muted">${f.from} to ${f.to}</div></div><div><strong>${f.duration}</strong><div class="price">${money(f.fare)}</div></div><button class="primary" onclick="chooseFlight('${f.id}')">Select</button></article>`).join(""):'<p class="muted">No matching sample flights. Try Chennai to Bengaluru, Hyderabad or Mumbai.</p>'}
document.getElementById("searchForm")?.addEventListener("submit",e=>{e.preventDefault();const from=document.getElementById("from").value.trim().toLowerCase(),to=document.getElementById("to").value.trim().toLowerCase();const date=document.getElementById("date").value;if(date<new Date().toISOString().slice(0,10)){alert("Please choose today or a future date.");return}sessionStorage.setItem("skybookSearch",JSON.stringify({from,to,date,travelClass:document.getElementById("travelClass").value}));showFlights(sampleFlights.filter(f=>f.from.toLowerCase()===from&&f.to.toLowerCase()===to))});
function chooseFlight(id){const f=getFlight(id),s=JSON.parse(sessionStorage.getItem("skybookSearch")||"{}");location.href=`pages/book.html?flight=${encodeURIComponent(id)}&date=${encodeURIComponent(s.date||"")}&class=${encodeURIComponent(s.travelClass||"Economy")}`}
window.chooseFlight=chooseFlight;
