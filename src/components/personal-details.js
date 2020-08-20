import React, { Component } from "react";

export default class PersonalDetails extends Component {
    render() {
        return(
            <div className="mb-5 academic">
                <h5 className="mb-3">PERSONAL DETAILS</h5>
                <p className="mb-3">
                    <span className="academic-title">Father’s Name</span> —‌ ‌‌<span className="academic-name">Shri Kailash Chand Gupta</span>
                </p>
                <p className="mb-3">
                    <span className="academic-title">Date of Birth</span> ‌—‌ ‌‌<span className="academic-name">22 June, 1993</span>
                </p>
                <p className="mb-3">
                    <span className="academic-title">Marital Status</span> ‌—‌ ‌‌<span className="academic-name">Single</span>
                </p>
                <p className="mb-3">
                    <span className="academic-title">Nationality</span> ‌—‌ ‌‌<span className="academic-name">Indian</span>
                </p>
                <p>
                    <span className="academic-title">Hobbies &amp; Interests</span> ‌—‌ ‌‌<span className="academic-name">Listening Music, Learning New Things</span>
                </p>
            </div>
        )
    }
}