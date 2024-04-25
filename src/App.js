import { useRoutes } from "react-router-dom";
import "./style.css";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import BestSeller from "./components/BestSeller";
import Laptop from "./components/Laptop";
import Desktop from "./components/Desktop";
import NoMatch from "./components/NoMatch";
import DashBoard from "./components/DashBoard";


const routes = [
  { path: "/", element: <DashBoard/> },
  {
    path: "/products",
    element: <Products />,
    children: [
      { index: true, element: <BestSeller /> },
      { path: "laptop", element: <Laptop /> },
      { path: "desktop", element: <Desktop /> },
    ],
  },
  { path: "*", element: <NoMatch /> },
];

export default function App() {
  const element = useRoutes(routes);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10">{element}</main>
      </div>
    </div>
  );
}
