import {Village} from "../../src/village";

export class TestVillage extends Village {
    private readonly overrideOptions: Partial<MockResources>;

    constructor(overrideOptions: Partial<MockResources>){
        super();
        this.overrideOptions = overrideOptions
    }

    //TODO: Remove these comments
    //As we acquire external resources, the clients interacting with them should
    // extend from generic client interfaces. These can then be mocked out here with test clients.

    // getSomeExternalResource(): GenericSomeExternalResource {
    //     if (this.overrideOptions.testExternalResource) {
    //         return this.overrideOptions.testSomeExternalResource;
    //     } else {
    //         return super.getSomeExternalResource();
    //     }
    // }
}

export interface MockResources {
    //testSomeExternalResource: GenericExternalResource;
}