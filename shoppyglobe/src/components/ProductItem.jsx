import { useDispatch } from "react-redux"

import {Link} from "react-router-dom"
import { addItem } from "../redux/cartSlice"

function ProductItem({product}) {
  
    const dispatch = useDispatch()
  return (
    <div>
        {/* dispalying product image */}
        <img src={product.thumbnail}  width ="150" />

        {/* dispalying product title*/}
        <h3>{product.title}</h3>

        {/* dispalying product price*/}
         <p>₹ {product.price}</p>

         {/* Link to view Details about the product */}
         <Link to={"/product/"+product.id}>View Details</Link><br />

         {/* button to add items to the cart */}
         <button onClick={()=>dispatch(addItem(product))}> Add to Cart</button>
         

    </div>
  )
}

export default ProductItem