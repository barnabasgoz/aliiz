import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Octokit } from "@octokit/core";

export default function Home() {
  const [Date, setDate] = useState('Loading...');

  useEffect(() => {
    async function getLastCommitDate () {
        const octokit = new Octokit({ auth: process.env.TOKEN });
        console.log(process.env.TOKEN);
        const master = await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
            owner: 'barnabasgoz',
            repo: 'aliiz',
            branch: 'master'
          });  
        console.log(master);
        setDate(master.data.commit.commit.author.date)        
    };

  getLastCommitDate()
}, []);
    return (
      <div className='w-screen h-auto min-h-screen flex justify-center items-center bg-image bg-cover flex-col '>
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T4M4E2N7D4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T4M4E2N7D4');
        `}
      </Script>
        <Head>
          <title>Még egy meglepi! 😀</title>
        </Head>
        <h1 className='mt-5 text-white font-bold font-poppins text-4xl glassbck p-3 w-5/6 text-center duration-700'>Még egy meglepi! 😀</h1>
        <br/>
        <div className='mb-5 w-5/6 h-auto glassbck duration-700 rounded-md p-2 pt-5 pb-5 flex flex-col justify-items-start items-center gap-2'>
          <div>
            <h1 className='font-poppins font-bold text-white'>Válasz a lehetőségekből!</h1>
          </div>
          <Link href="/jokivansagok" passHref>
            <div className='w-11/12 h-12 bg-blue-300 hover:bg-blue-400 text-center rounded-md font-poppins pt-3 pb-3 text-base hover:text-lg duration-700 cursor-pointer'>
              <h1 className='font-poppins font-bold text-white'>📫 Olvass el pár üzenetet az osztálytól.</h1>
            </div>
          </Link>
          <div>
            <h1 className='font-poppins font-bold text-white'>vagy</h1>
          </div>
          <a href='https://open.spotify.com/playlist/1DSRWHEceKrleLcFFMNufY?si=GeFIWVc3QNO4_RIBhXKR-w' className='w-11/12 h-auto bg-blue-300 hover:bg-blue-400 text-center rounded-md font-poppins pt-3 pb-3 text-base hover:text-lg duration-700 cursor-pointer'>
            <h1 className='font-poppins font-bold text-white '>🎼 Hallgasd meg a Spotify lejátszási listánkat.</h1>
          </a>
          <div>
            <h1 className='font-poppins font-bold text-white'>vagy</h1>
          </div>
          <a href='https://docs.google.com/spreadsheets/d/1-Ml5QnxCZbiq0KsRyGqSVJxhzfeeGCRC8lXr3Paw_dY/edit?usp=sharing' className='w-11/12 h-12 bg-blue-300 hover:bg-blue-400 text-center rounded-md font-poppins pt-3 pb-3 text-base hover:text-lg duration-700 cursor-pointer'>
            <h1 className='font-poppins font-bold text-white'>🎤  Olvasd el melyik számot ki küldte.</h1>
          </a>
          <div>
            <h1 className='font-poppins font-bold text-white'>vagy</h1>
          </div>
          <a  className='w-11/12 h-12 bg-blue-300 hover:bg-blue-400 text-center rounded-md font-poppins pt-3 pb-3 text-base hover:text-lg duration-700 cursor-pointer' href="mailto:7b@e5vos.hu">
            <h1 className='font-poppins font-bold text-white'>📮  írj nekünk üzenetet.</h1>
          </a>
          <p className='font-poppins text-sm font-semibold text-white'>Az oldal utoljára {Date}-kor volt frissítve.</p>
        </div>
      </div>
    )
}
