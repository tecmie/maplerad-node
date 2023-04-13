"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/transfers";
class Transfers {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async NairaTransfer(payload) {
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async DOMTransfer(payload) {
        if (payload.meta.scheme !== "DOM")
            return "Invalid Scheme type for this method";
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async CashPickupTransfer(payload) {
        if (payload.meta.scheme !== "CASHPICKUP")
            return "Invalid Scheme type for this method";
        try {
            const response = await this.axios.post(path, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetTransfer(transferID) {
        try {
            const response = await this.axios.get(`${path}/${transferID}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetAllTransfers() {
        try {
            const response = await this.axios.get(path);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Transfers;
