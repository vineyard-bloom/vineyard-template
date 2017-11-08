import {CreateUserData} from "../../src/logic/user-logic";
import {randomCreateUserData} from "../../fixtures/random-types";
import {externalUrl} from "../setup/external-test-setup";
import * as request from "request-promise";
import {assertEqualByData} from "../helpers/assertion-helper";

describe("running server user functionality", function(){
    it('creates a user', async function(){
        const userToCreate: CreateUserData = randomCreateUserData();
        const requestOptions = {
            method: "POST",
            uri: externalUrl + "/user",
            json: true,
            body: userToCreate
        };

        const response = await request(requestOptions);
        assertEqualByData({email: userToCreate.email}, response);
    });
});