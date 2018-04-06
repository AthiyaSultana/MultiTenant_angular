import { trigger, animate, transition, style } from '@angular/animations';

export const slideUpAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideUpAnimation', [
        transition(':enter', [
            style({
                height: '0',
                bottom: '-100%'
            }),

            // animation and styles at end of transition
            animate('400ms ease-in-out', style({
                height: '*',
                bottom: '0'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('200ms ease-in-out', style({
                height: '0',
                bottom: '-100%' 
            }))
        ])
    ]);