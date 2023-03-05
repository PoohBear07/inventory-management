import { Injectable } from '@angular/core';
import { InventoryItem } from '../../inventory-list/model/inventory-item.model';
import { InventoryService } from '../../inventory-list/service/inventory-list.service';

@Injectable({
    providedIn:"root"
})
export class AddInventoryItemService {

constructor(private inventoryService: InventoryService) {}

addItem(inventoryItem: InventoryItem) {
    console.log(inventoryItem);
    this.inventoryService.addItem(inventoryItem);
  }


}
