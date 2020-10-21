import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default function AboutStatement() {
    return (
        <div className="aboutStatement" style={{borderRight: 1 +'px',borderRightColor: 'GrayText', borderRightStyle: 'solid'}} >
            <h2>company overview</h2>
            <div className="about-div" />
            <p className="ml-5 mt-4">Small Chops Factory is an indigenous snacks industry established in 2010 and managed by a team of dedicated professionals led by Ifeoluwa Adaralegbe (Founder/CEO). Over the years, the company has grown to become a high caliber Organization power-house serving both local and international clients. Our passion for satisfaction and our expertise in harnessing the plethora of ways by which we work on our user experience has enabled us to deliver incredible customer experiences.
            <br />
            <br />
            Order your snacks with us today... A trial will convince you!</p>
            <Link to="/menu">
                <ButtonContainer>get started</ButtonContainer>
            </Link>
        </div>
    )
}
