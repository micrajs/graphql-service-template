import express from 'express';
import { ServiceProvider } from '@micra/service-provider';

export class ServerServiceProvider extends ServiceProvider {
  register(): void {
    this.container.value('server', express());
  }

  boot(): void {
    const server = use('server');

    server.disable('x-powered-by');
  }
}
