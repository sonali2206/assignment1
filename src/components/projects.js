import React, { Component } from "react";

export default class Projects extends Component {
    render() {
        return(
            <div className="mb-5 projects">
                <h5 className="mb-3">PROJECTS</h5>
                <p className="mb-3">
                    <span className="project-name">Timbl</span> —‌ 
                    <a href="https://www.timbl.co.in/" target="_blank">https://www.timbl.co.in/‌</a>
                </p>
                <p className="mb-3">
                    <span className="project-name">My Leads Bucket</span> —‌ 
                    <a href="https://www.myleadsbucket.com/" target="_blank">https://www.myleadsbucket.com/‌</a>
                </p>
                <p className="mb-3">
                    <span className="project-name">Excelloite</span> —‌ 
                    <a href="https://www.excelloite.com/" target="_blank">https://www.excelloite.com/‌</a>
                </p>
                <p>And many more...</p>
            </div>
        )
    }
}