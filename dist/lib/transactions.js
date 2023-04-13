"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "transactions";
class Transactions {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async GetAllTransactions() {
        try {
            const response = await this.axios.get(path);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    // The transaction ID or Reference is the parameter for this method
    async GetTransaction(transactionId) {
        try {
            const response = await this.axios.get(`${path}/${transactionId}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    // The transaction ID or Reference is the parameter for this method
    async VerifyCollectionTransaction(transactionId) {
        try {
            const response = await this.axios.get(`${path}/verify/${transactionId}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Transactions;
