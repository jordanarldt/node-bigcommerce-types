// declare the module so that I can still use "strict" mode
declare module "node-bigcommerce" {
  export = BigCommerce;
};

declare class BigCommerce {
  constructor(
    config: {
      logLevel?: "info";
      clientId?: string;
      secret?: string;
      callback?: string;
      accessToken?: string;
      storeHash?: string;
      responseType?: "json" | "xml";
      apiVersion?: "v2" | "v3";
      headers?: any;
    }
  );

  verify(signedRequest: any): BcVerifyResponse;
  async authorize(query: any): Promise<BcAuthResponse>;
  async request(type: "GET" | "POST" | "PUT" | "DELETE", path: string, data?: any): Promise<any>;
  async get(path: string): Promise<any>;
  async post(path: string, data: any): Promise<any>;
  async put(path: string, data: any): Promise<any>;
  async delete(path: string): Promise<any>;
}

interface BcAuthResponse {
  access_token: string;
  scope: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  context: string;
}

interface BcVerifyResponse {
  user: {
    id: number;
    email: string;
  };
  owner: { 
    id: number;
    email: string; 
  };
  context: string;
  store_hash: string;
  timestamp: number;
}
