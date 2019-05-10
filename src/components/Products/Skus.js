import React from "react"
import { graphql, StaticQuery } from "gatsby"

export default props => (
    <StaticQuery query={graphql`
        query SkisForProduct {
            skus: allStripeSku {
                adges {
                    node {
                        id
                        currency
                        price
                        attributes {
                            name
                        }
                    }
                }
            }
        }
    `}
    render={({ skus }) => (
      <div>     
        <p key={skus.id}>{sku.attributes.name}</p>
    ))}
    </div>
    )}
    />
)