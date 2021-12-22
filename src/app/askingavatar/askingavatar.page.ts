import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AvatarQuestion } from '../avatarquestion/avatarquestion';
import { Avatar } from '../avatar/avatar';

@Component({
  selector: 'app-askingavatar',
  templateUrl: './askingavatar.page.html',
  styleUrls: ['./askingavatar.page.scss'],
})
export class AskingavatarPage implements OnInit {

  // Data passed in by componentProps
  @Input() askedAvatarQuestions: AvatarQuestion[];
  @Input() askingAvatar: Avatar;

  avatarQuestion: AvatarQuestion;

  constructor(public viewController: ModalController) {
    this.avatarQuestion = new AvatarQuestion;
  }

  ngOnInit() {
  }

  //Schliesst das Modal fenster
  dismiss() {
    this.viewController.dismiss(this.askedAvatarQuestions);
  }

  //Behandelt die gestellte Avatar Frage
  askedQuestion(): void {
    if (this.saveAvatarQuestion(this.askedAvatarQuestions)){
      console.log('Alle Fragen:', this.askedAvatarQuestions);
    } else{
      this.dismiss();
    }
  }

  //Speichet die Avatar Frage in einem JSON ab
  // qarr = Fragenliste, welche bereits zur Laufzeit gestellt wurden
  saveAvatarQuestion(qarr: AvatarQuestion[]): boolean {
    if (this.avatarQuestion.value == '' || this.avatarQuestion.value == undefined){
      return false;
    } else {
      this.avatarQuestion.id = qarr.length + 1;
      this.avatarQuestion.date = new Date();
      this.avatarQuestion.type = 'question-avatar';
      this.avatarQuestion.src = 'Sugarly';
      let JSONtest = JSON.parse(JSON.stringify(this.avatarQuestion));
      console.log('Gestellte Frage: ', JSONtest);
      qarr.push(JSONtest);
      this.avatarQuestion.value = '';
      return true;
    }
  }
}
