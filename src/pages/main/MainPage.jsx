import Banner from "../../components/Banner.jsx"
import Item from "../../components/Item.jsx";

function MainPage() {
    return (
        <div>
            <Banner />
            <div className="container">
                <h3>추천상품</h3>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

        </div>
    )
}

export default MainPage;
