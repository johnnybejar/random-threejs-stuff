import { Route } from "wouter";
import Header from "./Header";
import About from "./pages/about";
import Globe from "./pages/globe";

function App() {
  return (
    <div id="content">
      <Header />
      <Route path="/about" component={About}></Route>
      <Route path="/globe" component={Globe}></Route>
    </div>
  );
}

export default App;
