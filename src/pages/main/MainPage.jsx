import {Link} from "react-router-dom";

import Banner from "../../components/Banner.jsx"
import Item from "../../components/Item.jsx";
import itemListApi from "../../services/ItemDataApi.jsx";
import Title from "../../components/Title.jsx";

function MainPage() {

    const itemList = itemListApi().item.map((item) =>
        item.recommendYn === 'Y' ? <Link to={`/itemDetailPage/${item.id}`}><Item item={item} /></Link> : ""
    );

    return (
        <>
            <Banner />
            <div className="itemList">
                <Title title="추천상품" />
                {itemList}
            </div>
        </>
    )
}

export default MainPage;
