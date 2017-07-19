require('source-map-support').install()
import {Village} from "../src/village"
import {WebService} from "../src/api/web-service"

const village = new Village()
const webService = new WebService(village)

webService.start()