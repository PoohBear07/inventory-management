import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryModule } from './features/inventory-list/inventory-list.module'
import { InventoryListComponent } from './features/inventory-list/component/inventory-list.component'
import { AddInventoryItemComponent } from './features/add-inventory-item/component/add-inventory-item.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InventoryListComponent,
    AddInventoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
