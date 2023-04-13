import { AxiosInstance, AxiosResponse } from "axios";
import { CountryType } from "../utils";
interface BuyAirtimePayload {
    phone_number: string;
    identifier?: string;
    amount: number;
}
export default class Bills {
    private axios;
    constructor(axios: AxiosInstance);
    BuyAirtime(payload: BuyAirtimePayload): Promise<AxiosResponse | any>;
    GetAirtimeBillers(country: CountryType): Promise<AxiosResponse | any>;
    GetAirtimeHistory(): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=bills.d.ts.map