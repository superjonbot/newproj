'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var fetch = require('node-fetch');

var co = require('co');

co(
/*#__PURE__*/
_regenerator.default.mark(function _callee() {
  var uri, response, post, results, a;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          uri = "https://feeds.video.aetnd.com/api/aetv/videos?filter%5BisBehindWall%5D=false&perpage=500";
          _context.next = 3;
          return fetch(uri);

        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();

        case 6:
          post = _context.sent;
          _context.next = 9;
          return post.results;

        case 9:
          results = _context.sent;

          for (a = 0; a < results.length; a++) {
            console.log("id: ".concat(results[a].id, "    ").concat(results[a].seriesName, ":").concat(results[a].title, " (S").concat(results[a].tvSeasonNumber, ":E").concat(results[a].tvSeasonEpisodeNumber, ")"));
          }

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));