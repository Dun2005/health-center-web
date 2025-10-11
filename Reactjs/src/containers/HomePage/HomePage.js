import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./section/Specialty";
import MedicalFacility from "./section/MedicalFacility";
import Doctor from "./section/Doctor";
import HandBook from "./section/HandBook";
import "./HomePage.scss";

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

class HomePage extends Component {
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
            <div>
                <HomeHeader />
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <Doctor settings={settings} />
                <HandBook settings={settings} />
                <div style={{ height: "300px" }}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
