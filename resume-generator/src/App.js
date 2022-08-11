import "./App.css";
import { Routes, Route } from "react-router-dom";
import ResumeNav from "./components/resume/ResumeNav";
import Home from "./components/home/Home";
import ResumeGenerator from "./components/resume/ResumeGenerator";
import DataPreviewComponent from "./components/preview_data/DataPreviewComponent";

function App() {
  return (
    <div className="App">
      <ResumeNav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<ResumeGenerator />} />
        <Route exact path="/preview" element={<DataPreviewComponent />} />
      </Routes>
    </div>
  );
}

export default App;
