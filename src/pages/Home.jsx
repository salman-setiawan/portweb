import React from 'react'
import AwardText from '../components/AwardText'
import BlueText from '../components/BlueText'
import Button from '../components/Button'
import Card from '../components/Card'
import Footer from '../components/Footer'
import TitleContent from '../components/TitleContent'
import YellowTextBox from '../components/YellowTextBox'
import { Link } from 'react-router-dom'
import SocialBox from '../components/SocialBox'
import ExperienceText from '../components/ExperienceText'

const Home = () => {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='flex flex-col items-center'>
        <img className='w-full' src='headermob.png' alt="header_img" />
          <div className=''>
            {/* <div className='flex justify-center mb-6'>
            <img className="w-32 h-32 rounded-full" src="avatar.png" alt="Rounded avatar" />
            </div> */}
            <div className="flex flex-col gap-y-6 items-center justify-center pt-4">
              <TitleContent name='Salman Setiawan' degree='S1 Informatika' school='Institut Teknologi Kalimantan' place='Balikpapan, Indonesia' />
              <SocialBox />
            </div>
            <div className="flex justify-center px-8 py-8">
              <YellowTextBox text='Hello everyone, kenalin nama saya Salman dan sekarang saya merupakan mahasiswa Informatika dari Institut Teknologi Kalimantan. Selamat Menjelajah :D' />
            </div>
            <div className='px-8'>
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
              <div className='flex justify-center mt-12'>
                <Link to='/project'>
                  <Button text="lihat lebih banyak" />
                </Link>
              </div>
            </div>
              <div className='px-8 mt-24'>
              <div className='flex flex-col items-start'>
                <div className='mb-6'>
                <BlueText title='Experience' />
                </div>
                <div className='flex flex-col gap-y-8'>
                  <ExperienceText date='09/22 - Present' title='UI/UX Designer' company='PT. Ghazi Teknologi Indonesia' />
                  <ExperienceText date='02/22 - 07/22' title='UI/UX Designer Internship' company='PT. Media Kreasi Abadi' />
                </div>
              </div>
              </div>
              <div className='mt-12 flex justify-center'>
                <Link to='/experience'>
                  <Button text="lihat lebih lengkap" />
                </Link>
              </div>
              {/* <div className="px-8 mt-24">
                <div className='flex flex-col items-start'>
                  <div className='mb-6'>
                  <BlueText title='Certificate' />
                  </div>
                  <div className='flex flex-col gap-y-5 pb-32'>
                    <AwardText date='2022 - Present' title='Project Based Intern : UI/UX Designer Virtual Internship Experience | Niagahoster' company='Rakamin Academy' />
                    <AwardText date='2021 - Present' title='Google UX Design Professional Certifcate' company='Coursera' />
                    <AwardText date='2021 - Present' title='Visual Elements of User Interface Design Calaarts' company='Coursera' />
                    <AwardText date='02/2022 - 02/2024' title='MS Wellbeing Center: Digital Product Innovation Challenge (Completion with Honor)' company='Skilvul' />
                    <AwardText date='07/2021 - 07/2023' title='Competency Certification of Junior Graphic Design' company='Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi' />
                  </div>
                </div>
              </div> */}
              <div className='mt-24 px-8 pb-4'>
                <Footer date='@2022' copyright='Styled by @ikrxu' />
              </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='flex flex-col items-center'>
          <img className='w-full' src='header.png' alt="header_img" />
            {/* <div className='flex justify-center mb-6'>
            <img className="w-32 h-32 lg:w-40 lg:h-40 rounded-full" src="avatar.png" alt="Rounded avatar" />
            </div> */}
          <div className='w-4/5 xl:w-[64rem]'>
            <div className="flex flex-col gap-y-6 items-center justify-center pt-8">
              <TitleContent name='Salman Setiawan' degree='S1 Informatika' school='Institut Teknologi Kalimantan' place='Balikpapan, Indonesia' />
              <SocialBox />
            </div>
            <div className="flex justify-center pt-16 pb-8">
              <YellowTextBox text='Hello everyone, kenalin nama saya Salman dan sekarang saya merupakan mahasiswa Informatika dari Institut Teknologi Kalimantan. Selamat Menjelajah :D' />
            </div>
            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-start'>
                <div className='mb-6'>
                  <BlueText title='Project' />
                </div>
                <div className="">
                  <div className='flex flex-row gap-x-6 mb-8'>
                    <Link to='/project/mobtoon'>
                      <Card img="/mobtoon/card.png" title='mobtoon' desc='Aplikasi Smart Country' />
                    </Link>
                    <Link to='/project/28sept'>
                      <Card img="/28sept/card.png" title='Dua Delapan September' desc='Website Katalog Buku' />
                    </Link>
                  </div>
                  <div className='flex flex-row gap-x-6 mt-8'>
                    <Link to='/project/edufams'>
                      <Card img="/edufams/card.png" title='EduFams' desc='Platform Edukasi Keluarga' />
                    </Link>
                    <Link to='/project/watsup'>
                      <Card img="/watsup/card.png" title='watsup' desc='Aplikasi Sosial Media' />
                    </Link>
                  </div>
                </div>
                {/* <div className="hidden 2xl:block">
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
                </div> */}
              </div>
              <div className='mt-10'>
                <Link to='/project'>
                  <Button text="lihat lebih banyak" />
                </Link>
              </div>
            </div>
            <div className='flex flex-col items-start mt-24'>
              <div className='mb-6'>
                <BlueText title='Experience' />
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                <div className='flex flex-col mb-5 gap-y-8'>
                  <AwardText date='09/22 - Present' title='UI/UX Designer' company='PT. Ghazi Teknologi Indonesia' />
                  <AwardText date='02/22 - 07/22' title='UI/UX Designer Internship' company='PT. Media Kreasi Abadi' />
                </div>
                <div className='flex flex-col mb-5 gap-y-8'>
                  <AwardText date='09/22 - Present' title='UI/UX Designer Internship' company='PT. Ghazi Teknologi Indonesia' />
                  <AwardText date='10/22 - Present' title='UI/UX Designer Freelance' company='CV. Dua Delapan September' />
                </div>
              </div>
            </div>
            <div className='mt-8 flex justify-center'>
              <Link to='/experience'>
                <Button text="lihat lebih lengkap" />
              </Link>
            </div>
            {/* <div className='flex flex-col items-start mt-24'>
              <div className='mb-6'>
              <BlueText title='Certificate' />
              </div>
              <div className='flex flex-col gap-y-5 pb-32'>
                <AwardText date='2022 - Present' title='Project Based Intern : UI/UX Designer Virtual Internship Experience | Niagahoster' company='Rakamin Academy' />
                <AwardText date='2021 - Present' title='Google UX Design Professional Certifcate' company='Coursera' />
                <AwardText date='2021 - Present' title='Visual Elements of User Interface Design Calaarts' company='Coursera' />
                <AwardText date='02/2022 - 02/2024' title='MS Wellbeing Center: Digital Product Innovation Challenge (Completion with Honor)' company='Skilvul' />
                <AwardText date='07/2021 - 07/2023' title='Competency Certification of Junior Graphic Design' company='Balai Pelatihan dan Pengembangan Teknologi Informasi dan Komunikasi' />
              </div>
            </div> */}
            <div className='mt-24 pb-4'>
              <Footer date='@2022' copyright='Styled by @ikrxu' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home