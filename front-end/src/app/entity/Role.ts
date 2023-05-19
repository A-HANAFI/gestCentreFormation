import { Permission } from "./Permission";

export class Role{

    constructor(
       public id : number,
        public intituleRole : string,
        public descriptionRole : string,
        public listePermission : Permission[]
    ){}
}