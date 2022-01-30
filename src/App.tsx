import { FC } from "react";
import { Home } from "pages/home";
import "font/index.scss";

const App: FC = () => {
  return (
    <div data-testid="App" className="App">
      <Home />
    </div>
  );
};

export default App;
