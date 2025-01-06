import { useEffect } from "react";
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes";

export default function App() {
    const { pathname } = useLocation();

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.collapse) {
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return <Route exact path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });

    return (
      <ConfigProvider locale={zh_CN}>
        <Routes>
          {getRoutes(routes)}
        </Routes>
      </ConfigProvider>

    );
}
