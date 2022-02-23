import { useState } from "react"

function Login() {
    const [userData, setUserData] = useState({
        Email: "",
        Password:""
    })

    const [errors, setError] = useState({
        emailError: "",
        passwordError:""
    })

    const changeData = (e) => {
        
        if(e.target.name === "email"){
            setUserData({
                ...userData,
                Email: e.target.value
            })
            var regex = new RegExp(/^[a-z|0-9]{2,}\@[a-z]{3,}\.(com|net)$/);
            var valid = regex.test(e.target.value);
            setError({
                ...errors,
                emailError: 
                    e.target.value.length === 0 ?
                    "this email is required"
                    : !valid ? 
                    "xxx@xxxx.com"
                    : null
            })
        }else if(e.target.name === "password"){
            setUserData({
                ...userData,
                Password: e.target.value
            })
            setError({
                ...errors, 
                passwordError : 
                e.target.value.length === 0 ? 
                "this password is required"
                : e.target.value.length < 8 ?
                "Min length  is 8 char."
                : null
            })
        }
    }

    
    const [passwordShow, setPasswordShow] = useState(false);
    const togglePassword = () => {
        setPasswordShow(!passwordShow);
    };

  return (
    <>
        <form className="container" style={{margin:'100px'}}>
            <h3>Login</h3>
            <div className="mb-3 mt-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" value={userData.Email} onChange={(e)=> changeData(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div className="text-danger py-2">{errors.emailError}</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type={passwordShow ? "text" : "password"} value={userData.Password} onChange={(e)=> changeData(e)} name="password"  className="form-control" id="exampleInputPassword1"/>
                 <div className="text-danger py-2">{errors.passwordError}</div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={togglePassword}/>
                <label className="form-check-label" for="exampleCheck1">Show/Hide Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </>
  );
}

export default Login;