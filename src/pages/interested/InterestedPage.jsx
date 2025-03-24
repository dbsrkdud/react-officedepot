import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import Title from "../../components/Title.jsx";
import {useLocation} from "react-router-dom";
import itemDataApi from "../../services/ItemDataApi.jsx";

function InterestedPage() {

    const location = useLocation();

    const [checkItemList, setCheckItemList] = useState(location.state.checkItems);
    const [itemList, setItemList] = useState(itemDataApi().item);

    console.log(checkItemList)

    // 관심상품의 모든 상품을 담을 배열
    // const [interestedItems, setInterestedItems] = useState(ItemDataApi().fakerItem);
    const [interestedItems, setInterestedItems] = useState([]);

    useEffect(() => {
        itemList.forEach((item, i) => {

            if (checkItemList.includes(itemList[i].id)) {
                console.log(itemList[i].id)
                // console.log(itemList[i])
                // setOrderList(orderList.concat(itemList[i]))
                // setOrderList([...orderList, itemList[i]]);
                // console.log(orderList)
                setInterestedItems(prevArr => [...prevArr, itemList[i]])
            }
        })
    }, []);

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
            interestedItems.forEach((el) => idArray.push(el.id));
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

        let copy = [...interestedItems];

        checkItems.map((a) => {
            copy = copy.filter((item) => item.id !== a);
            setInterestedItems(copy)
            setCheckItems([]);
        })
    };

    return (
        <>
            <Title title="관심상품" />
            <Table>
                <thead>
                    <tr>
                        <th className="col-auto"><input type="checkbox" onChange={ (e) => handleAllCheck(e.target.checked) }
                                   checked={checkItems.length == interestedItems.length} /></th>
                        <th className="col-auto">상품</th>
                        <th className="col-auto">금액</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        interestedItems.map( (item) => (
                            <>
                                <tr>
                                    <td className="col-auto">
                                        <input type="checkbox" onChange={ (e) => handleSingleCheck(e.target.checked, item.id) }
                                               checked={checkItems.includes(item.id) ? true : false} />
                                    </td>
                                    <td className="col-auto" style={ {textAlign: "left"} }>
                                        <img src={item.src} style={ {width: "150px"} }></img>
                                        {item.name}
                                    </td>
                                    <td className="col-auto">
                                        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </td>
                                </tr>
                            </>
                        ) )
                    }
                </tbody>
            </Table>

        </>
    )
}

export default InterestedPage;