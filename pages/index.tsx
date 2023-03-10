import Link from 'next/link';
import { Inter } from '@next/font/google'
import Layout from '../components/general/layout';
import HeroSection from '../components/home/heroSection';
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <>
        <HeroSection />
        <div className={styles.grid}>
          <Link href="/services/onsite-pt" className={styles.card}>
            <h2 className={inter.className}>
              Personal training - Onsite <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Onsite PT sessions.
            </p>
          </Link>

          <Link href="/services/physical-therapy" className={styles.card}>
            <h2 className={inter.className}>
              Physical Therapy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Helping You Get Back in Motion!
            </p>
          </Link>

          <Link href="/services/online-pt" className={styles.card}>
            <h2 className={inter.className}>
              Personal training - Online <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Online PT sessions.
            </p>
          </Link>

          <Link href="/services/training-programs" className={styles.card}>
            <h2 className={inter.className}>
              Training Programs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Let&apos;s build your personalized training program.
            </p>
          </Link>

          <Link href="/services/nutritional-plans" className={styles.card}>
            <h2 className={inter.className}>
              Nutritional Plans <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Let&apos;s build your personalized nutritional plan.
            </p>
          </Link>

          <Link href="/services/fitness-consultancy" className={styles.card}>
            <h2 className={inter.className}>
              Training and Nutritional Consultancy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Not sure what you need? We can find it out.
            </p>
          </Link>
        </div>
      </>
    </Layout>
  );
}
