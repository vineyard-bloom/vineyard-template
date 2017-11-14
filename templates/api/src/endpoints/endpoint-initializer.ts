import {Request} from "vineyard-lawn";
import {ValidateFunction} from "ajv";
import {WebService} from "../web-service";
import {UserRequestHandler} from "../request-handlers/user-request-handler";
import {TwoFactorEndpoints} from "vineyard-users/src/two-factor";
import {Method} from "vineyard-lawn/source/types";

export class EndpointInitializer {
    private readonly webService: WebService;
    private readonly validators: any;
    private readonly twoFactorEndpoints: TwoFactorEndpoints;

    //TODO: More handlers added here...
    private readonly userRequestHandler: UserRequestHandler;

    constructor(webService: WebService){
        this.webService = webService;
        this.validators = webService.compileApiSchema(require('./request-validation.json'));
        this.twoFactorEndpoints = new TwoFactorEndpoints(webService);
        this.userRequestHandler = new UserRequestHandler(
            webService.getUserLogic()
        );
    }

    initalizeEndpoints(): void {
        this.webService.createPublicEndpoints(this.getPublicEndpoints());
        this.webService.createAuthorizedEndpoints(this.getAuthorizedEndpoints());
    }

    getUserRequestHandler(): UserRequestHandler{
        return this.userRequestHandler;
    }

    getValidators(): any {
        return this.validators;
    }

    private getPublicEndpoints(): EndpointLiteral[] {
        return [
            this.twoFactorEndpoints.getNewSecret(),
            this.twoFactorEndpoints.verifyToken(),

            {
                method: Method.post,
                path: "user",
                action: this.userRequestHandler.createUser,
                validator: this.validators.createUser
            },
        ]
    }

    private getAuthorizedEndpoints(): EndpointLiteral[] {
        return [
            {
                method: Method.get,
                path: "user",
                action: this.userRequestHandler.getUser,
                validator: this.validators.empty
            }
        ]
    }
}

export interface EndpointLiteral{
    method: Method;
    path: string;
    action: (request: Request) => Promise<any>
    validator: ValidateFunction
}
