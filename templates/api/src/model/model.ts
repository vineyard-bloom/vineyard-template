import {User} from "./model-types";
import {Collection} from "vineyard-ground/source/collection";
import {ModelInterface} from "vineyard-village"

export interface Model extends ModelInterface {
    User: Collection<User>
}