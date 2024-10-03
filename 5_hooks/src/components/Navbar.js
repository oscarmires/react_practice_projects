export default function Navbar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <span className="fs-4">React Hooks Practice</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a
                            href="/"
                            className="nav-link active"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/useReducer" className="nav-link">
                            useReducer
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}
