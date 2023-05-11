import { v4 as uuidv4 } from "uuid";

function TemplateDefault (){
    return <>
        <div data-content-editable-root="true" className="relative bg-white dark:bg-[#353434] rounded-sm w-full">
            <div data-block-id={uuidv4()} className="flex items-start">
                <div data-content-options="true" className="flex gap-1 p-2 opacity-content-options min-w-max">
                    <div data-option-create="" className="hover:bg-slate-300 dark:hover:bg-gray-800 dark:text-white options-block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </div>
                    <div data-option-dragging="" className="hover:bg-slate-300 dark:hover:bg-gray-800 dark:fill-white options-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div data-block="root" type="text" className="text-white">
                    <div contentEditable="true" placeholder="Escibe aquí."></div>
                </div>
            </div>
        </div>
    </>
}
export default TemplateDefault