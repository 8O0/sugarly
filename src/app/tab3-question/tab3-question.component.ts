import { Component, OnInit,Input } from '@angular/core';
import {data} from './questions';

interface Question {
  id: number;
  question: string;
  answer: string;
  explanation: string;
}

@Component({
  selector: 'app-tab3-question',
  templateUrl: './tab3-question.component.html',
  styleUrls: ['./tab3-question.component.scss'],
})
export class Tab3QuestionComponent implements OnInit {

  questions: Question[] = data;

  constructor() {
   }

  ngOnInit() {

  }
  
  questionObject = this.questions[1];


}
