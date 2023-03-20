// arrays of products
const products = [{Productname:"Adidas G", Productprice:12, Productqty:46,img:"mini_cart_image_02.png",brand:"adidas"},
                {Productname:"Adidas B", Productprice:13, Productqty:49,img:"mini_cart_image_02.png",brand:"adidas"},
                {Productname:"Adidas C", Productprice:6, Productqty:54,img:"mini_cart_image_02.png",brand:"adidas"},
                {Productname:"puma J", Productprice:17, Productqty:43,img:"mini_cart_image_02.png",brand:"puma"},
                {Productname:"puma E", Productprice:7, Productqty:32,img:"mini_cart_image_02.png",brand:"puma"},
                {Productname:"puma F", Productprice:2, Productqty:10,img:"mini_cart_image_02.png",brand:"puma"},
                {Productname:"nike A", Productprice:17, Productqty:43,img:"mini_cart_image_02.png",brand:"nike"},
                {Productname:"nike I", Productprice:7, Productqty:32,img:"mini_cart_image_02.png",brand:"nike"},
                {Productname:"nike D", Productprice:2, Productqty:10,img:"mini_cart_image_02.png",brand:"nike"},
]

var tempproducts = products;
var currentorder = 'a-z';
 
// Function will be called with products name as parameter then retrive its values from the product array and 
// create a card div append all the content to it and finally returnt that div to the container with id pp.



    



function productCardCreation(array){
    let element = document.getElementById("top-product");
    element.innerHTML = "";
            for (let index = 0; index < array.length; index++) {
                let ProductName = array[index].Productname;
                let ProductPrice = array[index].Productprice;
                let Productqty = array[index].Productqty;

                let card = document.createElement('li');
                card.id = 'card';
                
                var img = document.createElement("img");
                img.src = products[index].img;

                let namelable= document.createElement('li');
                let name = document.createTextNode('Name:    ' + ProductName);

                let pricelable= document.createElement('li');
                let price = document.createTextNode('Prics: $   ' + ProductPrice);

                let qtylable= document.createElement('li');
                let qty = document.createTextNode('Quantity :    ' + Productqty);
                
                namelable.appendChild(name);
                pricelable.appendChild(price);
                qtylable.appendChild(qty);
                
                card.appendChild(img);
                card.appendChild(namelable);
                card.appendChild(pricelable);
                card.appendChild(qtylable);
                element.appendChild(card);
            }
            
}
//filert on brandname
function changeorder(){
    let order = document.getElementById("shorting").value;
    currentorder = order;
    shortProducts(currentorder);
}

function filterbrand(brandname){
        document.getElementById("top-product").innerHTML = "";
        tempproducts = products.filter( (products) => products.brand === brandname);
        shortProducts(currentorder);

    }

function shortProducts(currentorder){
    if(currentorder === 'lowtohigh'){
     tempproducts = tempproducts.sort(
        (p1, p2) => (p1.Productprice > p2.Productprice) ? 1 : (p1.Productprice < p2.Productprice) ? -1 : 0);
     }
     if(currentorder === 'hightolow'){
        tempproducts = tempproducts.sort(
           (p1, p2) => (p1.Productprice < p2.Productprice) ? 1 : (p1.Productprice > p2.Productprice) ? -1 : 0);
        }
     if(currentorder === 'a-z'){
        tempproducts = tempproducts.sort((a, b) => {
            if (a.Productname < b.Productname)
                return -1;
            if (a.Productname > b.Productname)
                return 1;
            return 0;
        })
        }
    if(currentorder === 'z-a'){
            tempproducts = tempproducts.sort((a, b) => {
                if (a.Productname > b.Productname)
                    return -1;
                if (a.Productname < b.Productname)
                    return 1;
                return 0;
            })
            }
     productCardCreation(tempproducts);
}

function clearall() {
    var radioButton = document.getElementById("left");
    radioButton.checked = false;
    var radioButton1 = document.getElementById("left1");
    radioButton1.checked = false;
    var radioButton2 = document.getElementById("left2");
    radioButton2.checked = false;
    var checkbox = document.getElementById("shorting");
    checkbox.value= "a-z";
    tempproducts = products;
    currentorder = 'a-z';
    shortProducts(currentorder);
}

window.onload=shortProducts(currentorder);