import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import img from "../../../assets/specialty/co-xuong-khop.png";

class HandBook extends Component {
    render() {
        return (
            <div className="section-share section-hand-book">
                <div className="section-container">
                    <div className="section-header">
                        <span>Chuyên khoa phổ biến</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-specialty"
                                />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-specialty"
                                />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-specialty"
                                />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-specialty"
                                />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-specialty"
                                />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-specialty"
                                />
                                <div>Cơ xương khớp</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
