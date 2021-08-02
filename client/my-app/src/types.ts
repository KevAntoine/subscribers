export interface State {
  name?: string;
  email?: string;
  password?: string;
  hasBusiness?: boolean;
  languages?: string[];
}

export type ActionType =
  | {
      type: "WELCOME";
      name?: string;
      email?: string;
      password?: string;
      hasBusiness: boolean;
    }
  | {
      type: "SETTINGS";
      languages: string;
    }
  | {
      type: "REGISTER";
      name: string;
      email: string;
      password: string;
      hasBusiness?: boolean;
      languages?: string[];
    };
