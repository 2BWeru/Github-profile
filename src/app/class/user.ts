export class User {
     public_repos!: number;
    
     
     constructor(public id:number,
               public avatar_url: string,
               public login: string, 
               public username:string,
               public bio:string,
               public html_url: string,
               public repos: number,){

    }
}
