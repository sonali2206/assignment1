import React,{ Component } from "react"
import Objective from "./objective"
import JobProfile from "./jobprofile"
import Projects from "./projects"
import AcademicQualification from "./academic-qualification"
import Experience from "./experience"
import PersonalDetails from "./personal-details"
import Skills from "./skills"
import Languages from "./languages"

export default class MyComp extends Component {
    render(){
        return (
            <div className="container pt-5 main">
                <div className="row section-main">
                    <div className="col-sm-8">
                        <h1 className="font-weight-bold">Sonali Gupta</h1>
                        <p className="title-desc">A competent professional with 5+ years of experience in <span className="font-weight-bold">Web Designing.</span></p>
                    </div>
                    <div className="col-sm-3 offset-md-1 contact-info">
                        <p>1/5193, Street No-7, Balbir Nagar, <br />Shahdara, Delhi-110032</p>
                        <p className="font-weight-bold">+91-8700228072<br />+91-9953029820 <br />sonali.dikshagupta@gmail.com</p>
                    </div>
                </div>
                <div className="row section-main pt-0 pb-0">
                    <div className="col-sm-8">
                        <Objective/>
                        <JobProfile/>
                        <Projects/>
                        <AcademicQualification/>
                        <Experience/>
                        <PersonalDetails/>
                    </div>
                    <div className="col-sm-3 offset-md-1">
                        <Skills/>
                        <Languages/>
                    </div>
                </div>
            </div>
        )
    }
}