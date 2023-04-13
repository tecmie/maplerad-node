"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/customers";
class Customers {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async CreateCustomer(payload) {
        try {
            const response = await this.axios.post(`${path}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async UpgradeCustomerTier1(payload) {
        try {
            const response = await this.axios.patch(`${path}/upgrade/tier1`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async UpgradeCustomerTier2(payload) {
        try {
            const response = await this.axios.patch(`${path}/upgrade/tier2`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetCustomer(customerID) {
        try {
            const response = await this.axios.get(`${path}/${customerID}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetAllCustomers() {
        try {
            const response = await this.axios.get(`${path}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetCustomerCards(customerID) {
        try {
            const response = await this.axios.get(`${path}/${customerID}/cards`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetCustomerTransactions(customerID) {
        try {
            const response = await this.axios.get(`${path}/${customerID}/transactions`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async SetCustomerBlacklistActive(customerID, status) {
        try {
            const response = await this.axios.post(`${path}/${customerID}/active`, {
                blacklist: status
            });
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Customers;
