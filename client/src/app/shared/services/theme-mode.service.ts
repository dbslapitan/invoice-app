import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {

  constructor() {}

  updateTheme(){
    const theme = localStorage.getItem('userPreferredScheme');
    if(theme?.match('dark')){
      document.body.classList.toggle('dark-mode', true);
    }
    else if(theme?.match('light')){
      document.body.classList.toggle('dark-mode', false);
    }
    else{
      document.body.classList.toggle('dark-mode', window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }
}
