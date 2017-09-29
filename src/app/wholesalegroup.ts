import { User } from './user';

export class WholseSaleGroup {
    master: User;
    members: Array<User>;
    size: number;

    constructor(
        iMaster: User,
        iSize: number) {
        this.master = iMaster;
        this.size = iSize;
    }

    /**
     * addMember
     */
    public addMember(members: User) {

    }
}
