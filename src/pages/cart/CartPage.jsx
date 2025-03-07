import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import "../../assets/css/Cart.css"

import itemDataApi from "../../services/ItemDataApi.jsx";
import {forEach} from "react-bootstrap/ElementChildren";
import item from "../../components/Item.jsx";


function CartPage() {

    // let [tmpCnt, setTmpCnt] = useState(itemCnt);

    // function chgItemCnt(e) {
    //     setTmpCnt(e.target.value);
    // }

    // useEffect(() => {
    //     setItemCnt(tmpCnt);
    // }, [tmpCnt]);

    // 장바구니의 모든 상품을 담을 배열
    const [cartItemList, setCartItemList] = useState(itemDataApi().recommendItem);

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

        // if (checkItems.length === 0) {
        //     alert("선택한 상품이 없습니다.")
        // }

        checkItems.map((a) => {
            // console.log(a)
            // setCartItemList(cartItemList.filter( (item) => item.id !== a));
            // setCartItemList(cartItemList.filter((item) => item.id !== a));
            // console.log(cartItemList)

            console.log(cartItemList)

            // let copy = cartItemList.filter((item) => item.id !== a);
            let copy = [...cartItemList];
            setCartItemList(copy.filter((item) => item.id !== a));
            setCheckItems([]);

        })
    };

    // 전체삭제
    const allItemDel = () => {
        setCartItemList([]);
    }

    let [itemCnt, setItemCnt] = useState([]);

    for(let i = 0; i < cartItemList.length; i++) {
        itemCnt.push(1);
    }


    return (
        <>
            <h3>장바구니</h3>
            <Container style={ {border: "solid 1px black"} }>
                <Row>
                    <Col className="col-auto">
                        <input type="checkbox" onChange={ (e) => handleAllCheck(e.target.checked) }
                            checked={checkItems.length == cartItemList.length ? true : false} />
                    </Col>
                    <Col><h5>상품</h5></Col>
                    <Col><h5>수량</h5></Col>
                    <Col><h5>금액</h5></Col>
                    <Col><h5>총 금액</h5></Col>
                </Row>


                {
                    cartItemList.map( (e, i) => (
                    <>
                        <Row>
                            <Col className="col-auto">
                                <input type="checkbox" id={e.id} onChange={ (e) => handleSingleCheck(e.target.checked, e.target.id)}
                                    checked={checkItems.includes(e.id) ? true : false} />
                            </Col>
                            <Col>{e.name}</Col>
                            <Col className="col-auto">
                                {/*<input defaultValue="1" onChange={ (e) => chgItemCnt(e) } />*/}
                                {/*<Button variant="Light" onClick={ () => {*/}
                                {/*    console.log("itemCnt : " + itemCnt);*/}
                                {/*    }*/}
                                {/*}>변경</Button>*/}
                                <Button variant="light" onClick={ () => {
                                    if(itemCnt[i] > 1) {
                                        let copy = [...itemCnt];
                                        copy[i] -= 1;
                                        setItemCnt(copy);
                                    }
                                } }>-</Button>
                                <input className="row-cols-auto" value={itemCnt[i]} />
                                <Button variant="light" onClick={ () => {
                                    let copy = [...itemCnt];
                                    copy[i] += 1;
                                    setItemCnt(copy);
                                } }>+</Button>
                            </Col>
                            <Col>{e.price}</Col>
                            <Col>{itemCnt[i] * e.price}</Col>
                        </Row>
                    </>
                ) )


                }

                {/*<Row>*/}
                {/*    <Col className="col-auto">*/}
                {/*        <input type="checkbox" id="testId_01" onChange={ (e) => handleSingleCheck(e.target.checked, e.target.id)}*/}
                {/*            checked={checkItems.includes("testId_01") ? true : false} />*/}
                {/*    </Col>*/}
                {/*    <Col></Col>*/}
                {/*    <Col>*/}
                {/*        /!*<input defaultValue={itemCnt} onChange={ (e) => chgItemCnt(e) } />*!/*/}
                {/*        <input defaultValue="1" onChange={ (e) => chgItemCnt(e) } />*/}
                {/*        <Button variant="Light" onClick={ () => {*/}
                {/*            console.log("itemCnt : " + itemCnt);*/}
                {/*            }*/}
                {/*        }>변경</Button>*/}
                {/*    </Col>*/}
                {/*    <Col></Col>*/}
                {/*    <Col></Col>*/}
                {/*    <Col>*/}
                {/*        <Row className="row-cols-auto">*/}
                {/*            <Link to={"/orderPage"}><Button variant="Light">주문</Button></Link>*/}
                {/*        </Row>*/}
                {/*        <Row className="row-cols-auto">*/}
                {/*            <Button variant="Light">삭제</Button>*/}
                {/*        </Row>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col className="col-auto">*/}
                {/*        <input type="checkbox" id="testId_02" onChange={ (e) => handleSingleCheck(e.target.checked, e.target.id)}*/}
                {/*               checked={checkItems.includes("testId_02") ? true : false} />*/}
                {/*    </Col>*/}
                {/*    <Col></Col>*/}
                {/*    <Col>*/}
                {/*        /!*<input defaultValue={itemCnt} onChange={ (e) => chgItemCnt(e) } />*!/*/}
                {/*        <input defaultValue="1" onChange={ (e) => chgItemCnt(e) } />*/}
                {/*        <Button variant="Light" onClick={ () => {*/}
                {/*            console.log("itemCnt : " + itemCnt);*/}
                {/*            }*/}
                {/*        }>변경</Button>*/}
                {/*    </Col>*/}
                {/*    <Col></Col>*/}
                {/*    <Col></Col>*/}
                {/*    <Col>*/}
                {/*        <Row className="row-cols-auto">*/}
                {/*            <Link to={"/orderPage"}><Button variant="Light">주문</Button></Link>*/}
                {/*        </Row>*/}
                {/*        <Row className="row-cols-auto">*/}
                {/*            <Button variant="Light">삭제</Button>*/}
                {/*        </Row>*/}
                {/*    </Col>*/}
                {/*</Row>*/}




                {/*<Row className="justify-content-between row-cols-auto">*/}
                <Row>
                    <Col style={ {justifyContent: "flex-end"} }>
                        <Button onClick={ () => selectItemDel() }>선택삭제</Button>
                        <Button onClick={ () => allItemDel() }>전체삭제</Button>
                        <Button>관심상품</Button>
                    </Col>
                    <Col>
                        <Link to={"/orderPage"}><Button >선택상품구매</Button></Link>
                        <Link to={"/orderPage"}><Button>전체상품구매</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default CartPage;