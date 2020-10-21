import React from 'react'
import { FaPhone, FaMailBulk, FaGlobeAfrica } from 'react-icons/fa'

export default function GetInTouch() {
    return (
        <div className="get-in-touch" style={{borderRight: 1 +'px',borderRightColor: 'GrayText', borderRightStyle: 'solid'}} >
            <h3>get in touch</h3>
            <div  className="about-div" style={{width: 5 +'rem'}} />
            <div className="mt-4 d-flex">
                <FaPhone />
                <div className="ml-5">
                    +234 (0)813 537 3695<br />
                    +234 (0)903 656 9521
                </div>
            </div>
            <div className="mt-4 d-flex">
                <FaMailBulk />
                <div className="ml-5">
                    admin@smallchops.com<br />
                    ifeoluwabk4ever@gmail.com
                </div>
            </div>
            <div className="mt-4 d-flex">
                <FaGlobeAfrica />
                <div className="ml-5">
                    www.smallchopsfactory.com
                </div>
            </div>
        </div>
    )
}
