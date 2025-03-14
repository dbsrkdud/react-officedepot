import {Col, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../../assets/css/OrderRetrieve.css";
import {Link} from "react-router-dom";
import Title from "../../components/Title.jsx";

function OrderRetrievePage () {

    const orderList = [
        {
            orderId: 'id_01',
            orderDate: '1900-01-01',
            orderPrice: 100000,
            orderStatus: '01 (주문완료)'
        },
        {
            orderId: 'id_02',
            orderDate: '2000-12-01',
            orderPrice: 65000,
            orderStatus: '10 (주문취소)'
        }
    ]

    return (
        <>
            <Title title="주문내역" />
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>주문번호</th>
                        <th>주문일자</th>
                        <th>금액</th>
                        <th>주문상태</th>
                        <th>배송조회</th>
                        <th>확정/취소</th>
                    </tr>
                </thead>
                <tbody>

                {
                    orderList.map( (order, i) => (
                        <>
                            <tr>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    <Link to={`/orderDetailPage/${order.orderId}`} >{order.orderId}</Link>
                                </td>
                                <td>
                                    {order.orderDate}
                                </td>
                                <td>
                                    {order.orderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </td>
                                <td>
                                    {order.orderStatus}
                                </td>
                                <td>
                                    <Button variant="light">배송조회</Button>
                                </td>
                                <td>
                                    {

                                    }
                                    <Button variant="light">확정/취소</Button>
                                </td>
                            </tr>
                        </>
                    ))


                }

                </tbody>
            </Table>
        </>
    )
}

export default OrderRetrievePage;