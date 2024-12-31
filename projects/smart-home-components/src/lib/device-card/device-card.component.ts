import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/app/shared/services/device.model';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent {
  @Input() device!: Device;
  devices: Device[] = [];
  constructor(private deviceService: DeviceService){}
  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe(
      (data) => {
        this.devices = data;
      },
      (error) => {
        console.error('Error fetching devices:', error);
      }
    );
  }
}
