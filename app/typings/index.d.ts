interface Link {
  title: string;
  href: string;
  index: string;
}

declare module 'egg' {
  export interface Application {
    [key: string]: any;
  }
}

interface CURLRes<T> {
  headers: any;
  status?: number;
  data: T;
}