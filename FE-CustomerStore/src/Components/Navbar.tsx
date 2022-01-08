import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps
{
    links: NavBarLink[];
}

export interface NavBarLink
{
    url: string;
    display:string;
}

function Navbar(props: NavbarProps) {

    let links = props.links.map((l, index) => 
        <Link to={l.url} key={index}>
            <span className="btn btn-ghost btn-sm rounded-btn">
                {l.display}
            </span>
        </Link>
    );

    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch">
                    {links}
                </div>
            </div>
        </div>
    );
}

export default Navbar;