import { Component } from '@angular/core';
import { FAQQuestionService } from '../faq-question.service';
import { FAQQuestion } from '../faq-question/faq-question';
//Fragen laden
import { FAQ_QUESTIONS } from '../faq-question/faq-question-dummydata';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Fragenarray initialisieren
  questions: FAQQuestion[];
  askingQuestion: boolean;
  
  constructor(private faqQuestionService: FAQQuestionService) {
    this.questions = FAQ_QUESTIONS;
  }

  //Verhalten beim klicken einer Frage
  // question = ausgewählte Frage
  expandQuestion(question): void {
    if (question.expanded) {
      question.expanded = false;
    } else {
      this.questions.map(listItem => {
        if (question == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  askQuestion(): void {
    this.askingQuestion = true;
  }

  askedQuestion(): void {
    this.askingQuestion = false;
  }

}
