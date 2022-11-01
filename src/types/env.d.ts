declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST_NAME?: string;
      ENABLE_ROBOTS?: string;
      NEXT_PUBLIC_ENABLE_SERVICE_WORKER?: string;
    }
  }
}

export {};
