import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCampaignComponent } from './../../Components/modal-campaign/modal-campaign.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalController: ModalController
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
