"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/bills/airtime";
class Bills {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async BuyAirtime(payload) {
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetAirtimeBillers(country) {
        try {
            const response = await this.axios.get(`${path}/billers/${country}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetAirtimeHistory() {
        try {
            const response = await this.axios.get(path);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Bills;
