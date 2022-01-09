import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonLabel, IonSlides, ModalController } from '@ionic/angular';
import { Avatar } from '../avatar/avatar';

@Component({
  selector: 'app-changeavatar',
  templateUrl: './changeavatar.page.html',
  styleUrls: ['./changeavatar.page.scss'],
})
export class ChangeavatarPage implements OnInit {

  @Input() allAvatars: Map <string,Avatar>;
  @Input() selectedAvatar: Avatar;
  @ViewChild('slider', {static: true}) slider: IonSlides;

  constructor(public viewController: ModalController) {     
  }

  ngOnInit() {
    
  }

  /**
   * Schliess das Modal-Fenster
   */
  dismiss(){
    this.viewController.dismiss(this.selectedAvatar);
  }

  /**
   * Iteriert die Liste von Avataren und setzt den neuen aktiven Avatar anhand Index
   */
  selectAvatar(){
      this.slider.getActiveIndex().then((index: number) => {
        this.allAvatars.forEach(
          avatar => {
            if (index == avatar.getID()){
              this.selectedAvatar = this.allAvatars.get(avatar.getName().toLowerCase());
              this.dismiss();
            }
          })
      })
  }
}
