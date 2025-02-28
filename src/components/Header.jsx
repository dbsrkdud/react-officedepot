import "../assets/css/Header.css"

import {Link} from "react-router-dom";

import logo from "../assets/images/logo.png";
import order from "../assets/images/order.png";
import cart from "../assets/images/cart.png";
import myPage from "../assets/images/myPage.png";
import Container from "react-bootstrap/Container";
import {Dropdown, Navbar, NavDropdown} from "react-bootstrap";


function Header() {
    return (
        <>
            {/*<div>*/}
            {/*    <ul>*/}
            {/*        <li><Link to={"/signUpPage"}>회원가입</Link></li>*/}
            {/*        <li><Link to={"/loginPage"}>로그인 &nbsp;</Link></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            {/*<div className="header">*/}
            {/*    <div className="logoDiv">*/}
            {/*        <Link to="/"><img src={logo} className="logo"/></Link>*/}
            {/*    </div>*/}
            {/*    <div className="menuDiv">*/}
            {/*        <Link to="orderRetrievePage"><img src={order} className="order"/></Link>*/}
            {/*        <Link to="cartPage"><img src={cart} className="cart"/></Link>*/}
            {/*        <Link to="myPage"><img src={myPage} className="myPage"/></Link>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="topMenu">
                <div className="inner">
                    <nav className="fr">
                        <Link to="/signUpPage">회원가입</Link>
                        <Link to="/loginPage">로그인</Link>
                    </nav>
                </div>
            </div>
            <div className="menu-contents">
                <div className="menu-title">
                    <Link to="/"><img src={logo} className="logo"/></Link>
                </div>
                <div className="menu-list">
                    <div className="menu-item">
                        <Link to="/orderRetrievePage"><img src={order} className="orderImg"/></Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/cartPage"><img src={cart} className="cartImg"/></Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/myPage"><img src={myPage} className="myPageImg"/></Link>
                    </div>
                </div>
            </div>

            <div className="nav mb-5">
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown_category">
                        카테고리
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/itemListPage">복사용품</Dropdown.Item>
                        <Dropdown.Item href="/itemListPage">식음료</Dropdown.Item>
                        <Dropdown.Item href="/itemListPage">사무용품</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    )
}








export default Header;