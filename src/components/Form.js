import React from 'react'
import { FaUser, FaEnvelope, FaPhoneAlt, FaFileAlt, FaShare } from 'react-icons/fa'

export default function Form() {
    return (
        <div>
            <form className="mx-auto container col-8 border py-4 form-block">
                <div className="form-group">
                    <FaUser /><label htmlFor="name"><span className="ml-2">Name:<span className="text-danger">*</span></span></label>
                    <input type="text" name="name" id="name" placeholder="Your name" className="form-control" />
                </div> 
                <div className="form-group">
                    <FaEnvelope /><label htmlFor="email"> <span className="ml-2">Email:<span className="text-danger">*</span></span></label>
                    <input name="email" type="email" id="email" placeholder="Your mail" className="form-control" />
                </div>
                <div className="form-group">
                    <FaPhoneAlt /><label htmlFor="number"> <span className="ml-2">Telephone Number:<span className="text-danger">*</span></span></label>
                    <input name="number" type="number" id="number" placeholder="Your mobile number" className="form-control" />
                </div>
                <div className="form-group">
                    <FaFileAlt /><label htmlFor="message"> <span className="ml-2">Message:<span className="text-danger">*</span></span></label>
                    <textarea name="message" id="message" cols="30" rows="10" className="form-control" style={{resize: "none"}} placeholder="Your message here"></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" value="submit" className="btn btn-info"><FaShare /><span className="ml-2">Submit</span></button>
                </div>
            </form>
        </div>
    )
}
