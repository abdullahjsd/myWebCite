import React from 'react'
import Myimg from '../img/img.jpg'
import './styles/whoIm.css'

function whoIm() {
    return (
        <div>
            <div className="container-flute d-flex" style={{ height: "500px" }}>
                <div className="container d-flex justify-content-center">
                    <div className="row text-dark">
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={Myimg} className="card-img-top " alt="..." />
                                <div className="card-body text-center myCard ">
                                    <h4 className="card-title">Abdullah <br /> SAZAN</h4>
                                    <span className="card-text">React Devolopher</span>
                                </div>

                                <div className="card-body text-center">
                                    <ul className='d-flex justify-content-around'>
                                        <li>
                                            <a href="https://www.facebook.com/" className="card-link"> <i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://x.com" className="card-link"><i class="fa-brands fa-x-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com" className="card-link"><i class="fa-brands fa-linkedin-in"></i> </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" className="card-link"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className="col">

                            <div className="card p-3" style={{ width: "18rem" }}>

                                <div className="card-body text-center myCard text-dark">
                                    <h1 className="card-title">Merhaba</h1>
                                    <h5 className="card-text">Ben Kimim !!! </h5>
                                </div>
                                <div className="btn-group gap-3">
                                    <button type="button" class="btn btn-primary">Primary</button>
                                    <button type="button" class="btn btn-primary">Primary</button>
                                </div>

                                <div className="card-body text-start">
                                    <p>
                                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

                                    </p>
                                    <p>
                                        I’m a great place for you to tell a story and let your users know a little more about you.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div classNameName="col-5 primary-color">grey</div>
                <div classNameName="col">white</div>
            </div>

        </div>
    )
}

export default whoIm