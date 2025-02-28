import {Link} from "react-router-dom";

import Banner from "../../components/Banner.jsx"
import Item from "../../components/Item.jsx";
import itemListApi from "../../services/ItemDataApi.jsx";

function MainPage() {

    console.log(itemListApi);
    console.log(typeof (itemListApi()))

    const itemList = itemListApi().recommendItem.map((item) =>
        <Link to={`/itemDetailPage/${item.id}`}><Item item={item} /></Link>
    );

    return (
        <>
            <Banner />
            <div className="itemList">
                <h3>추천상품</h3>
                {itemList}
            </div>
        </>
    )
}

export default MainPage;
