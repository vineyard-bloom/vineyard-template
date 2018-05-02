import { Logic } from '../logic/index';
import { EndpointInfo } from 'vineyard-lawn/source/types';
import { Request } from 'vineyard-lawn';
import { ApiActions } from './generated/api-contract';
import { EndpointDefinition } from 'vineyard-janus';
export declare function createApiActions(logic: Logic): ApiActions;
export declare function synthesizeApiActions(apiActions: ApiActions, endpointDefinitions: EndpointDefinition[]): EndpointInfo[];
export declare function extractActionByName(apiActions: ApiActions, actionName: string): (req: Request) => Promise<any>;
