

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
const captionSearch = document.querySelector('.search');
const searchIcon =document.getElementById("search-icon");
const searchBox = document.getElementById('search-box');
const enterSearch = document.getElementById ('userissue');
const closeSearch =document.getElementById('close-search');
const resultFoodsDOM = document.querySelector('.result');
const notFoundDOM = document.getElementById('no-result');
const cart =document.getElementById('cart');
const user =document.getElementById('user');
const branchList = document.getElementById("branchlist");
const showBranchList = document.getElementById("brancharrow");
const menuList = document.getElementById("menulist");
const showMenuList = document.getElementById("menuarrow");
const humbergerIcon = document.getElementById("humberger-icon");
const menuMobile = document.getElementById("menu-mobile");
const closeMenuMobile = document.getElementById("close-menu");



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
searchIcon.addEventListener('click',()=>{
  searchBox.style.display = "block";
})
closeSearch.addEventListener('click',()=>{
  searchBox.style.display = "none";
})

const userSearch = "";
let saveUserSearch = [];
const search = {
  searchItems: "",
};


enterSearch.addEventListener('click',()=>{
  axios
  .get("http://localhost:3000/iraninFoods")
  .then((res)=>{
    saveUserSearch = res.data;
    displayResult(res.data.search);
    

  })
  .catch((err) => console.log(err));

  

});

function displayResult(foods,filters){
  const filteredFoods =foods.filter((f)=>{
    
    return f.title.toLowerCase().includes(filters.searchItems.toLowerCase());
  });

  resultFoodsDOM.innerHTML="";
  filteredFoods.forEach(item => {
    if(userSearch === title){
      window.location.href = "result.html";
      const productDiv = document.createElement("div");
      productDiv.classList.add("result");
      productDiv.innerHTML =`
      <div class="flex flex-col mt-10 ">
      <div class="flex justify-center">
          <p class="text-lg font-medium text-Gray8 flex justify-center">  نتایج جستجو برای:</p>
          <p id="searchfood" class="text-xl font-bold text-Primary flex justify-center">${item.title}</p>
      </div>
          <div class="w-96 h-10 flex justify-center mt-4">
              <div id="not-found" class="w-auto h-10 flex justify-between items-center border border-Gray5 box-border rounded-sm  p-4 mt-2 mr-9  max-sm:w-80 max-sm:h-8 max-sm:justify-center cursor-pointer" style="width: 496px;">
                  <input id="found" class="font-normal text-xs text-Gray8 w-72 h-4 border border-none cursor-text"  type="text" placeholder=" پاستا">
                      <svg id="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                        
                  </div>
              

          </div>

  </div>
  <div class=" grid grid-cols-3 gap-6">
      
       <div class="w-72 h-[26.0625rem] bg-white border border-Gray4 flex flex-col justify-center items-center gap-4 mt-12">
          <img src="/assets/images/pop-up/عکس غذا.svg" alt="" class="w-72 h-60" >
          <p class="flex justify-center font-normal text-lg"> ${item.title}</p>
          <div class="w-64 h-12 m-4 ">
              <div class="flex justify-between items-center ">
                  <div class="flex gap-1 ">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
                          </svg>
                          
                      <p class="text-xs font-medium text-Gray5">افزودن به علاقمندی‌ها</p>
                  </div>
                  <div class="flex gap-4">
                      <del class="text-xs font-medium text-Gray5 ">${item.price}</del>
                      <p class="w-8 h-5 bg-Errorextralight text-Error text-xs text-center rounded-lg">%۲۰</p>
                  </div>
              </div>
              <div class="flex justify-between">
                  <div class="flex justify-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Star rate">
                          <path id="Star" d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                          </g>
                          </svg>
                          
                      <p class="text-xs font-medium text-Gray8">۵</p>
                      <p class="text-xs font-normal text-Gray5">(۶۲ امتیاز)</p>
                  </div>
                  <p class="text-base font-normal text-Gray8">${item.discount} تومان</p>
              </div>
              
          </div>
          <div class="button flex justify-center mb-8">
              <button class=" bg-Primary w-64 h-10 rounded text-white text-sm font-medium" >افزودن به سبد خرید</button>
          </div>
          
          
          
   
      </div>
    
     
  
  </div>
  
  
      `;
      resultFoodsDOM.appendChild(productDiv);
  }
  else{
    window.location.href="noresult.html";
    const notfoundDiv = document.createElement("div");
    notfoundDiv.classList.add('no-result');
    notfoundDiv.innerHTML= `
    <div class="flex flex-col mt-10 ">
            <p class="text-lg font-normal text-Gray8 flex justify-center"> موردی با این مشخصات پیدا نکردیم!</title>
                <div class="w-96 h-10 flex justify-center mt-4">
                    <div id="not-found" class="w-auto h-10 flex justify-between items-center border border-Gray5 box-border rounded-sm  p-4 mt-2 mr-9  max-sm:w-80 max-sm:h-8 max-sm:justify-center cursor-pointer" style="width: 496px;">
                        <input id="not-found" class="font-normal text-xs text-Gray8 w-72 h-4 border border-none cursor-text"  type="text" placeholder="${item.title} ">
                            <svg id="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                              
                        </div>
                    

                </div>

        </div>
    
    `;

  }
  })
}


    captionSearch.addEventListener('input',(e)=>{
      // console.log(e.target.value);
      filters.captionSearch = e.target.value;
      displayResult(saveUserSearch,filters);
    });
    // filter based on DOM
    // filter based on groups :
    chipsBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filter = e.target.dataset.filter;
       console.log(filter);
       search.captionSearch = search;
       displayResult(saveUserSearch,search);
      });
    });
   








//humberger menu
humbergerIcon.addEventListener("click",()=>{
  menuMobile.style.display = "block";
  
});

closeMenuMobile.addEventListener("click",()=>{
  menuMobile.style.display = "none";
});