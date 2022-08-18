#!/usr/bin/env node
import yargs from 'yargs';
import { stash_conf, state_conf } from '../lib/_bldr_sdk/store';
import { version } from '../lib/_bldr_sdk/version';
// Initiate all route switches
// const InitSwitch = require('../lib/_controllers/init')
import { ContextSwitch } from '../lib/_controllers/_context';
import { ConfigSwitch } from '../lib/_controllers/config';
import { AddSwitch } from '../lib/_controllers/add';
import { StashSwitch } from '../lib/_controllers/stash';
import { PushSwitch } from '../lib/_controllers/push';
import { StatusSwitch } from '../lib/_controllers/status';
import { PackageSwitch } from '../lib/_controllers/package'
import { InstallSwitch } from '../lib/_controllers/install'
import { displayLine } from '../lib/_utils/display';
import { DeploySwitch } from '../lib/_controllers/deploy';
import { InitSwitch } from '../lib/_controllers/initiate';
// const contextSwitch = require('../lib/context/contextSwitch');
// const configSwitch = require('../lib/config/switch');
// const addSwitch = require('../lib/add/switch');
// const pushSwitch = require('../lib/push/switch');
// const packageSwitch = require('../lib/package/switch');
// const deploySwitch = require('../lib/deploy/switch');
// const installSwitch = require('../lib/install/switch');
// const stashSwitch = require('../lib/stash/switch');
// const statusSwitch = require('../lib/status/switch');
// // const initSwitch = require('../lib/_controllers/init/switch');
// const patchSwitch = require('../lib/patch/switch');

// Parse requests and input arguments

const userInput: any = yargs;
const req = userInput.argv._[0] ? userInput.argv._[0].toLowerCase() : null;
const argv = userInput.argv;

/**
 * Initiate CLI application and route requests
 *
 * @param {string} req
 * @param {object} argv
 * @param {object} store
 */
const initCLI = async (req: string, argv: any) => {
    if (!req) {

        if (argv.v) {
            displayLine(`bldr version: ${version}`, 'info')
        }

    } else {
        switch (req) {
            case 'init':
                InitSwitch(argv);
                break;
            /**
             * Config route handles all CLI configuration of SFMC Instance
             * See README for config details
             */
            case 'config':
                ConfigSwitch(req, argv);
                break;

            /**
             * Add files in bulk or by filepath to the stash.json file
             */
            case 'add':
                AddSwitch(req, argv);
                break;

            /**
             * Works with Stash operations
             */
            case 'stash':
                StashSwitch(argv);
                break;

            /**
             * Displays current State and Staged Files
             */
            case 'status':
                StatusSwitch();
                break;

            /**
             * Format and push Staged files into current State SFMC Instance
             */
            case 'push':
                PushSwitch();
                break;
            /**
             * Package Files
             */
            case 'package':
                PackageSwitch();
                break;

            case 'install':
                InstallSwitch(argv);
                break;

            case 'deploy':
               DeploySwitch();
                break;

            // case 'patch':
            //     patchSwitch.switch(argv);
            //     break;
            // /**
            //  * Default handles all context specific routes
            //  * Context specific routes are located in utils/Blueprint/context/:context
            //  */
            default:
                ContextSwitch(req, argv);
        }
    }
};

initCLI(req, argv);
