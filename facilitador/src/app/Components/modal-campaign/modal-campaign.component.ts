import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-campaign',
  templateUrl: './modal-campaign.component.html',
  styleUrls: ['./modal-campaign.component.scss'],
})
export class ModalCampaignComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  close() {
    this.modalController.dismiss()
  }

}
