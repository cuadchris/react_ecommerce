import React from 'react'

function Cart(props) {

  const cart = props.cartItems
  return (
    <div>
            {cart.map((item, i) => {
        return (
          <div key={i}>
            <p>{JSON.stringify(item)}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Cart