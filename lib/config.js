/*global path*/
define([
  'path'
], function (path) {
  return {
    getHomePath: getHomePath
  };
  function getHomePath () {
    var systemHomePath = process.env[(process.platform == 'win32') ? 'HOMEPATH' : 'HOME'];
    return systemHomePath;
  }
});
