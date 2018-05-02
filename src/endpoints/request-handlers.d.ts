import { ApiActions } from '../../endpoint-definitions-generated/api-contract';
import { Logic } from '../logic/index';
import { EndpointDefinition } from 'vineyard-janus/generators/parsing/endpoint-schema-parsing';
import { EndpointInfo } from 'vineyard-lawn/source/types';
import { Request } from 'vineyard-lawn';
export declare function createApiActions(logic: Logic): ApiActions;
export declare function synthesizeApiActions(apiActions: ApiActions, endpointDefinitions: EndpointDefinition[]): EndpointInfo[];
export declare function extractActionByName(apiActions: ApiActions, actionName: string): (req: Request) => Promise<any>;
