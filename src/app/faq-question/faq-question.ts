export class FAQQuestion {
    id: number;
    heading: string;
    content: string;
    expanded: boolean;

    constructor(id: number, heading: string, content: string, expanded: boolean){
        this.id = id;
        this.heading = heading;
        this.content = content;
        this.expanded = expanded;
    }
}