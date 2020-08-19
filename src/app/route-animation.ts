import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1 })),
      ], { optional: true })
    ]),
  ]);


