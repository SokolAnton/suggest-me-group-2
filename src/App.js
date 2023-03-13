import { Header, Home, Details, Error } from "./Components";
import Router from "./src/Components/Router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Router />
        {/* <Home /> */}
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;
