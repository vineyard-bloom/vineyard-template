import {GenericVillage, CommonConfig, loadLabConfig, loadAndCheckConfig} from 'vineyard-village'
import {UserDao} from "./model/dao/user-dao";
import {Model} from "./model/model";

export interface LabConfig {

}

export interface Config extends CommonConfig {

}

export class Village extends GenericVillage<Model, Config> {
    labConfig: LabConfig = loadLabConfig<LabConfig>();

    private readonly userDao: UserDao;

    constructor() {
        super();

        this.userDao = new UserDao(this.getModel().User);
    }

    getLabConfig(): LabConfig {
        return this.labConfig;
    }

    getUserDao(): UserDao {
        return this.userDao;
    }
}