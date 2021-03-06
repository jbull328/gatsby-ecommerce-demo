import React from "react"

const cardStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "1rem",
    marginBottom: "1rem",
    boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
    backgroundColor: "#fff",
    borderRadius: "6px",
    maxWidth: "300px",
}

const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    outline: "none",
    padding: "12px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "#8BF00E",
    borderRadius: "6px",
    letterSpacing: "1.5",
}

const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
        style: "currency",
        currency: currency,
        currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
    async redirectToCheckout(event, sku, quantity = 1) {
        event.preventDefault()
        const { error } = await this.props.stripe.redirectToCheckout({
            items: [{ sku, quantity }],
            successUrl: `http://localhost:8000/purchaseSuccess/`,
            cancelUrl: `http://localhost:8000/advanced`,
        })

        if (error) {
            console.warn("Error:", error)
        }
    }

    render() {
        const sku = this.props.sku
        return (
            <div style={cardStyles}>
                <h4>{sku.product.name}</h4>

                <p>Price: {formatPrice(sku.price, sku.currency)}</p>
                <button 
                    style={buttonStyles}
                    onClick={event =>this.redirectToCheckout(event, sku.id)}
                >Sign up session</button>

            </div>
        )
    }
}

export default SkuCard