import { Injectable } from '@angular/core';
import { InventoryItem } from '../model/inventory-item.model';

@Injectable({
    providedIn:"root"
})
export class InventoryService {
private inventory: InventoryItem[] = [
    {  itemName: 'Item 1', itemDescription: 'This is item 1',  itemPrice: 9.99 },
    {  itemName: 'Item 2', itemDescription: 'This is item 2',  itemPrice: 19.99 },
    {  itemName: 'Item 3', itemDescription: 'This is item 3',  itemPrice: 29.99 },
  ];

  constructor() { }

  getInventory(): InventoryItem[] {
    return this.inventory;
  }

 addItem(item:InventoryItem) {
    this.inventory.push({itemName: item.itemName, itemDescription: item.itemDescription,itemPrice: item.itemPrice});
  console.log(this.inventory);
  }
}
