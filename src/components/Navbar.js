import {Link} from 'react-router-dom'

const Navbar = ()=>{
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/shoppingcart">Shopping Cart</Link>
    </nav>
  )
}

export default Navbar
