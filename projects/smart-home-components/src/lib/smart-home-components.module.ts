import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceCardComponent } from './device-card/device-card.component';
import { DeviceControlComponent } from './device-control/device-control.component';

@NgModule({
  declarations: [
    DeviceCardComponent,
    DeviceControlComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DeviceCardComponent,    
    DeviceControlComponent, 
  ]
})
export class SmartHomeComponentsModule {}
