function _0x1161() { const _0x514d1f = ['stringify', 'body', '2750716DMVUzi', 'SELECT\x20*\x20FROM\x20ad\x20WHERE\x20id\x20=\x20?', 'UPDATE\x20logs\x20SET\x20status\x20=\x20?\x20WHERE\x20id\x20=\x20?\x20', '5924dRQeEg', 'No\x20ad\x20found', 'log', '/get_logs', '1752aGynsN', 'express', 'No\x20ad\x20found\x2069', '/get_logs_by_ad_id', '/get_log_by_id', 'Reward\x20granted', '../function/promisesql', '230XRYAwx', 'json', 'ad_id', 'Server\x20error', 'type', 'INSERT\x20INTO\x20ad\x20(title,\x20type,\x20propsdata)\x20VALUES\x20(?,?,?)', '3967225OlQzhA', 'length', '826551uwJCAv', 'propsdata', 'Log\x20was\x20deleted', '/del_one', 'post', 'get', '1173027boQZiw', 'query', '30779zsAYCn', 'jsonwebtoken', '/get_all', '../middlewares/user', '452190yptGdD', '/get_by_id', '2283iQeHkH', 'SELECT\x20*\x20FROM\x20logs\x20WHERE\x20ad_id\x20=\x20?', 'SELECT\x20*\x20FROM\x20ad']; _0x1161 = function () { return _0x514d1f; }; return _0x1161(); } const _0x2ca5a7 = _0x3b54; (function (_0x4c7e0b, _0x30bc81) { const _0x5b347d = _0x3b54, _0x56e1e9 = _0x4c7e0b(); while (!![]) { try { const _0x13cfac = parseInt(_0x5b347d(0xfc)) / 0x1 + -parseInt(_0x5b347d(0xe0)) / 0x2 + parseInt(_0x5b347d(0xdb)) / 0x3 * (-parseInt(_0x5b347d(0xe3)) / 0x4) + -parseInt(_0x5b347d(0xf4)) / 0x5 + -parseInt(_0x5b347d(0xd9)) / 0x6 + parseInt(_0x5b347d(0xd5)) / 0x7 * (parseInt(_0x5b347d(0xe7)) / 0x8) + parseInt(_0x5b347d(0xf6)) / 0x9 * (parseInt(_0x5b347d(0xee)) / 0xa); if (_0x13cfac === _0x30bc81) break; else _0x56e1e9['push'](_0x56e1e9['shift']()); } catch (_0x13698a) { _0x56e1e9['push'](_0x56e1e9['shift']()); } } }(_0x1161, 0xd6202)); function _0x3b54(_0x5c5e30, _0x3e0d5e) { const _0x1161ec = _0x1161(); return _0x3b54 = function (_0x3b546e, _0x3e29b0) { _0x3b546e = _0x3b546e - 0xd5; let _0x3330d8 = _0x1161ec[_0x3b546e]; return _0x3330d8; }, _0x3b54(_0x5c5e30, _0x3e0d5e); } const router = require(_0x2ca5a7(0xe8))['Router'](), promisesql = require(_0x2ca5a7(0xed)), bcrypt = require('bcrypt'), { sign } = require(_0x2ca5a7(0xd6)), { isvalid } = require(_0x2ca5a7(0xd8)); router['get'](_0x2ca5a7(0xd7), isvalid, async (_0x118caa, _0x4e88b0) => { const _0x36c53c = _0x2ca5a7; try { const _0xc71f52 = await promisesql[_0x36c53c(0xfd)](_0x36c53c(0xdd), []); _0x4e88b0[_0x36c53c(0xef)]({ 'data': _0xc71f52, 'success': !![] }); } catch (_0x51a7fb) { _0x4e88b0[_0x36c53c(0xef)]({ 'err': _0x51a7fb, 'msg': _0x36c53c(0xf1) }), console[_0x36c53c(0xe5)](_0x51a7fb); } }), router['post']('/add', isvalid, async (_0x5c8456, _0x894a13) => { const _0x250cd6 = _0x2ca5a7; try { if (!_0x5c8456[_0x250cd6(0xdf)]['title'] || !_0x5c8456['body'][_0x250cd6(0xf2)] || !_0x5c8456[_0x250cd6(0xdf)][_0x250cd6(0xf7)]) return _0x894a13[_0x250cd6(0xef)]({ 'msg': 'All\x20fields\x20to\x20be\x20provided' }); await promisesql[_0x250cd6(0xfd)](_0x250cd6(0xf3), [_0x5c8456['body']['title'], _0x5c8456['body'][_0x250cd6(0xf2)], JSON[_0x250cd6(0xde)](_0x5c8456[_0x250cd6(0xdf)]['propsdata'])]), _0x894a13[_0x250cd6(0xef)]({ 'success': !![], 'msg': 'Yout\x20promotion\x20was\x20added' }); } catch (_0x59feb5) { _0x894a13[_0x250cd6(0xef)]({ 'err': _0x59feb5, 'msg': _0x250cd6(0xf1) }), console['log'](_0x59feb5); } }), router[_0x2ca5a7(0xfb)](_0x2ca5a7(0xe6), isvalid, async (_0x42aa82, _0x412f9f) => { const _0x573826 = _0x2ca5a7; try { const _0x2dc6fb = await promisesql['query']('SELECT\x20*\x20FROM\x20logs', []); _0x412f9f[_0x573826(0xef)]({ 'data': _0x2dc6fb, 'success': !![] }); } catch (_0x15236d) { _0x412f9f[_0x573826(0xef)]({ 'err': _0x15236d, 'msg': _0x573826(0xf1) }), console[_0x573826(0xe5)](_0x15236d); } }), router[_0x2ca5a7(0xfa)](_0x2ca5a7(0xea), isvalid, async (_0x11f236, _0x3295fe) => { const _0x1ea0c4 = _0x2ca5a7; try { const _0x399337 = await promisesql['query'](_0x1ea0c4(0xdc), [_0x11f236['body'][_0x1ea0c4(0xf0)]]); _0x3295fe[_0x1ea0c4(0xef)]({ 'data': _0x399337, 'success': !![] }); } catch (_0x5a9f62) { _0x3295fe[_0x1ea0c4(0xef)]({ 'err': _0x5a9f62, 'msg': _0x1ea0c4(0xf1) }), console[_0x1ea0c4(0xe5)](_0x5a9f62); } }), router['post'](_0x2ca5a7(0xf9), isvalid, async (_0x44b38d, _0x5bef99) => { const _0x51e671 = _0x2ca5a7; try { await promisesql[_0x51e671(0xfd)]('DELETE\x20FROM\x20logs\x20WHERE\x20id\x20=\x20?', [_0x44b38d[_0x51e671(0xdf)]['id']]), _0x5bef99[_0x51e671(0xef)]({ 'success': !![], 'msg': _0x51e671(0xf8) }); } catch (_0x3d4c42) { _0x5bef99[_0x51e671(0xef)]({ 'err': _0x3d4c42, 'msg': 'Server\x20error' }), console['log'](_0x3d4c42); } }), router[_0x2ca5a7(0xfa)](_0x2ca5a7(0xda), async (_0x156f97, _0x20a409) => { const _0x478361 = _0x2ca5a7; try { if (!_0x156f97[_0x478361(0xdf)]['id']) return _0x20a409[_0x478361(0xef)]({ 'msg': _0x478361(0xe9) }); const _0x26a49a = await promisesql[_0x478361(0xfd)](_0x478361(0xe1), [_0x156f97[_0x478361(0xdf)]['id']]); if (_0x26a49a[_0x478361(0xf5)] < 0x1) return _0x20a409[_0x478361(0xef)]({ 'msg': _0x478361(0xe4) }); else _0x20a409[_0x478361(0xef)]({ 'data': _0x26a49a[0x0], 'success': !![] }); } catch (_0x430cdf) { _0x20a409[_0x478361(0xef)]({ 'err': _0x430cdf, 'msg': _0x478361(0xf1) }), console[_0x478361(0xe5)](_0x430cdf); } }), router[_0x2ca5a7(0xfa)](_0x2ca5a7(0xeb), async (_0x27a6d8, _0x459bbe) => { const _0x3ad88f = _0x2ca5a7; try { if (!_0x27a6d8[_0x3ad88f(0xdf)]['id']) return _0x459bbe[_0x3ad88f(0xef)]({ 'msg': 'No\x20ad\x20found\x2069' }); const _0x3cce40 = await promisesql[_0x3ad88f(0xfd)]('SELECT\x20*\x20FROM\x20logs\x20WHERE\x20id\x20=\x20?', [_0x27a6d8['body']['id']]); if (_0x3cce40['length'] < 0x1) return _0x459bbe[_0x3ad88f(0xef)]({ 'msg': _0x3ad88f(0xe4) }); else { const _0x1d478a = _0x3cce40[0x0][_0x3ad88f(0xf0)], _0x432f4b = await promisesql[_0x3ad88f(0xfd)](_0x3ad88f(0xe1), [_0x1d478a]); if (_0x432f4b['length'] < 0x1) return _0x459bbe[_0x3ad88f(0xef)]({ 'msg': _0x3ad88f(0xe4) }); else _0x459bbe[_0x3ad88f(0xef)]({ 'data': { ..._0x432f4b[0x0], 'log_id': _0x3cce40[0x0]['id'] }, 'success': !![] }); } } catch (_0x4da07a) { _0x459bbe[_0x3ad88f(0xef)]({ 'err': _0x4da07a, 'msg': 'Server\x20error' }), console[_0x3ad88f(0xe5)](_0x4da07a); } }), router[_0x2ca5a7(0xfa)]('/mark_done', async (_0x9f0b32, _0x6cb8d5) => { const _0x380858 = _0x2ca5a7; console['log'](_0x9f0b32['body']); try { await promisesql[_0x380858(0xfd)](_0x380858(0xe2), ['completed', _0x9f0b32['body']['id']]), _0x6cb8d5[_0x380858(0xef)]({ 'success': !![], 'msg': _0x380858(0xec) }); } catch (_0x666981) { _0x6cb8d5[_0x380858(0xef)]({ 'err': _0x666981, 'msg': _0x380858(0xf1) }), console['log'](_0x666981); } }), module['exports'] = router;