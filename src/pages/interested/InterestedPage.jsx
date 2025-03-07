import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import ItemDataApi from "../../services/ItemDataApi.jsx";
import Button from "react-bootstrap/Button";

function InterestedPage() {

    let [itemCnt, setItemCnt] = useState(1);
    let [tmpCnt, setTmpCnt] = useState(itemCnt);

    useEffect(() => {
        setItemCnt(tmpCnt);
    }, [tmpCnt]);

    // 관심상품의 모든 상품을 담을 배열
    const [interestedItems, setInterestedItems] = useState(ItemDataApi().fakerItem);

    console.log(interestedItems)

    // 체크 된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([])

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
            // cartItemList.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
    }

    return (
        <>
            <h3>관심상품</h3>
            <Container>
                <Row>
                    <Col className="col-auto">
                        <input type="checkbox" onChange={ (e) => handleAllCheck(e.target.checked) } />
                    </Col>
                    <Col>
                        <h5>상품</h5>
                    </Col>
                    <Col>
                        <h5>금액</h5>
                    </Col>
                </Row>

                {
                    interestedItems.map( (e) => (
                        <>
                            <Row>
                                <Col className="col-auto">
                                    <input type="checkbox" onChange={ (e) => handleSingleCheck(e.target.checked, e.target.id) } />
                                </Col>
                                <Col>
                                    {e.productName}
                                </Col>
                                <Col>
                                    {e.price}
                                </Col>
                            </Row>
                        </>
                    ) )
                }

                <Row style={ {justifyContent: "left"} }>
                    <Col>
                        <Button>삭제</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default InterestedPage;