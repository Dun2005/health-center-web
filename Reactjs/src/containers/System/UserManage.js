import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./UserManage.scss";
import { connect } from "react-redux";
import { getUser } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModel: false,
        };
    }

    async componentDidMount() {
        let respone = await getUser("ALL");
        if (respone && respone.errCode === 0) {
            this.setState({
                arrUsers: respone.user,
            });
        }
    }

    handleAddUser = () => {
        this.setState({ isOpenModel: true });
    };

    toggleUserModel = () => {
        this.setState({
            isOpenModel: !this.state.isOpenModel,
        });
    };

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModel}
                    toggleFromParent={this.toggleUserModel}
                />
                <div className="title">Manage users</div>
                <div className="mx-1">
                    <button
                        className="btn btn-primary px-3"
                        onClick={() => this.handleAddUser()}
                    >
                        Add
                    </button>
                </div>
                <div className="user-table mt-3 mx-1">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers &&
                            arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit">
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn-delete">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
