import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hooks
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink className='dropdown-item' to='/useState'>useState</NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/useEffect'>useEffect</NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/useMemo'>useMemo</NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/memo'>Memo (HOC)</NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/useCallback'>UseCallback</NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/useContext'>UseContext</NavLink>
                                </li>
                                <li>
                                    <NavLink className='dropdown-item' to='/useRef'>useRef</NavLink>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header