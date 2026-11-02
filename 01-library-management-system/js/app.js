const seedBooks = [
 {id:1,title:'The Alchemist',author:'Paulo Coelho',category:'Fiction',status:'Available'},
 {id:2,title:'Wings of Fire',author:'A. P. J. Abdul Kalam',category:'Biography',status:'Borrowed'},
 {id:3,title:'Clean Code',author:'Robert C. Martin',category:'Technology',status:'Available'},
 {id:4,title:'Introduction to Algorithms',author:'Thomas H. Cormen',category:'Technology',status:'Available'},
 {id:5,title:'The Guide',author:'R. K. Narayan',category:'Fiction',status:'Available'}
];
const seedMembers = [{id:1,name:'Arun Kumar',email:'arun@example.com',phone:'9876543210'},{id:2,name:'Priya S',email:'priya@example.com',phone:'9876501234'}];
const get = (key, fallback) => { try { const v=localStorage.getItem(key); return v?JSON.parse(v):fallback; } catch { return fallback; } };
const save = (key,value) => localStorage.setItem(key,JSON.stringify(value));
if(!localStorage.getItem('libraryBooks')) save('libraryBooks',seedBooks);
if(!localStorage.getItem('libraryMembers')) save('libraryMembers',seedMembers);
const books = () => get('libraryBooks',[]);
const members = () => get('libraryMembers',[]);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function renderDashboard(){
 const b=books(),m=members();
 const put=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
 put('totalBooks',b.length);put('availableBooks',b.filter(x=>x.status==='Available').length);put('totalMembers',m.length);put('borrowedBooks',b.filter(x=>x.status==='Borrowed').length);
 const body=document.getElementById('recentBooks');
 if(body)body.innerHTML=b.slice(-5).reverse().map(x=>`<tr><td><strong>${esc(x.title)}</strong></td><td>${esc(x.author)}</td><td>${esc(x.category)}</td><td><span class="status ${x.status==='Borrowed'?'borrowed':''}">${x.status}</span></td></tr>`).join('')||'<tr><td colspan="4" class="empty">No books yet.</td></tr>';
}
function renderBooks(filter=''){
 const body=document.getElementById('booksTable');if(!body)return;
 const rows=books().filter(b=>(b.title+' '+b.author+' '+b.category).toLowerCase().includes(filter.toLowerCase()));
 body.innerHTML=rows.map(b=>`<tr><td><strong>${esc(b.title)}</strong></td><td>${esc(b.author)}</td><td>${esc(b.category)}</td><td><span class="status ${b.status==='Borrowed'?'borrowed':''}">${b.status}</span></td><td><button class="secondary-btn" onclick="toggleBook(${b.id})">${b.status==='Available'?'Issue':'Return'}</button> <button class="danger-btn" onclick="deleteBook(${b.id})">Delete</button></td></tr>`).join('')||'<tr><td colspan="5" class="empty">No matching books found.</td></tr>';
}
function addBook(e){e.preventDefault();const f=e.target;const b=books();b.push({id:Date.now(),title:f.title.value.trim(),author:f.author.value.trim(),category:f.category.value,status:'Available'});save('libraryBooks',b);f.reset();renderBooks();alert('Book added successfully.');}
function toggleBook(id){const b=books().map(x=>x.id===id?{...x,status:x.status==='Available'?'Borrowed':'Available'}:x);save('libraryBooks',b);renderBooks();}
function deleteBook(id){if(confirm('Delete this book?')){save('libraryBooks',books().filter(x=>x.id!==id));renderBooks();}}
function renderMembers(){const body=document.getElementById('membersTable');if(!body)return;body.innerHTML=members().map(m=>`<tr><td><strong>${esc(m.name)}</strong></td><td>${esc(m.email)}</td><td>${esc(m.phone)}</td><td><button class="danger-btn" onclick="deleteMember(${m.id})">Delete</button></td></tr>`).join('')||'<tr><td colspan="4" class="empty">No members registered.</td></tr>';}
function addMember(e){e.preventDefault();const f=e.target;const m=members();m.push({id:Date.now(),name:f.name.value.trim(),email:f.email.value.trim(),phone:f.phone.value.trim()});save('libraryMembers',m);f.reset();renderMembers();alert('Member registered successfully.');}
function deleteMember(id){if(confirm('Delete this member?')){save('libraryMembers',members().filter(x=>x.id!==id));renderMembers();}}
document.addEventListener('DOMContentLoaded',()=>{renderDashboard();renderBooks();renderMembers();const search=document.getElementById('bookSearch');if(search)search.addEventListener('input',e=>renderBooks(e.target.value));});
