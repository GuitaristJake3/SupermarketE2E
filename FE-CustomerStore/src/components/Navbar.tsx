import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch">
                    <Link to="/">
                        <span className="btn btn-ghost btn-sm rounded-btn">
                            View Catalog
                        </span>
                    </Link>
                    <Link to="/admin">
                        <span className="btn btn-ghost btn-sm rounded-btn">
                            Admin
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;