"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/counterparties";
class Counterparty {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async Blacklist(counterpartyID, status) {
        try {
            const response = await this.axios.post(`${path}/blacklist/${counterpartyID}`, {
                blacklist: status
            });
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetCounterparty(counterpartyID) {
        try {
            const response = await this.axios.get(`${path}/${counterpartyID}`);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async GetAllCounterparties() {
        try {
            const response = await this.axios.get(path);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
}
exports.default = Counterparty;
