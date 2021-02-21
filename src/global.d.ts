/// <reference types="@micra/core/contracts/base-application" />
/// <reference types="@micra/core/contracts/graphql-application" />

declare namespace Application {
  interface EnvironmentVariables {
    APP_ENV: 'dev' | 'staging' | 'prod';
  }
}
