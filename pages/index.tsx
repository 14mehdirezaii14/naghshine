import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
const SvgLogo = dynamic(() => import('../components/svgLogo/SvgLogo'))
const BgTitleAnimation = dynamic(() => import('../components/BgTitleAnimation/BgTitleAnimation'))
const VideoColumn = dynamic(() => import('../components/VideoColumn/VideoColumn'))
const CanvasDotsBackground = dynamic(() => import('../components/CanvasDotsBackground/CanvasDotsBackground'))
const loader = ({ src }: { src: string }) => {
  return src
}

const Home: NextPage = () => {
  const lazyRoot = useRef<HTMLHeadingElement>(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>naghshineh</title>
        <meta name="description" content="Home Page naghshineh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto py-5'>
        {/* head */}
        <SvgLogo />
        <div className={`text-center ${styles.HeaderHomeTitle} relative -top-80 md:mb-0 sx:-mb-80 text-center`}>
          <h1 className='HeaderHomeLine1'>
            CONNECTING
          </h1>
          <h2 className={`${styles.HeaderHomeLine2}`}>
            BRANDS WITH PEOPLE
          </h2>
        </div>
        {/*  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-x-4 items-center ">
          <div className="md:col-span-8 sm:col-span-12 relative" >
            <Link href='/'>
              <a>
                <Image src='/download.jpg' loader={loader} blurDataURL="blur" lazyRoot={lazyRoot} height={400} width={800} className='hoverScale' />
              </a>
            </Link>
          </div>
          <div className="md:col-span-4  sm:col-span-12">
            <Link href='/'>
              <a>
                <p className={`text-color-green relative mb-0 subTitle subTitleBrfore`}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/' >
              <a className='btnGreen' >View Project</a>
            </Link>
          </div>
        </div>
        {/*  */}
        <BgTitleAnimation keyUnique={'1'} words={['C', 'R', 'E', 'A', 'T', 'I', 'V', 'E']} />
        {/* video column */}
        <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-x-4 items-center ">

          <div className="md:col-span-4 pr-16 sm:col-span-12 text-right">
            <Link href='/'>
              <a>
                <p className={`text-color-green relative mb-0 subTitle subTitleAfter `}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/' >
              <a className='btnGreen' >View Project</a>
            </Link>
          </div>
          <VideoColumn img={'https://i.vimeocdn.com/video/780757293-1c2ac502d89b659935c76cc89a7e76bc175c7276baa487b4d130bea6c11d50bb-d_1280'} />
        </div>
        {/*  */}
        <BgTitleAnimation keyUnique={'2'} words={['a', 'c', 't', 'i', 'v', 'a', 't', 'i', 'o', 'n']} />
        <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-x-4 items-center ">
          <div className="md:col-span-8 sm:col-span-12 relative" >
            <Link href='/'>
              <a>
                <Image src='/download.jpg' loader={loader} blurDataURL="blur" lazyRoot={lazyRoot} height={400} width={800} className='hoverScale' />
              </a>
            </Link>
          </div>
          <div className="md:col-span-4  sm:col-span-12">
            <Link href='/'>
              <a>
                <p className={`text-color-green relative mb-0 subTitle subTitleBrfore`}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/' >
              <a className='btnGreen' >View Project</a>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 text-center justify-center">
          <BgTitleAnimation keyUnique={'3'} words={['E', '_', 'C', 'O', 'M', 'M', 'E', 'R', 'C']} />
          <div>
            <Link href='/' >
              <a className='btnGreen inline-block' >View Project</a>
            </Link>
          </div>
        </div>
        {/*  */}

      </div>
      <div className=' relative sectionBlog' style={{
        background: '#1d1d20',
        color: 'black !important'
      }} >
        <div className=" absolute  bottom-0 right-0 top-0 left-0  " style={{

        }} >
          <CanvasDotsBackground />
        </div>
        <div className='container mx-auto  relative' >
          <BgTitleAnimation keyUnique={'4'} words={['b', 'l', 'o', 'g']} />
          <div className='text-white relative -top-20 text-center  grid grid-cols-12 -mb-16'>
            <div className='col-span-4' ><p className='text-left' style={{
              position: 'relative',
              fontSize: '35px',
              textTransform: 'uppercase',
              fontWeight: 500,
              letterSpacing: '.06em',

            }}>BREAKING NEWS</p></div>
            <div className="col-span-8">
              <p className='text-left' style={{
                fontWeight: 400

              }}>What's going on at Bite Size, you ask?
                <br />
                Well, here are some of the stories our team is proud to share with the world.</p>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="grid gap-6 grid-cols-3 relative">
              <div className='colSectionBlog '>
                <Image className='imgSectionBlog' onMouseOver={(e) => { e.stopPropagation() }} src={'/blog.jpg'} width={500} height={500} />
                <div className='p-3 relaive textColSectionBlog'>
                  <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                    4th of October 2022</p>
                  <p className='text-white dialogSectionBlog'>
                    Gen Z in Canada - A Starting Point  For A Dialogue. </p>
                </div>
              </div>
              {/*  */}
              <div className='colSectionBlog '>
                <Image className='imgSectionBlog' src={'/blog.jpg'} width={500} height={500} />
                <div className='p-3 relaive textColSectionBlog'>
                  <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                    4th of October 2022</p>
                  <p className='text-white dialogSectionBlog'>
                    Gen Z in Canada - A Starting Point  For A Dialogue. </p>
                </div>
              </div>
              {/*  */}
              <div className='colSectionBlog '>
                <Image className='imgSectionBlog' src={'/blog.jpg'} width={500} height={500} />
                <div className='p-3 relaive textColSectionBlog'>
                  <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                    4th of October 2022</p>
                  <p className='text-white dialogSectionBlog'>
                    Gen Z in Canada - A Starting Point  For A Dialogue. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
