import {User, WithoutId} from "../src/model/model-types";
import {CreateUserData} from "../src/logic/user-logic";
import {getRandomEmail, getRandomString} from "./random-helpers";

export function randomCreateUserData(): CreateUserData {
    return {
        email: getRandomEmail(),
        password: getRandomString(12)
    }
}