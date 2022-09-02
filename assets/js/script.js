const wrapperItems = document.querySelector(".items");
let count = 1;
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(items => {
        items.forEach(el => {
            // elements
            let div = document.createElement("div");
            let titleP = document.createElement("h3");
            let priceP = document.createElement("p");
            let infoP = document.createElement("p");
            let img = document.createElement("img");
            let BuyBtn = document.createElement("button")
            // elements class
            priceP.setAttribute("class", "price");
            titleP.setAttribute("class", "title");
            infoP.setAttribute("class", "item-info");
            BuyBtn.setAttribute("class", "buy-button");
            BuyBtn.textContent = "Buy"
            titleP.textContent = el.title;
            img.src = el.image;
            infoP.textContent = el.description;
            priceP.textContent = `Price ${el.price}`;
            // apend
            div.append(titleP);
            div.append(img);
            div.append(infoP);
            div.append(priceP);
            div.append(BuyBtn);
            wrapperItems.append(div);
            // events
            BuyBtn.addEventListener("click", moveToCart);
            // functions
            function moveToCart() {
                // cart elements
                let itemsNumber = document.querySelector(".number-of-items");
                let apendItemsNumber = document.querySelector(".number-of-items span");
                let cartItems = document.querySelector(".cart-items-info");
                let cartTitle = document.createElement("h3");
                let cartInfo = document.createElement("p");
                let cartItemPrice = document.createElement("p");
                itemsNumber.style.display = "block"
                apendItemsNumber.textContent = count;
                cartTitle.textContent = el.title;
                cartInfo.textContent = el.description;
                cartItemPrice.textContent = el.price;
                cartItems.append(cartTitle);
                cartItems.append(cartInfo);
                cartItems.append(cartItemPrice);
                if (cartItems) {
                    count++;
                }
                console.log(count)
            }
        });

        let modal = document.querySelector(".modal");
        let cart = document.querySelector("#cart");
        let closeX = document.querySelector(".close");
        // events
        cart.addEventListener("click", openModal);
        closeX.addEventListener("click", closeModal);
        // functions
        function openModal() {
            modal.style.display = "block";
        };
        function closeModal() {
            modal.style.display = "none";
        }
    });