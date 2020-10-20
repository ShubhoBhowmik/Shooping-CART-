// FOR DISPLAYING THE CART
$(document).ready(function(){
    // Select the cart-info button
    const cartinfobutton=$('#cart-info');
    // Select the cart
    const cart=$('#cart');
    // When user clicked on cart button
    cartinfobutton.click(function(){
        //execute the following code when user clicked cart button
        cart.toggleClass('show-cart');

    })
})

// TO ADD STORE ITEMS INTO THE CART
$(document).ready(function(){
    const cartBtn=$('.store-item-icon');
    cartBtn.each(function(index){//LOOP FOR EACH ICON
        $(this).click(function(){//WHEN YOU CLICK EACH ICON
            //console.log(event.target);//<i class="fas fa-shopping-cart"></i>
            // console.log(event.target.parentElement);//<span class="store-item-icon">
            // console.log(event.target.parentElement.parentElement);//<div class="img-container">
            // console.log(event.target.parentElement.parentElement.nextElementSibling);//card-body
            // Name of the product
            // console.log(event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent);
            // price of the product
            // console.log(event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent);
            // console.log(event.target.parentElement.previousElementSibling);
            const item={};//object in JS
            item.name=event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
            var pricewith$sign=event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
            // removing $ sign from the price
            item.price=pricewith$sign.slice(1).trim();//remove one item from the string or word
            var imgSrc=event.target.parentElement.previousElementSibling.src;
            //http://127.0.0.1:5500/img/item3.jpg
              //01234567890123456789012345
            var pos=imgSrc.indexOf("img")+3;
            var imgName=imgSrc.slice(pos);
            item.image="imgCart"+imgName;
            console.log(item);
            // ADDING HTML CODE FOR CART ITEM USING JS
            var cartItemDiv=$("<div/>") //creating div using jQuery
            cartItemDiv.addClass("cart-item d-flex justify-content-between my-3")//add the class to the div
            var item_content= `
            <img src="${item.image}" alt="" class="img-fluid rounded-circle">
                <div class="cart-item-text">
                    <p>${item.name}</p>
                    <span>$</span>
                    <span class="cart-item-price">${item.price}</span>
                </div>
            `;
            cartItemDiv.html(item_content);
            // put the cartItem inside index.html
            const total_container=$(".cart-total-container");
            cartItemDiv.insertBefore(total_container);
            alert("item added");
            showtotals();

        })
    })
})

// JS function for calculating total price
function showtotals(){
    var total=0;
    const item_price=document.querySelectorAll('.cart-item-price');
    //item_price=[5,5,5]
    item_price.forEach(function(i){
        total=total+parseFloat(i.textContent);

    })
    console.log(total);
    var total_element=document.getElementById("cart-total");//00.00
    total_element.textContent=total;
    var total_count=document.getElementById("item-count");
    total_count.textContent=item_price.length;//to know number of elements inside array
    var item_total=document.getElementById("item-total");
    item_total.textContent=total;
}

