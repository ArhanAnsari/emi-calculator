import { Calculator } from "@/components/wrapper/Calculator.tsx";
import { HeaderInfo } from "@/components/wrapper/HeaderInfo.tsx";

function App() {
  return (
    <>
      <HeaderInfo />
      <div className="w-full p-10 h-screen">
        <h1 className="text-2xl text-center font-bold mb-10">
          Loan EMI Calculator
        </h1>

        <Calculator />
      </div>
    </>
  );
}

export default App;
