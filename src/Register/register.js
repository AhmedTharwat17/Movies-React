import { useState } from "react"

function Registration() {
    const [userData, setUserData] = useState({
        Email: "",
        Username:"",
        Password:"",
        confirmPassword:""
    })

    const [errors, setError] = useState({
        emailError: "",
        usernameError: "",
        passwordError:"",
        confirmPasswordError:""
    })

    const changeData = (e) => {
        
        if(e.target.name === "email"){
            setUserData({
                ...userData,
                Email: e.target.value
            })
            var regexEmail = new RegExp(/^[a-z|0-9]{2,}\@[a-z]{3,}\.(com|net)$/);
            var validEmail = regexEmail.test(e.target.value);
            setError({
                ...errors,
                emailError: 
                    e.target.value.length === 0 ?
                    "this email is required"
                    : !validEmail ? 
                    "xxx@xxxx.com"
                    : null
            })
        }else if(e.target.name === "username"){
            setUserData({
                ...userData,
                Username: e.target.value
            })
            var regexUsername = new RegExp(/(\s)/g);
            var validUsername = regexUsername.test(e.target.value);
            setError({
                ...errors, 
                usernameError : 
                e.target.value.length === 0 ? 
                "this username is required"
                : validUsername ?
                "contains no spaces"
                : null
            })
        }else if(e.target.name === "password"){
            setUserData({
                ...userData,
                Password: e.target.value
            })
            var regexPassword = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
            var validPassword = regexPassword.test(e.target.value);
            setError({
                ...errors, 
                passwordError : 
                e.target.value.length === 0 ? 
                "this password is required"
                : !validPassword ?
                "*@%$#"
                : null
            })
        }else if(e.target.name === "confirmPassword"){
            setUserData({
                ...userData,
                confirmPassword: e.target.value
            })
            setError({
                ...errors, 
                confirmPasswordError : 
                e.target.value.length === 0 ? 
                "this confirm password is required"
                :e.target.value !== userData.Password ?
                "No Match"
                : null
            })
        }
    }
  return (
    <>
      <form className="container py-2 my-3">
            <h3>Register</h3>
            <div className="mb-3 mt-3">
                <label for="exampleInputEmail1" className="form-label">Username</label>
                <input type="email" name="username" value={userData.Username} onChange={(e)=> changeData(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div className="text-danger py-2">{errors.usernameError}</div>
            </div>
            <div className="mb-3 mt-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" value={userData.Email} onChange={(e)=> changeData(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div className="text-danger py-2">{errors.emailError}</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={userData.Password} onChange={(e)=> changeData(e)} name="password"  className="form-control" id="exampleInputPassword1"/>
                 <div className="text-danger py-2">{errors.passwordError}</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" value={userData.confirmPassword} onChange={(e)=> changeData(e)} name="confirmPassword"  className="form-control" id="exampleInputPassword1"/>
                 <div className="text-danger py-2">
                 {errors.confirmPasswordError}
                 </div>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </>
  );
}

export default Registration;