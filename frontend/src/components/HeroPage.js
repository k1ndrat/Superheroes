import SuperHero from "../features/superheroes/SuperHero";

const HeroPage = () => {
    return (
        <section className="hero-page">
            <div className="hero-page__container">
                <h2 className="hero-page__title">Superhero Info</h2>
                <SuperHero />
            </div>
        </section>
    );
};

export default HeroPage;
