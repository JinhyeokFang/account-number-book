import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Account Number Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

      </main>
    </div>
  )
}

export default IndexPage
