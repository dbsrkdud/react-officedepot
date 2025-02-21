import React from "react";
import "../assets/css/Item.css";
import Item01 from "../assets/images/item_01.jpg"

function Item() {
    return (
        <>
            <div className="item">
                <img src={Item01} className="itemImg"/>
                <h6>상품명</h6>
            </div>
        </>
    )
}

export default Item;