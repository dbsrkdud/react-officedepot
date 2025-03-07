import { useState } from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useParams} from "react-router-dom";

function ItemDetailPage (){

    const params = useParams();
    const itemId = params.id;

    let [itemCnt, setItemCnt] = useState(1);

    function delItemCnt() {
        if (itemCnt > 1) {
            setItemCnt(itemCnt - 1)
        }
    }

    function addItemCnt() {
        setItemCnt(itemCnt + 1)
    }

    // 장바구니
    const itemCart = function() {
        console.log(itemCnt)
    }

    // 관심상품
    const itemInterested = function() {
        console.log(itemCnt)
    }


    return (
        <Container className="itemDetail">
            <Row>
                <Col style={ {border: "solid 1px black"} }>
                    <img src={`/src/assets/images/${itemId}.jpg`} />
                </Col>
                <Col>
                    <Row>
                        <p>name</p>
                    </Row>
                    <Row className="mb-4">
                        detail
                    </Row>
                    <Row className="mb-4">
                        10,000
                    </Row>
                    <Row className="row row-cols-auto mb-4">
                        <Button variant="light" onClick={delItemCnt}>-</Button>
                        <input className="" value={itemCnt} />
                        <Button variant="light" onClick={addItemCnt}>+</Button>
                    </Row>
                    <Row className="row row-cols-auto">
                        <Link to={"/orderPage"}><Button variant="primary">구매하기</Button></Link>
                        <Button onClick={ () => itemCart() } variant="primary" style={ {marginRight : "2%"} }>장바구니</Button>
                        <Button onClick={ () => itemInterested() } variant="primary">관심상품</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}



export default ItemDetailPage;