export class QuizQuestion {
    id: number;
    question: string;
    answerText: string;
    answer1: boolean;
    answer2: boolean;
    answer1Image: string;
    answer2Image: string;

    constructor(id: number, question: string, answerText: string, answer1: boolean, answer2: boolean, answer1Image: string, answer2Image: string){
        this.id = id;
        this.question = question;
        this.answerText = answerText;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer1Image = answer1Image;
        this.answer2Image = answer2Image;
    }
}