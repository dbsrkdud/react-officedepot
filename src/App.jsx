import "./App.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header.jsx";
import MainPage from "./pages/main/MainPage.jsx";
import SignUpPage from "./pages/signUp/SignUpPage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import OrderPage from "./pages/order/OrderPage.jsx";
import OrderRetrievePage from "./pages/order/OrderRetrievePage.jsx";
import OrderDetailPage from "./pages/order/OrderDetailPage.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import MyPage from "./pages/myPage/MyPage.jsx";
import ItemListPage from "./pages/item/ItemListPage.jsx";
import ItemDetailPage from "./pages/item/ItemDetailPage.jsx";
import InterestedPage from "./pages/interested/InterestedPage.jsx";

import Sample from "./sample.jsx"

function App() {
    return (
        <>
            <Container fluid={"xl"}>
                <Row>
                    <Header />
                </Row>
                {/*<Row className="mb-5">*/}
                {/*    <NavBar />*/}
                {/*</Row>*/}
            </Container>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signUpPage" element={<SignUpPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/orderPage" element={<OrderPage />} />
                <Route path="/orderRetrievePage" element={<OrderRetrievePage />} />
                <Route path="/orderDetailPage/:id" element={<OrderDetailPage />} />
                <Route path="/cartPage" element={<CartPage />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/itemListPage" element={<ItemListPage/>} />
                <Route path="/itemDetailPage/:id" element={<ItemDetailPage />} />
                <Route path="/interestedPage" element={<InterestedPage />}></Route>

                <Route path="/sample" element={<Sample />}></Route>

            </Routes>
        </>
    )
}

export default App

