declare namespace Application {
  interface Services {
    server: import('express').Express;
    request: import('express').Request;
    response: import('express').Response;
  }

  interface EnvironmentVariables {
    AWS_LOAD_BALANCER_IDLE_TIMEOUT: string;
    KEEP_ALIVE_TIMEOUT: string;
    HEADERS_TIMEOUT: string;
  }
}
