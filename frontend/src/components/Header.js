import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to={"/"} className="header__logo">
                    <h1>Home</h1>
                </Link>

                <Link to={"/post"} className="header__link">
                    Post
                </Link>
            </div>
        </header>
    );
};

export default Header;
