import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [
            // css styles at start of transition
            style({ opacity: 0, filter: 'blur(1px)' }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1, filter: 'blur(0)' }))
        ]),
        transition(':leave', [
            // css styles at start of transition
            style({ opacity: 1, filter: 'blur(0)' }),

            // animation and styles at end of transition
            animate('.3s', style({ opacity: 0, filter: 'blur(1px)' }))
        ]),
    ]);