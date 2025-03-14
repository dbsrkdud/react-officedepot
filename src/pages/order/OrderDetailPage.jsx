import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";

function OrderDetailPage() {

    const orderDetailList = [
        {
            orderItemId: 'id_01',
            orderItemImg: '/src/assets/images/item_01.jpg',
            orderItemName: 'item_01',
            orderItemcnt: 2,
            orderItemPrice: 100000

        },
        {
            orderItemId: 'id_02',
            orderItemImg: '/src/assets/images/item_02.jpg',
            orderItemName: 'item_02',
            orderItemcnt: 5,
            orderItemPrice: 20500
        },
        {
            orderItemId: 'id_03',
            orderItemImg: '/src/assets/images/item_03.jpg',
            orderItemName: 'item_03',
            orderItemcnt: 3,
            orderItemPrice: 14000
        },
        {
            orderItemId: 'id_04',
            orderItemImg: '/src/assets/images/item_04.jpg',
            orderItemName: 'item_04',
            orderItemcnt: 10,
            orderItemPrice: 800
        },
        {
            orderItemId: 'id_05',
            orderItemImg: '/src/assets/images/item_05.jpg',
            orderItemName: 'item_05',
            orderItemcnt: 7,
            orderItemPrice: 6000
        }
    ]

    // 총 금액
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        orderDetailList.forEach( (item) => {
            sum = sum + item.orderItemcnt * item.orderItemPrice;
            setTotalPrice(sum);
        } )
    }, []);



    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th colSpan="2">상품</th>
                        <th>수량</th>
                        <th>금액</th>
                        <th>금액 합계</th>
                    </tr>
                </thead>
                <tbody>

                {
                    orderDetailList.map((item) => (
                        <>
                            <tr>
                                <td><img src={item.orderItemImg} style={ {width: "150px"} } /></td>
                                <td>{item.orderItemName}</td>
                                <td>{item.orderItemcnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{item.orderItemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{(item.orderItemcnt * item.orderItemPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>
                        </>
                    ))
                }

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" style={ {textAlign: "right"} }>총 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                    </tr>
                </tfoot>
            </Table>
        </>
    )
}

export default OrderDetailPage;