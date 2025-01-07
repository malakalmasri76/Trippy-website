import "./SignUpFormStyle.css"

function SignUpForm (){
    return(
        <div className="signUp-container">
            <h1>Join Our Trip</h1>
            <form>
                <input placeholder="First Name"/>
                <input placeholder="Last Name"/>
                <input placeholder="Email"/>
                <input placeholder="Password" type="password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm;