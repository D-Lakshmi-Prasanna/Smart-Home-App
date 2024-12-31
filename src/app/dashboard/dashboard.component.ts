import { Component, OnInit } from '@angular/core';
import { Device } from '../shared/services/device.model';
import { DeviceService } from '../shared/services/device.service';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

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
