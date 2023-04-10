import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";
import Loader from "./components/Loader";
function App() {
const webgiViewerRef = useRef();

const handlePreview = ()=>{
 webgiViewerRef.current.triggerPreview(); 
}
  return (
    <div className="App">
      <Loader/>
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection triggerPreview={handlePreview}/>
      <WebgiViewer/>
    </div>
  );
}

export default App;
