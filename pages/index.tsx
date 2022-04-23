import Head from 'next/head';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';

import styles from '../styles/Login.module.scss';
import LoginBg from '../public/assets/loginBg.jpg';
import { ROUTES } from '../config/route';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';

export default function Home(): React.ReactElement {
  const provider = new WalletConnectProvider({
    infuraId: "1bc7d10f1b47412ab3fcc770d8215b8b",
  });

  
  const onSignIn = async () => {
    await provider.enable();
    const web3 = new Web3(provider);
    // button gelecekti buraya
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Image src={LoginBg} alt='background image' placeholder='blur' layout='fill' className={styles.main__bgImage} />
        <div className={styles.main__card}>
          <h1>
            Nextflix
          </h1>
          <p>A simple Netflix clone built using Next.js</p>
          <div className={styles.button} onClick={onSignIn}>Sign in</div>
        </div>
      </main>
    </div>
  );
}
