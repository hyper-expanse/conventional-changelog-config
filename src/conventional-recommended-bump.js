'use strict';

const parserOpts = require(`conventional-changelog-angular/parser-opts`);

module.exports = {
  parserOpts,

  whatBump: commits => {
    let level = null;
    let breakings = 0;
    let features = 0;

    commits.forEach(commit => {
      if (commit.type === `fix`) {
        level = 2;
      }

      if (commit.type === `feat`) {
        features += 1;
        level = 1;
      }

      if (commit.notes.length > 0) {
        breakings += commit.notes.length;
        level = 0;
      }
    });

    return {
      level,
      reason: `There ${breakings === 1 ? `is` : `are`} ${breakings} BREAKING CHANGE${breakings === 1 ? `` : `S`} and ${features} feature${features === 1 ? `` : `s`}`,
    };
  },
};
