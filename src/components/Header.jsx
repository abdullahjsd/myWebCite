import React from 'react'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div>
                        <a className="navbar-brand" href="http://localhost:3000">Abdullah SAZAN & Front end Devolopher</a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Hakkımda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000/projects">Projelerim</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000/contact">İletişim</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header