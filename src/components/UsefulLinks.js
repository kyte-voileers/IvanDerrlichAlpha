import socialMediaStyles from './styles/SocialMedia.module.scss';
import styles from './styles/UsefulLinks.module.scss';
import React from 'react';
function UsefulLinks({ clickHandler }) {
  return (
    <div className={socialMediaStyles.container} id="useful-links">
      <div className={`title ${socialMediaStyles.title}`}>Useful Links:</div>
      <div className={socialMediaStyles.grid}>
        <div
          className={socialMediaStyles.button}
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
          <div className={`${socialMediaStyles.logo} ${styles.resume} faders outView`} />
          <div className={socialMediaStyles.siteName}>Resume</div>
        </div>
        <div
          className={socialMediaStyles.button}
          onClick={() => clickHandler('mailto:email@example.com')}
          onAuxClick={() => clickHandler('mailto:email@example.com')}
        >
          <div className={`${socialMediaStyles.logo} ${styles.email} faders outView delay-1`} />
          <div className={socialMediaStyles.siteName}>Email</div>
        </div>
        <div
          className={socialMediaStyles.button}
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
          <div
            className={`${socialMediaStyles.logo} ${styles.certifications}  faders outView delay-2`}
          />
          <div className={socialMediaStyles.siteName}>Certifications</div>
        </div>
      </div>
    </div>
  );
}

export default UsefulLinks;
