import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import "../../assets/css/Cart.css"

import itemDataApi from "../../services/ItemDataApi.jsx";
import Title from "../../components/Title.jsx";
import CartRow from "../../components/CartRow.jsx";


function CartPage() {

    const navigate = useNavigate();

    // 장바구니의 모든 상품을 담을 배열
    const [cartItemList, setCartItemList] = useState(itemDataApi().item);

    // 체크 된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    // 체크박스 개별 선택
    const handleSingleCheck = (checked, id) => {

        if (checked) {
            //setCheckItems(prev => [...prev, id]);
            setCheckItems([...checkItems, id])
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((el) => el !== id));
        }
    }

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if(checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            cartItemList.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
    }

    // 선택삭제
    const selectItemDel = () => {

        if (checkItems.length === 0) {
            alert("선택한 상품이 없습니다.")
        }

        let copy = [...cartItemList];

        checkItems.map((a) => {
            copy = copy.filter((item) => item.id !== a);
            setCartItemList(copy)
            setCheckItems([]);
        })
    };

    // 전체삭제
    const allItemDel = () => {
        setCartItemList([]);
        setItemPrice([]);
        setTotalPrice(0);
    }

    // 수량
    const [itemCnt, setItemCnt] = useState([]);
    // 금액
    const [itemPrice, setItemPrice] = useState([]);
    // 상품별 총 금액
    const [itemTotalPrice, setItemTotalPrice] = useState([]);
    // 총 금액
    const [totalPrice, setTotalPrice] = useState(0)

    if (itemCnt.length === 0) {
        for(let i = 0; i < cartItemList.length; i++) {
            itemCnt.push(1);
        }
    }

    if (itemPrice.length === 0) {
        cartItemList.map(item => {
            itemPrice.push(item.price);
        })
    }

    if (itemTotalPrice.length === 0) {
        cartItemList.forEach(item => {
            itemTotalPrice.push(item.price);
        });
    }

    useEffect(() => {
        let sum = 0;

        itemTotalPrice.map((price) => {
            sum = sum + price;
            setTotalPrice(sum)
        })
    }, [])

    return (
        <>
            <Title title="장바구니" />
            <Table>
                <thead>
                    <tr>
                        <th className="col-auto">
                            <input type="checkbox" onChange={ (e) => handleAllCheck(e.target.checked) }
                                   checked={checkItems.length == cartItemList.length} />
                        </th>
                        <th className="col-auto">상품</th>
                        <th className="col-3">수량</th>
                        <th className="col-2">금액</th>
                        <th className="col-2">총 금액</th>
                    </tr>
                </thead>
                <tbody>

                {
                    cartItemList.map( (e, i) => (
                        <>
                            <CartRow item={e} handleSingleCheck={handleSingleCheck} checkItems={checkItems} itemCnt={itemCnt} setItemCnt={setItemCnt} i={i} itemPrice={itemPrice} setItemPrice={setItemPrice} itemTotalPrice={itemTotalPrice} setItemTotalPrice={setItemTotalPrice} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
                        </>
                    ) )
                }
                    <tr>
                        <td colSpan="4" style={ {textAlign: "right"} }>총 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                        <td> 원</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <Button onClick={ () => selectItemDel() }>선택삭제</Button>
                            <Button onClick={ () => allItemDel() }>전체삭제</Button>
                            <Button onClick={ () => {
                                if (checkItems.length === 0) {
                                    alert('선택한 상품이 없습니다.');
                                } else {
                                    navigate('/interestedPage', {state: {checkItems}});
                                }
                            } }>관심상품</Button>
                        </td>
                        <td colSpan="2" style={ {textAlign: "right"} }>
                            {/*<Link to={'/orderPage'} state={{checkItems: checkItems, itemCnt: itemCnt}}><Button onClick={() => {*/}
                            {/*    if (checkItems.length === 0) {*/}
                            {/*        alert('선택한 상품이 없습니다');*/}

                            {/*    }*/}
                            {/*    // console.log(checkItems)*/}
                            {/*}}>선택상품구매</Button></Link>*/}
                            {
                                // (checkItems.length === 0) ? <Button onClick={() => alert('선택한 상품이 없습니다')}>선택상품구매</Button> :
                                //     <Link to={'/orderPage'} state={{checkItems: checkItems, itemCnt: itemCnt}}><Button>선택상품구매</Button></Link>
                            }
                            <Button onClick={() => {
                                if (checkItems.length === 0) {
                                    alert("선택한 상품이 없습니다.");
                                } else {
                                    navigate('/orderPage', {state: {checkItems}});
                                }
                            }}>선택상품구매</Button>
                        </td>
                        <td>
                            <Link to={`/orderPage`} state={{checkItems: checkItems}}><Button onClick={ () => handleAllCheck(true) }>전체상품구매</Button></Link>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </>
    )

}

export default CartPage;