import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from './shared/services/theme-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'invoice-app';

  constructor(private theme: ThemeModeService){}

  ngOnInit(): void {
    this.theme.updateTheme();
    let osScheme = window.matchMedia('(prefers-color-scheme: dark)');

    osScheme.addEventListener('change', () => {
      this.theme.updateTheme();
    });
  }
}
