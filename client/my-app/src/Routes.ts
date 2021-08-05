import Register from "./Register";
import { Welcome } from "./Welcome";
const Routes = [
  {
    path: "/",
    component: Welcome,
    isPrivate: false,
  },
  {
    path: "/register",
    component: Register,
    isPrivate: false,
  },
];

export default Routes;
