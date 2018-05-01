import { Request } from "vineyard-lawn";

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/************************ -- Create Pizza -- *****************************/
	
export interface CreatePizzaRequest extends Request {
	data: {
	  type: number;
	  size: number;
	}
}


export interface CreatePizzaResponse {
  id: string;
  type: string;
  size: number;
  price: number;
}


/************************ -- Get Pizza -- *****************************/
	
export interface GetPizzaRequest extends Request {
	data: {
	  pizzaId: string;
	}
}


export interface GetPizzaResponse {
  id: string;
  type: string;
  size: number;
  price: number;
}