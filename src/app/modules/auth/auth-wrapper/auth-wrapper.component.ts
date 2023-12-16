import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../shared/animations/slideIn.animation';

@Component({
  selector: 'app-auth-wrapper',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-wrapper.component.html',
  styleUrl: './auth-wrapper.component.scss',
  animations: [slideInAnimation],
})
export class AuthWrapperComponent {
  constructor(private childrenContext: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.childrenContext.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
