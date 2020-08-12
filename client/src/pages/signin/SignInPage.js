import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './SignInPage.module.scss';
import Form from '../../components/form/Form';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';
import Input from '../../components/input/Input';
import { login, selectMessage, errorsCleard } from '../../store/userSlice';

const SignInPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorsCleard());
  }, [dispatch]);

  const message = useSelector(selectMessage);
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _onChangeEmail = e => setEmail(e.target.value);
  const _onChangePassword = e => setPassword(e.target.value);

  const loginUser = () => dispatch(login(user));

  const user = { email, password };

  return (
    <section className={styles.signInPage}>
      <h2 className={styles.signInPage__title}>already registered?</h2>
      {message && (
        <div className={styles.signInPage__notification}>{message}</div>
      )}
      <section className={styles.signInPage__newCustomer}>
        <h2 className={styles.signInPage__subtitle}>new customer</h2>
        <p className={styles.signInPage__text}>
          By creating an account with our store, you will be able to move
          through the checkout process faster, store multiple shipping
          addresses, view and track your orders in your account and more.
        </p>
        <BtnGoTo _to="/register" _className={styles.btnGoTo__account}>
          create an account
        </BtnGoTo>
      </section>
      {!toggle && (
        <Form _className={styles.form__signIn}>
          <h3 className={styles.signInPage__subtitle}>login</h3>
          <p className={styles.signInPage__text}>
            If you have an account with us, please log in.
          </p>
          <Input
            _label="e-mail"
            _placeholder="enter e-mail"
            _required={true}
            _type="email"
            _reqFieldsTxt="* Required Fields"
            _fn={_onChangeEmail}
          />
          <Input
            _label="password"
            _placeholder="enter password"
            _required={true}
            _type="password"
            _fn={_onChangePassword}
          />
          <div className={styles.form__group}>
            <BtnGoTo _onClick={loginUser} _className={styles.btnGoTo__login}>
              login
            </BtnGoTo>
            <span
              onClick={() => setToggle(!toggle)}
              className={`${styles.signInPage__text} ${styles.warning}`}
            >
              Forgot your password?
            </span>
          </div>
        </Form>
      )}
      {toggle && (
        <Form _className={styles.form__resetPassword}>
          <h3 className={styles.signInPage__subtitle}>reset password</h3>
          <p className={styles.signInPage__text}>
            We will send you an email to reset your password.
          </p>
          <Input
            _label="e-mail"
            _placeholder="enter e-mail"
            _required={true}
            _type="email"
            _reqFieldsTxt="* Required Fields"
          />
          <div className={styles.form__group}>
            <BtnGoTo _className={styles.btnGoTo__login}>submit</BtnGoTo>
            <span
              onClick={() => setToggle(!toggle)}
              className={`${styles.signInPage__text} ${styles.warning}`}
            >
              or cancel
            </span>
          </div>
        </Form>
      )}
    </section>
  );
};

export default SignInPage;
