import { Component } from '@angular/core';
import { data } from './questions';

interface Question {
  id: number;
  question: string;
  answer: string;
  explanation: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  questionShow = false;
  scoreShow = true;
  answerShow = false;
  noHeader = false;
  

  showQuestion() {
    this.noHeader = true;
    this.questionShow = !this.questionShow;
    this.scoreShow = !this.scoreShow;
  }

  showAnswer() {
    this.noHeader = true;
    this.questionShow = !this.questionShow;
    this.answerShow = !this.answerShow;
   }
   questions: Question[] = data;

  constructor() {}
  questionObject = this.questions[0];
}
