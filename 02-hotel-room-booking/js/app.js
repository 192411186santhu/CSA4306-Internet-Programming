const initialRooms=[
{id:1,name:'Standard Room',type:'Standard',price:1800,capacity:2,description:'A comfortable room for a relaxing short stay.',icon:'🛏️'},
{id:2,name:'Deluxe Room',type:'Deluxe',price:2800,capacity:2,description:'Extra space and thoughtful comforts for two.',icon:'🪟'},
{id:3,name:'Family Suite',type:'Suite',price:4500,capacity:4,description:'A spacious suite for family trips and longer stays.',icon:'🏨'}
];
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
const write=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
if(!localStorage.getItem('stayRooms'))write('stayRooms',initialRooms);
if(!localStorage.getItem('stayBookings'))write('stayBookings',[]);
const rooms=()=>read('stayRooms',initialRooms), bookings=()=>read('stayBookings',[]);
const money=n=>'₹'+Number(n).toLocaleString('en-IN');
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function roomCard(r){return `<article class="room-card"><div class="room-visual">${r.icon||'🛏️'}</div><div class="room-content"><h3>${safe(r.name)}</h3><p>${safe(r.description)} · Up to ${r.capacity} guests</p><div class="room-meta"><span class="price">${money(r.price)} <small>/ night</small></span><a href="book.html?room=${r.id}">Book now →</a></div></div></article>`}
function dashboard(){const r=rooms(),b=bookings();const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};set('roomCount',r.length);set('bookingCount',b.length);set('confirmedCount',b.filter(x=>x.status==='Confirmed').length);const el=document.getElementById('featuredRooms');if(el)el.innerHTML=r.slice(0,3).map(roomCard).join('')}
function renderRooms(){const el=document.getElementById('roomList');if(el)el.innerHTML=rooms().map(roomCard).join('')}
function renderBookings(){const el=document.getElementById('bookingRows');if(!el)return;const b=bookings();el.innerHTML=b.map(x=>`<tr><td>${safe(x.guest)}</td><td>${safe(x.roomName)}</td><td>${safe(x.checkin)}</td><td>${safe(x.checkout)}</td><td>${x.guests}</td><td><span class="pill ${x.status==='Cancelled'?'cancelled':''}">${x.status}</span></td><td>${x.status==='Confirmed'?`<button class="danger" onclick="cancelBooking(${x.id})">Cancel</button>`:'—'}</td></tr>`).join('')||'<tr><td colspan="7" class="empty">No bookings yet. Explore rooms to make your first reservation.</td></tr>'}
function setupBooking(){const form=document.getElementById('bookingForm');if(!form)return;const params=new URLSearchParams(location.search);const selected=rooms().find(r=>r.id===Number(params.get('room')));const select=form.room;if(select){select.innerHTML=rooms().map(r=>`<option value="${r.id}" ${selected&&selected.id===r.id?'selected':''}>${safe(r.name)} — ${money(r.price)} / night</option>`).join('')}form.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const room=rooms().find(r=>r.id===Number(f.room.value));const checkin=f.checkin.value,checkout=f.checkout.value;if(checkout<=checkin){alert('Check-out date must be after check-in date.');return}const record={id:Date.now(),guest:f.guest.value.trim(),email:f.email.value.trim(),roomId:room.id,roomName:room.name,checkin,checkout,guests:f.guests.value,status:'Confirmed'};const b=bookings();b.push(record);write('stayBookings',b);alert('Your booking has been confirmed!');location.href='bookings.html'})}
function cancelBooking(id){if(confirm('Cancel this booking?')){write('stayBookings',bookings().map(b=>b.id===id?{...b,status:'Cancelled'}:b));renderBookings()}}
document.addEventListener('DOMContentLoaded',()=>{dashboard();renderRooms();renderBookings();setupBooking()});
