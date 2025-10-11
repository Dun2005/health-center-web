import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import img from "../../../assets/doctor/doctor-avatar.jpg";

class Doctor extends Component {
    render() {
        return (
            <div className="section-share section-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span>Bác sĩ nổi bật</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="img-customize border border-info pt-5">
                                <div className="doctor-img">
                                    <img
                                        src={img}
                                        className="img section-doctor"
                                    />
                                </div>
                                <div className="position text-center pt-4">
                                    <div>Giáo sư, tiến sĩ</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className="img-customize border border-info pt-5">
                                <div className="doctor-img">
                                    <img
                                        src={img}
                                        className="img section-doctor"
                                    />
                                </div>
                                <div className="position text-center pt-4">
                                    <div>Giáo sư, tiến sĩ</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className="img-customize border border-info pt-5">
                                <div className="doctor-img">
                                    <img
                                        src={img}
                                        className="img section-doctor"
                                    />
                                </div>
                                <div className="position text-center pt-4">
                                    <div>Giáo sư, tiến sĩ</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className="img-customize border border-info pt-5">
                                <div className="doctor-img">
                                    <img
                                        src={img}
                                        className="img section-doctor"
                                    />
                                </div>
                                <div className="position text-center pt-4">
                                    <div>Giáo sư, tiến sĩ</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className="img-customize border border-info pt-5">
                                <div className="doctor-img">
                                    <img
                                        src={img}
                                        className="img section-doctor"
                                    />
                                </div>
                                <div className="position text-center pt-4">
                                    <div>Giáo sư, tiến sĩ</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className="img-customize border border-info pt-5">
                                <div className="doctor-img">
                                    <img
                                        src={img}
                                        className="img section-doctor"
                                    />
                                </div>
                                <div className="position text-center pt-4">
                                    <div>Giáo sư, tiến sĩ</div>
                                    <div>Cơ xương khớp</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
