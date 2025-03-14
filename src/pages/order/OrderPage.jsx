import {Row, Col, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import OrderRow from "../../components/OrderRow.jsx";
import {useEffect, useState} from "react";

function OrderPage() {

    const orderList = [
        {
            orderItemId: 'id_01',
            orderItemImg: '/src/assets/images/item_01.jpg',
            orderItemName: 'item_01',
            orderItemcnt: 2,
            orderItemPrice: 100000

        },
        {
            orderItemId: 'id_02',
            orderItemImg: '/src/assets/images/item_04.jpg',
            orderItemName: 'item_04',
            orderItemcnt: 5,
            orderItemPrice: 20500
        }
    ]

    // 총 금액
    const [totalPrice, setTotalPrice] = useState(0);
    // 배송비
    const [deliveryPrice, setDeliveryPrice] = useState(0);

    useEffect(() => {
        let sum = 0;

        orderList.forEach((item) => {
            sum = sum += item.orderItemcnt * item.orderItemPrice;
            setTotalPrice(sum);
        })
    }, [])

    return (
        <>
            {/*<Container>*/}
            {/*    <CartRow>*/}
            {/*        <Col className="col-auto" style={ { display: "flex", float: "left" } }>주문자</Col>*/}
            {/*        <Col><input type="text" /></Col>*/}
            {/*    </CartRow>*/}
            {/*    <CartRow>*/}
            {/*        <Col className="col-auto">휴대폰</Col>*/}
            {/*        <Col><input type="text" />-<input type="text" />-<input type="text" /></Col>*/}
            {/*    </CartRow>*/}
            {/*    <CartRow>*/}
            {/*        <Col className="col-auto">주소</Col>*/}
            {/*        <Col>*/}
            {/*            <CartRow className="row-cols-auto"><input type="text" /><button>우편번호검색</button></CartRow>*/}
            {/*            <input type="text" /><input type="text" />*/}
            {/*        </Col>*/}
            {/*    </CartRow>*/}
            {/*</Container>*/}

            <h2>주문하기</h2>

            <Table>
                <thead>
                    <tr>
                        <th colSpan="2">상품</th>
                        <th>수량</th>
                        <th>판매가</th>
                        <th>합계</th>
                    </tr>
                </thead>

                <tbody>

                {
                    orderList.map( (item) => (
                        <>
                            <OrderRow item={item} />
                        </>
                    ) )
                }

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" style={ {textAlign: "right"} }>총 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                </tfoot>

            </Table>

            <Table>
                <thead>
                    <tr>
                        <th colSpan="2" style={ {textAlign: "left"} }>주문자정보</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>이름</td>
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
                <thead>
                    <tr>
                        <th>총 주문금액</th>
                        <th>배송비</th>
                        <th>최종 금액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td>{deliveryPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td>{(totalPrice + deliveryPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
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