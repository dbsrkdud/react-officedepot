import "../assets/css/Header.css"
import logo from "../assets/images/logo.png";
import order from "../assets/images/order.png";
import cart from "../assets/images/cart.png";
import myPage from "../assets/images/myPage.png";
import {Link, Route, Routes} from "react-router-dom";
import Order from "../pages/order/Order.jsx";
import Cart from "../pages/cart/Cart.jsx";
import MyPage from "../pages/myPage/MyPage.jsx";


function Header() {
    return (
        <div className="header">
            <div className="headerObj">
                <img src={logo} className="logo"/>
            </div>
            <div>
                <Routes>
                    <Route path="order" element={<Order/>}></Route>
                    <Route path="cart" element={<Cart/>}></Route>
                    <Route path="myPage" element={<MyPage/>}></Route>
                </Routes>
                <Link to={"order"}><img src={order} className="order"/></Link>
                <Link to={"cart"}><img src={cart} className="cart"/></Link>
                <Link to={"myPage"}><img src={myPage} className="myPage"/></Link>
            </div>
        </div>
    )
}

export default Header;