import { Component } from '@angular/core';
import { FAQQuestionService } from '../faq-question.service';
import { FAQQuestion } from '../faq-question/faq-question';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

//Datenmodell laden
import { AvatarQuestion } from '../avatarquestion/avatarquestion';
//Fragen laden
import { FAQ_QUESTIONS } from '../faq-question/faq-question-dummydata';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //API Liste
  //static API_ENDPOINT = 'https://reqres.in/api/posts'
  static API_ENDPOINT = 'http://demo8271201.mockable.io/testdaten'
  //API Variables
  postId;
  errorMessage;
  //Fragenarray initialisieren
  questions: FAQQuestion[];
  askingQuestion: boolean;
  askedAvatarQuestions: AvatarQuestion[];
  avatarQuestion: AvatarQuestion;
  
  
  constructor(private toastController: ToastController,
              private http: HttpClient, 
              private faqQuestionService: FAQQuestionService) {
    this.questions = FAQ_QUESTIONS;
    this.avatarQuestion = new AvatarQuestion();
    this.askedAvatarQuestions = [];
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

  //Speichet die Avatar Frage in einem JSON ab
  saveAvatarQuestion(qarr: AvatarQuestion[]): boolean {
    //Prüfe Input
    if (this.avatarQuestion.value == "" || this.avatarQuestion.value == undefined){
      return false;
    } else {
      //Ergänze das Objekt mit den korrekten Daten
      this.avatarQuestion.id = qarr.length + 1;
      this.avatarQuestion.date = new Date();
      //Konvertiere das Object in ein JSON Objekt und hänge es an die Frageliste an
      let JSONtest = JSON.parse(JSON.stringify(this.avatarQuestion));
      qarr.push(JSONtest);
      //console.log(qarr);
      //Frage in Datei speichern
      //this.postData(qarr);
      let test = this.getData();
      //Frage reseten, damit weitere gestellt werden können
      this.avatarQuestion.value = "";
      return true;
    }
  }

  //Message anzeigen dass die Frage gespeichert wurde
  async toastQuestionSaved() {
    const toast = await this.toastController.create({
      message: 'Deine Frage wurde gespeichert.',
      duration: 2000
    });
    console.log("LOG: Frage wurde gespeichert")
    toast.present();
  }

  //Message anzeigen, dass die Frage nicht gespeichert wurde
  async toastQuestionNotSaved() {
    const toast = await this.toastController.create({
      message: 'Deine Frage wurde nicht gespeichert.',
      duration: 2000
    });
    console.log("LOG: Frage wurde nicht gespeichert")
    toast.present();
  }

  //Initialisiert Avatar-Fragefeld
  askQuestion(): void {
    this.askingQuestion = true;
  }

  //Behandelt die gestellte Avatar Frage
  askedQuestion(): void {
    if (this.saveAvatarQuestion(this.askedAvatarQuestions)){
      this.toastQuestionSaved();
    } else{
      this.toastQuestionNotSaved();
    }
    this.askingQuestion = false;
  }

  //Send Data to external POST API Service
  postData(provData: AvatarQuestion[]):boolean {
    this.http.post<any>(Tab1Page.API_ENDPOINT, provData).subscribe({
        next: data => {
            this.postId = data.id;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
    return true;
  }

  //Get Data from external GET API Service
  getData(){
    let temp = new AvatarQuestion;
    this.http.get(Tab1Page.API_ENDPOINT).subscribe((data: AvatarQuestion[]) => {
      //TODO Convert into JSON Object
      console.log(data);
    })
    
  }
}
