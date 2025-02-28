import Container from "react-bootstrap/Container";
import {Row, Col, Table} from "react-bootstrap";
import Item from "../../components/Item.jsx";
import Order from "../../components/Order.jsx";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


function OrderPage() {

    return (
        <>
            <Order />
            <Order />
            {/*<Container>*/}
            {/*    <Row>*/}
            {/*        <Col className="col-auto" style={ { display: "flex", float: "left" } }>주문자</Col>*/}
            {/*        <Col><input type="text" /></Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col className="col-auto">휴대폰</Col>*/}
            {/*        <Col><input type="text" />-<input type="text" />-<input type="text" /></Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col className="col-auto">주소</Col>*/}
            {/*        <Col>*/}
            {/*            <Row className="row-cols-auto"><input type="text" /><button>우편번호검색</button></Row>*/}
            {/*            <input type="text" /><input type="text" />*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
            <Table>
                <tbody>
                    <tr>
                        <td>주문자정보</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>주문자</td>
                        <td style={ { textAlign: "left" } }><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>휴대폰</td>
                        <td style={ { textAlign: "left" } }><input type="text" />-<input type="text" />-<input type="text" /></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td style={ { textAlign: "left" } }><input type="text" />@<input type="text" /></td>
                    </tr>
                    <tr>
                        <td rowSpan="2">주소</td>
                        <td style={ { textAlign: "left" } }><input type="text" /> <button>우편번호검색</button></td>
                    </tr>
                    <tr>
                        <td style={ { textAlign: "left" } }><input type="text" /> <input type="text" /></td>
                    </tr>
                </tbody>
            </Table>

            <Table>
                <tbody>
                    <tr>
                        <td>총 주문금액</td>
                        <td>배송비</td>
                        <td>최종 결제금액</td>
                    </tr>
                    <tr>
                        <td>10,000</td>
                        <td>0</td>
                        <td>10,000</td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <Button variant="primary">주문하기</Button>
                <Link to={"/cartPage"}><Button variant="primary">취소하기</Button></Link>
            </div>

        </>

    )

}

export default OrderPage;