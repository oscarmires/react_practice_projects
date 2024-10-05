export default function Navbar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <span className="fs-4">React Practice Project</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a
                            href="#useReducer"
                            className="nav-link"
                            aria-current="page"
                        >
                            useReducer
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#useContext" className="nav-link">
                            useContext
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}
