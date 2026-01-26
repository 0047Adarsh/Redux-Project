import { Link } from "react-router-dom"

function Button({children, disabled, to, type}) {


    const base = "disabled:cursor-not-allowed text-sm hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full"
    const styles = {
        
        primary: base + " py-3 px-4 sm:py-4 sm:px-6", 
        small: base + " py-2 px-4 text-sm md:px-5 md:py-2 text-xs",
        secondary: "disabled:cursor-not-allowed border-2 border-stone-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:bg bg-transparent uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full py-2 px-4 text-sm md:px-5 md:py-2"
    }
    if(to){
        return <Link to={to} className={styles[type]}>{children}</Link>
    }
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
