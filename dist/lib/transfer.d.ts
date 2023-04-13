import { CurrencyType } from "../utils";
import { AxiosInstance, AxiosResponse } from "axios";
interface IMeta {
    scheme: "DOM" | "CASHPICKUP";
    sender: {
        first_name: string;
        last_name: string;
        phone_number: string;
        address: string;
        country: string;
    };
    counterparty: {
        first_name: string;
        last_name: string;
        phone_number: string;
        address: string;
        country: string;
        identity: string;
    };
}
interface NairaTransferPayload {
    account_number: string;
    amount: number;
    bank_code: string;
    currency: "NGN";
}
interface TransferPayload {
    account_number: string;
    amount: number;
    bank_code: string;
    currency: CurrencyType;
    meta: IMeta;
    reason: string;
    reference: string;
}
export default class Transfers {
    private axios;
    constructor(axios: AxiosInstance);
    NairaTransfer(payload: NairaTransferPayload): Promise<AxiosResponse | any>;
    DOMTransfer(payload: TransferPayload): Promise<AxiosResponse | any>;
    CashPickupTransfer(payload: TransferPayload): Promise<AxiosResponse | any>;
    GetTransfer(transferID: string): Promise<AxiosResponse | any>;
    GetAllTransfers(): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=transfer.d.ts.map