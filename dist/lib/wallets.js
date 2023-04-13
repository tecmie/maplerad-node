"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "wallets";
class Wallets {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async GetWallets() {
        try {
            const response = await this.axios.get(path);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetWalletByCurrency(currencyCode) {
        try {
            const response = await this.axios.get(`${path}/${currencyCode}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetWalletsHistory() {
        try {
            const response = await this.axios.get(`${path}/history`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetWalletsHistoryByCurrency(currencyCode) {
        try {
            const response = await this.axios.get(`${path}/${currencyCode}/history`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Wallets;
