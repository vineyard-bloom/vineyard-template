type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

//TODO: Remove these examples

interface SomeType {
    a: number
    b: number
}

type ASmallerType = Omit<SomeType, "b"> //= {a: number}

const thing1: SomeType = {a: 2, b: 3}; //typechecks
const thing2: Omit<SomeType, "b"> = { a:2 }; //typechecks
//const thing3: SomeType = { a:2 }; //Exception
//const thing4: Omit<SomeType, "b"> = { a:2, b:3 }; //Exception