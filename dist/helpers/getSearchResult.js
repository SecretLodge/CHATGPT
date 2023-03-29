"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const env_1 = require("@/helpers/env");
const GOOGLE_API = `https://www.googleapis.com/customsearch/v1?key=${env_1.default.GOOGLE_KEY}&cx=${env_1.default.GOOGLE_CX}&q=`;
function getSearchResult(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield (0, axios_1.default)(GOOGLE_API + query.query);
        return data.items;
    });
}
exports.default = getSearchResult;
//# sourceMappingURL=getSearchResult.js.map