import { Component } from '@angular/core';
import { FAQQuestionService } from '../faq-question.service';
import { FAQQuestion } from '../faq-question/faq-question';
import { IonRouterOutlet, ModalController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

//Datenmodell laden
import { AvatarQuestion } from '../avatarquestion/avatarquestion';
//Fragen laden
import { FAQ_QUESTIONS } from '../faq-question/faq-question-data';
import { AVATAR_COLLECTION } from '../avatar/avatargenerator';
import { Observable } from 'rxjs';
import { AskingavatarPage } from '../askingavatar/askingavatar.page';
import { ChangeavatarPage } from '../changeavatar/changeavatar.page';
import { Avatar } from '../avatar/avatar';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //API Liste
  static API_ENDPOINT = 'http://demo8271201.mockable.io/testdaten'
  //API Variables
  sub;
  postId;
  errorMessage;
  //Fragenarray initialisieren
  questions: FAQQuestion[];
  askingQuestion: boolean;
  askedAvatarQuestions: AvatarQuestion[];
  avatarQuestion: AvatarQuestion;
  activeAvatar: Avatar;
  
  
  constructor(private toastController: ToastController,
              private http: HttpClient,
              public routerOutlet: IonRouterOutlet,
              public modalController: ModalController, 
              private faqQuestionService: FAQQuestionService) {
    this.questions = FAQ_QUESTIONS;
    this.avatarQuestion = new AvatarQuestion();
    this.askedAvatarQuestions = [];
    this.activeAvatar = AVATAR_COLLECTION.get('nina');
  }

  /**
   * Destruktor für Angular
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * Zeigt das Modal für die Avatar-Frage an
   * @param {AvatarQuestion} qarr Fragenarray der bisher gestellten Fragen
   * @param {Avatar} a Momentan aktiver Avatar
   * @returns Modalfenster für Avatarfrage
   */
  async presentAskModal(qarr: AvatarQuestion[], a: Avatar) {
    const modal = await this.modalController.create({
      component: AskingavatarPage,
      cssClass: 'askingavatar.page.scss',
      componentProps: {
        'askedAvatarQuestions': qarr,
        'activeAvatar': a
      }
    });
    
    return await modal.present();
  }

  
  /**
   * //Zeigt das Modal für die Änderung des Avatars an
   * @returns Modalfenster für Avatarwechsel
   */
  async presentChangeModal() {
    const modal = await this.modalController.create({
      component: ChangeavatarPage,
      cssClass: 'changeavatar.page.scss',
      componentProps: {
        
      }
    });
    
    return await modal.present();
  }

  /**
   * Listenerfunktion für den Avaterwechsel
   */
  changeAvatar(): void {
    this.presentChangeModal();
  }

  /**
   * Listenerfunktion für die Avatarfrage
   */
  askQuestion(): void {
    this.presentAskModal(this.askedAvatarQuestions, this.activeAvatar);
  }
  
  /**
   * Datenverarbeitung nach gestellten Fragen
   */
  askedQuestion(): void {
    if (true){
      this.toastQuestionSaved();
    } else{
      this.toastQuestionNotSaved();
    }
  }

  /**
   * Steuert die FAQ Darstellung des Akkordeons
   * @param question Frage, die angeklickt wurde
   */
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

  /**
   * Anzeige, dass die gestellte/n Avatarfrage/n gespeichert wurden
   */
  async toastQuestionSaved() {
    const toast = await this.toastController.create({
      message: 'Deine Frage wurde gespeichert.',
      duration: 2000
    });
    console.log("LOG: Frage wurde gespeichert")
    toast.present();
  }

  /**
   * Anzeige, dass die gestellte/n Avatarfrage/n nicht gespeichert wurden
   */
  async toastQuestionNotSaved() {
    const toast = await this.toastController.create({
      message: 'Deine Frage wurde nicht gespeichert.',
      duration: 2000
    });
    console.log("LOG: Frage wurde nicht gespeichert")
    toast.present();
  }

  //Sende Daten zu externem REST API
  // provData = Daten, welche zur REST API gesendet werden sollen
  /**
   * Sende Daten zum externen REST API
   * @param provData Zu sendende Daten
   * @returns Status der Sendung
   */
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

  /**
   * Erhalte Daten von externem REST API
   */
  getData(){
    this.sub = this.http.get(Tab1Page.API_ENDPOINT).subscribe((data: AvatarQuestion[]) => {
      this.askedAvatarQuestions = Object.assign(data);
    })
  }
}
