import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('buttonAnimation', [
      state(
        'closed',
        style({
          width: '0',
          opacity: '0',
        })
      ),
      transition('open => closed', [
        animate(
          '500ms ease-out',
          style({
            width: '0',
            backgroundColor: '#e159a2',
            opacity: '0',
          })
        ),
      ]),
      transition('closed => open', [animate('500ms ease-out')]),
    ]),
  ],
})
export class LoginComponent implements OnInit {

  private readonly localStorage = inject(LocalStorageService);
  buttonState: WritableSignal<string> = signal('open');
  ngOnInit(): void {
    this.getUserDetails()
  }
  onLogin() {
    this.buttonState.set('closed');
    setTimeout(() => {
      this.buttonState.set('open');
    }, 1000);
  }
  getUserDetails(){
  const userDetails =   this.localStorage.getItem("userDetails");
  console.dir(userDetails)
  }
}
