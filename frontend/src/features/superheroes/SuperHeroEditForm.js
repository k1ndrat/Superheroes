import { useEffect, useState } from "react";
import FileUploader from "../../components/FileUploader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
    useUpdateSuperHeroMutation,
    useGetSuperHeroMutation,
} from "./superHeroSlice";

const SuperHeroEditForm = () => {
    const [formData, setFormData] = useState({
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: [],
    });

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { _id } = useParams();

    const [putSuperHero] = useUpdateSuperHeroMutation();
    const [getSuperHero, { isLoading }] = useGetSuperHeroMutation();

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const result = await getSuperHero({ _id }).unwrap();
                setFormData(result[0]);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchHero();
    }, [getSuperHero, _id]);

    const handleInput = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
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
            return;
        }

        console.log(formData);

        try {
            await putSuperHero(formData).unwrap();

            console.log("Data updated successfully");

            navigate(`/post/${_id}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    if (isLoading) {
        return <p>Loading...</p>;
    }
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
                        Save
                    </button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </>
    );
};

export default SuperHeroEditForm;
