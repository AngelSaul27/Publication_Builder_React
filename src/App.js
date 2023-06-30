import React from "react";
import DefaultTemplate from "./dist/layout/default";
import Builder from "./dist/builder";

const builder = new Builder();
var execution = true;

function App() {

    React.useEffect(() => {
        if (execution) {
            builder.Init();
            execution = false;
        }
    });

    return (
        <>
            <main className="flex flex-col items-center max-w-screen-2xl bg-[#F1F3F6] dark:bg-[#191919] min-h-screen p-[2%] px-[2%] md:px-[10%]">
                <DefaultTemplate />
            </main>
        </>
    );
}

export default App;
