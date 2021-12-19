import { Option } from './option';

export class Question {
    id: number;
    name: string; 
    type: number;
    questionTypeId: number;
    options: Option[];
    answered: boolean=false;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.type = data.type;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach((o:any) => {
            this.options.push(new Option(o));
        });
    }
}
