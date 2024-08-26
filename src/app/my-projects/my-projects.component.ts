import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatChipsModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

  skills = ["Python", "Visual Studio Code"]
  discription = ["Created a Chatbot to answer suer questions about espresso.", "Trained a Keras Sequential neural network model to map user questions to an accurate response"]

}
