export declare function getRandomIntInclusive(min: number, max: number): number;
export declare function getRandomFloatInclusive(min: number, max: number): number;
export declare function getRandomUUID(): string;
export declare function getRandomString(length: number): string;
export declare function getRandomEmail(): string;
export declare function getRandomBool(): boolean;
export declare function getRandomEnumKey(enumClass: any): string;
export declare function getRandomEnumValue(enumClass: any): any;
export declare function arrayOfRandom<T>(total: number, generator: (index?: number, prev?: T) => T): T[];
