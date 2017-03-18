import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-operators';
import {ContextMenuModule,GrowlModule,SplitButtonModule,DropdownModule,DialogModule,TieredMenuModule,DataTableModule, SharedModule} from 'primeng/primeng';
import {ButtonModule,PasswordModule,InputTextModule,MessagesModule,InputMaskModule,ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { TallerComponent } from './taller/taller.component';

@NgModule({
  declarations: [
    AppComponent,
    TallerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,ContextMenuModule,GrowlModule,SplitButtonModule,DropdownModule,DialogModule,TieredMenuModule,DataTableModule, SharedModule,
    ButtonModule,PasswordModule,InputTextModule,MessagesModule,InputMaskModule,ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
