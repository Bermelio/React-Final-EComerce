

export default function Login(){
    return (
        <>
            <section className="login">
                <h1 className="title">Login</h1>
                <div className="conteinerDet">
                    <input
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                </div>
                {/* <div className="text">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div> */}
                <div>
                    <a className="btn">Login</a>
                </div>
            </section>
        </>
    )
}