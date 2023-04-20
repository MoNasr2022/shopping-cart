import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row>
        <Col>
          {storeItems.map((item) => }
        </Col>
      </Row>
    </>
  );
}
