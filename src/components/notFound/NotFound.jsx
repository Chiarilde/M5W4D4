import { Col, Row } from "react-bootstrap";
import ufo from "../../assets/ufo.png";

const NotFound = () => (
    <Row className="justify-content-center my-4">
        <Col xs={12} md={6}>
            <div className="text-center">
                <img
                    src={ufo}
                    alt="not found"
                    style={{ width: "550px", marginBottom: "20px" }}
                />
                <h3>Pagina non trovata!</h3>
            </div>
        </Col>
    </Row>
);

export default NotFound;
