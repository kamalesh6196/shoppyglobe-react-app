import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"

function Cart() {
    // fetching items from store using useSelector hook
    const items= useSelector(store => store.cart.items)

    //  returning empty cart message if the cart is empty
    if(items.length == 0) return <h2>Cart Empty</h2>    

  return (
    <div>
        {   
            // passing each item in the cart to cartItem component to display them in UI
            items.map(item =>(

               <CartItem key={item.id} item={item} />
            ))
        }
          {/* Link to go to the checkout component */}
        <Link to="/checkout">Go to Checkout</Link>
    </div>
  )
}

export default Cart