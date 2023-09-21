import { useState } from "react";
import FileUploader from "./FileUploader";
import { useNavigate } from "react-router-dom";

import { usePostNewSuperHeroMutation } from "../features/superheroes/superHeroSlice";

const FormHero = () => {
    const defaultData = {
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: [],
    };
    const [formData, setFormData] = useState(defaultData);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // console.log(formData);

    const [postNewSuperHero] = usePostNewSuperHeroMutation();

    const handleInput = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
        setError("");
    };

    const handleSubmit = async () => {
        if (
            !formData.nickname ||
            !formData.origin_description ||
            !formData.catch_phrase ||
            !formData.real_name ||
            !formData.superpowers ||
            formData.images.length === 0
        ) {
            setError("All fields are required!");
            // window.alert("All fields are required!");
            return;
        }
        console.log(formData);
        try {
            await postNewSuperHero(formData).unwrap();
            console.log("Data sent successfully!");

            setFormData(defaultData);

            navigate("/");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <form className="post-page__form form">
                <FileUploader formData={formData} setFormData={setFormData} />
                <div className="form__inputs">
                    <div className="input-block">
                        <label htmlFor="nickname">Nickname:</label>
                        <input
                            type="text"
                            name="nickname"
                            id="nickname"
                            value={formData.nickname}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="real_name">Real Name:</label>
                        <input
                            type="text"
                            name="real_name"
                            id="real_name"
                            value={formData.real_name}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="origin_description">
                            Origin Description:
                        </label>
                        <input
                            type="text"
                            name="origin_description"
                            id="origin_description"
                            value={formData.origin_description}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="superpowers">Superpowers:</label>
                        <input
                            type="text"
                            name="superpowers"
                            id="superpowers"
                            value={formData.superpowers}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="catch_phrase">Catch Phrase:</label>
                        <input
                            type="text"
                            name="catch_phrase"
                            id="catch_phrase"
                            value={formData.catch_phrase}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="button"
                    >
                        Post
                    </button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </>
    );
};

export default FormHero;
