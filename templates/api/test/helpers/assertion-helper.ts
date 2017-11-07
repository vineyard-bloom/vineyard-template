import * as assert from "assert";

export function assertEqualByData(ob1: any, ob2: any, ignoreProperties: string[] = []): void {
    if(ob1 == ob2){
        assert.equal(ob1, ob2);
        return;
    }

    let clone1 = Object.assign({}, ob1);
    let clone2 = Object.assign({}, ob2);

    delete clone1.created;
    delete clone2.created;

    delete clone1.modified;
    delete clone2.modified;

    delete clone1.id;
    delete clone2.id;

    ignoreProperties.forEach(prop => {
        delete clone1[prop];
        delete clone2[prop];
    });

    assert.deepEqual(clone1, clone2);
}
