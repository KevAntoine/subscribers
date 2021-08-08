export interface State {
  name?: string;
  email?: string;
  confirmEmail?: string;
  phone?: string;
  password?: string;
  hasBusiness?: string[];
  languages?: string[];
  accountType?: number;
  acceptPrivatePolicy?: boolean;
}

export interface Settings {
  languages: string[];
  account: number;
}

export type ActionType =
  | {
      type: "WELCOME";
      name?: string;
      email?: string;
      password?: string;
      accountType?: number;
      hasBusiness: string[];
      acceptPrivatePolicy: boolean;
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
      hasBusiness?: string[];
      languages?: string[];
    };
