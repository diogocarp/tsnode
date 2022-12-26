import { Data } from "node-lombok";

Data()
export class User {


    private id: string;
    private name: string;
    private email: string;  

    public constructor(id:string, name: string, email: string) {

        this.id = id;
        this.name = name;
        this.email = email;

    }  

}

