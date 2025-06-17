import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleLogin = () => {
        alert("login");
    };

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username</label>
                            <input
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={this.state.username}
                                onChange={(event) => this.handleInput(event)}
                            ></input>
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => this.handleInput(event)}
                            ></input>
                        </div>
                        <div className="col-12">
                            <button
                                onClick={() => this.handleLogin()}
                                className="login-btn"
                            >
                                Login
                            </button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">
                                Forgot password ?
                            </span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="">Or login with:</span>
                        </div>
                        <div className="col-12 social-login">
                            <i class="fab fa-google google"></i>
                            <i class="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) =>
            dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
