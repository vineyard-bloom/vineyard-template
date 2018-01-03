Vineyard Server Private Api Template Comments

- */src/api/handlers*: 
    - Any particular advantage of having functions rather than classes at this layer?
    - Is it your intention not to statically type the request and responses (and if so, why)?
    - Validation layer is (in salt) handled in the handlers. Would you pass in a validation object to each handler?
- */src/api/validation.json*:
    - So this file has been causing some problems in terms of its overall size (in account-service) making it hard to track particular validators down. There is I think a good case to be made for at a minimum chunking this into semantically grouped files, e.g. a user-validation.json, a pizza-validation.json and so on. In the class based handler setup, I was wondering whether these validators should be attached to those classes.
    - I wonder again at the utility of using json as opposed to typescript/javascript for these files.

- */src/model/entities/pizza*:
    - I’m a bit confused by the type system here. First off, won’t every db record type we define with typeOrm have id, created, modified? Can we type this like this:

            export class/interface OrmRecord {
                @PrimaryGeneratedColumn('uuid')
                id: Id
    
                @CreateDateColumn()
                created: Date
    
                @UpdateDateColumn()
                modified: Date
            }
    
            @Entity({name: ‘pizzas’})
            export class/interface Pizza extends/implements OrmRecord {
                @Column('string')
                name: string
    
                @Column()
                size: number
    
                static createFromNewPizza(input: TypeDiff<Pizza, OrmRecord>) {
                  let result = new Pizza()
                  result.name = input.name
                  result.size = input.size
                  return result
                }
            }

- */src/model/model-types*:
    At a minimum I’m not a fan of the NewPizza, Pizza, Id trio. It makes the NewPizza-Pizza relationship a convention people just have to know and maintain. If the above types don’t work for typeOrm reasons, then I’d still prefer…

            export interface DbRecord {
                id: Id
                created: Date
                modified: Date
            }
    
            export interface Pizza extends DbRecord {
                name: string
                size: number
            }

	… and your NewPizza type would just be `RawData<Pizza>`, where... 
		
		    RawData<T extends DbRecord> = TypeDiff<T, DbRecord>

- */test/tests/pizza-test*:
    - I’m not opposed to end-to-end http level testing, but I’d maintain having an infrastructure in place for direct logic level testing is important. Mainly, if logic isn’t supposed to care how it’s being called, than an http test of logic functionality is adding a limiting constraint — you’re only testing the ways which the web can call logic, which may be a subset of the total ways it can be called.
    - Don’t we need a beforeEach block with a database wipe?
- */src/village and /test*:  My biggest concern with the setup concerns backing services. With respect to testing, we need a way of mocking backing services, and unless I am missing something big this is a genuine *need*, both from the standpoint of not spamming external apis and so that we can test how our system responds to an external api reacting in any one of a multitude of ways, including errors, unexpected responses, etc. I am of the opinion that tests should always be using the applications actual setup to get the objects built for testing (as you do in pizza-test), so we need a way to inject mocks into the startup flow. The template has no backing services, so its unclear to me exactly how it was intended to incorporate them. I believe  in village these guys…

		function createLogic(connection: Connection): Logic
		async function createVillage(): Promise<Village>

	… would, in the presence of backing services, have to change to …

		function createLogic(connection: Connection,  backingServiceObjects: BackingServiceObjects): Logic
		async function createVillage(backingServiceObjects: BackingServiceObjects): Promise<Village>

	…Then in api.ts we have…
	
        async function main() {
          const village = await createVillage(realBackingServices())
          startApiServer(village)
        }

	…but in a test we could…
            `const village = await createVillage(testBackingServices({service1: new MockService1()}))`

