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
<button onclick="openProduct(${p.id})">شراء</button>
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

document.getElementById("name").innerText=p.name;
document.getElementById("price").innerText=p.price+" ج.م";
document.getElementById("img").src=p.img;
}

/* السلة */
function addToCart(id){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let p=products.find(x=>x.id==id);

let exist=cart.find(x=>x.id==id);

if(exist){
exist.qty++;
}else{
p.qty=1;
cart.push(p);
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

let total=0;
let msg="طلب جديد\n";

cart.forEach(p=>{
msg+=`${p.name} × ${p.qty}\n`;
total+=p.price*p.qty;
});

msg+=`\nالإجمالي: ${total}`;
msg+=`\n${name} - ${phone} - ${address}`;

if(type=="vodafone"){
alert("حول فلوس على 01040952410");
msg+="\nالدفع: فودافون كاش";
}else{
msg+="\nالدفع: عند الاستلام";
}

window.open(`https://wa.me/201040952410?text=${encodeURIComponent(msg)}`);

localStorage.removeItem("cart");
window.location="index.html";
}

/* تشغيل */
showProducts();
loadProduct();
loadCart();
updateCartCount();