import { useDispatch } from "react-redux"
import { addItem, removeItem } from "../redux/cartSlice"

function CartItem({item}) {
    
    const dispatch = useDispatch()
  return (
    <div>
        {/* Diaplaying each item in the cart with it's product details */}
        <h3>{item.title}</h3>

        <p>Quantity :{item.quantity}</p>
        {/* button to increase the quantity of the item added to cart*/}
        <button onClick={()=> dispatch(addItem(item))}>+</button>
         {/* button to remove item from the cart */}
        <button onClick={()=> dispatch(removeItem(item.id))}>remove</button>
    </div>
  )
}

export default CartItem