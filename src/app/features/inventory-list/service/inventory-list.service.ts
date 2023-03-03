import { Injectable } from '@angular/core';
import { InventoryItem } from '../model/inventory-item.model';

@Injectable({
    providedIn:"root"
})
export class InventoryService {
private inventory: InventoryItem[] = [
    { id: 1, name: 'Item 1', description: 'This is item 1', quantity: 10, price: 9.99 },
    { id: 2, name: 'Item 2', description: 'This is item 2', quantity: 20, price: 19.99 },
    { id: 3, name: 'Item 3', description: 'This is item 3', quantity: 30, price: 29.99 },
  ];

  constructor() { }

  getInventory(): InventoryItem[] {
    return this.inventory;
  }


}
