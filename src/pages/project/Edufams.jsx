import React, { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import { SliderEdufams1, SliderEdufams2 } from '../../components/SliderData'
import TitleArticle from '../../components/TitleArticle'
import YellowTextBox from '../../components/YellowTextBox'
import { BarLoader } from 'react-spinners'

const Edufams = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading ?

        <div className="h-screen flex flex-col justify-center items-center gap-y-6">
          <img src="/logo.svg" alt="icon" />
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
            <img className='w-full' src='/edufams/mobile.png' alt="header_img" />
              <div className=''>
                <div className="flex justify-center pt-4">
                  <TitleArticle name='EduFams' type='Platform Edukasi Keluarga' project='Collaboration Project' />
                </div>
                <div className="flex justify-center px-8 pt-8 pb-3">
                  <YellowTextBox text='Greetings everyone, pada proyek kali ini saya mencoba membuat aplikasi baca komik. Sebelum memulai saya terlebih dahulu mencari tahu seperti apa konsep dasar dari aplikasi yang akan saya desain jadi saya mengumpulkan beberapa tampilan dari aplikasi yang sudah sangat terkenal seperti Webtoon berikut contoh tampilan app Webtoon dari chamjo.design.' />
                </div>
                <div className="flex justify-center px-8 py-3">
                  <img src="/edufams/logoconcept.png" alt="picture_1" />
                </div>
                <div className="flex justify-center px-8 py-3">
                  <YellowTextBox text='Setelah menganalisa konsep desain seperti apa yang akan dibuat kemudian saya mulai membuat styleguide saya sendiri agar aplikasi yang saya buat lebih konsisten dan terlihat ciamik. berikut tangkapan layar dari styleguide yang sudah saya buat.' />
                </div>
                <div className="flex flex-col justify-center px-8 py-3">
                  <div className=''>
                    <div className="relative flex gap-x-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                      {SliderEdufams1.map((item) => {
                        return (
                          <Slider src={item.image} />
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 pt-1">
                    slide untuk melihat lebih banyak gambar
                  </div>
                </div>
                <div className="flex justify-center px-8 py-3">
                  <YellowTextBox text='Setelah menganalisa konsep desain seperti apa yang akan dibuat kemudian saya mulai membuat styleguide saya sendiri agar aplikasi yang saya buat lebih konsisten dan terlihat ciamik. berikut tangkapan layar dari styleguide yang sudah saya buat.' />
                </div>
                <div className="flex flex-col justify-center px-8 py-3">
                  <div className=''>
                    <div className="relative flex gap-x-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                      {SliderEdufams2.map((item) => {
                        return (
                          <Slider src={item.image} />
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 pt-1">
                    slide untuk melihat lebih banyak gambar
                  </div>
                </div>
                <div className="flex justify-center px-8 py-3">
                  <YellowTextBox text='Greetings everyone, pada proyek kali ini saya mencoba membuat aplikasi baca komik. Sebelum memulai saya terlebih dahulu mencari tahu seperti apa konsep dasar dari aplikasi yang akan saya desain jadi saya mengumpulkan beberapa tampilan dari aplikasi yang sudah sangat terkenal seperti Webtoon berikut contoh tampilan app Webtoon dari chamjo.design.' />
                </div>
                <div className="flex justify-center px-8 py-3">
                  <div className="flex flex-col gap-y-4">
                    <img src="/edufams/mockup1.png" alt="picture_3" />
                    <img src="/edufams/mockup2.png" alt="picture_3" />
                  </div>
                </div>
                <div className='px-8 pb-4'>
                  <Footer date='@2022' copyright='Styled by @ikrxu' />
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='flex flex-col items-center'>
            <img className='w-full' src='/edufams/web.png' alt="header_img" />
              <div className='w-3/5 xl:w-[60rem]'>
                <div className="flex justify-center pt-4">
                  <TitleArticle name='mobtoon' type='Aplikasi Baca Komik' project='Individual Project' />
                </div>
                <div className="flex justify-center px-8 pt-8 pb-3">
                  <YellowTextBox text='Greetings everyone, pada proyek kali ini saya mencoba membuat aplikasi baca komik. Sebelum memulai saya terlebih dahulu mencari tahu seperti apa konsep dasar dari aplikasi yang akan saya desain jadi saya mengumpulkan beberapa tampilan dari aplikasi yang sudah sangat terkenal seperti Webtoon berikut contoh tampilan app Webtoon dari chamjo.design.' />
                </div>
                <div className="flex justify-center px-8 py-3">
                  <img src="/edufams/logoconcept.png" alt="picture_1" />
                </div>
                <div className="flex justify-center px-8 py-3">
                  <YellowTextBox text='Setelah menganalisa konsep desain seperti apa yang akan dibuat kemudian saya mulai membuat styleguide saya sendiri agar aplikasi yang saya buat lebih konsisten dan terlihat ciamik. berikut tangkapan layar dari styleguide yang sudah saya buat.' />
                </div>
                <div className="flex flex-col justify-center px-8 py-3">
                  <div className=''>
                    <div className="relative flex gap-x-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                      {SliderEdufams1.map((item) => {
                        return (
                          <Slider src={item.image} />
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 pt-1">
                    slide untuk melihat lebih banyak gambar
                  </div>
                </div>
                <div className="flex justify-center px-8 py-3">
                  <YellowTextBox text='Greetings everyone, pada proyek kali ini saya mencoba membuat aplikasi baca komik. Sebelum memulai saya terlebih dahulu mencari tahu seperti apa konsep dasar dari aplikasi yang akan saya desain jadi saya mengumpulkan beberapa tampilan dari aplikasi yang sudah sangat terkenal seperti Webtoon berikut contoh tampilan app Webtoon dari chamjo.design.' />
                </div>
                <div className="flex flex-col justify-center px-8 py-3">
                  <div className=''>
                    <div className="relative flex gap-x-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
                      {SliderEdufams2.map((item) => {
                        return (
                          <Slider src={item.image} />
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 pt-1">
                    slide untuk melihat lebih banyak gambar
                  </div>
                </div>
                <div className="flex justify-center px-8 py-3">
                  <YellowTextBox text='Greetings everyone, pada proyek kali ini saya mencoba membuat aplikasi baca komik. Sebelum memulai saya terlebih dahulu mencari tahu seperti apa konsep dasar dari aplikasi yang akan saya desain jadi saya mengumpulkan beberapa tampilan dari aplikasi yang sudah sangat terkenal seperti Webtoon berikut contoh tampilan app Webtoon dari chamjo.design.' />
                </div>
                <div className="flex justify-center px-8 py-3">
                  <div className="flex flex-col gap-y-4">
                    <img src="/edufams/mockup1.png" alt="picture_3" />
                    <img src="/edufams/mockup2.png" alt="picture_3" />
                  </div>
                </div>
                <div className='px-8 pb-4'>
                  <Footer date='@2022' copyright='Styled by @ikrxu' />
                </div>
              </div>
            </div>
          </div>
        </div>
        }
    </div>
  )
}

export default Edufams