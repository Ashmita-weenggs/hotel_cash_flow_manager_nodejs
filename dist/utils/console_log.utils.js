"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
}
Log.debug = (key, value, config) => {
    console.log('\n[DEBUG]: ', key, ' >>>> ', (config === null || config === void 0 ? void 0 : config.stringify) ? JSON.stringify(value) : value);
};
Log.print = (key, value, config) => {
    console.log('\n[LOG] ', key, ' >>>> ', (config === null || config === void 0 ? void 0 : config.stringify) ? JSON.stringify(value) : value);
};
exports.Log = Log;
