function OrderRow(props) {

    console.log(props)

    return (
        <>
            <tr>
                <td><img src={props.item.src} className="itemImg"></img></td>
                <td>{props.item.name}</td>
                <td>{props.item.name}</td>
                <td>{props.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>{(props.item.orderItemcnt * props.item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            </tr>
        </>
    )

}

export default OrderRow;