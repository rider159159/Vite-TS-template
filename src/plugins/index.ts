import { setupDayjs } from './dayjs';
import { setupDayjs } from './gsap';
import { setupDayjs } from './dayjs';

import { App } from 'vue';

export function setupPlugins(AppInstance:App<Element>) {
  setupGsap(AppInstance);
  setupSweetAlert(AppInstance);
  setupDayjs(AppInstance);
}
