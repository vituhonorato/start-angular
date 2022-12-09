import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title="eai manin"></app-title>
  <router-outlet></router-outlet>`
  
})
export class AppComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
    setTimeout(() =>{
      console.log('hello world')
    },5000)
    
  }
}
