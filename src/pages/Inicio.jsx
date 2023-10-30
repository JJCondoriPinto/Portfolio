import CardAbout from '../components/CardAbout'
import joyce from '../assets/joyce.png'
import paola_frassinetti from '../assets/paola_frassinetti.jpg'
import tecsup from '../assets/tecsup.png'
import unsa from '../assets/unsa.png'

function Inicio() {
    return (
        <>
            <div className='flex flex-col md:flex-wrap md:w-8/12 md:mx-auto gap-4'>
                <CardAbout />
                <main className="flex flex-col justify-center bg-white dark:bg-boxdark dark:text-white shadow-xl dark:shadow-boxdark-2 rounded-xl p-5">
                    <section className='flex flex-col gap-2'>
                        <h1 className='text-title-md font-bold'>Acerca de mi</h1>
                        <p>Soy Juan José Condori Pinto y actualmente vivo en la ciudad de Arequipa, Perú. 
                        Me gusta disfrutar mi tiempo de soledad y estar tranquilo con quienes me rodean, me encanta la programación y el desarrollo web.</p>
                    </section>
                    <section className='flex flex-col gap-2 mt-10'>
                        <h2 className='text-title-sm font-bold'>Idiomas</h2>
                        <p>Poseo conocimientos básicos e intermedios en ingles, no de forma avanzada, pero si comprendo los textos y reconozco varias palabras, así como las ideas; también manejo algo de ruso, eso fue un hobbie durante la pandemia.</p>
                    </section>
                    <section className='flex flex-col gap-2 mt-10'>
                        <h2 className='text-title-sm font-bold'>Formación</h2>
                        <section>
                            <p>Curse toda mi primaria en el colegio Joyce, en el cercado de Arequipa, allí pasé la mayor parte de mi vida, conocí mucha gente, aprendí mucho y hasta ahora recuerdo a aquellos maestros que me inspiraron a continuar en el ámbito tecnoló</p>
                            <img src={joyce} alt="colegio_joyce" className='rounded-full mx-auto w-50 my-4' />
                        </section>
                        <section>
                            <p>Los primeros años de la secundaria los pasé en el colegio Joyce, sin embargo, debido a la pandemia mis padres tuvieron que cambiarme de colegio, uno nacional, este fue el Paola Frassinetti Fe y Alegría 45, hasta ahora no me arrepiento del cambio, ya que allí conocí más personalidades, maestros y nuevos retos, aprendí a ser mucho más responsable y atento.</p>
                            <img src={paola_frassinetti} alt="colegio_paola_frassinetti" className='rounded-full mx-auto w-50 my-4' />
                        </section>
                        <section className='flex flex-col'>
                            <p>Actualmente estudio la carrera de Diseño y desarrollo de software en el instituto tecnológico superior TECSUP, también estudio en la Universidad Nacional de San Agustín de Arequipa (UNSA), en la carrera de Ingeniería de Sistemas; me resulta muy útil debido a que ambas se complementan.</p>
                            <div className='grid gap-4 grid-cols-2 items-center my-4 mx-auto'>
                                <img src={unsa} alt="unsa" className='w-50' />
                                <img src={tecsup} alt="tecsup" className='rounded-full w-50' />
                            </div>
                        </section>  
                    </section>
                </main>
            </div>
        </>
    )
}

export default Inicio
