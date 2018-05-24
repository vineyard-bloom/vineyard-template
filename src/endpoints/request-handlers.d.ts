import { Logic } from '../logic/index';
import { EndpointInfo } from 'vineyard-lawn/source/types';
import { Request } from 'vineyard-lawn';
import { ApiContract } from './generated/api-contract';
import { EndpointDefinition } from 'vineyard-janus';
export declare function createApiActions(logic: Logic): ApiContract;
export declare function synthesizeApiActions(apiActions: ApiContract, endpointDefinitions: EndpointDefinition[]): EndpointInfo[];
export declare function extractActionByName(apiActions: ApiContract, actionName: string): (req: Request) => Promise<any>;
