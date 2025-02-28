import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Item from "./Item.jsx";

function Order() {
    return (
        <>
            <Container>
                <Row>
                    <Col>상품</Col>
                    <Col>수량</Col>
                    <Col>금액</Col>
                    <Col>총 금액</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>1</Col>
                    <Col>10,000</Col>
                    <Col>10,000</Col>
                </Row>
            </Container>
        </>
    )
}

export default Order;