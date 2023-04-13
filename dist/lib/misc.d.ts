import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType } from "../utils";
interface TestWalletPayload {
    amount: string;
    currency: CurrencyType;
}
export default class Misc {
    private axios;
    constructor(axios: AxiosInstance);
    GetCurrencies(): Promise<AxiosResponse | any>;
    CreditTestWallet(payload: TestWalletPayload): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=misc.d.ts.map