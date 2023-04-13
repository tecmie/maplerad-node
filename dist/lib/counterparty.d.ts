import { AxiosInstance, AxiosResponse } from "axios";
export default class Counterparty {
    private axios;
    constructor(axios: AxiosInstance);
    Blacklist(counterpartyID: string, status: boolean): Promise<AxiosResponse | any>;
    GetCounterparty(counterpartyID: string): Promise<AxiosResponse | any>;
    GetAllCounterparties(): Promise<AxiosResponse | any>;
}
//# sourceMappingURL=counterparty.d.ts.map