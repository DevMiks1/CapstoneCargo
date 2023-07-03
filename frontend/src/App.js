// Components

import { Header, Footer } from "./components/";
import { AllRoutes } from "./routes/AllRoutes";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <AllRoutes />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
