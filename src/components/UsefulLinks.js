import styles from './styles/UsefulLinks.module.css';
import React from 'react';
function UsefulLinks({ clickHandler }) {
  return (
    <div className={`container  faders outView`} id="useful-links">
      <div className={`title ${styles.title}`}>Useful Links:</div>
      <div className={styles.grid}>
        <div
          className={styles.button}
          onClick={() =>
            clickHandler(
              'https://docs.google.com/document/d/1lrhSStY2TPPkS6f9qoiwWPSaCV17LJR26hgureLlcdA'
            )
          }
          onAuxClick={() =>
            clickHandler(
              'https://docs.google.com/document/d/1lrhSStY2TPPkS6f9qoiwWPSaCV17LJR26hgureLlcdA'
            )
          }
        >
          <div className={`${styles.logo} ${styles.resume}`} />
          <div className={styles.siteName}>Resume</div>
        </div>
        <div
          className={styles.button}
          onClick={() => clickHandler('mailto:email@example.com')}
          onAuxClick={() => clickHandler('mailto:email@example.com')}
        >
          <div className={`${styles.logo} ${styles.email}`} />
          <div className={styles.siteName}>Email</div>
        </div>
        <div
          className={styles.button}
          onClick={() =>
            clickHandler(
              'https://www.credential.net/profile/ivanalejandroderlichderlich65413'
            )
          }
          onAuxClick={() =>
            clickHandler(
              'https://www.credential.net/profile/ivanalejandroderlichderlich65413'
            )
          }
        >
          <div className={`${styles.logo} ${styles.certifications}`} />
          <div className={styles.siteName}>Certifications</div>
        </div>
      </div>
    </div>
  );
}

export default UsefulLinks;
