"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/fx";
class Fx {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async GenerateQuote(payload) {
        try {
            const response = await this.axios.post(`${path}/quote`, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async ExchangeCurrency(quote_reference) {
        try {
            const response = await this.axios.post(path, {
                quote_reference
            });
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Fx;
