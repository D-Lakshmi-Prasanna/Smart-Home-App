import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = '/api/devices';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  updateDevice(device: Device): Observable<any> {
    return this.http.put(`${this.apiUrl}/${device.id}`, device);
  }

  getDeviceById(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/${id}`);
  }
  
}