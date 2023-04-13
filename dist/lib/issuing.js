"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/issuing";
class Issuing {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async CreateCard(payload) {
        try {
            const response = await this.axios.post(`${path}`, payload);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetCard(cardID) {
        try {
            const response = await this.axios.get(`${path}/${cardID}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetAllCards() {
        try {
            const response = await this.axios.get(`${path}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetCardTransactions(cardID) {
        try {
            const response = await this.axios.get("");
        }
        catch (error) {
            return error;
        }
    }
    async FundCard(cardID, amount) {
        try {
            const response = await this.axios.post(`${path}/${cardID}/fund`, {
                amount
            });
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async WithdrawFromCard(cardID, amount) {
        try {
            const response = await this.axios.post(`${path}/${cardID}/withdraw`, {
                amount
            });
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async EnableCard(cardID) {
        try {
            const response = await this.axios.patch(`${path}/${cardID}/enable`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async DisableCard(cardID) {
        try {
            const response = await this.axios.patch(`${path}/${cardID}/disable`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Issuing;
