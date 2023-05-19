import { Role } from "./Role";

export class User {
    constructor (
        public id : number,
        public nomUser : string,
        public prenomUser : string,
        public emailUser : string,
        public motPasseUser : string,
        public listeRole : Role[]
        
    ){}
}