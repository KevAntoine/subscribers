import Home from "./Home";
import Register from "./Register";

const Routes = [
  {
    path: "/",
    component: Home,
    isPrivate: false,
  },
  {
    path: "/register",
    component: Register,
    isPrivate: false,
  },
];

export default Routes;
