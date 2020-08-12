import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './VerifyPage.module.scss';
import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import BtnLink from '../../components/btn-link/BtnLink';

import {
  selectMessage,
  errorsCleard,
  resendToken,
} from '../../store/userSlice';

const VerifyPage = () => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const [email, setEmail] = useState('');

  useEffect(() => {
    dispatch(errorsCleard());
  }, [dispatch]);

  const onVerify = () => dispatch(resendToken(email));

  const onUserInput = e => setEmail(e.target.value);

  console.log(email);
  return (
    <section className={styles.verifyPage}>
      {message && <div>message</div>}
      <Form _className={styles.form}>
        <Input
          _label="Email"
          _placeholder="Enter your email address"
          _fn={onUserInput}
        />
        <BtnLink _onClick={onVerify}>Verify</BtnLink>
      </Form>
    </section>
  );
};

export default VerifyPage;
