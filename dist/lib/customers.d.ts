import { AxiosInstance, AxiosResponse } from "axios";
import { CountryType } from "../utils";
interface IAddress {
    city: string;
    country: string;
    postal_code: string;
    state: string;
    street: string;
    street2: string;
}
interface _Identity {
    country: string;
    image?: string;
    number: string;
    type: string;
}
interface CreateCustomerPayload {
    email: string;
    first_name: string;
    last_name: string;
    country: CountryType;
}
interface TierOnePayload {
    customer_id: string;
    phone_number: string;
    address: IAddress;
    dob: string;
    identification_number: string;
}
interface TierTwoPayload {
    customer_id: string;
    identity: _Identity;
}
export default class Customers {
    private axios;
    constructor(axios: AxiosInstance);
    CreateCustomer(payload: CreateCustomerPayload): Promise<AxiosResponse | any>;
    UpgradeCustomerTier1(payload: TierOnePayload): Promise<AxiosResponse | any>;
    UpgradeCustomerTier2(payload: TierTwoPayload): Promise<AxiosResponse | any>;
    GetCustomer(customerID: string): Promise<AxiosResponse | any>;
    GetAllCustomers(): Promise<AxiosResponse | any>;
    GetCustomerCards(customerID: string): Promise<AxiosResponse | any>;
    GetCustomerTransactions(customerID: string): Promise<AxiosResponse | any>;
    SetCustomerBlacklistActive(customerID: string, status: boolean): Promise<AxiosResponse | any>;
}
export {};
//# sourceMappingURL=customers.d.ts.map