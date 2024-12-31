import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/app/shared/services/device.model';
import { DeviceService } from 'src/app/shared/services/device.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.css']
})
export class DeviceControlComponent {
  @Input() device!: Device;
  @Output() controlEvent = new EventEmitter<string>();
  constructor(private deviceService: DeviceService,
      private notificationService: NotificationService) {}
  adjustTemperature(value: number): void {
    if (this.device.status === 'Off') {
      return;
    }
  
    if (value < 10 || value > 30) {
      return;
    }
    this.device.temperature = value;
    this.controlEvent.emit(`setTemperature:${value}`);
  }

  adjustCameraSetting(setting: string, value: any): void {
    this.device[setting] = value;
    this.controlEvent.emit(`setCameraSetting:${setting}:${value}`);
  }
  toggleDevice(device: Device): void {
    const newState = device.status === 'On' ? 'Off' : 'On';
    device.status = newState;

    this.deviceService.updateDevice(device).subscribe({
      next: () => {
        const message = `${device.name} turned ${newState}`;
        this.notificationService.addNotification(message);
      },
      error: (err) => {
        console.error('Error updating device:', err);
      }
    });
  }
}