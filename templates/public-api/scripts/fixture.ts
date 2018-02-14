import {DevModeler} from "vineyard-ground/source/modeler";

require('source-map-support').install()
import { createVillage } from "../src/village";

const village = createVillage();
const model = village.model;

const fixtureName = process.argv[2];
const args = process.argv.slice(3);

const fixtures: any = {
    init: async () => {
        await (<DevModeler> model.ground).regenerate()
    },
};


if (!fixtureName) {
    console.error('Missing fixture name.')
}
else if (!fixtures[fixtureName]) {
    console.error('There is no fixture named "' + fixtureName + '"')
}
else {
    console.log('Running fixture', fixtureName + '.');
    fixtures[fixtureName](...args)
}


