import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items = [{
    name: "Peanut Butter",
    quantity: 1
  },
  {
    name: "Bread",
    quantity: 1
  },
  {
    name: "Nutella",
    quantity: 1
  },
  {
    name: "Jam",
    quantity: 1
  }
  ];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController){}

  async removeItem(item, index) {
    console.log("Removing Item - ", item, index)
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + '...',
      duration: 3000
  
    });
    (await toast).present();

    this.items.splice(index, 1);

  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }


  async showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      header: 'Add Item',
      message: 'Enter Item Name:',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log("Cancel clicked");
          }},
          {
          text: 'Add',
          handler: item => {
            console.log("Add clicked", item);
            this.items.push(item);

          }}
      ]

    });
    (await prompt).present()
  

  }
  
}

