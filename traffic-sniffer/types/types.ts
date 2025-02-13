export type PathData = {
  method: string;
  hitCount: number;
  lastInvocationDate?: Date;
  invocations: Invocation[];
};

export type Invocation = {
  id: string;
  timestamp: Date;
  body?: any;
  headers?: any;
  cookies?: any;
  params?: any;
};

export type PathMetadataConfig = {
  name: string;
  bodyHistoryLimit: number;
  recordBodies: boolean;
  recordHeaders: boolean;
  recordCookies: boolean;
  recordParams: boolean;
};

export type PathResponseData = {
  id: string;
  service: string;
  method: string;
  hitCount: number;
  lastInvocationDate: Date | undefined;
  url: string;
  invocations: Invocation[];
};
