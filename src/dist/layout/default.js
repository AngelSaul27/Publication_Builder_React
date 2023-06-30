import { v4 as uuidv4 } from "uuid";

function DefaultTemplate() {
    return (
        <>
            <div className="relative dark:bg-[#353434] h-[300px] w-full mb-2 rounded-t-md">
                <div className="absolute right-2 top-2 text-white bg-gray-800 p-1.5 cursor-pointer rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
                <div className="w-full h-full overflow-hidden rounded-t-md">
                    <img className="w-full h-full object-center object-cover" src="img/pexel.jpg" alt="cover" />
                </div>
            </div>

            <div data-content-editable-root="true" className="relative bg-white dark:bg-[#353434] rounded-sm w-full">
                <div data-block-id={uuidv4()} className="flex items-start">
                    <div data-content-options="true" className="flex gap-1 p-2 opacity-content-options hover min-w-max h-max">
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
    )
}

export default DefaultTemplate ;