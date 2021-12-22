import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  questionShow = true;
  scoreShow = true;
  answerShow = true;
  

  showQuestion() {
   this.questionShow = !this.questionShow;
   this.scoreShow = !this.scoreShow;
  }

  showAnswer() {
    this.questionShow = !this.questionShow;
    this.answerShow = !this.answerShow;
   }

  constructor() {}

}
