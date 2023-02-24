import styles from './styles/SocialMedia.module.scss';
import React from 'react';
function SocialMedia({ clickHandler }) {
  return (
    <div className={styles.container} id="social-media">
      <div className={`title ${styles.title}`}>Let's connect:</div>
      <div className={styles.grid}>
        <div
          className={`${styles.button}  faders outView`}
          onClick={() => clickHandler('https://github.com/ivanderlich')}
          onAuxClick={() => clickHandler('https://github.com/ivanderlich')}
        >
          <div className={`${styles.logo} ${styles.github}`} />
          <div className={styles.siteName}>GitHub</div>
        </div>
        <div
          className={`${styles.button}  faders outView delay-1`}
          onClick={() =>
            clickHandler('https://www.linkedin.com/in/ivanderlich/')
          }
          onAuxClick={() =>
            clickHandler('https://www.linkedin.com/in/ivanderlich/')
          }
        >
          <div className={`${styles.logo} ${styles.linkedInLogo}`} />
          <div className={styles.siteName}>Linkedin</div>
        </div>
        <div
          className={`${styles.button}  faders outView delay-2`}
          onClick={() =>
            clickHandler('https://stackoverflow.com/users/4363972')
          }
          onAuxClick={() =>
            clickHandler('https://stackoverflow.com/users/4363972')
          }
        >
          <div className={`${styles.logo} ${styles.stackoverflowLogo}`} />
          <div className={styles.siteName}>StackOverflow</div>
        </div>
        <div
          className={`${styles.button}  faders outView delay-3`}
          onClick={() => clickHandler('https://blog.ivanderlich.com')}
          onAuxClick={() => clickHandler('https://blog.ivanderlich.com')}
        >
          <div className={`${styles.logo} ${styles.blog}`} />
          <div className={styles.siteName}>Blog</div>
        </div>
        <div
          className={`${styles.button}  faders outView delay-4`}
          onClick={() => clickHandler('https://twitter.com/IvanDerlich')}
          onAuxClick={() => clickHandler('https://twitter.com/IvanDerlich')}
        >
          <div className={`${styles.logo} ${styles.twitter}`} />
          <div className={styles.siteName}>Twitter</div>
        </div>
        <div
          className={`${styles.button}  faders outView delay-5`}
          onClick={() => clickHandler('https://ivanderlich.medium.com/')}
          onAuxClick={() => clickHandler('https://ivanderlich.medium.com/')}
        >
          <div className={`${styles.logo} ${styles.medium}`} />
          <div className={styles.siteName}>Medium</div>
        </div>
        <div
          className={`${styles.button}  faders outView delay-6`}
          onClick={() =>
            clickHandler(
              'https://www.youtube.com/channel/UCZYxGdqKsS4HNwT1e9OV8YQ'
            )
          }
          onAuxClick={() =>
            clickHandler(
              'https://www.youtube.com/channel/UCZYxGdqKsS4HNwT1e9OV8YQ'
            )
          }
        >
          <div className={`${styles.logo} ${styles.youtube}`} />
          <div className={styles.siteName}>Youtube</div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
