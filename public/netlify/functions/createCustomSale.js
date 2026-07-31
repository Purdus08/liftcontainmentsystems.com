const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
);


exports.handler = async function(event) {

  if (event.httpMethod !== "POST") {

    return {
      statusCode:405,
      body:"Method Not Allowed"
    };

  }


  try {

    const data = JSON.parse(event.body);


    const session =
      await stripe.checkout.sessions.create({

        mode:"payment",

        customer_email:data.email,


        line_items:
        data.items.map(item => ({

          price_data:{

            currency:"usd",

            product_data:{
              name:item.name
            },

            unit_amount:
            Math.round(item.price * 100)

          },

          quantity:item.quantity

        })),


        success_url:
        "https://liftcontainmentsystems.com/success.html",


        cancel_url:
        "https://liftcontainmentsystems.com/productpage.html",


        metadata:{

          customer:data.customer,

          type:"custom_sale"

        }

      });



    return {

      statusCode:200,

      body:JSON.stringify({

        url:session.url

      })

    };


  }

  catch(error){

    return {

      statusCode:500,

      body:JSON.stringify({

        error:error.message

      })

    };

  }

};