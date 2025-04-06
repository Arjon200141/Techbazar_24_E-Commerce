const Navbar = () => {
    return (
        <div>
            <div className="navbar text-[#0C9DCA] bg-base-100 px-40">
                <div className="flex-1">
                    <a className="btn btn-ghost text-[20px]">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu font-semibold menu-horizontal text-[20px] px-1">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                                
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Expertise</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                                
                            </details>
                        </li>
                        <li><a>Products</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;