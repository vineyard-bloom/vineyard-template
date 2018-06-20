import { createVillage } from "../src/village";

const village = createVillage()
village.model.samplePeople.create({ name: "Amber", favoriteAnimal: "cat" })