import axios from 'axios'
import Noty from 'noty'

let addToCart = document.querySelectorAll('.add-to-cart');
const cartCounter = document.getElementById('cartCounter')


function updateCart(pizza){
    axios.post('/update-cart', pizza).then(res =>{
        cartCounter.innerText = res.data.totalQty
        new Noty({
            type: 'success',
            timeout: 1000,
            text: "Item Added To Cart",
          }).show();
    }).catch(err =>{
        new Noty({
            type: 'error',
            timeout: 1000,
            text: "Something Went Wrong",
          }).show();
    })
}

addToCart.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
         let pizza = JSON.parse(btn.dataset.pizza);
         updateCart(pizza);
    })
})
