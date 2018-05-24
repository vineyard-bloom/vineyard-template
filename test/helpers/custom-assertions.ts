import * as assert from 'assert'

// Deep equals which by default ignores database fields
export function assertEqualByData (ob1: any, ob2: any, ignoreAdditionalProperties: string[] = []): void {
  if (typeof ob1 !== 'object' || typeof ob2 !== 'object') {
    assert.equal(ob1, ob2)
    return
  }

  let clone1 = Object.assign({}, ob1)
  let clone2 = Object.assign({}, ob2)

  delete clone1.created
  delete clone2.created

  delete clone1.modified
  delete clone2.modified

  delete clone1.id
  delete clone2.id

  ignoreAdditionalProperties.forEach(prop => {
    delete clone1[prop]
    delete clone2[prop]
  })

  assert.deepEqual(clone1, clone2)
}

// await assertThrowsErrorMessage( () => expectedErroringFunction(input1...), "400 not found" )
export async function assertThrowsErrorMessage(codeToRun: () => any, message: string) : Promise<void> {
  try {
    await codeToRun();
    assert(false);
  } catch (e) {
    console.error(e)
    assert.equal(e.message, message);
  }
}