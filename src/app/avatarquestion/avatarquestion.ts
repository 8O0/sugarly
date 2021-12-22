import { Timestamp } from "rxjs";

export class AvatarQuestion {
    id: number;
    value: string;
    date: Date;
    type: string;
    src: string;

    constructor(){}

    getNumber(): number{
        return this.id;
    }

    getValue(): string{
        return this.value;
    }

    getDate(): Date{
        return this.date;
    }
}