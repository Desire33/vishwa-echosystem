import Ecosystem from "./pages/ecosystem";
import Swap from "./pages/swap";
import Bridge from "./pages/bridge";

const routes = [
  {
    name: "ecosystem",
    route: "/",
    component: <Ecosystem />,
  }, {
    name: "ecosystem",
    route: "/ecosystem",
    component: <Ecosystem />,
  }, {
    name: "swap",
    route: "/swap",
    component: <Swap />,
  }, {
    name: "bridge",
    route: "/bridge",
    component: <Bridge />,
  }
];

export default routes;
