import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatChipsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

@Input() link= "";
@Input() name= "";
@Input() desc: any[] | undefined;
@Input() height= "";
@Input() skills: any[] | undefined;

}
