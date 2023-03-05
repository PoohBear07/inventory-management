import { Component, OnInit } from '@angular/core';

import { InventoryItem } from '../../inventory-list/model/inventory-item.model';
import { AddInventoryItemService } from '../service/add-inventory-item.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-inventory-item',
  templateUrl: '../pages/add-inventory-item.component.html',
  styleUrls: ['../styles/add-inventory-item-styles.css']
})
export class AddInventoryItemComponent  {
 item: InventoryItem = {
 itemName: '', itemDescription: '', itemPrice: 0
 };

  constructor(private addInventoryItemService: AddInventoryItemService) {}

onSubmit() {

this.addInventoryItemService.addItem(this.item);
  }

 }
