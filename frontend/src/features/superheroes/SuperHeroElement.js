import { Link } from "react-router-dom";

const SuperHeroElement = ({ hero }) => {
    return (
        <article className="main__hero hero">
            <Link to={`/post/${hero._id}`} className="hero__link">
                <img
                    src={hero.images[0]}
                    alt="hero"
                    className="hero__img"
                    // lazy={true}
                />
                <p className="hero__name">{hero.nickname}</p>
            </Link>
        </article>
    );
};

export default SuperHeroElement;
