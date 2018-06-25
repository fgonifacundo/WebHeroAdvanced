import { Component, OnInit, ViewEncapsulation, OnDestroy, Inject, Renderer2, Input, OnChanges } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [
    './loading.component.css'
  ],
  encapsulation: ViewEncapsulation.Emulated
})

export class LoadingComponent implements OnInit, OnDestroy, OnChanges {

  @Input("loading")
  showLoading:boolean = false;
  
  ngOnDestroy(): void {
    this.removeClassLoading();
  }

  ngOnChanges(changes): void{
    if(changes.showLoading.currentValue){
      this.addClassLoading();
    }else{
      
      this.removeClassLoading();
    }
  }

  constructor(private _renderer: Renderer2 ) { 
    
  }

  ngOnInit() {
    this.addClassLoading();
  }

  addClassLoading(){
    this._renderer.addClass(document.body, 'loading');
  }

  removeClassLoading(){
    this._renderer.removeClass(document.body, 'loading');
  }
}
