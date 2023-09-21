import SuperHeroEditForm from "../features/superheroes/SuperHeroEditForm";

const EditPage = () => {
    return (
        <section className="edit-page">
            <div className="edit-page__container">
                <h2 className="edit-page__title">Edit Superhero</h2>
                <SuperHeroEditForm />
            </div>
        </section>
    );
};

export default EditPage;
