const products = [
{id:1,name:"i5",price:6000,img:"images/cpu/i5.png"},
{id:2,name:"RTX 3060",price:15000,img:"images/gpu/rtx3060.png"},
{id:3,name:"DDR4 16GB",price:2500,img:"images/ram/ddr4.png"}
];

/* عرض */
function showProducts(list=products){
let box=document.getElementById("products");
if(!box) return;

box.innerHTML="";

list.forEach(p=>{
box.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h4>${p.name}</h4>
<p>${p.price} ج.م</p>
<button onclick="addToCart(${p.id})">اضافة للسلة</button>
<button onclick="buyNowDirect(${p.id})">شراء</button>
</div>`;
});
}

/* بحث */
function searchProducts(){
let val=document.getElementById("search").value.toLowerCase();
showProducts(products.filter(p=>p.name.toLowerCase().includes(val)));
}

/* فتح منتج */
function openProduct(id){
localStorage.setItem("product",id);
window.location="product.html";
}

/* تحميل منتج */
function loadProduct(){
let id=localStorage.getItem("product");
let p=products.find(x=>x.id==id);
if(!p) return;

let nameEl = document.getElementById("name");
let priceEl = document.getElementById("price");
let imgEl = document.getElementById("img");

if(nameEl) nameEl.innerText=p.name;
if(priceEl) priceEl.innerText=p.price+" ج.م";
if(imgEl) imgEl.src=p.img;
}

/* السلة */
function addToCart(id){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let p=products.find(x=>x.id==id);

let exist=cart.find(x=>x.id==id);

if(exist){
exist.qty++;
}else{
let newItem = {...p, qty:1};
cart.push(newItem);
}

localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
alert("تمت الإضافة");
}

function addToCartFromPage(){
let id=localStorage.getItem("product");
addToCart(Number(id));
}

function goToCart(){
window.location="cart.html";
}

/* تحميل السلة */
function loadCart(){
let box=document.getElementById("cart");
if(!box) return;

let cart=JSON.parse(localStorage.getItem("cart"))||[];
let total=0;

box.innerHTML="";

if(cart.length==0){
box.innerHTML="<h3>السلة فارغة</h3>";
return;
}

cart.forEach((p,i)=>{
let t=p.price*p.qty;
total+=t;

box.innerHTML+=`
<div class="card">
<h4>${p.name}</h4>
<p>${p.price} × ${p.qty}</p>

<div class="qty">
<button onclick="changeQty(${i},-1)">-</button>
<span>${p.qty}</span>
<button onclick="changeQty(${i},1)">+</button>
</div>

<p>${t} ج.م</p>
<button onclick="removeItem(${i})">حذف</button>
</div>`;
});

box.innerHTML+=`
<h3>الإجمالي: ${total} ج.م</h3>

<button onclick="checkout('cash')">الدفع عند الاستلام</button>
<button onclick="checkout('vodafone')">فودافون كاش</button>
`;
}

/* تعديل الكمية */
function changeQty(i,c){
let cart=JSON.parse(localStorage.getItem("cart"));
cart[i].qty+=c;
if(cart[i].qty<=0) cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}

/* حذف */
function removeItem(i){
let cart=JSON.parse(localStorage.getItem("cart"));
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}

/* عداد */
function updateCartCount(){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let count=cart.reduce((s,p)=>s+p.qty,0);
let el=document.getElementById("cart-count");
if(el) el.innerText=count;
}

/* checkout */
function checkout(type){

let cart=JSON.parse(localStorage.getItem("cart"))||[];
if(cart.length==0){alert("السلة فاضية");return;}

let name=prompt("اسمك");
let phone=prompt("رقمك");
let address=prompt("عنوانك");

if(!name || !phone || !address){
alert("لازم تملى البيانات");
return;
}

let total=0;
let msg="🛒 طلب جديد\n\n";

cart.forEach(p=>{
msg+=`📦 ${p.name} × ${p.qty}\n`;
total+=p.price*p.qty;
});

msg+=`\n💰 الإجمالي: ${total} ج.م`;
msg+=`\n\n👤 ${name}`;
msg+=`\n📞 ${phone}`;
msg+=`\n📍 ${address}`;

if(type=="vodafone"){
alert("حول فلوس على 01040952410");
msg+="\n💳 الدفع: فودافون كاش";
}else{
msg+="\n💳 الدفع: عند الاستلام";
}

alert("جارٍ تحويلك للواتساب...");

window.location.href = `https://wa.me/201040952410?text=${encodeURIComponent(msg)}`;

localStorage.removeItem("cart");
}

/* شراء مباشر */
function buyNowDirect(id){

let p = products.find(x => x.id == id);

if(!p){
alert("حصل خطأ");
return;
}

let name = prompt("اكتب اسمك");
let phone = prompt("رقمك");
let address = prompt("عنوانك");

if(!name || !phone || !address){
alert("لازم تملى كل البيانات");
return;
}

let msg = `🛒 طلب شراء مباشر
📦 المنتج: ${p.name}
💰 السعر: ${p.price} ج.م

👤 الاسم: ${name}
📞 الهاتف: ${phone}
📍 العنوان: ${address}`;

alert("جارٍ تحويلك للواتساب...");

window.location.href = `https://wa.me/201040952410?text=${encodeURIComponent(msg)}`;
}

/* تشغيل */
showProducts();
loadProduct();
loadCart();
updateCartCount();