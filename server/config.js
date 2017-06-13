'use strict';

// Hierarchical node.js configuration with command-line arguments, environment
// variables, and files.
const nconf = module.exports = require('nconf');
const path = require('path');

nconf
    // 1. Command-line arguments
    .argv()
    // 2. Environment variables
    .env([
        'OAUTH2_CLIENT_ID',
        'OAUTH2_CLIENT_SECRET',
        'OAUTH2_CALLBACK',
        'PORT',
        'SECRET'
    ])
    // 3. Config file
    .file({ file: path.join(__dirname, './conf/config.json') })
    // 4. Defaults
    .defaults({
        OAUTH2_CLIENT_ID: '',
        OAUTH2_CLIENT_SECRET: '',
        OAUTH2_CALLBACK: 'http://localhost:8080/auth/google/callback',

        PORT: 8080,

        // Set this a secret string of your choosing
        SECRET: 'keyboardcat'
    });

// Check for required settings
checkConfig('OAUTH2_CLIENT_ID');
checkConfig('OAUTH2_CLIENT_SECRET');

function checkConfig (setting) {
    if (!nconf.get(setting)) {
        throw new Error(`You must set ${setting} as an environment variable or in config.json!`);
    }
}