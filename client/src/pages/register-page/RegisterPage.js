import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RegisterPage.module.scss';

import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import BtnGoTo from '../../components/btn-go-to/BtnGoTo';

const RegisterPage = () => {
  return (
    <section className={styles.registerPage}>
      <h2 className={styles.registerPage__title}>create account</h2>
      <Form>
        <h3 className={styles.registerPage__subtitle}>personal information</h3>
        <Input
          _label='first name'
          _required={true}
          type='text'
          _reqFieldsTxt='* Required Fields'
          _placeholder='enter first name'
        />
        <Input
          _label='last name'
          _required={true}
          type='text'
          _placeholder='enter last name'
        />
        <Input
          _label='e-mail'
          _placeholder='enter e-mail'
          _required={true}
          _type='email'
        />
        <Input
          _label='password'
          _placeholder='enter password'
          _required={true}
          _type='email'
        />
        <div className={styles.form__group}>
          <BtnGoTo _className={styles.btnGoTo__create}>create</BtnGoTo>
          <Link
            to='/'
            className={`${styles.registerPage__text} ${styles.warning}`}
          >
            or return to store
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default RegisterPage;
