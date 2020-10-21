import React from 'react'

export default function ContactDetail() {
    return (
        <div className="p-2">
            <div className="form-group">
                <h4 className="text-info text-capitalize">head office:</h4>
                <p className="ml-5 text-capitalize">small chops plaza, gwarinpa, Abuja, Nigeria.</p>
            </div>
            <div className="form-group">
                <h4 className="text-info text-capitalize">branch office:</h4>
                <p className="ml-5 text-capitalize">small chops plaza, fajuyi-park, ekiti, Nigeria.</p>
            </div>
            <div className="form-group">
                <h4 className="text-info text-capitalize">phone (abuja):</h4>
                <p className="ml-5">+234 (0)813 537 3695.</p>
            </div>
            <div className="form-group">
                <h4 className="text-info text-capitalize">phone (ekiti):</h4>
                <p className="ml-5">+234 (0)903 656 9521.</p>
            </div>
            <div className="form-group">
                <h4 className="text-info text-capitalize">email:</h4>
                <p className="ml-5">admin@smallchops.com</p>
            </div>
        </div>
    )
}
