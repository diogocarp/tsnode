import { BaseRepository } from "../interfaces/BaseRepository";
import { User } from "../schemas/User";

export class UserRepository extends BaseRepository<User>{
    
    public findAll(): Promise<User[]>{
        var user = new User('','','');
        var users = this.find(user)
        return users 
    }

    public async findUserById(id: string): Promise<User>{
        var user = new User(id,'','')
        this.findOne(id) 
        return user
    }

}