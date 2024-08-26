import { Component, Renderer2, HostListener, ChangeDetectorRef, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatGridListModule, MatCardModule, MatChipsModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent  {

  coursework = ["Natural Language Processing", "Machine Learning", "AI", "Human Computer Interaction", "Database Design", "Design and Analysis of Computer Algorithms", "Operating Systems Concepts"]
  skills = ["Python", "Natural Language Processing", "Machine Learning/AI", "Java", "Angular", "JavaScript", "HTML", "CSS", "Git", "Assembly Language"]


  gridCols: number = 2;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols(event.target.innerWidth);
  }

  ngOnInit() {
    this.updateGridCols(window.innerWidth);
  }

  updateGridCols(width: number) {
    if (width <= 1260) {
      this.gridCols = 1; // Stack items in one column
    } else {
      this.gridCols = 2; // Default number of columns
    }
  }
}