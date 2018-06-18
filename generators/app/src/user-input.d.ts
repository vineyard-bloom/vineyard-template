/// <reference types="yeoman-generator" />
import * as Generator from "yeoman-generator";
import { UserAnswers } from "./types";
export declare function gatherUserInput(generator: Generator): Promise<UserAnswers>;
