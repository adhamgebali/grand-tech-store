const products = [

/* ================= CPU ================= */

// Intel i3
{id:1,name:"i3-12100F",price:3000,img:"images/cpu/i3.png",cat:"cpu",
specs:["4 Cores","8 Threads","Up to 4.3GHz","Cache 12MB","LGA1700"]},

{id:2,name:"i3-14100",price:3500,img:"images/cpu/i3.png",cat:"cpu",
specs:["4 Cores","8 Threads","Up to 4.7GHz","Cache 12MB","LGA1700"]},

// Intel i5
{id:3,name:"i5-12400F",price:6000,img:"images/cpu/i5.png",cat:"cpu",
specs:["6 Cores","12 Threads","Up to 4.4GHz","Cache 18MB","LGA1700"]},

{id:4,name:"i5-12600K",price:8000,img:"images/cpu/i5.png",cat:"cpu",
specs:["10 Cores","16 Threads","Up to 4.9GHz","Cache 20MB","Unlocked"]},

{id:5,name:"i5-13400F",price:6500,img:"images/cpu/i5.png",cat:"cpu",
specs:["10 Cores","16 Threads","Up to 4.6GHz","Cache 20MB"]},

{id:6,name:"i5-13600K",price:9500,img:"images/cpu/i5.png",cat:"cpu",
specs:["14 Cores","20 Threads","Up to 5.1GHz","Cache 24MB","Unlocked"]},

{id:7,name:"i5-14600K",price:10000,img:"images/cpu/i5.png",cat:"cpu",
specs:["14 Cores","20 Threads","Up to 5.3GHz","Cache 24MB"]},

// Intel i7
{id:8,name:"i7-12700K",price:9000,img:"images/cpu/i7.png",cat:"cpu",
specs:["12 Cores","20 Threads","Up to 5.0GHz","Cache 25MB"]},

{id:9,name:"i7-13700K",price:11000,img:"images/cpu/i7.png",cat:"cpu",
specs:["16 Cores","24 Threads","Up to 5.4GHz","Cache 30MB"]},

{id:10,name:"i7-14700K",price:12000,img:"images/cpu/i7.png",cat:"cpu",
specs:["20 Cores","28 Threads","Up to 5.6GHz","Cache 33MB"]},

// Intel i9
{id:11,name:"i9-13900K",price:13000,img:"images/cpu/i9.png",cat:"cpu",
specs:["24 Cores","32 Threads","Up to 5.8GHz","Cache 36MB"]},

{id:12,name:"i9-14900K",price:15000,img:"images/cpu/i9.png",cat:"cpu",
specs:["24 Cores","32 Threads","Up to 6.0GHz","Cache 36MB"]},

// AMD Ryzen
{id:13,name:"Ryzen 5 3600",price:3500,img:"images/cpu/ryzen5.png",cat:"cpu",
specs:["6 Cores","12 Threads","Up to 4.2GHz","Cache 32MB","AM4"]},

{id:28,name:"Ryzen 5 5500",price:4500,img:"images/cpu/ryzen5.png",cat:"cpu",
specs:["6 Cores","12 Threads","Up to 4.2GHz","Cache 16MB","AM4"]},

{id:14,name:"Ryzen 5 5600",price:5000,img:"images/cpu/ryzen5.png",cat:"cpu",
specs:["6 Cores","12 Threads","Up to 4.4GHz","Cache 32MB","AM4"]},

{id:15,name:"Ryzen 5 5600X",price:5500,img:"images/cpu/ryzen5.png",cat:"cpu",
specs:["6 Cores","12 Threads","Up to 4.6GHz","Cache 32MB","AM4"]},

{id:16,name:"Ryzen 7 5800X",price:7000,img:"images/cpu/ryzen7.png",cat:"cpu",
specs:["8 Cores","16 Threads","Up to 4.7GHz","Cache 32MB","AM4"]},

{id:17,name:"Ryzen 9 5900X",price:9000,img:"images/cpu/ryzen9.png",cat:"cpu",
specs:["12 Cores","24 Threads","Up to 4.8GHz","Cache 64MB","AM4"]},

// Ryzen 7000
{id:18,name:"Ryzen 5 7600",price:8000,img:"images/cpu/ryzen5.png",cat:"cpu",
specs:["6 Cores","12 Threads","Up to 5.1GHz","AM5"]},

{id:19,name:"Ryzen 7 7700X",price:9500,img:"images/cpu/ryzen7.png",cat:"cpu",
specs:["8 Cores","16 Threads","Up to 5.4GHz","AM5"]},

{id:20,name:"Ryzen 9 7900X",price:11000,img:"images/cpu/ryzen9.png",cat:"cpu",
specs:["12 Cores","24 Threads","Up to 5.6GHz","AM5"]},

{id:21,name:"Ryzen 9 7950X",price:12000,img:"images/cpu/ryzen9.png",cat:"cpu",
specs:["16 Cores","32 Threads","Up to 5.7GHz","AM5"]},

// X3D
{id:22,name:"Ryzen 7 7800X3D",price:11500,img:"images/cpu/ryzen7.png",cat:"cpu",
specs:["8 Cores","3D Cache","AM5"]},

{id:23,name:"Ryzen 9 7950X3D",price:15000,img:"images/cpu/ryzen9.png",cat:"cpu",
specs:["16 Cores","3D Cache","AM5"]},

/* ================= GPU ================= */

{ id:120,name:"RX 570",price:3000,img:"images/gpu/rx570.png",cat:"gpu",specs:["4GB","GDDR5"]},
{ id:121,name:"RX 580",price:3500,img:"images/gpu/rx580.png",cat:"gpu",specs:["8GB","GDDR5"]},
{ id:122,name:"RX 5600 XT",price:6000,img:"images/gpu/rx5600.png",cat:"gpu",specs:["6GB","GDDR6"]},
{ id:123,name:"RX 5700 XT",price:7500,img:"images/gpu/rx5700.png",cat:"gpu",specs:["8GB","GDDR6"]},
{ id:101,name:"GTX 960",price:3500,img:"images/gpu/gtx960.png",cat:"gpu",specs:["2GB","GDDR5"]},
{ id:102,name:"GTX 1060",price:4000,img:"images/gpu/gtx1060.png",cat:"gpu",specs:["6GB","GDDR5"]},
{ id:103,name:"GTX 1070",price:4500,img:"images/gpu/gtx1070.png",cat:"gpu",specs:["8GB","GDDR5"]},
{ id:104,name:"GTX 1080",price:7500,img:"images/gpu/gtx1080.png",cat:"gpu",specs:["8GB","GDDR5X"]},
{ id:105,name:"GTX 1660",price:9000,img:"images/gpu/gtx1660.png",cat:"gpu",specs:["6GB","GDDR5"]},

{ id:106,name:"RTX 3050",price:15000,img:"images/gpu/rtx3050.png",cat:"gpu",specs:["8GB","Ray Tracing"]},
{ id:107,name:"RTX 3060",price:17000,img:"images/gpu/rtx3060.png",cat:"gpu",specs:["12GB","Ray Tracing"]},
{ id:108,name:"RTX 3080",price:22000,img:"images/gpu/rtx3080.png",cat:"gpu",specs:["10GB","4K Gaming"]},
{ id:109,name:"RTX 4060",price:30000,img:"images/gpu/rtx4060.png",cat:"gpu",specs:["8GB","DLSS3"]},
{ id:110,name:"RTX 4070",price:35000,img:"images/gpu/rtx4070.png",cat:"gpu",specs:["12GB","DLSS3"]},
{ id:111,name:"RTX 4080",price:42000,img:"images/gpu/rtx4080.png",cat:"gpu",specs:["16GB","Ultra"]},
{ id:112,name:"RTX 4090",price:48000,img:"images/gpu/rtx4090.png",cat:"gpu",specs:["24GB","Extreme"]},

/* ================= RAM ================= */

{ id:200,name:"DDR4 8GB",price:3500,img:"images/ram/ddr4.png",cat:"ram",specs:["8GB","3200MHz"]},
{ id:201,name:"DDR4 16GB",price:6000,img:"images/ram/ddr4.png",cat:"ram",specs:["16GB","3200MHz"]},
{ id:202,name:"DDR5 16GB",price:8000,img:"images/ram/ddr5.png",cat:"ram",specs:["16GB","5600MHz"]},
{ id:203,name:"DDR5 32GB",price:13000,img:"images/ram/ddr5.png",cat:"ram",specs:["32GB","6000MHz"]},

/* ================= Motherboard ================= */

{ id:210,name:"B450 Motherboard",price:3000,img:"images/motherboard/b450.png",cat:"motherboard",specs:["AM4","DDR4","PCIe 3.0"]},
{ id:211,name:"B550 Motherboard",price:4000,img:"images/motherboard/b550.png",cat:"motherboard",specs:["AM4","PCIe 4.0"]},
{ id:212,name:"B650 Motherboard",price:5500,img:"images/motherboard/b650.png",cat:"motherboard",specs:["AM5","DDR5"]},
{ id:213,name:"B760 Motherboard",price:6000,img:"images/motherboard/b760.png",cat:"motherboard",specs:["LGA1700","DDR5"]},

/* ================= PSU ================= */

{ id:220,name:"550W PSU",price:1200,img:"images/psu/psu1.png",cat:"psu",specs:["550W","80+ Bronze"]},
{ id:221,name:"600W PSU",price:1700,img:"images/psu/psu2.png",cat:"psu",specs:["650W","80+ Bronze"]},
{ id:222,name:"750W PSU",price:2200,img:"images/psu/psu3.png",cat:"psu",specs:["750W","80+ Gold"]},

/* ================= Accessories ================= */

{ id:230,name:"Gaming Headset",price:800,img:"images/accessories/hs1.png",cat:"accessories",specs:["RGB","Surround"]},
{ id:231,name:"Forev Mechanical Mouse",price:600,img:"images/accessories/mouse.png",cat:"accessories",specs:["Wireless","RGB"]},
{ id:232,name:"Mechanical Keyboard",price:1200,img:"images/accessories/kb1.png",cat:"accessories",specs:["RGB","Blue Switch"]},
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