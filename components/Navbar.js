import React from 'react';
import Link from "next/link";
function Navbar(props) {
    return (
        <div className="main-navbar py-2">
            <ul className="d-flex justify-content-center">
                <li className="">
                    <Link href="/" className="text-decoration-none text-white">
                        Home
                    </Link>
                </li>
                <li className="ms-5">
                    <Link href="/blog" className="text-decoration-none text-white">
                        Blog
                    </Link>
                </li>
                <li className="ms-5">
                    <Link href="/client" className="text-decoration-none text-white">
                        Client
                    </Link>
                </li>
                <li className="ms-5">
                    <Link href="/server" className="text-decoration-none text-white">
                        Server
                    </Link>
                </li>
                <li className="ms-5">
                    <Link href="/product" className="text-decoration-none text-white">
                        Product
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;