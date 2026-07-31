const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event) {

    try {

        const data = JSON.parse(event.body);


        const session = await stripe.checkout.sessions.create({

            payment_method_types: [
                "card"
            ],

            line_items: [
                {
                    price_data: {

                        currency: "usd",

                        product_data: {
                            name: data.description
                        },

                        unit_amount:
                            Math.round(data.amount * 100)

                    },

                    quantity: 1
                }
            ],


            mode: "payment",


            success_url:
            "https://www.liftcontainmentsystems.com/payment-success.html",


            cancel_url:
            "https://www.liftcontainmentsystems.com/payment-cancelled.html"

        });


        return {

            statusCode: 200,

            body: JSON.stringify({
                url: session.url
            })

        };


    } catch(error){

        return {

            statusCode: 500,

            body: JSON.stringify({
                error:error.message
            })

        };

    }
};