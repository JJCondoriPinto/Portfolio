import {
    PythonIcon,
    PHPIcon,
    JavaIcon,
    JavaScriptIcon,
    PerlIcon,
    CPlusPlusIcon,
    AngularIcon,
    ReactIcon,
    VueIcon,
    DjangoIcon,
    DockerIcon,
    CSSIcon,
    HTMLIcon,
    KotlinIcon,
    GitIcon,
    ExpressIcon,
    LaravelIcon,
    MongodbIcon,
    MysqlIcon,
    TailwindIcon
} from "../components/TecIcons"

function Tecnologia() {
    return (
        <>
            <main className="flex flex-col justify-center bg-white dark:bg-boxdark dark:text-white shadow-xl dark:shadow-boxdark-2 rounded-xl p-5 gap-4 md:grid md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <h2 className="text-title-sm font-bold mx-auto">Lenguajes de programación</h2>
                    <p className="text-center">Tengo experiencia en los siguientes lenguajes de programación:</p>
                    <div className="flex gap-4 my-4 flex-wrap justify-center">
                        <section className="text-center">
                            <PythonIcon/>
                            python
                        </section>
                        <section className="text-center">
                            <JavaIcon/>
                            Java
                        </section>
                        <section className="text-center">
                            <JavaScriptIcon/>
                            Javscript
                        </section>
                        <section className="text-center">
                            <PerlIcon/>
                            perl
                        </section>
                        <section className="text-center">
                            <PHPIcon/>
                            PHP
                        </section>
                        <section className="text-center">
                            <CPlusPlusIcon/>
                            C++
                        </section>
                        <section className="text-center">
                            <KotlinIcon/>
                            Kotlin
                        </section>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-title-sm font-bold mx-auto">Tecnologías empleadas</h2>
                    <p className="text-center">Tengo experiencia en las siguientes tecnologías y web:</p>
                    <div className="flex gap-4 my-4 flex-wrap justify-center">
                        <section className="text-center">
                            <HTMLIcon/>
                            HTML
                        </section>
                        <section className="text-center">
                            <CSSIcon/>
                            CSS
                        </section>
                        <section className="text-center">
                            <TailwindIcon />
                            TailwindCss
                        </section>
                        <section className="text-center">
                            <GitIcon/>
                            Git / Github
                        </section>
                        <section className="text-center">
                            <DockerIcon/>
                            Docker
                        </section>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-title-sm font-bold mx-auto">Frameworks</h2>
                    <p className="text-center">Tengo experiencia en los siguientes frameworks:</p>
                    <div className="flex gap-4 my-4 flex-wrap justify-center">
                        <section className="text-center">
                            <AngularIcon/>
                            Angular
                        </section>
                        <section className="text-center">
                            <ReactIcon/>
                            React
                        </section>
                        <section className="text-center">
                            <VueIcon/>
                            Vuejs
                        </section>
                        <section className="text-center">
                            <DjangoIcon/>
                            Django
                        </section>
                        <section className="text-center">
                            <LaravelIcon/>
                            Laravel
                        </section>
                        <section className="text-center">
                            <ExpressIcon/>
                            Express
                        </section>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-title-sm font-bold mx-auto">Bases de datos</h2>
                    <p className="text-center">Tengo experiencia en las siguientes bases de datos:</p>
                    <div className="flex gap-4 my-4 flex-wrap justify-center">
                        <section className="text-center">
                            <MongodbIcon/>
                            Mongodb
                        </section>
                        <section className="text-center">
                            <MysqlIcon/>
                            MySQL
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Tecnologia
