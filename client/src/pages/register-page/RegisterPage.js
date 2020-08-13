import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './RegisterPage.module.scss';

import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';

import {
  signup,
  selectErrors,
  selectMessage,
  errorsCleard,
} from '../../store/userSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);
  const message = useSelector(selectMessage);

  useEffect(() => {
    dispatch(errorsCleard());
  }, [dispatch]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const _onChangeFirstName = e => setFirstName(e.target.value);
  const _onChangeLastName = e => setLastName(e.target.value);
  const _onChangeEmail = e => setEmail(e.target.value);
  const _onChangePassword = e => setPassword(e.target.value);
  const _onChangePasswordConfirm = e => setPasswordConfirm(e.target.value);

  const user = { firstName, lastName, email, password, passwordConfirm };

  const onSignup = () => dispatch(signup(user));

  return (
    <section className={styles.registerPage}>
      <h2 className={styles.registerPage__title}>create account</h2>
      {message && <div className={styles.registerPage__message}>{message}</div>}
      <Form>
        <h3 className={styles.registerPage__subtitle}>personal information</h3>
        <Input
          _label="first name"
          _required={true}
          type="text"
          _reqFieldsTxt="* Required Fields"
          _placeholder="enter first name"
          _fn={_onChangeFirstName}
          _error={errors ? errors.firstName : ''}
          _id="1"
        />
        <Input
          _label="last name"
          _required={true}
          type="text"
          _placeholder="enter last name"
          _fn={_onChangeLastName}
          _error={errors ? errors.lastName : ''}
          _id="2"
        />
        <Input
          _label="e-mail"
          _placeholder="enter e-mail"
          _required={true}
          _type="email"
          _fn={_onChangeEmail}
          _error={errors ? errors.email : ''}
          _id="3"
        />
        <Input
          _label="password"
          _placeholder="enter password"
          _required={true}
          _type="password"
          _fn={_onChangePassword}
          _error={errors ? errors.password : ''}
          _id="4"
        />
        <Input
          _label="confirm password"
          _placeholder="enter password"
          _required={true}
          _type="password"
          _fn={_onChangePasswordConfirm}
          _error={errors ? errors.passwordConfirm : ''}
          _id="5"
        />
        <div className={styles.form__group}>
          <BtnGoTo _onClick={onSignup} _className={styles.btnGoTo__create}>
            create
          </BtnGoTo>
          <Link
            to="/"
            className={`${styles.registerPage__text} ${styles.warning}`}
          >
            or return to store
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default React.memo(RegisterPage);
