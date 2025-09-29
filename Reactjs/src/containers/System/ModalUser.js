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
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
        };
    }
    componentDidMount() {}

    toggle = () => {
        this.props.toggleFromParent();
    };

    handleOnChange = (e, id) => {
        this.setState((prevState) => ({ ...prevState, [id]: e.target.value }));
    };

    checkValidInput = () => {
        let arrInput = [
            "email",
            "password",
            "firstName",
            "lastName",
            "address",
        ];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                alert("Missing parameter: " + arrInput[i]);
                return false;
            }
        }
        return true;
    };

    handleAddNew = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            if (this.props.createNewUser(this.state) === true) {
                this.setState({
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    address: "",
                });
            }
        }
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
                                    onChange={(e) =>
                                        this.handleOnChange(e, "email")
                                    }
                                    value={this.state.email}
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
                                    onChange={(e) =>
                                        this.handleOnChange(e, "password")
                                    }
                                    value={this.state.password}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input
                                    type="text"
                                    onChange={(e) =>
                                        this.handleOnChange(e, "firstName")
                                    }
                                    value={this.state.firstName}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input
                                    type="text"
                                    onChange={(e) =>
                                        this.handleOnChange(e, "lastName")
                                    }
                                    value={this.state.lastName}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label>Address</Label>
                        <Input
                            type="text"
                            onChange={(e) => this.handleOnChange(e, "address")}
                            value={this.state.address}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary px-3"
                        onClick={() => this.handleAddNew()}
                    >
                        Add new
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
