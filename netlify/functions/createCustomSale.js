const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
);


exports.handler = async function(event) {


try {


const body =
JSON.parse(event.body);



const items =
body.items.map(item => ({


price_data: {


currency: "usd",


product_data: {

name: item.name

},


unit_amount:
Math.round(item.price * 100)


},


quantity:
item.quantity


}));





const session =
await stripe.checkout.sessions.create({


payment_method_types:[
"card"
],


mode:"payment",



customer_email:
body.email,



line_items:
items,



success_url:
"https://www.liftcontainmentsystems.com/success.html",


cancel_url:
"https://www.liftcontainmentsystems.com/productpage.html"



});



return {


statusCode:200,


body:
JSON.stringify({

url:
session.url

})


};



}


catch(error){


console.error(error);



return {


statusCode:500,


body:
JSON.stringify({

error:error.message

})


};



}


};
