import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header() {

    const cartItems = useSelector(store => store.cart.items)
  return (
    <div>
        <h2>ShoppyGlobe</h2>

        <Link to="/">Home</Link>

        <Link to="/cart">Cart ({cartItems.length})</Link>
    </div>
  )
}

export default Header