import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    name: '',
    email: '',
    gender: '',
    message: '',
  };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true; // Show submitted data
    }
  }
}
