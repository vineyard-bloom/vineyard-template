import { createVillage } from "../src/village";

async function populateSample(): Promise<void> {
  const village = createVillage()
  await village.model.samplePeople.create({ name: "Amber", favoriteAnimal: "cat" })
  process.exit(0)
}

console.log('populating DB with sample data')
populateSample()