import React from 'react'
import Product from './Product'

const Property = props => {
  const { id, name, products } = props.category
  const { removeCategory, addProduct, removeProduct } = props
  return (
    <div>
      <h3>{name}</h3>
      <button className="btn btn-primary" onClick={() => addProduct(id)} type="submit">
        +
      </button>
      <button className="btn btn-danger" onClick={() => removeCategory(id)} type="submit">
        -
      </button>
      <ul className="list-group">
        {products ? (
          products.map(product => (
            <li key={product.id} className="list-group-item">
              <Product product={product} removeProduct={removeProduct} />
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
