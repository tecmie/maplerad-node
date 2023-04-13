import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType } from "../utils";
interface QuotePayload {
    source_currency: CurrencyType;
    target_currency: CurrencyType;
    amount: number;
}
export default class Fx {
    private axios;
    constructor(axios: AxiosInstance);
    GenerateQuote(payload: QuotePayload): Promise<AxiosResponse | any>;
    ExchangeCurrency(quote_reference: string): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=fx.d.ts.map