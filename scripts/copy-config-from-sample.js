"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const readline = require('readline');
const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function executeCopyIfYes() {
    lineReader.question('\nThis will wipe out any existing config.ts and config-test.ts. Are you sure you wish to proceed? Y/N\n', (answer) => {
        if (['Y', 'y', 'yes', 'Yes'].indexOf(answer) > -1) {
            console.log('OK, copying fresh config values.');
            const configSample = fs.readFileSync('./config/config-sample.ts').toString();
            fs.writeFileSync('./config/config.ts', configSample.replace('const sampleConfig', 'export const realConfig'));
            fs.writeFileSync('./config/config-test.ts', configSample.replace('const sampleConfig', 'export const testConfig'));
            lineReader.close();
        }
        else if (['N', 'n', 'no', 'No'].indexOf(answer) > -1) {
            console.log('OK, skipping fresh config files.');
            lineReader.close();
        }
        else {
            console.log(`Sorry, could not understand response ${answer}, please enter 'Y' or 'N'`);
            executeCopyIfYes();
        }
    });
}
exports.executeCopyIfYes = executeCopyIfYes;
executeCopyIfYes();
//# sourceMappingURL=copy-config-from-sample.js.map