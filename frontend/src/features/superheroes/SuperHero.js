import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import {
    useGetSuperHeroMutation,
    useDeleteSuperHeroMutation,
} from "./superHeroSlice";

const SuperHero = () => {
    const [formData, setFormData] = useState({
        nickname: "",
        real_name: "",
        origin_description: "",
        superpowers: "",
        catch_phrase: "",
        images: [],
    });

    const navigate = useNavigate();

    const { _id } = useParams();

    const [getSuperHero, { isLoading }] = useGetSuperHeroMutation();
    const [deleteSuperHero] = useDeleteSuperHeroMutation();

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

    const handleDelete = async () => {
        try {
            await deleteSuperHero({ _id }).unwrap();
        } catch (error) {
            console.log(error);
        }
        navigate("/");
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="hero-page__content">
            <div className="hero-page__images">
                {formData?.images &&
                    formData.images.map((image, index) => (
                        <div className="hero-page__img">
                            <img src={image} alt="hero" key={index} />
                        </div>
                    ))}
            </div>
            <div className="hero-page__info">
                <div className="info-block">
                    <p>Nickname: {formData.nickname}</p>
                </div>
                <div className="info-block">
                    <p>Real Name: {formData.real_name}</p>
                </div>
                <div className="info-block">
                    <p>Origin Description: {formData.origin_description}</p>
                </div>
                <div className="info-block">
                    <p>Superpowers: {formData.superpowers}</p>
                </div>
                <div className="info-block">
                    <p>Catch Phrase: {formData.catch_phrase}</p>
                </div>
                <div className="hero-page__actives">
                    <Link to={`/edit/${_id}`}>
                        <button className="button">Edit</button>
                    </Link>

                    <button
                        className="button button-delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuperHero;
