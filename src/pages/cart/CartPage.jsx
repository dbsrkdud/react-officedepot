import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import Item from "../../components/Item.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import "../../assets/css/Cart.css"


function CartPage() {

    let [itemCnt, setItemCnt] = useState(1);
    // let tmpCnt = itemCnt;
    let [tmpCnt, setTmpCnt] = useState(itemCnt);

    function chgItemCnt(e) {
        // setItemCnt(e.target.value);
        setTmpCnt(e.target.value);
    }

    useEffect(() => {
        setItemCnt(tmpCnt);
    }, [tmpCnt]);

    return (
        <>
            <h3>장바구니</h3>
            <Container style={ {border: "solid 1px black"} }>
                <Row>
                    <Col className="col-auto"><input type="checkbox" /></Col>
                    <Col><h5>상품</h5></Col>
                    <Col><h5>수량</h5></Col>
                    <Col><h5>금액</h5></Col>
                    <Col><h5>총 금액</h5></Col>
                    <Col><h5>주문/삭제</h5></Col>
                </Row>
                <Row>
                    <Col className="col-auto"><input type="checkbox" /></Col>
                    <Col></Col>
                    <Col>
                        {/*<input defaultValue={itemCnt} onChange={ (e) => chgItemCnt(e) } />*/}
                        <input defaultValue="1" onChange={ (e) => chgItemCnt(e) } />
                        <Button variant="Light" onClick={ () => {
                            console.log("itemCnt : " + itemCnt);
                            }
                        }>변경</Button>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Row className="row-cols-auto">
                            <Link to={"/orderPage"}><Button variant="Light">주문</Button></Link>
                        </Row>
                        <Row className="row-cols-auto">
                            <Button variant="Light">삭제</Button>
                        </Row>
                    </Col>
                </Row>
                {/*<Row className="justify-content-between row-cols-auto">*/}
                <Row>
                    <Col style={ {justifyContent: "flex-end"} }>
                        <Button>선택삭제</Button>
                        <Button>전체삭제</Button>
                        <Button>관심상품</Button>
                    </Col>
                    <Col>
                        <Link to={"/orderPage"}><Button>선택상품구매</Button></Link>
                        <Link to={"/orderPage"}><Button>전체상품구매</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default CartPage;