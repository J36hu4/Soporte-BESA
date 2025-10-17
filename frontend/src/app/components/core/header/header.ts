import { Component, signal } from '@angular/core';
import { UserService } from '../../../share/services/api/user.service';
import { UserModel } from '../../../share/models/UsuarioModel';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private userService: UserService) { };

  user = signal<UserModel | null>(null);
  ngOnInit(): void {
    this.user.set(this.userService.getUser());
  }
}
