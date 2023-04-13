"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Misc {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async GetCurrencies() {
        try {
            const response = await this.axios.get("/currencies");
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async CreditTestWallet(payload) {
        try {
            const response = await this.axios.get("/test/wallet/credit");
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Misc;
