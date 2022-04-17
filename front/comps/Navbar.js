import Link from "next/link";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <p>Logo</p>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="#menu"><a>Menu</a></Link>
            <Link href="#interactive"><a>Interactive</a></Link>
        </div>
    );
}
export default Navbar;