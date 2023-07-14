import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllUserService } from '../services/get-all-user.service';

@Component({
  selector: 'game-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private service = inject(GetAllUserService);
  users = this.service.users;

  ngOnInit(): void {
    this.service.setAll();
  }
}
