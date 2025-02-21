import "../assets/css/Header.css"
import logo from "../assets/images/logo.png";
import order from "../assets/images/order.png";
import cart from "../assets/images/cart.png";
import myPage from "../assets/images/myPage.png";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <div className="logoDiv">
                    <Link to={"/"}><img src={logo} className="logo"/></Link>
                </div>
                <div className="menuDiv">
                    <Link to={"orderPage"}><img src={order} className="order"/></Link>
                    <Link to={"cartPage"}><img src={cart} className="cart"/></Link>
                    <Link to={"myPage"}><img src={myPage} className="myPage"/></Link>
                </div>
            </div>
        </>
    )
}

export default Header;