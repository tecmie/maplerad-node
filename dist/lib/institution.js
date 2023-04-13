"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = "/institutions";
class Institution {
    axios;
    constructor(axios) {
        this.axios = axios;
    }
    async GetAllInstitutions({ page, pageSize, country, type }) {
        let query = "?";
        query += page ? `${page}&` : "";
        query += pageSize ? `${pageSize}&` : "";
        query += country ? `${country}&` : "";
        query += type ? `${type}&` : "";
        try {
            const response = await this.axios.get(path + query);
            return response.data;
        }
        catch (error) {
            return error;
        }
    }
    async ResolveInstitution(payload) {
        try {
            const response = await this.axios.post(`${path}/resolve`, {
                payload
            });
            return response.data;
        }
        catch (error) {
            return error.data;
        }
    }
}
exports.default = Institution;
