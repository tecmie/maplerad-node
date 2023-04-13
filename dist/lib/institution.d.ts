import { AxiosInstance, AxiosResponse } from "axios";
interface InstitutionsParams {
    page?: string;
    pageSize?: string;
    type?: string;
    country?: string;
}
interface ResolveInstitutionPayload {
    account_number: string;
    bank_code: string;
}
export default class Institution {
    private axios;
    constructor(axios: AxiosInstance);
    GetAllInstitutions({ page, pageSize, country, type }: InstitutionsParams): Promise<AxiosResponse | any>;
    ResolveInstitution(payload: ResolveInstitutionPayload): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=institution.d.ts.map