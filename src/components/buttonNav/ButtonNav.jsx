import './ButtonNav.css'

export default function ButtonNav(props){
    return (
        <>
        <button >
            <img className={props.miClase} src={props.src} alt={props.alt} />
        </button>
        </>
    )
}