import React from 'react';
import { Container} from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Table = () => {
    return(
        <div>
            <Container fluid className="rightAlign fullWidthInput">
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Block 3rd and Collect Calls</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No Restriction" selected="selected">No Restriction</option>
                            <option value="Block Collect Only">Block Collect Only</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Block Call Trace</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Block International Calling</label>                    
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Block or Display C..</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="Allow Caller ID" selected="selected">Allow Caller ID</option>
                            <option value="Block Caller ID">Block Caller ID</option>
                        </select>
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Caller ID Name</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="Maddela" />
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* E911 Disability Ind</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No Value Selected" selected="selected">No Value Selected</option>
                            <option value="Not Specified">Not Specified</option>
                        </select>
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Emergency Install</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* LEC Account PIN</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="None" />
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Emergency Install</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* LEC Account PIN</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="None" />
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Emergency Install</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* LEC Account PIN</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="None" />
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Emergency Install</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* LEC Account PIN</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="None" />
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Emergency Install</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* LEC Account PIN</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="None" />
                    </Col>
                </Col>
                </Row>
                <Row>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* Emergency Install</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <select>
                            <option value="No" selected="selected">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </Col>
                </Col>
                <Col xs={12} md={6}>
                    <Col xs={12} md={6}>
                        <label>* LEC Account PIN</label>
                    </Col>
                    <Col xs={12} md={6}>
                        <input type="text" disabled value="None" />
                    </Col>
                </Col>
                </Row>
            </Container>
        </div> 
    )
}

export default Table;

