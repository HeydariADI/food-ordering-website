
const productsDOM = document.querySelector('.product');
const searchInput = document.querySelector('#search');
const chipsBtn = document.querySelectorAll ('.chips');

let allProductsData = [];
const filters = {
  searchItems: "",
};

document.addEventListener("DOMContentLoaded", () => {

  axios
    .get("http://localhost:3000/products")
    .then((res) => {
      allProductsData = res.data;
      renderProducts(res.data, filters);
    })
    .catch((err) => console.log(err));


});

function renderProducts(products, _filters) {
  const filteredProducts = products.filter((p) => {
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
    
  });
  productsDOM.innerHTML = "";
  console.log(filteredProducts);

  //render to DOM
  filteredProducts.forEach(item => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML =`
    <div class="w-[37.5rem] h-[9.875 rem] flex gap-8 border border-Gray4 box-border rounded-lg bg-white  max-sm:w-80 max-sm:h-25" style="box-shadow: 0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);">
                    <div class="">
                        <img src="${item.imageUrl}" alt="" class="w-42 h-40 max-sm:w-23 max-sm:h-25" >
                    </div>
                    <div class="mt-2 ">
                        <div class="w-96 h-9 flex ">
                            <p class="food-title text-xl max-sm:text-xs font-semibold max-sm:font-normal text-Gray8 ">${item.title} </p>
                        </div>
                        <div class="w-96 h-16 flex gap-4">
                            <div class="w-64 h-12">
                                <p class="text-sm font-normal max-sm:text-xs max-sm:font-normal max-sm:text-ellipsis max-sm:whitespace-nowrap text-Gray8 ">${item.desc}</p>
                            </div>
                            <div class="w-24 h-16">
                                <div class="flex gap-2">
                                    <del class="text-base text-Gray5 max-sm:text-xs">${item.price}</del>
                                    <p class="w-8 h-5 bg-Errorextralight text-Error text-xs text-center rounded-lg">${item.percent}</p>
                                </div>
                                <div class="flex">
                                    <p class="text-lg text-Gray8 max-sm:text-xs">${item.discount} </p>
                                    <p class="text-lg text-Gray8">تومان </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-96 h-10 flex gap-6">
                        <img src="/assets/images/menu/star.svg" alt="star">
                            <button id="add-to-cart" class="bg-Primary w-60 h-10 max-sm:w-25 max-sm:h-8 rounded text-white text-sm font-medium max-sm:text-xs" data-id=${item.id}><a href="/public/build/cart.html">افزودن به سبد خرید</a> </button> 
        
                        </div>
                    </div>

            </div> 

    `;
    iranianFoodDOM.appendChild(productDiv);
    
  });
}

searchInput.addEventListener('input',(e)=>{
  // console.log(e.target.value);
  filters.searchItems = e.target.value;
  renderProducts(allProductsData,filters);
});
// filter based on DOM
// filter based on groups :
chipsBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    
    const filter = e.target.dataset.filter;
  //  console.log(filter);
   filters.searchItems = filter;
   renderProducts(allProductsData,filters);
  });
});

