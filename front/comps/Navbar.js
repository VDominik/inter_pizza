import Link from "next/link";

const Navbar = () => {
    return(
        <div className="navbar-wrapper">
            <div className="navbar">
                <Link href="/">
                    <div className="logo">
                        <img src="/pizzalogo.png" width="30" height="30" alt="pec"></img>
                        <p>InteractivePizza</p>
                    </div>
                </Link>
                <div className="navigation">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="#interactive"><a>Interactive</a></Link>
                    <Link href="#menu"><a>Menu</a></Link>
                </div>
                <Link href="/kosik">
                    <div className="kosik">
                        <img src="/oven.png" width="30" height="30" alt="pec"></img>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Navbar;