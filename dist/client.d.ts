import Issuing from "./lib/issuing";
import Transfers from "./lib/transfer";
import Bills from "./lib/bills";
import Fx from "./lib/fx";
import Misc from "./lib/misc";
import Collections from "./lib/collections";
import Customers from "./lib/customers";
import Institution from "./lib/institution";
import Counterparty from "./lib/counterparty";
import Wallets from "./lib/wallets";
import Transactions from "./lib/transactions";
declare type Env = "live" | "sandbox";
export default class Maplerad {
    private readonly secretKey;
    Issuing: Issuing;
    Transfers: Transfers;
    Bills: Bills;
    Fx: Fx;
    Misc: Misc;
    Collections: Collections;
    Customers: Customers;
    Institution: Institution;
    Counterparty: Counterparty;
    Wallets: Wallets;
    Transactions: Transactions;
    constructor(key: string, environment: Env);
}
export {};
//# sourceMappingURL=client.d.ts.map