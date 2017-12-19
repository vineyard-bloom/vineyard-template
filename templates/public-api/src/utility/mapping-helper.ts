import {User} from "../model/model-types";
import {ApiUser} from "../endpoints/endpoint-types";

export function mapUserToApiUser(user: User): ApiUser {
    return {email: user.email};
}