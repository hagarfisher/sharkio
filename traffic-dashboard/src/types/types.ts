export type SnifferConfig = {
  port: number;
  downstreamUrl: string;
  isStarted: boolean;
  name: string;
};

export type SnifferCreateConfig = {
  port: number;
  downstreamUrl: string;
  name: string;
};
