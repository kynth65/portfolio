import { ecommercePlatform } from './ecommerce-platform';
import { taskManagementApp } from './task-management-app';
import { weatherDashboard } from './weather-dashboard';
import { portfolioWebsite } from './portfolio-website';

export const projects = [
  ecommercePlatform,
  taskManagementApp,
  weatherDashboard,
  portfolioWebsite
];

export * from './ecommerce-platform';
export * from './task-management-app';
export * from './weather-dashboard';
export * from './portfolio-website';