import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'

function Jokivansagok(props) {
    return (
        <div className='w-screen h-auto min-h-screen flex justify-center items-center bg-image bg-cover flex-col '>
            <Head>
                <title>Jókívánságok 😀</title>
            </Head>
            <h1 className='mt-5 text-white font-bold font-poppins text-4xl glassbck p-3 w-5/6 text-center duration-700'>Jókivánságaink vagy üzeneteink 😀</h1>
            <br/>
            <div className='mb-5 w-5/6 h-auto glassbck duration-700 rounded-md p-2 pt-5 pb-5 flex justify-center flex-wrap gap-2 '>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>✨ Vigyázz magadra 💕 ✨</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>Majd küldj képeket!</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>Remélem, nagyon jól érzed magad! Várunk haza!</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>💖 Thank you 💖</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>&quot;Kenyér&quot;-Panda</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>Kedves Alíz! Remélem nagyon jól fogod magad érezni az egyetemen, és külföldön! Gondolunk rád! Jó utat, és sok erőt, kitartást!:D</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>Hiányozni fogsz!</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>Érezd magad nagyon jól külföldön! Nagyon, nagyon fogsz hiányozni, várunk vissza! ❤️</div>
                <div className='text-white font-poppins text-base hover:text-lg duration-700 hover:bg-blue-400 bg-blue-300 pt-3 pb-3 p-2 rounded-md'>szia aliiz!!! hianyzok? na biztos, hogy igen:)) remelem jol tellnek a napjaid es h nem kapod el a covidot, vigyazz magadra mert kellesz az osztalynak, es hianyzol te is mar nekunk:)) nem tudom, h meg jarsz-e, de sok sikert az egyetemhez!! ❤️ ❤️ 🥰</div>
            </div>
            <br/>
            <Link href="/">
                <div className='bg-blue-300 hover:bg-blue-400 duration-700 text-white font-poppins font-bold text-lg hover:text-2xl p-3 rounded-lg'>Vissza</div>
            </Link>
            
        </div>
    )
}


export default Jokivansagok

