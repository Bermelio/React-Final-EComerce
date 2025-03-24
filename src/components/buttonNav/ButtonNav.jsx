import './buttonNav.css'

export default function ButtonNav(props){
    return (
        <>
        <button >
            <img className={props.class} src={props.src} alt={props.alt} />
        </button>
        </>
    )
}