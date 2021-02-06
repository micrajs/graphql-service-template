declare namespace Application {
  interface Config {
    app: import('app/types').AppConfig;
  }

  interface EnvironmentVariables {
    APP_ENV: 'dev' | 'staging' | 'prod';
  }
}
