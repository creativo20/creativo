function _0x1d21(_0x10b2b6, _0x17d64c) { const _0x20dc35 = _0x20dc(); return _0x1d21 = function (_0x1d214b, _0x48dcea) { _0x1d214b = _0x1d214b - 0x155; let _0xc6cac4 = _0x20dc35[_0x1d214b]; return _0xc6cac4; }, _0x1d21(_0x10b2b6, _0x17d64c); } const _0x3dda66 = _0x1d21; (function (_0x5aa95c, _0x2305c2) { const _0x4f1d9f = _0x1d21, _0x2582a5 = _0x5aa95c(); while (!![]) { try { const _0x1712dc = -parseInt(_0x4f1d9f(0x15c)) / 0x1 * (-parseInt(_0x4f1d9f(0x1a7)) / 0x2) + parseInt(_0x4f1d9f(0x187)) / 0x3 * (-parseInt(_0x4f1d9f(0x18f)) / 0x4) + -parseInt(_0x4f1d9f(0x1a3)) / 0x5 * (-parseInt(_0x4f1d9f(0x1a8)) / 0x6) + -parseInt(_0x4f1d9f(0x18d)) / 0x7 * (parseInt(_0x4f1d9f(0x19f)) / 0x8) + -parseInt(_0x4f1d9f(0x15e)) / 0x9 * (parseInt(_0x4f1d9f(0x155)) / 0xa) + -parseInt(_0x4f1d9f(0x15f)) / 0xb * (-parseInt(_0x4f1d9f(0x1b2)) / 0xc) + parseInt(_0x4f1d9f(0x1b0)) / 0xd; if (_0x1712dc === _0x2305c2) break; else _0x2582a5['push'](_0x2582a5['shift']()); } catch (_0x376650) { _0x2582a5['push'](_0x2582a5['shift']()); } } }(_0x20dc, 0x778af)); const router = require(_0x3dda66(0x1a5))['Router'](), promisesql = require('../function/promisesql'), fetch = require(_0x3dda66(0x166)), { isvalid } = require(_0x3dda66(0x163)), { sendEmail } = require('./convo/function'), rzCapturePayment = (_0x17c205, _0x41a925, _0x1ba863, _0x1aad28) => { const _0x20893f = _0x3dda66, _0x110208 = _0x20893f(0x16d) + Buffer[_0x20893f(0x199)](_0x1ba863 + ':' + _0x1aad28)[_0x20893f(0x176)](_0x20893f(0x190)); return new Promise((_0x1fc232, _0x460bca) => { const _0x1c24d4 = _0x20893f; fetch(_0x1c24d4(0x191) + _0x17c205 + _0x1c24d4(0x164), { 'method': _0x1c24d4(0x19b), 'headers': { 'Authorization': _0x110208, 'Content-Type': 'application/json' }, 'body': JSON[_0x1c24d4(0x193)]({ 'amount': _0x41a925 }) })[_0x1c24d4(0x178)](_0x3a1391 => _0x3a1391[_0x1c24d4(0x172)]())[_0x1c24d4(0x178)](_0x1d41e8 => { const _0x19f256 = _0x1c24d4; _0x1d41e8['error'] ? (console[_0x19f256(0x1af)](_0x19f256(0x1a2), _0x1d41e8[_0x19f256(0x1af)]), _0x460bca(_0x1d41e8[_0x19f256(0x1af)])) : (console[_0x19f256(0x17e)]('Payment\x20captured\x20successfully:', _0x1d41e8), _0x1fc232(_0x1d41e8)); })[_0x1c24d4(0x179)](_0x2c2464 => { const _0x4ea82a = _0x1c24d4; console[_0x4ea82a(0x1af)]('Error\x20capturing\x20payment:', _0x2c2464), _0x460bca(_0x2c2464); }); }); }; router[_0x3dda66(0x16b)](_0x3dda66(0x157), isvalid, async (_0x37586e, _0x307aaf) => { const _0x203604 = _0x3dda66; try { var _0x459ee6 = _0x37586e['body']['name'], _0xa72eb4 = _0x37586e['body']['plan_limit'], _0x543786 = _0x37586e[_0x203604(0x1ab)][_0x203604(0x170)], _0x24e22a = _0x37586e[_0x203604(0x1ab)][_0x203604(0x19a)], _0xd0349 = _0x37586e[_0x203604(0x1ab)]['ad']; if (!_0x459ee6 || !_0xa72eb4 || !_0x543786) return _0x307aaf[_0x203604(0x172)]({ 'msg': _0x203604(0x162) }); const _0x119f8c = await promisesql[_0x203604(0x186)](_0x203604(0x18b), [_0x459ee6, _0xa72eb4, _0x543786, _0x24e22a, _0xd0349, _0x37586e[_0x203604(0x1ab)][_0x203604(0x182)], _0x37586e[_0x203604(0x1ab)][_0x203604(0x18a)]]); _0x307aaf[_0x203604(0x172)]({ 'success': !![], 'msg': 'Plan\x20was\x20added' }); } catch (_0x41964e) { console[_0x203604(0x17e)](_0x41964e), _0x307aaf[_0x203604(0x172)]({ 'err': _0x41964e, 'msg': _0x203604(0x1a4) }); } }), router[_0x3dda66(0x196)](_0x3dda66(0x1a6), async (_0xf7e0e4, _0xbb9453) => { const _0x72f38c = _0x3dda66; try { const _0x5cfe99 = await promisesql[_0x72f38c(0x186)](_0x72f38c(0x19c), []); _0xbb9453['json']({ 'success': !![], 'data': _0x5cfe99 }); } catch (_0x11ec78) { console[_0x72f38c(0x17e)](_0x11ec78), _0xbb9453['json']({ 'err': _0x11ec78, 'msg': _0x72f38c(0x1a4) }); } }), router['post'](_0x3dda66(0x160), isvalid, async (_0x46bc50, _0x146ad8) => { const _0x27d6b8 = _0x3dda66; try { await promisesql[_0x27d6b8(0x186)](_0x27d6b8(0x173) + _0x46bc50[_0x27d6b8(0x1ab)]['id'] + '\x27\x20', []), _0x146ad8[_0x27d6b8(0x172)]({ 'success': !![], 'msg': 'Plan\x20was\x20deleted' }); } catch (_0x2287e5) { console[_0x27d6b8(0x17e)](_0x2287e5), _0x146ad8[_0x27d6b8(0x172)]({ 'err': _0x2287e5, 'msg': _0x27d6b8(0x1a4) }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x181), isvalid, async (_0x348449, _0x45cd99) => { const _0x72e646 = _0x3dda66; try { if (!_0x348449[_0x72e646(0x1ab)]?.[_0x72e646(0x1ad)]?.[_0x72e646(0x16a)] || !_0x348449[_0x72e646(0x1ab)]['id']) return _0x45cd99[_0x72e646(0x172)]({ 'msg': _0x72e646(0x185) }); const _0x14576f = await promisesql[_0x72e646(0x186)]('UPDATE\x20user\x20SET\x20plan\x20\x20=\x20?,\x20left_limit\x20=\x20?\x20WHERE\x20id\x20=\x20?', [JSON['stringify'](_0x348449[_0x72e646(0x1ab)][_0x72e646(0x1ad)]), _0x348449[_0x72e646(0x1ab)][_0x72e646(0x1ad)]?.[_0x72e646(0x16a)], _0x348449[_0x72e646(0x1ab)]['id']]); _0x45cd99['json']({ 'success': !![], 'msg': _0x72e646(0x194) }); } catch (_0x1faad0) { console[_0x72e646(0x17e)](_0x1faad0), _0x45cd99[_0x72e646(0x172)]({ 'err': _0x1faad0, 'msg': _0x72e646(0x1a4) }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x16c), async (_0x4b1a27, _0x3b8672) => { const _0x44cadf = _0x3dda66; try { const _0x432446 = await promisesql[_0x44cadf(0x186)](_0x44cadf(0x1b1), []), _0x1e7469 = _0x432446[0x0], _0x1deaeb = _0x4b1a27['body'][_0x44cadf(0x1ad)], _0x32af35 = _0x4b1a27[_0x44cadf(0x1ab)][_0x44cadf(0x169)], _0x46298f = _0x4b1a27['body']['email'], _0x1ea64b = await promisesql[_0x44cadf(0x186)]('SELECT\x20*\x20FROM\x20plan\x20WHERE\x20id\x20=\x20?', [_0x1deaeb['id']]); if (_0x1ea64b[_0x44cadf(0x168)] < 0x1) return _0x3b8672[_0x44cadf(0x172)]({ 'msg': 'Sorry\x20this\x20plan\x20was\x20not\x20found' }); const _0x475dd6 = await promisesql[_0x44cadf(0x186)]('SELECT\x20*\x20FROM\x20user\x20WHERE\x20mobile\x20=\x20\x20?', [_0x32af35]), _0x2f54bf = parseInt(_0x4b1a27[_0x44cadf(0x1ab)][_0x44cadf(0x17c)]) / parseInt(_0x1e7469['exchange_rate']) * 0x50, _0xfa3303 = await rzCapturePayment(_0x4b1a27[_0x44cadf(0x1ab)][_0x44cadf(0x177)], Math['round'](_0x2f54bf) * 0x64, _0x1e7469[_0x44cadf(0x165)], _0x1e7469['rz_key']); if (!_0xfa3303) { _0x3b8672[_0x44cadf(0x172)]({ 'success': ![], 'msg': 'Something\x20went\x20wrong,\x20Try\x20again' }); return; } await promisesql[_0x44cadf(0x186)]('UPDATE\x20user\x20SET\x20plan\x20=\x20?,\x20left_limit\x20=\x20?\x20WHERE\x20mobile\x20=\x20?', [JSON[_0x44cadf(0x193)](_0x1ea64b[0x0]), _0x1ea64b[0x0]['plan_limit'], _0x32af35]), await promisesql['query'](_0x44cadf(0x16e), [_0x44cadf(0x18e), _0x1ea64b[0x0]['price'], _0x32af35]), await sendEmail(_0x46298f, _0x32af35, _0x1ea64b[0x0], _0x4b1a27), _0x3b8672[_0x44cadf(0x172)]({ 'success': !![], 'msg': 'Thank\x20for\x20your\x20payment\x20you\x20are\x20good\x20to\x20go\x20now.' }); } catch (_0x11c53d) { console['log'](_0x11c53d), _0x3b8672['json']({ 'err': _0x11c53d, 'msg': _0x44cadf(0x180) }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x159), async (_0x587fd9, _0x209cb7) => { const _0x45e23f = _0x3dda66; try { const _0x11313f = await promisesql['query'](_0x45e23f(0x17f) + _0x587fd9['body']['id'] + '\x27', []); if (_0x11313f[_0x45e23f(0x168)] < 0x1) return _0x209cb7[_0x45e23f(0x172)]({ 'msg': _0x45e23f(0x1a0) }); else _0x209cb7[_0x45e23f(0x172)]({ 'data': _0x11313f[0x0], 'success': !![] }); } catch (_0x28f833) { console[_0x45e23f(0x17e)](_0x28f833), _0x209cb7[_0x45e23f(0x172)]({ 'err': _0x28f833, 'msg': 'Server\x20error' }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x19e), async (_0xcb67eb, _0x4f4e50) => { const _0x560562 = _0x3dda66; try { const _0x3944ce = _0xcb67eb[_0x560562(0x1ab)]['planID'], _0x35b173 = _0xcb67eb[_0x560562(0x1ab)]['mobile'], _0x20862e = _0xcb67eb[_0x560562(0x1ab)][_0x560562(0x16f)]; if (!_0x35b173 || !_0x3944ce) return _0x4f4e50['json']({ 'msg': _0x560562(0x171) }); const _0x2f8c2a = await promisesql[_0x560562(0x186)](_0x560562(0x195), [_0x3944ce]); if (_0x2f8c2a[_0x560562(0x168)] < 0x1) return _0x4f4e50['json']({ 'msg': _0x560562(0x17d) }); await promisesql[_0x560562(0x186)]('UPDATE\x20user\x20SET\x20plan\x20=\x20?,\x20left_limit\x20=\x20?\x20WHERE\x20mobile\x20=\x20?', [JSON['stringify'](_0x2f8c2a[0x0]), _0x2f8c2a[0x0]['plan_limit'], _0x35b173]), await promisesql['query'](_0x560562(0x16e), [_0x560562(0x174), _0x2f8c2a[0x0][_0x560562(0x170)], _0x35b173]), await sendEmail(_0x20862e, _0x35b173, _0x2f8c2a[0x0], _0xcb67eb), _0x4f4e50[_0x560562(0x172)]({ 'success': !![], 'msg': _0x560562(0x19d) }); } catch (_0x1c3493) { console[_0x560562(0x17e)](_0x1c3493), _0x4f4e50[_0x560562(0x172)]({ 'err': _0x1c3493, 'msg': _0x560562(0x1a4) }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x192), async (_0x4cd6fb, _0x108a9f) => { const _0x3a508b = _0x3dda66; try { const _0x3e063a = _0x4cd6fb[_0x3a508b(0x1ab)]['plan'], _0x37cf82 = _0x4cd6fb['body']['trans_id'], _0xbc0540 = _0x4cd6fb[_0x3a508b(0x1ab)]['mobile'], _0x54ca8d = _0x4cd6fb[_0x3a508b(0x1ab)][_0x3a508b(0x16f)]; if (!_0x3e063a || !_0x37cf82) return _0x108a9f[_0x3a508b(0x172)]({ 'msg': 'Order\x20id\x20and\x20plan\x20required' }); const _0x169bcc = await promisesql[_0x3a508b(0x186)]('SELECT\x20*\x20FROM\x20plan\x20WHERE\x20id\x20=\x20?', [_0x3e063a['id']]); if (_0x169bcc[_0x3a508b(0x168)] < 0x1) return _0x108a9f[_0x3a508b(0x172)]({ 'msg': _0x3a508b(0x17d) }); const _0x198e50 = await promisesql[_0x3a508b(0x186)]('SELECT\x20*\x20FROM\x20web', []), _0xf5b8f7 = _0x198e50[0x0], _0x55003f = _0xf5b8f7['paystack_key'], _0x2ca168 = _0x37cf82; var _0x3bc08f = await fetch(_0x3a508b(0x1a9) + _0x2ca168, { 'headers': { 'Authorization': _0x3a508b(0x1a1) + _0x55003f, 'Content-Type': _0x3a508b(0x198) } }); const _0x3d4255 = await _0x3bc08f[_0x3a508b(0x172)](); if (_0x3d4255[_0x3a508b(0x175)][_0x3a508b(0x183)] !== _0x3a508b(0x189)) { _0x108a9f[_0x3a508b(0x172)]({ 'success': ![], 'msg': 'Something\x20went\x20wrong\x20with\x20yout\x20payment.\x20Please\x20try\x20again\x20or\x20contact\x20support\x20if\x20your\x20payment\x20deducted' }); return; } await promisesql[_0x3a508b(0x186)](_0x3a508b(0x1ac), [JSON[_0x3a508b(0x193)](_0x169bcc[0x0]), _0x169bcc[0x0][_0x3a508b(0x16a)], _0xbc0540]), await promisesql[_0x3a508b(0x186)](_0x3a508b(0x16e), ['Paystack', _0x169bcc[0x0][_0x3a508b(0x170)], _0xbc0540]), await sendEmail(_0x54ca8d, _0xbc0540, _0x169bcc[0x0], _0x4cd6fb), _0x108a9f[_0x3a508b(0x172)]({ 'success': !![], 'msg': 'Thank\x20for\x20your\x20payment\x20you\x20are\x20good\x20to\x20go\x20now.' }); } catch (_0x49d95c) { console['log'](_0x49d95c), _0x108a9f['json']({ 'err': _0x49d95c, 'msg': _0x3a508b(0x1a4) }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x18c), async (_0x298f39, _0x1820ff) => { const _0x464360 = _0x3dda66; try { const _0x140dd5 = _0x298f39['body']['order_id'], _0x206dd1 = _0x298f39[_0x464360(0x1ab)]['plan'], _0x59a5a7 = _0x298f39[_0x464360(0x1ab)][_0x464360(0x169)], _0x29ec40 = _0x298f39[_0x464360(0x1ab)][_0x464360(0x16f)]; if (!_0x140dd5 || !_0x206dd1) return _0x1820ff[_0x464360(0x172)]({ 'msg': _0x464360(0x1aa) }); const _0x111004 = await promisesql[_0x464360(0x186)](_0x464360(0x1b1), []), _0x455f29 = _0x111004[0x0]['paypal_client_id'], _0x31724d = _0x111004[0x0][_0x464360(0x17a)]; let _0x1e955a = await fetch(_0x464360(0x15a), { 'method': 'POST', 'body': _0x464360(0x184), 'headers': { 'Authorization': _0x464360(0x16d) + Buffer[_0x464360(0x199)](_0x455f29 + ':' + _0x31724d, _0x464360(0x197))[_0x464360(0x176)]('base64') } }), _0x2d7653 = await _0x1e955a['json'](), _0x4217d3 = await fetch(_0x464360(0x15b) + _0x140dd5, { 'method': 'GET', 'headers': { 'Authorization': _0x464360(0x1a1) + _0x2d7653['access_token'] } }), _0x1d6753 = await _0x4217d3[_0x464360(0x172)](); if (_0x1d6753[_0x464360(0x183)] === _0x464360(0x188)) await promisesql[_0x464360(0x186)](_0x464360(0x1ac), [JSON['stringify'](_0x206dd1), [_0x206dd1[_0x464360(0x16a)]], _0x59a5a7]), await promisesql['query'](_0x464360(0x16e), [_0x464360(0x158), _0x206dd1[0x0]['price'], _0x59a5a7]), await sendEmail(_0x29ec40, _0x59a5a7, _0x206dd1[0x0], _0x298f39), _0x1820ff['json']({ 'success': !![], 'msg': _0x464360(0x19d) }); else { _0x1820ff[_0x464360(0x172)]({ 'success': ![], 'msg': _0x464360(0x156) }); return; } } catch (_0x59c9a8) { console[_0x464360(0x17e)](_0x59c9a8), _0x1820ff[_0x464360(0x172)]({ 'err': _0x59c9a8, 'msg': _0x464360(0x1a4) }); } }), router[_0x3dda66(0x196)](_0x3dda66(0x17b), isvalid, async (_0x108e4e, _0xcadbcf) => { const _0x13c0bb = _0x3dda66; try { const _0x3be919 = await promisesql['query'](_0x13c0bb(0x1ae), []); _0xcadbcf['json']({ 'success': !![], 'data': _0x3be919 }); } catch (_0x67733f) { console['log'](_0x67733f), _0xcadbcf['json']({ 'err': _0x67733f, 'msg': _0x13c0bb(0x1a4) }); } }), router[_0x3dda66(0x16b)](_0x3dda66(0x15d), isvalid, async (_0x4a6517, _0x290bbb) => { const _0x4d33cc = _0x3dda66; try { await promisesql[_0x4d33cc(0x186)]('DELETE\x20FROM\x20orders\x20WHERE\x20id\x20=\x20?', [_0x4a6517['body']['id']]), _0x290bbb[_0x4d33cc(0x172)]({ 'msg': _0x4d33cc(0x161), 'success': !![] }); } catch (_0x551b27) { console[_0x4d33cc(0x17e)](_0x551b27), _0x290bbb[_0x4d33cc(0x172)]({ 'err': _0x551b27, 'msg': 'Server\x20error' }); } }), module[_0x3dda66(0x167)] = router; function _0x20dc() { const _0x432f53 = ['plan', 'SELECT\x20*\x20FROM\x20orders', 'error', '5304013iHOPdr', 'SELECT\x20*\x20FROM\x20web', '636wIEADb', '2560tQMNNQ', 'Something\x20went\x20wrong\x20with\x20yout\x20payment.\x20Please\x20try\x20again\x20or\x20contact\x20support\x20if\x20your\x20payment\x20deducted', '/add', 'Paypal', '/get_plan_by_id', 'https://api-m.sandbox.paypal.com/v1/oauth2/token', 'https://api-m.sandbox.paypal.com/v1/checkout/orders/', '3oUXTAK', '/del_order', '8811GlWcDw', '8140uHYFRr', '/del', 'Order\x20Log\x20was\x20deleted', 'send\x20all\x20required\x20fields', '../middlewares/user', '/capture', 'rz_id', 'node-fetch', 'exports', 'length', 'mobile', 'plan_limit', 'post', '/pay_with_rz', 'Basic\x20', 'INSERT\x20INTO\x20orders\x20(type,\x20amount,\x20user)\x20VALUES\x20(?,?,?)\x20', 'email', 'price', 'please\x20send\x20all\x20details', 'json', 'DELETE\x20FROM\x20plan\x20WHERE\x20id\x20=\x20\x27', 'Free', 'data', 'toString', 'rz_payment_id', 'then', 'catch', 'paypal_secret', '/get_orders', 'amount', 'Sorry\x20this\x20plan\x20was\x20not\x20found', 'log', 'SELECT\x20*\x20FROM\x20plan\x20WHERE\x20id\x20=\x20\x27', 'Payment\x20Error', '/update_plan', 'dalle', 'status', 'grant_type=client_credentials', 'Send\x20a\x20valid\x20plan', 'query', '6bLLfCr', 'COMPLETED', 'success', 'remind_ad_msg', 'INSERT\x20INTO\x20plan\x20(name,\x20plan_limit,\x20price,\x20des,\x20ad,\x20dalle,\x20remind_ad_msg)\x20VALUES\x20(?,?,?,?,?,?,?)\x20', '/pay_with_paypal', '785883lOMqyO', 'Razorpay', '333908TDIlLq', 'base64', 'https://api.razorpay.com/v1/payments/', '/pay_with_paystack', 'stringify', 'Plan\x20was\x20updated', 'SELECT\x20*\x20FROM\x20plan\x20WHERE\x20id\x20=\x20?', 'get', 'binary', 'application/json', 'from', 'des', 'POST', 'SELECT\x20*\x20FROM\x20plan', 'Thank\x20for\x20your\x20payment\x20you\x20are\x20good\x20to\x20go\x20now.', '/pay_for_free', '32HTJvZa', 'Plan\x20not\x20found', 'Bearer\x20', 'Error\x20capturing\x20payment:', '3263605TXSoAe', 'Server\x20error', 'express', '/get_all', '170906tVhcUZ', '6BYBWIG', 'https://api.paystack.co/transaction/', 'Order\x20id\x20and\x20plan\x20required', 'body', 'UPDATE\x20user\x20SET\x20plan\x20=\x20?,\x20left_limit\x20=\x20?\x20WHERE\x20mobile\x20=\x20?']; _0x20dc = function () { return _0x432f53; }; return _0x20dc(); }