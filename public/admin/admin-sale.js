function addItem(){

const container =
document.getElementById("items");


const row =
document.createElement("div");


row.className="item";


row.innerHTML=`

<input class="item-name"
placeholder="Description">


<input class="item-qty"
type="number"
value="1"
min="1">


<input class="item-price"
type="number"
placeholder="Price"
step="0.01">

`;


container.appendChild(row);


updateTotal();


}



document.addEventListener(
"input",
updateTotal
);



function updateTotal(){


let total=0;


document.querySelectorAll(".item")
.forEach(item=>{


let qty =
Number(
item.querySelector(".item-qty").value
);


let price =
Number(
item.querySelector(".item-price").value
);


total += qty * price;


});


document.getElementById("total")
.innerText =
total.toFixed(2);


}





async function createSale(){


const items=[];


document.querySelectorAll(".item")
.forEach(item=>{


items.push({

name:
item.querySelector(".item-name").value,


quantity:
Number(
item.querySelector(".item-qty").value
),


price:
Number(
item.querySelector(".item-price").value
)


});


});



const response =
await fetch(
"/.netlify/functions/createCustomSale",
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:
JSON.stringify({

customer:
document.getElementById("customer").value,


email:
document.getElementById("email").value,


items

})


});



const data =
await response.json();



if(data.url){


document.getElementById("result")
.innerHTML=`

<h3>
Checkout Created
</h3>

<a href="${data.url}" target="_blank">
Open Stripe Checkout
</a>

<br><br>

<textarea style="width:100%;height:80px;">
${data.url}
</textarea>

`;


}

else{


alert(data.error || "Error creating checkout");


}


}