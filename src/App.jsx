import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import OurStore from "./pages/OurStore"
import Blog from "./pages/Blog"
import Compare from "./pages/Compare"
import Favourite from "./pages/Favourite"
import Login from "./pages/Login"
import ForgotPas from "./pages/ForgotPas"
import SignUp from "./pages/SignUp"
import Reset from "./pages/Reset"
import SingleBlog from "./pages/SingleBlog"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"

export default function App() {
  return (
      <>
          <BrowserRouter>
          <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="contact" element={<Contact/>} />
                      <Route path="blog" element={<Blog/>} />
                      <Route path="blog/:id" element={<SingleBlog/>} />
                      <Route path="shop" element={<OurStore/>} />
                      <Route path="cart" element={<Cart/>} />
                      <Route path="checkout" element={<CheckOut/>} />
                      <Route path="compare-product" element={<Compare/>} />
                      <Route path="favourite-wishlist" element={<Favourite/>} />
                      <Route path="login" element={<Login/>} />
                      <Route path="forgot" element={<ForgotPas/>} />
                      <Route path="reset" element={<Reset/>} />
                      <Route path="signup" element={<SignUp/>} />
                      <Route path="single-pro" element={<SingleProduct/>} />
                      
                  </Route>         
          </Routes>
          </BrowserRouter>
      </>
  )
}