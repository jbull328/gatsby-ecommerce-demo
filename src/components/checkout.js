 import React from "react"

 const buttonStyles = {
     fontSize: "13px",
     textAlign: "center",
     color: "#fff",
     outline: "none",
     padding: "12px 60px",
     boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
     backgroundColor: "rgb(255, 178, 56)",
     borderRadius: "6px",
     letterSpacing: "1.5px",
  }

  const Checkout = class extends React.Component {
      //Initialize  Stripe.js with your published key.
      //You can find your key in the Dashboard:
      //https://dashboard.stripe.com/account/apikeys

        componentDidMount() {
            this.stripe = window.Stripe("pk_test_#", {
                betas: ["checkout_beta_4"],
            })
        }

        async redirectToChekout(event) {
            event.preventDefault()
            const { error } = await this.stripe.redirectToChekout({
                items: [{sku: "sku_#, quantity: 1"}],
                successUrl: `http://localhost:8000/success/`,
                cancelUrl: `https://localhost:8000`,
            })

            if (error) {
                console.warn("Error:", error)
            }
        }

        render() {
            return (
                <button style={buttonStyles} onClick={event => this.redirectToChekout(event)}
                >
                    Buy My E-Book
                </button>
            )
        }
    }

    export default Checkout