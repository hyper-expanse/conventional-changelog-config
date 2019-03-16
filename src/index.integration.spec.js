'use strict';

/* eslint-disable no-unused-expressions */

const chai = require(`chai`);
const chaiAsPromised = require(`chai-as-promised`);
const { describe, it } = require(`mocha`);

const conventionalChangelogConfig = require(`../`);

chai.use(chaiAsPromised);
const { expect } = chai;

describe(`@hutson/conventional-changelog-config`, () => {
  it(`is an object`, () => {
    expect(conventionalChangelogConfig).to.be.a(`promise`);
  });

  it(`should have a whatBump function on 'conventional-recommended-bump`, () => {
    return expect(conventionalChangelogConfig).to.be.fulfilled
      .then(configuration => {
        [`parserOpts`, `writerOpts`, `conventionalChangelog`, `recommendedBumpOpts.whatBump`].forEach(property => {
          expect(configuration).to.have.nested.property(property);
        });
      });
  });

  it(`should return expected results`, () => {
    const commits = [{
      notes: [],
      type: `chore`
    }, {
      notes: [],
      type: `fix`
    }, {
      notes: [],
      type: `feat`
    }, {
      notes: [{
        title: `BREAKING CHANGE`,
        text: `Something in the API has changed.`
      }],
      type: `fix`
    }, {
      notes: [{
        title: `BREAKING CHANGE`,
        text: `Something in the API has changed.`
      }, {
        title: `BREAKING CHANGE`,
        text: `Something else in the API has changed.`
      }],
      type: `feat`
    }];

    const results = [{
      level: null,
      reason: `There are 0 BREAKING CHANGES and 0 features`
    }, {
      level: 2,
      reason: `There are 0 BREAKING CHANGES and 0 features`
    }, {
      level: 1,
      reason: `There are 0 BREAKING CHANGES and 1 feature`
    }, {
      level: 0,
      reason: `There is 1 BREAKING CHANGE and 0 features`
    }, {
      level: 0,
      reason: `There are 2 BREAKING CHANGES and 1 feature`
    }];

    return expect(conventionalChangelogConfig).to.be.fulfilled
      .then(configuration => {
        for (let i = 0; i < commits.length; i++) {
          expect(configuration.recommendedBumpOpts.whatBump([commits[i]])).to.contain(results[i]);
        }
      });
  });
});
