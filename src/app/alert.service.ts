import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }
  alertin(message: string): void {
    
    alert(message);
  }
  
}
