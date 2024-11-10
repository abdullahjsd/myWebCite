import React from 'react'
import Social from './social'
import './style/foother.css'

function foother() {
    return (
        <div className='container mt-5'>
            <div className="row d-flex align-items-center">
                <div className="col">
                    <span>© Abdullah Sazan Tarafından Yapılmıştır /\</span>

                </div>
                <div className="col">
                    <div className="col">
                        <div className="row text-center" style={{ display: "flex", alignItems: "center" }}>
                            <div className="col "><h5>Ara</h5><span>+90-551-187-7772</span></div>
                            <div className="col "><h5>Gmail</h5><span>abdullahszn45@gmail.com</span></div>
                            <div className="col"><h5>Takip Et</h5> <Social className="social" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default foother