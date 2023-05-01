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
const gpt4all_1 = require("gpt4all");
const model = 'gpt4all-lora-unfiltered-quantized';
function getAnswerGPT(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        const gpt4all = new gpt4all_1.GPT4All(model, true);
        console.log('Starting...');
        yield gpt4all.init();
        console.log('Initialized');
        yield gpt4all.open();
        console.log('Opened');
        const response = yield gpt4all.prompt(prompt);
        gpt4all.close();
        return response;
    });
}
exports.default = getAnswerGPT;
//# sourceMappingURL=getAnswerGPT.js.map