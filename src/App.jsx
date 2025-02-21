import "./App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "./components/Header.jsx";
import NavBar from "./components/Navbar.jsx"
import MainPage from "./pages/main/MainPage.jsx";
import {Route, Routes} from "react-router-dom";
import OrderPage from "./pages/order/OrderPage.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import MyPage from "./pages/myPage/MyPage.jsx";
import {Col} from "react-bootstrap";
import ItemListPage from "./pages/item/ItemListPage.jsx";


function App() {

    return (
        <>
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <NavBar />
                </Row>
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/orderPage" element={<OrderPage />} />
                            <Route path="/cartPage" element={<CartPage />} />
                            <Route path="/myPage" element={<MyPage />} />
                            <Route path="/itemListPage" element={<ItemListPage/>} />
                        </Routes>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default App

