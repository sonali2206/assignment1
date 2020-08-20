import React, { Component } from "react";

export default class AcademicQualification extends Component {
    render() {
        return(
            <div className="mb-5 academic">
                <h5 className="mb-3">ACADEMIC QUALIFICATION</h5>
                <p className="mb-3">
                    <span className="academic-title">IGNOU,</span> Delhi‌ ‌—‌ ‌‌<span className="academic-name">MCA</span>
                </p>
                <p className="mb-3">
                    <span className="academic-title">D.U.(sol),</span> Delhi‌ ‌—‌ ‌‌<span className="academic-name">B.COM</span>
                </p>
                <p className="mb-3">
                    <span className="academic-title">M.B.P.B.M.S.K.V.,</span> Shahdara ‌—‌ ‌‌<span className="academic-name">Intermediate (CBSE Board)</span>
                </p>
                <p>
                    <span className="academic-title">M.B.P.B.M.S.K.V.,</span> Shahdara ‌—‌ ‌‌<span className="academic-name">High School (CBSE Board)</span>
                </p>
            </div>
        )
    }
}