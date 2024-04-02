import DemoComponent from "./components/DemoComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningPath from "./components/LearningPath";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemoComponent />} />
        <Route path="/learning-path" element={<LearningPath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
