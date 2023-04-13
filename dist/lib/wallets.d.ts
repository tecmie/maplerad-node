import { AxiosInstance, AxiosResponse } from "axios";
export default class Wallets {
    private axios;
    constructor(axios: AxiosInstance);
    GetWallets(): Promise<AxiosResponse | any>;
    GetWalletByCurrency(currencyCode: string): Promise<AxiosResponse | any>;
    GetWalletsHistory(): Promise<AxiosResponse | any>;
    GetWalletsHistoryByCurrency(currencyCode: string): Promise<AxiosResponse | any>;
}
//# sourceMappingURL=wallets.d.ts.map