import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from '../../shared/services/theme-mode.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userPreferredDark = false;

  constructor(private theme: ThemeModeService) { }

  ngOnInit(): void {
    const userPreferredScheme = localStorage.getItem('userPreferredScheme');
    if(userPreferredScheme){
      this.userPreferredDark = userPreferredScheme.match('dark') ? true : false;
    }
  }

  setUserPreferredScheme(event: Event){
    const schemeToggle = event.target as HTMLInputElement;
    if(schemeToggle.checked){
      localStorage.setItem('userPreferredScheme', 'dark');
    }
    else{
      localStorage.setItem('userPreferredScheme', 'light');
    }
    this.theme.updateTheme();
  }

}
