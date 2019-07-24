#!/usr/bin/env node
'use strict';
const meow = require('meow');
const learnUseSemanticReleaseCli = require('.');

const cli = meow(`
	Usage
	  $ learn-use-semantic-release-cli [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ learn-use-semantic-release-cli
	  unicorns & rainbows
	  $ learn-use-semantic-release-cli ponies
	  ponies & rainbows
`);

console.log(learnUseSemanticReleaseCli(cli.input[0] || 'unicorns'));
