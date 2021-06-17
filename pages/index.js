import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  const medium_url = "https://medium.com/@theCreedo"
  const github_url = "http://github.com/theCreedo"
  const linkedin_url = "https://linkedin.com/in/ericjmlee"
  const twitter_url = "https://twitter.com/ericjmlee"

  return (
    <div className={styles.container}>
      <Head>
        <title>Savvy Saturdays</title>
        <meta name="description" content="Level up in 5 mins a week" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://ericlee.substack.com/">Savvy Saturdays</a>
        </h1>
        <div className={styles.newsletter}>
          <iframe src="https://ericlee.substack.com/embed" width="320" height="320" frameBorder="0" scrolling="no"></iframe>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <SocialIcon className={styles.social} style={{ height: 40, width: 40 }} url={github_url} />
          <SocialIcon className={styles.social} style={{ height: 40, width: 40 }} url={linkedin_url} />
          <SocialIcon className={styles.social} style={{ height: 40, width: 40 }} url={twitter_url} /> 
        </div>
        <div className={styles.copyright}>
            <small>Copyright © Eric Lee <span id="year">{new Date().getFullYear()}</span></small>
        </div>
      </footer>
    </div>
  )
}
