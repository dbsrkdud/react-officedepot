import Order from "../../components/Order.jsx";
import Row from "react-bootstrap/Row";

function OrderRetrievePage () {
    return (
        <>
            <h3>주문조회</h3>
            <Row className="col-5">주문번호</Row>
            <Order />
            <Order />
        </>
    )
}

export default OrderRetrievePage;