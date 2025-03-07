import {Link} from "react-router-dom";

import Category from "../../components/Category.jsx";
import Item from "../../components/Item.jsx";
import itemDataApi from "../../services/ItemDataApi.jsx";

function ItemListPage (){

    // const itemList = itemListApi().item.map((item) =>
    //     <div className="itemDiv" key={item.id}><Link to={`/itemDetailPage/${item.id}`}><Item item={item} /></Link></div>
    // );

    const itemList = () => {
        const result = [];
        itemDataApi().item.forEach((item) => {
            result.push(<div className="itemDiv" key={item.id}><Link to={`/itemDetailPage/${item.id}`}><Item item={item} /></Link></div>);
        })
        return result;
    }

    return (
        <>
            <Category />
            {itemList()}
        </>
    )
}

export default ItemListPage;