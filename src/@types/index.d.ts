import type { DefaultUser } from "next-auth";

export {};

declare global {
  interface Window {
    gtag: any;
  }
  var _mongoClientPromise: any;
}

declare module "next-auth" {
  interface Session {
    user?: DefaultUser & {
      id: string;
      username: string;
    };
  }
  interface Profile {
    login: string;
  }
}

declare module "next-auth/jwt/types" {
  interface JWT {
    uid: string;
    username: string;
  }
}
