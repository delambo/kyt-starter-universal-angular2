import { PLATFORM_PIPES } from '@angular/core';

export const APPLICATION_PIPES = [];

export const PIPES = [
  { provide: PLATFORM_PIPES, multi: true, useValue: APPLICATION_PIPES }
];
