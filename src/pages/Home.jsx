import React, { useState, useEffect } from 'react'
import AwardText from '../components/AwardText'
import BlueText from '../components/BlueText'
import Button from '../components/Button'
import Card from '../components/Card'
import Footer from '../components/Footer'
import YellowTextBox from '../components/YellowTextBox'
import { Link } from 'react-router-dom'
import SocialBox from '../components/SocialBox'
import ExperienceText from '../components/ExperienceText'
import TitleArticle from '../components/TitleArticle'
import { BarLoader } from 'react-spinners'

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div>
      {
        loading ?

        <div className="h-screen flex flex-col justify-center items-center gap-y-6">
          <img src="logo.svg" alt="icon" />
          <BarLoader
            size={80}
            color={'#6BC4FF'}
            loading={loading}
          />
        </div>

        :

        <div>
          <div className='md:hidden block'>
            <div className='flex flex-col items-center'>
              <div className="w-full bg-center flex justify-center bg-[url('/header.png')] bg-cover">
                <div className="px-8">
                  <div className="grid grid-rows-2 gap-y-8 py-16">
                    <div className="text-3xl font-light leading-[3rem]">
                      Saya Salman Setiawan, Desainer dari Balikpapan, Indonesia.
                    </div>
                    <div className="flex items-center justify-center bg-[#2E3442]">
                      <YellowTextBox text='Saat ini menjadi bagian dari tim desain dari Ghazi, sebuah perusahaan perorangan asal Balikpapan, Indonesia. Memiliki minat yang kuat pada riset dan implementasi desain.' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-8'>
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
            <div className="block xl:hidden">
                <div className="w-full bg-center flex justify-center bg-[url('/header.png')] bg-cover">
                  <div className="w-4/5 xl:w-[64rem]">
                    <div className="grid grid-rows-2 gap-y-8 py-16">
                      <div className="w-4/5 text-4xl font-light leading-[4rem]">
                        Saya Salman Setiawan, Desainer dari Balikpapan, Indonesia.
                      </div>
                      <div className="flex items-center justify-center">
                        <YellowTextBox text='Saat ini menjadi bagian dari tim desain dari Ghazi, sebuah perusahaan perorangan asal Balikpapan, Indonesia. Memiliki minat yang kuat pada riset dan implementasi desain.' />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="hidden xl:block">
              <div className="w-full flex justify-center bg-[url('/header.png')] bg-cover">
                <div className="w-4/5 xl:w-[64rem]">
                  <div className="grid grid-cols-2 gap-x-8 py-40">
                    <div className="text-4xl font-light leading-[4rem]">
                      Saya Salman Setiawan, Desainer dari Balikpapan, Indonesia.
                    </div>
                    <div className="py-3">
                      <div className="flex items-center justify-center bg-[#2E3442]">
                        <YellowTextBox text='Saat ini menjadi bagian dari tim desain dari Ghazi, sebuah perusahaan perorangan asal Balikpapan, Indonesia. Memiliki minat yang kuat pada riset dan implementasi desain.' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='w-4/5 xl:w-[64rem] pt-16'>
                <div className='flex flex-col items-center'>
                  <div className='flex flex-col items-start'>
                    <div className='mb-6'>
                      <BlueText title='Project' />
                    </div>
                    <div className="">
                      <div className='pb-8'>
                        <Link to='/project/mobtoon'>
                          <Card img="/overview/highlightcard.png" title='mobtoon' desc='Aplikasi Smart Country' />
                        </Link>
                      </div>
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
                      <AwardText date='09/22 - Present' title='UI/UX Designer Internship' company='Griya Bunda Sehat' />
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
      }

    </div>
  );
}

export default Home