import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

const ArtificialCharacters: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>GANによる人工言語向け架空文字生成</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className='section'>
        <div className='container'>
          <h1 className='title'>
            GANによる人工言語向け架空文字生成
          </h1>
          <p className='subtitle'>
          </p>
          <div className='contents'>
            <p>
              PBL講義<a href="http://pr.cei.uec.ac.jp/kobo2018/index.php">情報工学工房2018 テーマ「Pythonによる深層学習」</a>にて、
              個人製作。
            </p>
            <p>
              PyTorch、DCGANなどを使用した。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ArtificialCharacters
