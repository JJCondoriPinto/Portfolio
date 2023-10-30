import { Link } from "react-router-dom"
import DarkModeSwitcher from "./DarkModeSwitcher"

function Header() {
    return (
        <>
            <header className="p-4 shadow-xl bg-white dark:bg-black">
                <nav className="flex justify-between items-center md:w-8/12 md:mx-auto">
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/tecnologia"}>Tecnologia</Link>
                    <Link to={"/habilidades"}>Habilidades</Link>
                    <center><DarkModeSwitcher /></center>                
                </nav>
            </header>
        </>
    )   
}

export default Header