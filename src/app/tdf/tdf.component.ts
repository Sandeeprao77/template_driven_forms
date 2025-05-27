import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  register(data: any) {
    console.log(data.value);
    alert('Registered successfully');
  }
}
