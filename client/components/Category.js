import React from 'react'
import Product from './Product'

const Property = props => {
  const { name, products } = props.category
  return (
    <div>
      <h3>{name}</h3>
      <button className="btn btn-primary">+</button>
      <button className="btn btn-danger">-</button>
      <ul className="list-group">
        {products ? (
          products.map(product => (
            <li key={product.id} className="list-group-item">
              <Product product={product} />
            </li>
          ))
        ) : (
          <div />
        )}
      </ul>
    </div>
  )
}

export default Property
