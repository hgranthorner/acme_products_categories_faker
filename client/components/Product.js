import React from 'react'

const Product = props => {
  const { name } = props.product
  return (
    <div>
      <h3>{name}</h3>
      <button className="btn btn-danger">-</button>
    </div>
  )
}

export default Product
