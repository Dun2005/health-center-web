import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./UserManage.scss";
import { connect } from "react-redux";
import { getUser, createNewUserService } from "../../services/userService";
import ModalUser from "./ModalUser";
import { create } from "lodash";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModel: false,
        };
    }

    async componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        let respone = await getUser("ALL");
        if (respone && respone.errCode === 0) {
            this.setState({
                arrUsers: respone.user,
            });
        }
    };

    handleAddUser = () => {
        this.setState({ isOpenModel: true });
    };

    toggleUserModel = () => {
        this.setState({
            isOpenModel: !this.state.isOpenModel,
        });
    };

    handleCreateNewUser = async (data) => {
        try {
            let respone = await createNewUserService(data);
            console.log(respone);
            if (respone && respone.errCode !== 0) {
                alert(respone.errMessage);
                return false;
            } else {
                await this.fetchData();
                this.setState({
                    isOpenModel: false,
                });
                return true;
            }
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModel}
                    toggleFromParent={this.toggleUserModel}
                    createNewUser={this.handleCreateNewUser}
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
                        <tbody>
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
                        </tbody>
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
