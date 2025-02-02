import {AxiosInstance, AxiosResponse} from "axios";
import {CountryType} from "../utils";

const path = "/customers"

interface IAddress {
    city:string
    country:string
    postal_code:string
    state:string
    street:string
    street2:string
}
interface _Identity{
    country:string
    image?:string
    number:string
    type:string
}

interface CreateCustomerPayload {
    email:string
    first_name:string
    last_name:string
    country: CountryType
}
interface TierOnePayload {
    customer_id:string
    phone_number:string
    address : IAddress
    dob:string
    identification_number: string
}
interface TierTwoPayload {
    customer_id:string
    identity: _Identity
}

export default class Customers {
    private axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    public async CreateCustomer(payload: CreateCustomerPayload): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async UpgradeCustomerTier1(payload: TierOnePayload): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.patch(`${path}/upgrade/tier1`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async UpgradeCustomerTier2(payload: TierTwoPayload): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.patch(`${path}/upgrade/tier2`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetCustomer(customerID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${customerID}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetAllCustomers(): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetCustomerCards(customerID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${customerID}/cards`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async GetCustomerTransactions(customerID: string): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.get(`${path}/${customerID}/transactions`)
            return response.data
        }catch (error){
            return error
        }
    }
    public async SetCustomerBlacklistActive(customerID: string, status: boolean): Promise<AxiosResponse | any>{
        try{
            const response = await this.axios.post(`${path}/${customerID}/active`, {
                blacklist:status
            })
            return response.data
        }catch (error){
            return error
        }
    }
}