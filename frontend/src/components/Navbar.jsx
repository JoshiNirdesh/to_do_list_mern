import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("to-do"));
        console.log("username" + userData && userData.user.username);
        setUsername(userData && userData.user.username)
    }, [])
    const logoutHandler = ()=>{
        localStorage.removeItem('to-do')
        navigate('/login')
    }
    return (
        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <h4 className="navbar-brand">
                                    <i className="fa-solid fa-user-tie" /> &nbsp;
                                    <i>Welcome</i> {username}!
                                </h4>
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            aria-current="page"
                                            to="/home"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/todoList">
                                            My todo List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link "
                                            title="logout"
                                            onClick={logoutHandler}
                                        >
                                            <i className="fa-solid fa-power-off text-danger fa-2x" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
