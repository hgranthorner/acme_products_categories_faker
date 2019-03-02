import React from 'react'

const Product = props => {
  const { name, id } = props.product
  const { removeProduct } = props
  return (
    <div>
      <h3>{name}</h3>
      <button className="btn btn-danger" onClick={() => removeProduct(id)} type="submit">
        -
      </button>
    </div>
  )
}

export default Product
