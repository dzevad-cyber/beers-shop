import React, { useState } from 'react';

import styles from './SignInPage.module.scss';
import Form from '../../components/form/Form';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';
import Input from '../../components/input/Input';

const SignInPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className={styles.signInPage}>
      <h2 className={styles.signInPage__title}>already registered?</h2>
      <section className={styles.signInPage__newCustomer}>
        <h2 className={styles.signInPage__subtitle}>new customer</h2>
        <p className={styles.signInPage__text}>
          By creating an account with our store, you will be able to move
          through the checkout process faster, store multiple shipping
          addresses, view and track your orders in your account and more.
        </p>
        <BtnGoTo _to='/register' _className={styles.btnGoTo__account}>
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
            _label='e-mail'
            _placeholder='enter e-mail'
            _required={true}
            _type='email'
            _reqFieldsTxt='* Required Fields'
          />
          <Input
            _label='password'
            _placeholder='enter password'
            _required={true}
            _type='email'
          />
          <div className={styles.form__group}>
            <BtnGoTo _className={styles.btnGoTo__login}>login</BtnGoTo>
            <span
              onClick={() => setToggle(!toggle)}
              className={`${styles.signInPage__text} ${styles.warning}`}
            >
              Lost your password?
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
            _label='e-mail'
            _placeholder='enter e-mail'
            _required={true}
            _type='email'
            _reqFieldsTxt='* Required Fields'
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
