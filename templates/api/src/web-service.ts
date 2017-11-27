import {Version} from 'vineyard-lawn'
import {GenericWebService} from 'vineyard-village'
import {Config, Village} from './village'
import {Model} from "./model/model";
import {UserLogic} from "./logic/user-logic";
import {EndpointInitializer} from "./endpoints/endpoint-initializer";

const versions = [new Version(1, 0)]

export class WebService extends GenericWebService<Model, Config> {
    private readonly userLogic: UserLogic;
    private readonly endpointInitializer: EndpointInitializer;

    constructor(village: Village) {
        super(village, versions)
        this.userLogic = new UserLogic(village.getUserDao());

        this.endpointInitializer = new EndpointInitializer(this);
        this.endpointInitializer.initalizeEndpoints();
    }

    getUserLogic(): UserLogic {
        return this.userLogic;
    }

    getEndpointInitializer(): EndpointInitializer {
        return this.endpointInitializer;
    }
}
