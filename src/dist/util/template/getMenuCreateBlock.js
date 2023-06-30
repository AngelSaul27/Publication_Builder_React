function getMenuCreateBlock() {
    const HTML = `
            <div class="rounded-md bg-white dark:bg-[#242424] py-2"> 
                <div class="max-w-sm md:max-w-md max-h-64 md:max-h-80 overflow-y-auto menu_scroll">
                    <div class="w-full h-full p-2">
                        <div class="flex flex-col justify-start gap-2">
                            <span class="text-gray-400 font-semibold ml-2 text-sm">Bloques Básicos</span>
                            <div class="flex flex-col">
                                <div data-dropdown-item="text" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 m-auto" viewBox="0 0 24 24">
                                            <path
                                                d="M16,6a1,1,0,0,0-1-1H3A1,1,0,0,0,3,7H8V18a1,1,0,0,0,2,0V7h5A1,1,0,0,0,16,6Zm5,5H15a1,1,0,0,0,0,2h2v5a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Texto
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Texto basico
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="heading" data-level="1" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 m-auto"  viewBox="0 0 1792 1792">
                                            <path
                                                d="M1682 1664q-44 0-132.5-3.5T1416 1657q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4H560q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5T387 1657q-43 0-128 3.5t-127 3.5q-23 0-35.5-21T84 1598q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57V500q0-3 .5-26t0-36.5T256 399t-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5T387 135q42 0 126.5-3.5T640 128q25 0 37.5 22t12.5 48q0 30-17 43.5T634.5 256t-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13T1102 198q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Encabezado H1
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Encabezado Grande
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="heading" data-level="2" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 m-auto"  viewBox="0 0 1792 1792" id="header">
                                            <path
                                                d="M1682 1664q-44 0-132.5-3.5T1416 1657q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4H560q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5T387 1657q-43 0-128 3.5t-127 3.5q-23 0-35.5-21T84 1598q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57V500q0-3 .5-26t0-36.5T256 399t-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5T387 135q42 0 126.5-3.5T640 128q25 0 37.5 22t12.5 48q0 30-17 43.5T634.5 256t-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13T1102 198q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Encabezado H2
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Encabezado Mediano
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="heading" data-level="3" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-[14px] h-[14px] m-auto"  viewBox="0 0 1792 1792" id="header">
                                            <path
                                                d="M1682 1664q-44 0-132.5-3.5T1416 1657q-44 0-132 3.5t-132 3.5q-24 0-37-20.5t-13-45.5q0-31 17-46t39-17 51-7 45-15q33-21 33-140l-1-391q0-21-1-31-13-4-50-4H560q-38 0-51 4-1 10-1 31l-1 371q0 142 37 164 16 10 48 13t57 3.5 45 15 20 45.5q0 26-12.5 48t-36.5 22q-47 0-139.5-3.5T387 1657q-43 0-128 3.5t-127 3.5q-23 0-35.5-21T84 1598q0-30 15.5-45t36-17.5 47.5-7.5 42-15q33-23 33-143l-1-57V500q0-3 .5-26t0-36.5T256 399t-3.5-42-6.5-36.5-11-31.5-16-18q-15-10-45-12t-53-2-41-14-18-45q0-26 12-48t36-22q46 0 138.5 3.5T387 135q42 0 126.5-3.5T640 128q25 0 37.5 22t12.5 48q0 30-17 43.5T634.5 256t-49.5 4-43 13q-35 21-35 160l1 320q0 21 1 32 13 3 39 3h699q25 0 38-3 1-11 1-32l1-320q0-139-35-160-18-11-58.5-12.5t-66-13T1102 198q0-26 12.5-48t37.5-22q44 0 132 3.5t132 3.5q43 0 129-3.5t129-3.5q25 0 37.5 22t12.5 48q0 30-17.5 44t-40 14.5-51.5 3-44 12.5q-35 23-35 161l1 943q0 119 34 140 16 10 46 13.5t53.5 4.5 41.5 15.5 18 44.5q0 26-12 48t-36 22z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Encabezado H3
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Encabezado Pequeño
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="listDisc" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 m-auto" viewBox="0 0 24 24">
                                            <path
                                                d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Lista Visñetada
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Lista con vieñetas
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="listDecimal" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 m-auto" viewBox="0 0 48 48">
                                            <path
                                                d="M4 34h4v1H6v2h2v1H4v2h6v-8H4v2zm2-18h2V8H4v2h2v6zm-2 6h3.6L4 26.2V28h6v-2H6.4l3.6-4.2V20H4v2zm10-12v4h28v-4H14zm0 28h28v-4H14v4zm0-12h28v-4H14v4z">
                                            </path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Lista Numerada
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Lista numerada
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="divider" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 m-auto" viewBox="0 0 24 24">
                                            <path
                                                d="M21.92,11.62a1,1,0,0,0-.21-.33l-2.5-2.5a1,1,0,0,0-1.42,1.42l.8.79H14a1,1,0,0,0,0,2h4.59l-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.5-2.5a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62ZM10,11H5.41l.8-.79A1,1,0,0,0,4.79,8.79l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2.5,2.5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H10a1,1,0,0,0,0-2Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Divisor
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Separador de bloques visualmente
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="highlight" class="flex gap-2 select-none hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 m-auto" viewBox="0 0 24 24">
                                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                                            <path d="M5 19h14v2H5zM6 3v8c0 3.31 2.69 6 6 6s6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Destacado
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Contenido para destacar
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-gray-400 font-semibold ml-2 text-sm">Bloques Multimedia</span>
                            <div class="flex flex-col">
                                <div data-dropdown-item="imagen" class="flex gap-2 hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 m-auto" viewBox="0 0 24 24">
                                            <path fill="#d8d8ff" d="M13.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
                                            <path fill="#b2b1ff"
                                                d="M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3zm-5.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z">
                                            </path>
                                            <path fill="#6563ff"
                                                d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14c.815 0 1.595-.333 2.16-.92L10.12 9.98z">
                                            </path>
                                            <path fill="#d8d8ff"
                                                d="m22 15.858-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888 8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Imagen
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Sube o inserta una imagen (URL)
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="video" class="flex gap-2 hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 m-auto" viewBox="0 0 32 32">
                                            <path fill="#F44336" d="M28,1.5H4c-1.65,0-3,1.35-3,3v20c0,0.55,0.45,1,1,1h9c0.55,0,1-0.45,1-1c0-2.21,1.79-4,4-4s4,1.79,4,4
                                                    c0,0.55,0.45,1,1,1h9c0.55,0,1-0.45,1-1v-20C31,2.85,29.65,1.5,28,1.5z"></path>
                                            <path fill="#D32F2F" d="M31,4.5v20c0,0.55-0.45,1-1,1h-9c-0.55,0-1-0.45-1-1c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,0.55-0.45,1-1,1
                                                    H3.25c2.21-0.42,4.33-1.1,6.32-2c4.53-2.06,8.42-5.29,11.27-9.3l0.01-0.01c0.03-0.05,0.07-0.1,0.1-0.15
                                                    c0.26-0.36,0.51-0.73,0.74-1.11c0-0.01,0.01-0.02,0.02-0.03c0.26-0.41,0.52-0.84,0.76-1.27v-0.01c1.39-2.5,2.41-5.23,2.99-8.12
                                                    c0.13-0.66,0.24-1.33,0.32-2H28C29.65,1.5,31,2.85,31,4.5z"></path>
                                            <path fill="#E0E0E0" d="M22.447,11.605l-10-5c-0.31-0.154-0.677-0.138-0.973,0.044C11.18,6.832,11,7.153,11,7.5v10
                                                    c0,0.347,0.18,0.668,0.474,0.851C11.635,18.45,11.817,18.5,12,18.5c0.153,0,0.306-0.035,0.447-0.105l10-5
                                                    C22.786,13.225,23,12.879,23,12.5S22.786,11.775,22.447,11.605z"></path>
                                            <path fill="#9E9E9E" d="M23,12.5c0,0.38-0.21,0.73-0.55,0.89l-1.61,0.81c0.59-0.83,1.13-1.69,1.63-2.58
                                                    C22.8,11.79,23,12.13,23,12.5z"></path>
                                            <circle cx="16" cy="24.5" r="3" fill="#263238"></circle>
                                            <path fill="#263238" d="M30,30.5H2c-0.552,0-1-0.448-1-1s0.448-1,1-1h28c0.552,0,1,0.448,1,1S30.552,30.5,30,30.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Video
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Sube o inserta una video (URL)
                                        </span>
                                    </div>
                                </div>
                                <div data-dropdown-item="codigo" class="flex gap-2 hover:bg-[#3b3d3d] trnasition-all duration-300 p-2 rounded-md cursor-pointer">
                                    <div class="rounded-md bg-white min-w-[40px] min-h-[40px] max-h-[40px] flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 m-auto" viewBox="0 0 24 24">
                                            <path
                                                d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-white text-[14px]">
                                            Código
                                        </span>
                                        <span class="text-gray-400 text-[13px]">
                                            Inserta un fragmento de código
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>`;

    const dropdown = document.createElement("div");
    dropdown.setAttribute("class", "absolute opacity-menu");
    dropdown.setAttribute("data-dropdown-content", "create_block");
    dropdown.innerHTML = HTML;

    return dropdown;
}
export { getMenuCreateBlock };