import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BtnGoTo from '../btn-go-to/BtnGoTo';
import Form from '../form/Form';
import Input from '../input/Input';
import styles from './ProfileAbout.module.scss';

import { selectUser, updateMe } from '../../store/userSlice';

const ProfileAbout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const [userUpdates, setUserUpdates] = useState({});

  const onSetUserUpdates = e => {
    setUserUpdates({
      ...userUpdates,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const onUpdateMe = async () => {
    const isLoggedOut = await dispatch(updateMe(userUpdates));
    if (isLoggedOut) history.push('/');
  };

  return (
    <Form _className={styles.profileAbout}>
      <Input
        classInput={styles.input}
        _label="First Name"
        _placeholder={user && user.firstName}
        _fn={onSetUserUpdates}
        name="firstName"
      />
      <Input
        classInput={styles.input}
        _label="Last Name"
        _placeholder={user && user.lastName}
        _fn={onSetUserUpdates}
        name="lastName"
      />
      <Input
        _label="Email"
        _placeholder={user && user.email}
        _type="email"
        _fn={onSetUserUpdates}
        name="email"
        classInput={styles.input}
      />
      <BtnGoTo _onClick={onUpdateMe} _className={styles.btn}>
        Save Changes
      </BtnGoTo>
    </Form>
  );
};

export default ProfileAbout;
