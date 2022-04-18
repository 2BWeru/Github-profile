export class User {
    constructor(
               public avatar_url: string,
               public login: string, 
               public username:string,
               public bio:string,
               public html_url: string,
               public repos: number,){

    }
}
