import React , {useEffect} from 'react';
import TemplateDefault from "./dist/layouts/TemplateDefault.jsx";
import { IndexBuilder as Builder } from "./dist/index.js";

var execution = true;
const builder = new Builder();

function App() {

  useEffect(() => {
      if (execution) {
        builder.init();
        execution = false;
      }
  },);

  return (
    <>
      <main className="flex flex-col items-center max-w-screen-2xl bg-[#F1F3F6] dark:bg-[#191919] min-h-screen p-[2%] px-[2%] md:px-[10%]">
        <TemplateDefault />
      </main>
    </>
  ); 
}

export default App;
