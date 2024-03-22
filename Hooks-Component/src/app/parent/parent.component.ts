import { ChildComponent } from '../child/child.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  tableData = [
    { name: 'Aswin', age: 25, country: 'USA' },
    { name: 'Aparna', age: 22, country: 'India' },
    { name: 'Jimily', age: 25, country: 'Canada' },
    { name: 'Jithin', age: 30, country: 'UK' },
    { name: 'Arjun', age: 27, country: 'India' },
    { name: 'Anandhan', age: 24, country: 'India' },
    { name: 'Sachin', age: 28, country: 'Italy' }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Parent component initialized');
  }

  ngOnDestroy(): void {
    console.log('Parent component destroyed');
  }

}