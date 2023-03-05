import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory-list.service';
import { InventoryItem } from '../model/inventory-item.model'
import { AddInventoryItemService } from '../../add-inventory-item/service/add-inventory-item.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: '../pages/inventory-list.component.html',
  styleUrls: ['../styles/styles.css']
})
export class InventoryListComponent implements OnInit {
  inventory: InventoryItem[]=[];

  constructor(private inventoryService: InventoryService, private addInventoryIemService: AddInventoryItemService) { }

  ngOnInit(): void {
    this.inventory = this.inventoryService.getInventory();
  }
 }
