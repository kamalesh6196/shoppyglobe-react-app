import { useDispatch, useSelector } from "react-redux"
import useProducts from "../hooks/useProducts"
import { setSearch } from "../redux/searchSlice"
import ProductItem from "./ProductItem"

function ProductList() {
    // to obtain products Array and error if exists
    const {products, error} = useProducts()
    //  to obtain the text we searched
    const searchText = useSelector(store => store.search.text)  
    //  filtering products based on the text searched
    const filteredProducts = products.filter( product => product.title.toLowerCase()
    .includes(searchText.toLowerCase()))
    // to dispatch an action in redux store
     const dispatch = useDispatch()

    //returning only the error if fetching fails
    if(error) return <h2>{error}</h2>

  return (
    <div>
        {/* setting input value for text in searchSlice on change in input */}
        <input type="text" placeholder="search product" onChange={(e)=>dispatch(setSearch(e.target.value))}
        />
        {    
            // passing the products from fileteredProducts to productList component
            filteredProducts.map(product =>{
                return(
                    <ProductItem key={product.id} product={product} />
                )
                
            })
        }
    </div>
  )
}

export default ProductList