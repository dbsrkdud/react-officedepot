import Category from "../../components/Category.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Col} from "react-bootstrap";

function ItemListPage (){
    return (
        <div>
            <Container className="container">
                <Row>
                    <Col><Category /></Col>
                    <Col><Category /></Col>
                    <Col><Category /></Col>
                    <Col><Category /></Col>
                </Row>
                <Row>
                    <Col><Category /></Col>
                    <Col><Category /></Col>
                    <Col><Category /></Col>
                    <Col><Category /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemListPage;