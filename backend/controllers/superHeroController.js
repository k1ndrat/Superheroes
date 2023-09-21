const { response } = require("express");
const SuperHero = require("../models/superHero");

const handleNewSuperHero = async (req, res) => {
    const {
        title,
        description,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
    } = req.body;

    console.log(title);

    const newSuperHero = {
        title,
        description,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
    };

    try {
        // store the new superHero
        const result = await SuperHero.create(newSuperHero);

        res.status(200).json({ message: "Hero uploaded successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hero upload failed" });
    }
};

const handleDeleteByID = async (req, res) => {
    const _id = req.params._id;

    try {
        await SuperHero.findByIdAndRemove(_id);
        res.status(200).json({ message: "Hero deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllHero = async (req, res) => {
    try {
        const superheroes = await SuperHero.find();
        res.status(200).json(superheroes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateHeroByID = async (req, res) => {
    const _id = req.params._id;
    const {
        title,
        description,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
    } = req.body;

    try {
        const filter = { _id };
        const updatedHero = await SuperHero.findOneAndUpdate(
            filter,
            {
                title,
                description,
                nickname,
                real_name,
                origin_description,
                superpowers,
                catch_phrase,
                images,
            },
            { new: true }
        ).exec();

        res.status(200).json({
            success: "The hero was updated successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getHeroByID = async (req, res) => {
    const _id = req.params._id;
    try {
        const hero = await SuperHero.find({ _id });
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    handleNewSuperHero,
    handleDeleteByID,
    getAllHero,
    updateHeroByID,
    getHeroByID,
};
