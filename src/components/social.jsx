import React from 'react'

function Social() {
    return (
        <div>                                <div className="card-body text-center">
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


        </div></div>
    )
}

export default Social