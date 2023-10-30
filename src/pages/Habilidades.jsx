function Habilidades() {
    return (
        <>
            <main className="flex flex-col justify-center bg-white dark:bg-boxdark dark:text-white shadow-xl dark:shadow-boxdark-2 rounded-xl p-5 gap-4 w-auto md:justify-center md:grid md:grid-cols-2 md:w-8/12 mx-auto">
                <div className="flex flex-col gap-2">
                    <h2 className="text-title-sm font-bold mx-auto">Tecnológico</h2>
                    <div className="bg-stroke rounded-full flex p-15 justify-center mx-auto dark:bg-boxdark-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-stroke" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                            <rect x="8" y="7" width="8" height="3" rx="1"></rect>
                            <line x1="8" y1="14" x2="8" y2="14.01"></line>
                            <line x1="12" y1="14" x2="12" y2="14.01"></line>
                            <line x1="16" y1="14" x2="16" y2="14.01"></line>
                            <line x1="8" y1="17" x2="8" y2="17.01"></line>
                            <line x1="12" y1="17" x2="12" y2="17.01"></line>
                            <line x1="16" y1="17" x2="16" y2="17.01"></line>
                        </svg>
                    </div>
                    <p className="text-center">Me gusta programar, me resulta algo sencillo aprender la lógica de los idiomas y, en lo personal, siento que se debe a mi facilidad para las matemáticas, el diseño de algoritmos, la lógica y demás métodos prácticos:</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-title-sm font-bold mx-auto">Social</h2>
                    <div className="bg-stroke rounded-full flex p-15 justify-center mx-auto dark:bg-boxdark-2 my-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-stroke" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="5" r="2"></circle>
                            <circle cx="5" cy="19" r="2"></circle>
                            <circle cx="19" cy="19" r="2"></circle>
                            <circle cx="12" cy="14" r="3"></circle>
                            <line x1="12" y1="7" x2="12" y2="11"></line>
                            <line x1="6.7" y1="17.8" x2="9.5" y2="15.8"></line>
                            <line x1="17.3" y1="17.8" x2="14.5" y2="15.8"></line>
                        </svg>
                    </div>
                    <p className="text-center">No me considero alguien netamente sociable, de hecho, la mayor parte del tiempo me la paso reflexionando conmigo mismo, sin embargo, me gusta estar con la gente en que confío, me resulta cómodo, soy capaz de escuchar, aconsejar y ayudar a quienes lo necesiten</p>
                </div>
            </main>
        </>
    )
}

export default Habilidades
