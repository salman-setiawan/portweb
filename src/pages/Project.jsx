import React from 'react'
import { Link } from 'react-router-dom'
import BlueText from '../components/BlueText'
import Card from '../components/Card'
import Footer from '../components/Footer'


const Project = () => {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='flex flex-col items-center'>
        <img className='w-full' src='/overview/mobile.png' alt="header_img" />
          <div className=''>
            <div className='py-8 px-8'>
              <div className='flex flex-col items-start'>
                <div className='mb-6'>
                <BlueText title='Project' />
                </div>
                <div className='flex flex-col gap-y-5'>
                  <Link to='/project/mobtoon'>
                    <Card img="/mobtoon/card.png" title='mobtoon' desc='Aplikasi Smart Country' />
                  </Link>
                  <Link to='/project/edufams'>
                    <Card img="/edufams/card.png" title='EduFams' desc='Platform Edukasi Keluarga' />
                  </Link>
                  <Link to='/project/28sept'>
                    <Card img="/28sept/card.png" title='Dua Delapan September' desc='Website Katalog Buku' />
                  </Link>
                </div>
              </div>
            </div>
              <div className='px-8 pt-8 pb-4'>
                <Footer date='@2022' copyright='Styled by @ikrxu' />
              </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='flex flex-col items-center'>
        <img src='/overview/web.png' alt="header_img" />
        <div className='w-3/5 xl:w-1/2'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-start py-12'>
              <div className='pb-6'>
                <BlueText title='Project' />
              </div>
              <div className="2xl:hidden block">
                <div className='flex flex-row gap-x-8 mb-8'>
                  <Link to='/project/mobtoon'>
                    <Card img="/mobtoon/card.png" title='mobtoon' desc='Aplikasi Smart Country' />
                  </Link>
                  <Link to='/project/28sept'>
                    <Card img="/28sept/card.png" title='Dua Delapan September' desc='Website Katalog Buku' />
                  </Link>
                </div>
                <div className='flex flex-row gap-x-8 mt-8'>
                  <Link to='/project/edufams'>
                    <Card img="/edufams/card.png" title='EduFams' desc='Platform Edukasi Keluarga' />
                  </Link>
                  <Link to='/project/watsup'>
                    <Card img="/watsup/card.png" title='watsup' desc='Aplikasi Sosial Media' />
                  </Link>
                </div>
              </div>
              <div className="hidden 2xl:block">
                <div className='flex flex-row gap-x-8 mb-8'>
                  <Link to='/project/mobtoon'>
                    <Card img="/mobtoon/card.png" title='mobtoon' desc='Aplikasi Smart Country' />
                  </Link>
                  <Link to='/project/edufams'>
                    <Card img="/edufams/card.png" title='EduFams' desc='Platform Edukasi Keluarga' />
                  </Link>
                  <Link to='/project/28sept'>
                    <Card img="/28sept/card.png" title='Dua Delapan September' desc='Website Katalog Buku' />
                  </Link>
                </div>
                <div className='flex flex-row gap-x-8 mt-8'>
                  <Link to='/project/mobtoon'>
                    <Card img="/mobtoon/card.png" title='mobtoon' desc='Aplikasi Smart Country' />
                  </Link>
                  <Link to='/project/edufams'>
                    <Card img="/edufams/card.png" title='EduFams' desc='Platform Edukasi Keluarga' />
                  </Link>
                  <Link to='/project/watsup'>
                    <Card img="/watsup/card.png" title='watsup' desc='Aplikasi Sosial Media' />
                  </Link>                  
                </div>
              </div>
            </div>
          </div>
            <div className='pt-16 pb-4'>
              <Footer date='@2022' copyright='Styled by @ikrxu' />
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Project