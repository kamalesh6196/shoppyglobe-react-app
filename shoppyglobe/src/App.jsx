import { lazy, Suspense } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Loading the Asynchronous tasks lazily for the faster loading
const ProductList  = lazy(()=>import("./components/ProductList"))

// creating router using createBrowserRouter for providing routing based on the path 
const router = createBrowserRouter([
  {
    path : "/",
    element : <ProductList/>
  }
])
function App() {
  return (
    // providing suspense with fallback to all the components inside router
    <Suspense fallback={<h1>Loading...</h1>}>
      {/* providing router created using RouterProvider */}
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App