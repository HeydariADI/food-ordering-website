// http://localhost:3000/iraninFoods
const iranianFoodDOM = document.querySelector('.product');
const searchInput = document.querySelector('#search');
const chipsBtn = document.querySelectorAll ('.chips');

let allProductsData = [];
const filters = {
  searchItems: "",
};

document.addEventListener("DOMContentLoaded", () => {

  axios
    .get("http://localhost:3000/iraninFoods")
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
  iranianFoodDOM.innerHTML = "";
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
                            <p class="text-xl max-sm:text-xs font-semibold max-sm:font-normal text-Gray8 ">${item.title} </p>
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
                            <svg class="w-20" width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5489 2.92705C11.8483 2.00574 13.1517 2.00574 13.4511 2.92705L14.9697 7.60081C15.1035 8.01284 15.4875 8.2918 15.9207 8.2918H20.835C21.8037 8.2918 22.2065 9.53141 21.4228 10.1008L17.447 12.9894C17.0966 13.244 16.9499 13.6954 17.0838 14.1074L18.6024 18.7812C18.9017 19.7025 17.8472 20.4686 17.0635 19.8992L13.0878 17.0106C12.7373 16.756 12.2627 16.756 11.9122 17.0106L7.93648 19.8992C7.15276 20.4686 6.09828 19.7025 6.39763 18.7812L7.91623 14.1074C8.0501 13.6954 7.90345 13.244 7.55296 12.9894L3.57722 10.1008C2.79351 9.53141 3.19628 8.2918 4.16501 8.2918H9.07929C9.51252 8.2918 9.89647 8.01284 10.0303 7.60081L11.5489 2.92705Z" fill="#F4B740"/>
                                <path d="M36.5 0L39.1942 8.2918H47.9127L40.8593 13.4164L43.5534 21.7082L36.5 16.5836L29.4466 21.7082L32.1407 13.4164L25.0873 8.2918H33.8058L36.5 0Z" fill="#F4B740"/>
                                <path d="M60.5 0L63.1942 8.2918H71.9127L64.8593 13.4164L67.5534 21.7082L60.5 16.5836L53.4466 21.7082L56.1407 13.4164L49.0873 8.2918H57.8058L60.5 0Z" fill="#F4B740"/>
                                <path d="M84.5 0L87.1942 8.2918H95.9127L88.8593 13.4164L91.5534 21.7082L84.5 16.5836L77.4466 21.7082L80.1407 13.4164L73.0873 8.2918H81.8058L84.5 0Z" fill="#F4B740"/>
                                <path d="M108.5 0L111.194 8.2918H119.913L112.859 13.4164L115.553 21.7082L108.5 16.5836L101.447 21.7082L104.141 13.4164L97.0873 8.2918H105.806L108.5 0Z" fill="#F4B740"/>
                            </svg>
                            <button class="bg-Primary w-60 h-10 max-sm:w-25 max-sm:h-8 rounded text-white text-sm font-medium max-sm:text-xs" data-id=${item.id}>افزودن به سبد خرید</button>
        
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
   console.log(filter);
   filter.searchItems = filter;
   renderProducts(allProductsData,filters);
  });
});

