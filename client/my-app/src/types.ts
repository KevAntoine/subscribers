export interface State {
  name?: string;
  email?: string;
  password?: string;
  hasBusiness?: boolean;
  languages?: string[];
  acceptPrivatePolicy: boolean
}

export type ActionType =
  | {
      type: "WELCOME";
      name?: string;
      email?: string;
      password?: string;
      hasBusiness: boolean;
      acceptPrivatePolicy: boolean
    }
  | {
      type: "SETTINGS";
      languages: string[];
    }
  | {
      type: "REGISTER";
      name: string;
      email: string;
      password: string;
      hasBusiness?: boolean;
      languages?: string[];
    };
