import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { userInterface } from 'src/app/models/interfaces';
import { ModalCampaignComponent } from './../../Components/modal-campaign/modal-campaign.component';
import { LoggedService } from './../../services/logged/logged.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public user: userInterface = this.loggedService.getUser()

  constructor(
    private modalController: ModalController,
    private loggedService: LoggedService,
  ) { }

  ngOnInit() {
  }

  async openModalCampaign() {
    const modal = await this.modalController.create({
      component: ModalCampaignComponent,
      componentProps: {
        data: {
          type: 'campaign',
          data: {

          },
        }
      }
    });
    await modal.present();
    await modal.onWillDismiss();
  }


}
