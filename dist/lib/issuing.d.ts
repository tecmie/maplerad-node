import { AxiosInstance, AxiosResponse } from "axios";
import { CurrencyType } from "../utils";
declare type CardType = "physical" | "virtual";
interface CardPayload {
    customer_id: string;
    type: CardType;
    currency: CurrencyType;
    auto_approve: boolean;
}
export default class Issuing {
    private axios;
    constructor(axios: AxiosInstance);
    CreateCard(payload: CardPayload): Promise<AxiosResponse | any>;
    GetCard(cardID: string): Promise<AxiosResponse | any>;
    GetAllCards(): Promise<AxiosResponse | any>;
    GetCardTransactions(cardID: string): Promise<unknown>;
    FundCard(cardID: string, amount: number): Promise<AxiosResponse | any>;
    WithdrawFromCard(cardID: string, amount: number): Promise<AxiosResponse | any>;
    EnableCard(cardID: string): Promise<AxiosResponse | any>;
    DisableCard(cardID: string): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=issuing.d.ts.map