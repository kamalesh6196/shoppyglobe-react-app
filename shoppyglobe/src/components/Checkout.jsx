import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../redux/cartSlice"

function Checkout() {
    //  fetching items from the store using useSelector hook
    const items = useSelector(store => store.cart.items)
    //  useDispatch to dispatch any action
    const dispatch = useDispatch()
    //  useNavigate to navigate to the page required
    const navigate = useNavigate()
    //  Demo function for placing the order after button click
    function placeOrder(){
        alert("Order placed successfully")

        dispatch(clearCart())

        navigate("/")
    }
  return (
    <div>
        <h2>Checkout</h2>
         {/* input to colect name and address of the user */}
        <input type="text" placeholder="name" />
        <input type="text" placeholder="address" />
         {/* Button to place order */}
        <button onClick={placeOrder}>Place Order</button>
    </div>
  )
}

export default Checkout