import { AxiosInstance, AxiosResponse } from "axios";
export default class Transactions {
    private axios;
    constructor(axios: AxiosInstance);
    GetAllTransactions(): Promise<AxiosResponse | any>;
    GetTransaction(transactionId: string): Promise<AxiosResponse | any>;
    VerifyCollectionTransaction(transactionId: string): Promise<AxiosResponse | any>;
}
//# sourceMappingURL=transactions.d.ts.map