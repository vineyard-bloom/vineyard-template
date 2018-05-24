import { EndpointInfo, Request } from 'vineyard-lawn';
import { EndpointDefinition } from 'vineyard-janus';
import { ApiContract } from './generated/api-contract';
export declare function createEndpointToServeEndpointSchema(path: string, rawSchema: object): EndpointInfo;
export declare function pullEndpointDefinitionsFromSchema(janusEndpointsConfig: {
    sourceDir: string;
    targetDir: string;
}): {
    rawSchema: object;
    endpointDefinitions: EndpointDefinition[];
};
export declare function synthesizeApiActions(apiActions: ApiContract, endpointDefinitions: EndpointDefinition[]): EndpointInfo[];
export declare function extractActionByName(apiActions: ApiContract, actionName: string): (req: Request) => Promise<any>;
