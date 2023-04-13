import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType } from "../utils";
interface VirtualAccountPayload {
    customer_id: string;
    currency: string;
}
interface DirectDebitPayload {
    currency: CurrencyType;
    amount: number;
    reference: string;
    description: string;
}
export default class Collections {
    private axios;
    constructor(axios: AxiosInstance);
    CreateVirtualAccount(payload: VirtualAccountPayload): Promise<AxiosResponse | any>;
    DirectDebit(payload: DirectDebitPayload): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=collections.d.ts.map