import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './PasswordResetPage.module.scss';

import Form from '../../components/form/Form';
import Input from '../../components/input/Input';
import BtnLink from '../../components/btn-link/BtnLink';

import { resetPassword, selectMessage } from '../../store/userSlice';

const PasswordResetPage = props => {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const [passwordData, setPasswordData] = useState({});

  const onChangePasswordData = e => {
    setPasswordData({
      ...passwordData,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const onResetPassword = () => {
    const isPassReset = dispatch(
      resetPassword(props.match.params.token, passwordData)
    );
    if (isPassReset) props.history.push('/signin');
  };

  console.log(passwordData);
  return (
    <div className={styles.passwordResetPage}>
      {message && <div>{message}</div>}
      <Form _className={styles.passResetForm}>
        <Input
          _fn={onChangePasswordData}
          _type="password"
          _label="new password"
          name="password"
        />
        <Input
          _fn={onChangePasswordData}
          _type="password"
          _label="confirm password"
          name="passwordConfirm"
        />
        <BtnLink _onClick={onResetPassword}>Reset Password</BtnLink>
      </Form>
    </div>
  );
};

export default PasswordResetPage;
