import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatCardModule, MatGridListModule, MatChipsModule, ProjectComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {

  skills = ["Python", "Visual Studio Code"]
  discription = ["Created a Chatbot to answer suer questions about espresso.", "Trained a Keras Sequential neural network model to map user questions to an accurate response"]

  projData = [
    { name: 'Espresso Chatbot', skills: ["Python", "Visual Studio Code"], descriptions: ["Created a Chatbot to answer user questions about espresso.", "Trained a Keras Sequential neural network model to map user questions to an accurate response"],
       height: '3rem', link: "https://github.com/AmyMendiola/Espresso_Chatbot" },
    { name: 'Housing Dataset Machine Learning Models', skills: ["Python", "Jupyter Notebook", "Visual Studio Code", "Kaggle"], descriptions: ["Accurately curated multiple machine learning models to predict the housing sales prices of the selected dataset","Evaluation of results and understanding of reasonings of model performance"],
      height: '3rem', link: "https://github.com/AmyMendiola/Housing-Dataset-ML-Models" },
    { name: 'Portfolio Website', skills: ["Angular", "Type Script", "HTML", "CSS", "Visual Studio Code"], descriptions: ["Created a personal website that displays information about resume, about page, projects and contact information", "Utilizes Angular material and contains page jumps"],
      height: '3rem', link: "https://github.com/AmyMendiola/amymendiola.github.io" },
    { name: 'Scratch Machine Learning Models', skills: ["Python", "Jupyter Notebook", "Visual Studio Code"], descriptions: ["Created multiple machine learning projects from scratch", "Models include: Decision Trees, K-Means, K-Medoids, K Nearest Neighbors, Linear Regression, Perceptron, SVM"],
        height: '3rem', link: "https://github.com/AmyMendiola/Scratch-ML-Models" }

  ]


}
