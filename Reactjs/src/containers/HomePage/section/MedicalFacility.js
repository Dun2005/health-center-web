import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./MedicalFacility.scss";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import img from "../../../assets/medical-facility/bvcr-moi.jpg";

class MedicalFacility extends Component {
    render() {
        return (
            <div className="section-share  section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span>Cơ sở y tế</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-medical-facility"
                                />
                                <div>Bệnh viện chợ rẫy</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-medical-facility"
                                />
                                <div>Bệnh viện chợ rẫy</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-medical-facility"
                                />
                                <div>Bệnh viện chợ rẫy</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-medical-facility"
                                />
                                <div>Bệnh viện chợ rẫy</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-medical-facility"
                                />
                                <div>Bệnh viện chợ rẫy</div>
                            </div>
                            <div className="img-customize">
                                <img
                                    src={img}
                                    className="img section-medical-facility"
                                />
                                <div>Bệnh viện chợ rẫy</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
