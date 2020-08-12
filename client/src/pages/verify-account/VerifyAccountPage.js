import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { verifyAccount, selectMessage } from '../../store/userSlice';

import styles from './VerifyAccountPage.module.scss';
import BtnLink from '../../components/btn-link/BtnLink';

const VerifyAccountPage = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);

  useEffect(() => {
    dispatch(verifyAccount(token));
  }, [dispatch, token]);

  return (
    <section className={styles.verifyAccount}>
      {message && <div className={styles.success}>{message}</div>}
      <BtnLink _to="/signin">Login</BtnLink>
    </section>
  );
};

export default VerifyAccountPage;
