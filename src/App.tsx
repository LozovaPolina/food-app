import Calculator from "./components/Calculator/Calculator.tsx";
import Header from "./components/Header.tsx";
import Menu from "./components/Menu/Menu.tsx";
import Offer from "./components/Offer/Offer.tsx";
import Preview from "./components/Preview.tsx";
import Sidepanel from "./components/Sidepanel.tsx";
import CalcContextProvider from "./store/calc-context.tsx";

function App() {
  return (
    <>
      <Header></Header>
      <Sidepanel></Sidepanel>
      <Preview></Preview>
      <div className='divider'></div>
      <Offer></Offer>
      <CalcContextProvider>
        <Calculator />
      </CalcContextProvider>
      <Menu />
    </>
  );
}

export default App;
