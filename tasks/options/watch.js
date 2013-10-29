var Helpers = require('../helpers');

var scripts = '{app,tests}/**/*.{js,coffee}',
    templates = 'app/templates/**/*.{hbs,handlebars,hjs,emblem}',
    styles = 'app/styles/**/*.{css,sass,scss,less,styl}',
    indexHTML = 'app/index.html',
    other = '{app,tests,public,vendor}/**/*';

module.exports = {
  scripts: {
    files: [scripts],
    tasks: ['lock', 'buildScripts', 'unlock']
  },
  templates: {
    files: [templates],
    tasks: ['lock', 'buildTemplates:debug', 'unlock']
  },
  styles: {
    files: [styles],
    tasks: ['lock', 'buildStyles', 'unlock']
  },
  indexHTML: {
    files: [indexHTML],
    tasks: ['lock', 'buildIndexHTML:debug', 'unlock']
  },

  // This gives us too many files being watched.  Unsure why when there seems to
  // only be like 70 files.
  //
  // other: {
  //   files: [other, '!'+scripts, '!'+templates, '!'+styles, '!'+indexHTML],
  //   tasks: ['lock', 'build:debug', 'unlock']
  // },

  options: {
    debounceDelay: 200,
    livereload: Helpers.isPackageAvailable("connect-livereload")
  }
};
