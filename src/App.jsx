import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import NavBar from "./components/Navbar.jsx"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Order from "./pages/order/Order.jsx";
import Cart from "./pages/cart/Cart.jsx";
import MyPage from "./pages/myPage/MyPage.jsx";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="home" element={<Home/>}></Route>
                <Route path="order" element={<Order/>}></Route>
                <Route path="cart" element={<Cart/>}></Route>
                <Route path="myPage" element={<MyPage/>}></Route>
            </Routes>
            <Header />
            <NavBar />
        </div>
    )
}

export default App
