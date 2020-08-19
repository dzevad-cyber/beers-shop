import React from 'react';
import { NavLink, useRouteMatch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './ProfilePage.module.scss';

import ProfileAbout from '../../components/profile-about/ProfileAbout';
import BtnLink from '../../components/btn-link/BtnLink';

import { logout } from '../../store/userSlice';
import ProfileAccount from '../../components/profile-account/ProfileAccount';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();

  const onLogout = async () => {
    const isLoggedout = await dispatch(logout());
    if (isLoggedout) history.push('/');
  };

  return (
    <section className={styles.profile}>
      <aside className={styles.profile__aside}>
        <header className={styles.profile__header}>NAME && IMAGE</header>
        <ul className={styles.profile__list}>
          <NavLink
            exact
            activeClassName={styles.profile__linkActive}
            to={`${match.url}/about`}
            className={styles.profile__link}
          >
            about
          </NavLink>
          <NavLink
            exact
            activeClassName={styles.profile__linkActive}
            to={`${match.url}/account`}
            className={styles.profile__link}
          >
            account
          </NavLink>
          <NavLink
            exact
            activeClassName={styles.profile__linkActive}
            to={`${match.url}/orders`}
            className={styles.profile__link}
          >
            orders
          </NavLink>
        </ul>
        <BtnLink _onClick={onLogout} _class={styles.btnLogout}>
          Log out
        </BtnLink>
      </aside>
      <main className={styles.profile__main}>
        <Route exact path={`${match.path}/about`} component={ProfileAbout} />
        <Route
          exact
          path={`${match.path}/account`}
          component={ProfileAccount}
        />
        <Route exact path={`${match.path}/orders`}>
          <div>Order</div>
        </Route>
      </main>
    </section>
  );
};

export default React.memo(ProfilePage);
