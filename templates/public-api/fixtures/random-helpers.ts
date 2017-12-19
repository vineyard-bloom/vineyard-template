const speakeasy = require("speakeasy");
const uuidv4 = require('uuid/v4');

export function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export function getRandomUUID(): string {
    return uuidv4();
}

export function getRandomString(length: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export function getRandomEmail(): string {
    return getRandomString(6).concat("@").concat(getRandomString(4)).concat(".com");
}

export function getRandomBool(): boolean {
    return getRandomIntInclusive(0,1) > 0;
}

export function getRandom2faSecret() : string {
    const secret = speakeasy.generateSecret();
    return speakeasy.base32;
}

export function getRandomEnum(enumClass: any){
    const max = Object.keys(enumClass).length / 2;
    return enumClass[getRandomIntInclusive(0, max-1)];
}