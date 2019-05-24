import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from './SkuCard'

const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0'
}

class Skus extends Component {

    state = {
        stripe: window.Stripe('pk_test_QUZudzDRFxpmSEhSMREqB95Q', {
            betas: ['checkout_beta_4'],
        }),
    }
    render() {
         return (
            <StaticQuery query={graphql`
                query SkusForProduct {
                    skus: allStripeSku {
                        edges {
                            node {
                                id
                                currency
                                price
                                attributes {
                                    size
                                    color
                                }
                                product {
                                    name
                                }
                            }
                        }
                    }
                }
            `}
    render={({ skus }) => (
        <div styles={containerStyles}>     
            {skus.edges.map(({ node : sku}) => (
                <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
        </div>
        )}
        />
     ) 
     }  
 }

 export default Skus