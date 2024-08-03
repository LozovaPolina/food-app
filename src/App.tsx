import "./App.css";
import Header from "./components/Header.tsx";
import Preview from "./components/Preview.tsx";
import Sidepanel from "./components/Sidepanel.tsx";

function App() {
  return (
    <>
      <Header></Header>
      <Sidepanel></Sidepanel>
      <Preview></Preview>
      <div className='divider'></div>
    </>
  );
}

export default App;
