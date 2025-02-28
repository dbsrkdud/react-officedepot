import "../assets/css/Item.css";


function Item(props) {

    return (
        <div className="itemDiv">
            <img src={props.item.src} className="itemImg"></img>
            <h6>{props.item.name}</h6>
        </div>
    )
}

export default Item;