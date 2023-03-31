import { App } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function setupDayjs(AppInstance:App<Element>) {
  AppInstance.provide('$dayjs', gsap);
}
