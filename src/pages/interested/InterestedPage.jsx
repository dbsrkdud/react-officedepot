import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";

function InterestedPage() {

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
            <h3>관심상품</h3>
            <Container>
                <Row>
                    <Col>
                        <input type="checkbox" />
                    </Col>
                    <Col>
                        <h5>상품</h5>
                    </Col>
                    <Col>
                        <h5>수량</h5>
                    </Col>
                    <Col>
                        <h5>금액</h5>
                    </Col>
                    <Col>
                        <h5>총 금액</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="checkbox" />
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        <input defaultValue="1" onChange={ (e) => chgItemCnt(e) } />
                        <Button variant="Light" onClick={ () => {
                                console.log("itemCnt : " + itemCnt);
                            }
                        }>변경</Button>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InterestedPage;