import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
class ModalUser extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {}

    toggle = () => {
        this.props.toggleFromParent();
    };

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className="adads"
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    type="email"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    type="password"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input type="text" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input type="text" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input type="text" />
                    </FormGroup>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">Phone Number</Label>
                                <Input type="text" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Gender</Label>
                                <Input type="select">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Role</Label>
                                <Input type="select">
                                    <option>Doctor</option>
                                    <option>Patient</option>
                                    <option>Admin</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary px-3" onClick={() => this.toggle()}>
                        Do Something
                    </Button>{" "}
                    <Button
                        color="secondary px-3"
                        onClick={() => this.toggle()}
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
