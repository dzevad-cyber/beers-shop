import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './ProfileAccount.module.scss';
import Form from '../form/Form';
import Input from '../input/Input';
import BtnGoTo from '../btn-go-to/BtnGoTo';

import {
  updatePassword,
  selectErrors,
  selectMessage,
} from '../../store/userSlice';

const ProfileAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector(selectErrors);
  const message = useSelector(selectMessage);

  const [passData, setPassData] = useState({});

  const onChangePassData = e => {
    setPassData({
      ...passData,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const onUpdatePassword = async () => {
    const isPassUpdated = await dispatch(updatePassword(passData));
    if (isPassUpdated) history.push('/signin');
  };

  return (
    <section className={styles.profileAccount}>
      {message && <div className={styles.message}>{message}</div>}
      <Form _className={styles.password}>
        <Input
          classInput={styles.input}
          _placeholder="old password"
          _type="password"
          _label="old password"
          classBox={styles.password__oldPassword}
          _fn={onChangePassData}
          name="oldPassword"
        />
        <Input
          classInput={styles.input}
          _placeholder="new password"
          _type="password"
          _label="new password"
          _fn={onChangePassData}
          name="newPassword"
        />
        <Input
          _placeholder="confirm password"
          _type="password"
          _label="confirm password"
          classInput={styles.input}
          _fn={onChangePassData}
          name="passwordConfirm"
          _error={errors ? errors.passwordConfirm : ''}
        />
        <BtnGoTo _onClick={onUpdatePassword} _className={styles.password__btn}>
          Reset Password
        </BtnGoTo>
      </Form>
    </section>
  );
};

export default ProfileAccount;
