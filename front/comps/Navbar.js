import Link from "next/link";

const Navbar = () => {
    return(
        <div className="navbar">
            <Link href="/">
                <div className="logo">
                    <p>InteractivePizza</p>
                </div>
            </Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="#interactive"><a>Interactive</a></Link>
            <Link href="#menu"><a>Menu</a></Link>
        </div>
    );
}
export default Navbar;