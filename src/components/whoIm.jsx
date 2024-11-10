import React from 'react'
import Myimg from '../img/img.jpg'
import './style/whoIm.css'
import Social from './social'

function whoIm() {
    return (
        <div>
            <div className="container-flute d-flex">
                <div className="container d-flex justify-content-center">
                    <div className="row text-dark mt-md-4">
                        <div className="col ">
                            <div className="card h-100" style={{ width: "23rem" }}>
                                <img src={Myimg} className="card-img-top " alt="..." />
                                <div className="card-body text-center myCard ">
                                    <h4 className="card-title">Abdullah <br /> SAZAN</h4>
                                    <span className="card-text">React Devolopher</span>
                                </div>
                                <Social />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-3 h-100" style={{ width: "23rem" }}>
                                <div className="card-body text-center myCard text-dark">
                                    <h1 className="card-title">Merhaba</h1>
                                    <h5 className="card-text">Ben Kimim !!! </h5>
                                </div>
                                <div className="btn-group gap-3">
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-primary">Primary</button>
                                </div>

                                <div className="card-body text-start">
                                    <p>
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or

                                    </p>
                                    <p>
                                        I’m a great place for you to tell a story and let your users know a little more about you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default whoIm