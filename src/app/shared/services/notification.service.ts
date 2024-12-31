import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: string[] = [];

  getNotifications(): string[] {
    return this.notifications;
  }

  addNotification(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.notifications.push(`[${timestamp}] : ${message}`);
  }
}