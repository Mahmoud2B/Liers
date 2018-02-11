import { User, UserInterface } from "./user";
export class ModelFactories {


  //instance factories

  static user(data: UserInterface | User | any): User {
    return data instanceof User ? data : new User(data);
  }
  //list factories

  static users(data: Array<UserInterface | any>): User[] {
    return data.map(data => ModelFactories.user(data));
  }
}
