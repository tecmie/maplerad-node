"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/collections";
class Collections {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async CreateVirtualAccount(payload) {
        try {
            const response = await this.axios.post(path + "/virtual-account", payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async DirectDebit(payload) {
        try {
            const response = await this.axios.post(`${path}/direct-debit`, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Collections;
