import {BaseModel, BaseModelInterface} from "./base-model";
export interface UserInterface extends BaseModelInterface{
    id:string,
    uuid:string,
    email:string,
    phone:string,
    username:string,
    password:string
}
export class User extends BaseModel implements UserInterface{
    public id:string;
    public uuid:string;
    public email:string;
    public phone:string;
    public username:string;
    public password:string;
    constructor(data: UserInterface | any) {
        super(data);
    }

}