import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  test = 'test'
  constructor() { 
    console.log('testService')
  }
}
