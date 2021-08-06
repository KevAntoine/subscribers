import Register from "./views/Register";
import { Welcome } from "./views/Welcome";
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
