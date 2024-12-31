import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DeviceSettingsComponent } from './device-settings/device-settings.component';
import { DeviceControlComponent } from 'projects/smart-home-components/src/lib/device-control/device-control.component';
import { DeviceCardComponent } from 'projects/smart-home-components/src/lib/device-card/device-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeviceControlComponent,
    NotificationsComponent,
    DeviceSettingsComponent,
    DeviceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}