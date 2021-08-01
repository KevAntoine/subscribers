
export interface State {
  name?: string;
  email?: string;
  password?: string;
  hasBusiness?: boolean;
  languages?: string[];
}

export type ActionType = {
  type: "REGISTER";
  name: string;
  email: string;
  password: string;
  hasBusiness?: boolean;
  languages?: string[];
};

