import React from 'react'
import Social from './social'


function Foother() {
    return (
        <div className='container-flute'>
            <div className="row d-flex">
                <div className="col">
                    <span>© Abdullah Sazan Tarafından Yapılmıştır /\</span>

                </div>
                <div className="col">
                    <div className="col">
                        <div className="row">
                            <div className="col"><h5>Ara</h5><span>+90-551-187-7772</span></div>
                            <div className="col"><h5>Gmail</h5><span>abdullahszn45@gmail.com</span></div>
                            <div className="col"><h5>Takip Et</h5> <Social /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foother