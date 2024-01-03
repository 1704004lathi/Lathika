import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
export const LogInNo = () =>{
        const navigate= useNavigate();
        return(
            <div className="scc">

                <center><h1 class = "h1">Welcome Back!</h1></center>
                <center><h3>Enter your credential to login</h3></center>
                <center>

                <fieldset id = "field">
                    <form>
                        <table>
                            <tr>

                        <td class = "Number"><input type = "Number"placeholder='Enter Your MobileNumber'></input></td></tr><br></br>

                    <tr>
                        <td class="Password"><input type = "Password" placeholder='Enter Your Password'></input></td>
                        </tr>
                        </table>

                        <div class = "Remember">
                        <input type='checkbox'></input>
                        Remember me</div><br></br>

                        <button type="button" class = "LogInButton">LogIn</button><br></br>
                        or<br></br>

                        <button type="button" class = "AnotherLogIn">LogIn with e-mail address</button><br></br><br></br>
                        <div class = "ForgetPassword">Forget Password?  <button type="button" class = "ClickHere">Click Here</button></div><br></br>

                        <div class = "NewUser">New User?
                        <button type = "button" class = "SignUp" onClick={() => navigate('/Signup')}>Sign Up</button></div>
                    </form>
                </fieldset>
                </center>






            </div>
            
        );
}