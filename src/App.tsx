import Calculator from "./components/Calculator/Calculator";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Offer from "./components/Offer/Offer";
import Preview from "./components/Preview";
import Sidepanel from "./components/Sidepanel";
import CalcContextProvider from "./store/calc-context";
import OrderForm from "./components/froms/OrderForm";
import Promotion from "./components/Promotion/Promotion";

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
        <OrderForm/>
        <Promotion/>
    </>
  );
}

export default App;
