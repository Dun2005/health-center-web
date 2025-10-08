import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./Specialty.scss";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import specialtyImg from "../../../assets/specialty/co-xuong-khop.png";

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style }} onClick={onClick}>
            <i className="fas fa-less-than"></i>
        </button>
    );
}
function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className={className} style={{ ...style }} onClick={onClick}>
            <i className="fas fa-greater-than"></i>
        </button>
    );
}

class Specialty extends Component {
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <CustomNextArrow />,
            prevArrow: <CustomPrevArrow />,
        };
        return (
            <div className="section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span>Chuyên khoa phổ biến</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="img-customize">
                                <img src={specialtyImg} className="img" />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img src={specialtyImg} className="img" />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img src={specialtyImg} className="img" />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img src={specialtyImg} className="img" />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img src={specialtyImg} className="img" />
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className="img-customize">
                                <img src={specialtyImg} className="img" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
