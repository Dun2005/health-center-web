import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./UserManage.scss";
import { connect } from "react-redux";
import { getUser } from "../../services/userService";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
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

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <div className="title">Manage users</div>
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
                                                <i class="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className="btn-delete">
                                                <i class="fas fa-trash"></i>
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
