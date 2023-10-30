import { GithubIcon, LinkedinIcon, EmailIcon } from './Icons'
import self_image from '../assets/self.png'
import DarkModeSwitcher from './DarkModeSwitcher'

function CardAbout() {
    return (
        <>
            <div className="flex flex-col justify-center bg-white dark:bg-boxdark dark:text-white shadow-xl dark:shadow-boxdark-2 rounded-xl p-5 md:w-1/2 mx-auto">
                <img className="w-32 mx-auto shadow-xl rounded-full" src={self_image} alt="Imagen_personal"/>
                <div className="text-center mt-5">
                    <p className="text-xl sm:text-2xl font-semibold text-gray-900">Juan José C.P.</p>
                    <p className="text-xs sm:text-base text-gray-600 pt-2 px-5 w-auto">Desarrollador web</p>
                    <p className='text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>18 años</p>
                    <div className="flex align-center justify-center mt-4">
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-boxdark-2 dark:hover:text-stroke transition-colors duration-300" href="https://github.com/JJCondoriPinto">
                            <GithubIcon />
                            <span className="sr-only">Github</span>
                        </a>
                        <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-boxdark-2 dark:hover:text-stroke transition-colors duration-300" href="www.linkedin.com/in/matias-pinto-878941244">
                            <LinkedinIcon />
                            <span className="sr-only">Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardAbout
