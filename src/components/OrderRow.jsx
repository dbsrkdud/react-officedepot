function OrderRow(props) {

    return (
        <>
            <tr>
                <td><img src={props.item.orderItemImg} className="itemImg"></img></td>
                <td>{props.item.orderItemName}</td>
                <td>{props.item.orderItemcnt}</td>
                <td>{props.item.orderItemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>{(props.item.orderItemcnt * props.item.orderItemPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            </tr>
        </>
    )

}

export default OrderRow;