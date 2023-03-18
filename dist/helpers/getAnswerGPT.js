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
const request = axios_1.default.create({
    method: 'post',
    baseURL: env_1.default.CHATGPT_API,
    headers: {
        Authorization: `Bearer ${env_1.default.CHATGPT_KEY}`,
        'Content-Type': 'application/json',
    },
});
function getAnswerGPT(messages) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield request({
            data: Object.assign({ model: 'gpt-3.5-turbo' }, messages),
        });
        return data.choices[0].message;
    });
}
exports.default = getAnswerGPT;
//# sourceMappingURL=getAnswerGPT.js.map