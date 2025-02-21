import "../assets/css/NavBar.css"
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown_category">
                    카테고리
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/itemListPage">복사용품</Dropdown.Item>
                    <Dropdown.Item href="/itemListPage">식음료</Dropdown.Item>
                    <Dropdown.Item href="/itemListPage">사무용품</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Navbar;