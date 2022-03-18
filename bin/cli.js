#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = command => {
    try {
        execSync(`${command}`, {stdio: 'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/TefDesign/starterkit-vite-scss ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log('\n\n','~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');
console.log('\x1b[36m%s\x1b[0m',`Cloning the repository with name ${repoName}\n\n`);

const checkedOut = runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);

console.log('\x1b[36m%s\x1b[0m',`\n\nInstalling dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1);

console.log('\n\n','~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');
console.log('\x1b[36m%s\x1b[0m',`Congratulations !! You are ready :) Follow the following commands to start :\n`);
console.log('\x1b[35m%s\x1b[0m',`cd ${repoName} && npm run dev\n\n`);