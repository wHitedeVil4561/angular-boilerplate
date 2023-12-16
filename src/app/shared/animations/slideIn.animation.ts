import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('slideInRouteAnimations', [
  transition('login <=> signUp', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        // opacity: 0,
        // position:'abso',
        // transform:'translateX(100%)'
        position: 'absolute',
        // top: 0,
        // left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ transform: 'translateX(-100%)' })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('300ms ease-out', style({ transform: 'translateX(100%)' }))],
        {
          optional: true,
        }
      ),
      query(
        ':enter',
        [
          animate(
            '300ms ease-out',
            style({
              transform: 'translateX(0%)',
              opacity: 1,
              // width: 'fit-content',
            })
          ),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]),
  //   transition('* <=> *', [
  //     style({ position: 'relative' }),
  //     query(
  //       ':enter, :leave',
  //       [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%',
  //         }),
  //       ],
  //       { optional: true }
  //     ),
  //     query(':enter', [style({ left: '-100%' })], { optional: true }),
  //     query(':leave', animateChild(), { optional: true }),
  //     group([
  //       query(
  //         ':leave',
  //         [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))],
  //         { optional: true }
  //       ),
  //       query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
  //         optional: true,
  //       }),
  //       query('@*', animateChild(), { optional: true }),
  //     ]),
  //   ]),
]);
