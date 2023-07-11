const home = document.getElementById('home');
const branch = document.getElementById('branch');
const ekbatan = document.getElementById('ekbatan');
const menu = document.getElementById('menu');
const main = document.getElementById('main');
const starter = document.getElementById('starter');
const drink = document.getElementById('drink');
const desert = document.getElementById('desert');
const representation= document.getElementById('representation');
const aboutUs = document.getElementById('aboutus');
const contactUs =document.getElementById('contactus');
const searchIcon =document.getElementById('search-icon');
const closeSearch =document.getElementById('close');
const cart =document.getElementById('cart');
const user =document.getElementById('user');
const branchList = document.getElementById("branchlist");
const showBranchList = document.getElementById("brancharrow");
const menuList = document.getElementById("menulist");
const showMenuList = document.getElementById("menuarrow");


showMenuList.addEventListener("mouseover", () => {
  menuList.style.opacity = "1";
},true);
// showMenuList.addEventListener("mouseleave", () => {
//   menuList.style.opacity = "0";
// },true);

showBranchList.addEventListener("mouseover", () => {
  branchList.style.opacity = "1";
},true);
// showBranchList.addEventListener("mouseleave", () => {
//   branchList.style.opacity = "0";
// },true);


//search



