import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import classes from './Login.module.css';

const Login = (props) => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 4
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    }

  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  }

  const passwordChangeHandler = e => {
    setEnteredPassword(e.target.value);
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 4);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  let url = ''
  return (
  <Card className={classes.login}>
        <div className={classes.left}>
        </div>
        <div className={classes.right}>
          <div className={classes.form}>
            <p>Welcome Back!</p>
            <h3>Login to your account</h3>
            <form onSubmit={submitHandler}>
              <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}>
                <label htmlFor='email'>Email</label>
                <input type='email'
                  id='email'
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}></input>
              </div>
              <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}>
                <label htmlFor='password'>Password</label>
                <input type='password'
                  id='password'
                  value={enteredPassword}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}></input>
              </div>
              <div className={classes.control2}>
                <div className={classes.checkbox}>
                  <input type='checkbox' id='checkbox'></input>
                  <label htmlFor='checkbox'>Remember me</label>
                </div>
                <a href={url}>Forgot password?</a>
              </div>
              <div className={classes.button}>
                <button type='submit' disabled={!formIsValid}>Login Now</button>
              </div>
              <div>
                <a href={url}>
                  <font style={{ color: 'rgb(0,0,0)' }}>Don't have an account?</font> Join Free Today</a>
              </div>
            </form>
          </div>
        </div>
        </Card>
  )
}

export default Login;
