import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from "./tool-bar/tool-bar.component";
import { AboutComponent } from "./about/about.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolBarComponent, AboutComponent, AboutMeComponent, MyProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amymendiola.github.io';
}
