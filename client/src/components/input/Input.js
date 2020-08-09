import React from 'react';

import styles from './Input.module.scss';

const Input = ({
  _label,
  _placeholder,
  _type,
  _required,
  _reqFieldsTxt,
  _fn,
  _error,
  _id,
}) => {
  return (
    <section className={styles.inputBox}>
      <label className={styles.inputBox__label} htmlFor={_id}>
        <div>
          {_label} {_required && <span>*</span>}
        </div>
        {_reqFieldsTxt && (
          <span className={styles.inputBox__reqField}>{_reqFieldsTxt}</span>
        )}
      </label>
      <input
        className={styles.inputBox__input}
        id={_id}
        type={_type}
        placeholder={_placeholder}
        onChange={_fn}
      />
      <div className={styles.inputBox__inputError}>{_error}</div>
    </section>
  );
};

export default React.memo(Input);
