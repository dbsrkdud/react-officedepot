import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useLocation} from "react-router-dom";
import OrderRow from "../../components/OrderRow.jsx";
import {useEffect, useState} from "react";
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-modal"
import Title from "../../components/Title.jsx";
import itemDataApi from "../../services/ItemDataApi.jsx";

function OrderPage() {

    const location = useLocation();
    const { checkItems: checkItems } = location.state;
    const { itemCnt: itemCnt } = location.state;


    const [itemList, setItemList] = useState(itemDataApi().item);
    const [orderList, setOrderList] = useState([]);

    // const [orderList, setOrderList] = useState([
    //     {
    //         orderItemId: 'id_01',
    //         orderItemImg: '/src/assets/images/item_01.jpg',
    //         orderItemName: 'item_01',
    //         orderItemcnt: 2,
    //         orderItemPrice: 100000
    //
    //     },
    //     {
    //         orderItemId: 'id_02',
    //         orderItemImg: '/src/assets/images/item_04.jpg',
    //         orderItemName: 'item_04',
    //         orderItemcnt: 5,
    //         orderItemPrice: 20500
    //     }
    // ]);



    useEffect(() => {
        itemList.forEach((item, i) => {
            if (checkItems.includes(itemList[i].id)) {
                // console.log(itemList[i])
                // setOrderList(orderList.concat(itemList[i]))
                // setOrderList([...orderList, itemList[i]]);
                // console.log(orderList)
                setOrderList(prevArr => [...prevArr, itemList[i]])
            }
        })
    }, []);





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
    }, []);


    // Modal 스타일
    const customStyles = {
        overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
            left: "0",
            margin: "auto",
            width: "500px",
            height: "600px",
            padding: "0",
            overflow: "hidden",
        },
    };

    const [zipCode, setZipcode] = useState("");
    const [roadAddress, setRoadAddress] = useState("");
    const [detailAddress, setDetailAddress] = useState("");    // 추가
    const [isOpen, setIsOpen] = useState(false);


    const completeHandler = (data) => {
        setZipcode(data.zonecode);
        setRoadAddress(data.roadAddress);
        setIsOpen(false); //추가
    }


    // 검색 클릭
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    // 상세 주소검색 event
    const changeHandler = (e) => {
        setDetailAddress(e.target.value);
    }

    return (
        <>
            <Title title={"주문하기"}/>

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
                        <td style={ { textAlign: "left" } }><input value={zipCode} readOnly placeholder="우편번호" />
                            <button onClick={toggle}>우편번호검색</button>

                            {/*<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles} >*/}
                            {/*    <DaumPostcode onComplete={completeHandler} height="100%" />*/}
                            {/*</Modal>*/}
                            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false} style={customStyles}>
                                <DaumPostcode onComplete={completeHandler} height="100%" />
                            </Modal>
                        </td>
                    </tr>
                    <tr>
                        <td style={ { textAlign: "left" } }><input value={roadAddress} readOnly placeholder="도로명 주소" /> <input type="text" onChange={changeHandler} value={detailAddress} placeholder="상세주소" /></td>
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
                <Link to={"/cartPage"}><Button variant="primary" onClick={() => {
                    setOrderList([]);
                }}>취소하기</Button></Link>
            </div>

        </>

    )

}

export default OrderPage;