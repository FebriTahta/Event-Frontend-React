import React from "react";

export default function Skeleton({ type }) {

    const CustomLoading = () => (
        <div className="custom" style={{ paddingTop:"50px" }}>
            <div className="balls">
                <div className="ball ball1"></div>
                <div className="ball ball2"></div>
                <div className="ball ball3"></div>
                <div className="ball ball4"></div>
            </div>
            <span className="customText" style={{fontSize:"25px"}}>Loading...</span>
        </div>
    );

    if (type === "custom") return <CustomLoading />;
}

