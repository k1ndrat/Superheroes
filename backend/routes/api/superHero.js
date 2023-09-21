const express = require("express");
const router = express.Router();
const {
    handleNewSuperHero,
    getAllHero,
    updateHeroByID,
    getHeroByID,
    handleDeleteByID,
} = require("../../controllers/superHeroController");

router
    .get("/", getAllHero)
    .get("/:_id", getHeroByID)
    .post("/", handleNewSuperHero)
    .put("/:_id", updateHeroByID)
    .delete("/:_id", handleDeleteByID);

module.exports = router;
