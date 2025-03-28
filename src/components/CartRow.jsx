import Button from "react-bootstrap/Button";

function CartRow(props) {

    // useEffect(() => {
    //     let copy2 = [...props.itemTotalPrice];
    //     copy2[props.i] = props.itemCnt[props.i] * props.item.price;
    //     props.setItemTotalPrice(copy2);
    //
    //     console.log("copy : " + copy2)
    //
    //     let sum = 0;
    //     props.itemTotalPrice.map((price) => {
    //         sum = sum + price;
    //         props.setTotalPrice(sum);
    //     })
    //
    //     console.log("totalprice : " + props.itemTotalPrice)
    //
    // }, [props.itemCnt])

    return (
        <>
            <tr>
                <td className="col-auto">
                    <input type="checkbox" id={props.item.id} onChange={ (e) => props.handleSingleCheck(e.target.checked, e.target.id)}
                           checked={props.checkItems.includes(props.item.id) ? true : false} />
                </td>
                <td>
                    <img src={props.item.src} style={ {width: "150px"} }></img>
                    {props.item.name}
                </td>
                <td className="col-auto">
                    <Button variant="light" onClick={ () => {
                        if(props.itemCnt[props.i] > 1) {
                            let copy = [...props.itemCnt];
                            copy[props.i] -= 1;
                            props.setItemCnt(copy);

                            // props.setTotalPrice(props.totalPrice - props.itemPrice[props.i])
                        }
                    } }>-</Button>
                    <input className="row-cols-auto" value={props.itemCnt[props.i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                    {/*<Button variant="light" onClick={addCCount}>+</Button>*/}
                    <Button variant="light" onClick={ () => {
                        let copy = [...props.itemCnt];
                        copy[props.i] += 1;
                        props.setItemCnt(copy);

                        let copy2 = [...props.itemTotalPrice];
                        copy2[props.i] = props.itemCnt[props.i] * props.item.price;
                        props.setItemTotalPrice(copy2);

                        let sum = 0;
                        props.itemTotalPrice.map((price) => {
                            sum = sum + price;
                            props.setTotalPrice(sum);
                        })
                    } }>+</Button>
                </td>
                <td>{props.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>
                    <div>{(props.itemCnt[props.i] * props.item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                </td>
            </tr>
        </>
    )

}

export default CartRow;