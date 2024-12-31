import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../shared/services/device.service';
import { Device } from '../shared/services/device.model';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-device-settings',
  templateUrl: './device-settings.component.html',
  styleUrls: ['./device-settings.component.scss']
})
export class DeviceSettingsComponent implements OnInit {
  device!: Device;
  deviceId: number | null = null;

  constructor(private deviceService: DeviceService,
    private route: ActivatedRoute,
    private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.deviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.deviceService.getDeviceById(this.deviceId).subscribe((data: Device) => {
      this.device = data;
    });
  }
}
