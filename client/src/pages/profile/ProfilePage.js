import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';

import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
  const match = useRouteMatch();
  console.log(match);
  console.log(match.url);
  console.log(match.path);
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
      </aside>
      <main className={styles.profile__main}>
        <Route exact path={`${match.path}/about`}>
          <div>About</div>
        </Route>
        <Route exact path={`${match.path}/account`}>
          <div>Account</div>
        </Route>
        <Route exact path={`${match.path}/orders`}>
          <div>Order</div>
        </Route>
      </main>
    </section>
  );
};

export default React.memo(ProfilePage);
