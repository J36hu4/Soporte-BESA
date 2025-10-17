import { Component, Pipe, PipeTransform , signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

}

@Pipe({ name: 'transformText', standalone: true })
export class CapitalizarPipe implements PipeTransform  {
  transform(value: string): string {
    return (value ? value.charAt(0).toUpperCase() + value.slice(1) : '').replace('_', ' ');
  }
}