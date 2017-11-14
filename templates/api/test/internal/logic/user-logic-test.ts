import {defaultServerInitiatilization} from "../../setup/internal-test-setup";
import {CreateUserData} from "../../../src/logic/user-logic";
import {randomCreateUserData} from "../../../fixtures/random-types";
import {User} from "../../../src/model/model-types";
import {assertEqualByData} from "../../helpers/custom-assertions";
import * as assert from "assert";

const {village, model, webService, endpointInitializer} = defaultServerInitiatilization;

describe("user logic", function(){
    it('creates a user', async function(){
        const underTest = webService.getUserLogic();

        const createUserData: CreateUserData = randomCreateUserData();
        const createdUser: User = await underTest.createUser(createUserData);

        assertEqualByData(createUserData, createdUser, ["twoFactorSecret", "twoFactorEnabled"]);
        assert(!createdUser.twoFactorEnabled);

        const retrievedUser: User | undefined = await model.User.get(createdUser.id);
        assert(retrievedUser);
        assertEqualByData(createdUser, retrievedUser);
    });

    it('retrieves a user', async function(){
        const underTest = webService.getUserLogic();

        const createUserData: CreateUserData = randomCreateUserData();
        const createdUser: User = await underTest.createUser(createUserData);

        const retrievedUser: User = await underTest.getUser(createdUser.id);
        assertEqualByData(createdUser, retrievedUser);
    });
});