import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FitGuide App</title>
        <meta name="description" content="Personalized training and nutrition experiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <div>
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={inter.className}>
              Personal training - Onsite <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Onsite PT sessions.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Personal training - Online <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Online PT sessions.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Training Plans <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Let&apos;s build your personalized training plan.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={inter.className}>
              Nutritional Plan <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Let&apos;s build your personalized training plan.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
