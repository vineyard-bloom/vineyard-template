import {Model} from "../../src/backing-services/model/model";
import {WebService} from "../../src/web-service";
import {MockResources, TestVillage} from "./test-village";
import {EndpointInitializer} from "../../src/endpoints/endpoint-initializer";
import {DevModeler} from "vineyard-ground/source/modeler";

const defaultTestVillage: TestVillage  = new TestVillage({});
const model: Model  = defaultTestVillage.getModel();
const defaultTestWebService: WebService = new WebService(defaultTestVillage);

beforeEach(async function(){
    await resetDb();
});

export async function resetDb(){
    await (<DevModeler> model.ground).regenerate();
}


export function getCustomizedMockResourceServerInitialization(overrideOptions: Partial<MockResources>): ServerInitializationFlow {
    const village: TestVillage = new TestVillage(overrideOptions);
    const webService: WebService = new WebService(village);
    const model: Model = village.getModel();
    const endpointInitializer = webService.getEndpointInitializer();
    return {village: village, webService: webService, model: model, endpointInitializer: endpointInitializer}
}

export interface ServerInitializationFlow {
    village: TestVillage
    webService: WebService
    model: Model
    endpointInitializer: EndpointInitializer
}
