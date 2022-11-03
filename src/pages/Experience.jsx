import React from 'react'
import AwardText from '../components/AwardText'
import BlueText from '../components/BlueText'
import Footer from '../components/Footer'

const Experience = () => {
  return (
    <div>
      <div className='md:hidden block'>
        <div className='flex flex-col items-center'>
        <img className='w-full' src='portpage_mobile.png' alt="header_img" />
          <div className=''>
            <div className='px-8 mt-8'>
              <div className='flex flex-col items-start'>
                <div className='mb-6'>
                <BlueText title='Experience' />
                </div>
                <div className='flex flex-col gap-y-5'>
                  <AwardText 
                    date='09/22 - Present' 
                    title='UI/UX Designer' 
                    company='PT. Ghazi Teknologi Indonesia' 
                    desc1='Melakukan brainstorming bersama tim dari seluruh divisi untuk menentukan nama aplikasi, tagline, dan warna dasar pada aplikasi.'
                    desc2="Berkolaborasi bersama tim dalam divisi desainer UI/UX dalam membuat platform 'Smart Country' bernama DEKAT."
                    desc3='Berkontribusi dalam riset UX dari DEKAT dengan mencari referensi terkait aplikasi yang akan dibuat dengan membandingkan berbagai aplikasi yang sudah ada sesuai dengan fitur yang sudah disepakati, kemudian menawarkan solusi optimal untuk aplikasi DEKAT.'
                    desc4='Berkontribusi dalam membuat UI Design dari DEKAT mulai dari membuat wireframe, design system, dan UI mockup'
                  />
                  <AwardText 
                    date='02/22 - 07/22' 
                    title='UI/UX Designer Internship' 
                    company='PT. Media Kreasi Abadi' 
                    desc1='Berkolaborasi bersama tim menggunakan metode agile kanban dalam membuat platform edukasi keluarga bernama EduFams dengan metode Design Thinking.'
                    desc2="Berkontribusi dalam membuat UX Design dari EduFams mulai dari research untuk mencari permasalahan lewat interview dan observasi, menentukan solusi dari pernyataan masalah yang didapat, membuat userfow untuk kebutuhan aplikasi, hingga business fow sebagai monetisasi dari startup EduFams."
                    desc3='Berkontribusi dalam membuat UI Design dari EduFams mulai dari membuat wireframe, design system, UI mockup, hingga prototyping.'
                  />
                  <AwardText 
                    date='10/22 - Present' 
                    title='UI/UX Designer Freelance' 
                    company='CV. Dua Delapan September' 
                    desc1='Berkolaborasi bersama Fullstack Developer dalam membuat website katalog buku untuk CV. Dua Delapan September.'
                    desc2="Berkontribusi dalam membuat UX Design dari website mulai dari riset untuk mencari permasalahan yang dihadapi klien dengan melakukan interview."
                    desc3='Berkontribusi dalam membuat UI Design dari hasil brief yang sudah dibuat kemudian dituangkan dalam bentuk wireframe, dan UI mockup.'
                    desc4='Melakukan presentasi dengan klien terkait hasil proses desain yang dibuat apakah sudah sesuai dengan ekspektasi klien atau belum.'
                  />
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
        <img src='portpage_web.png' alt="header_img" />
        <div className='w-2/3 2xl:w-1/2'>
          <div className='flex flex-col items-start mt-12'>
            <div className='mb-6'>
            <BlueText title='Experience' />
            </div>
            <div className='flex flex-col gap-y-5 mb-5'>
              <AwardText 
                date='09/22 - Present' 
                title='UI/UX Designer' 
                company='PT. Ghazi Teknologi Indonesia' 
                desc1='Melakukan brainstorming bersama tim dari seluruh divisi untuk menentukan nama aplikasi, tagline, dan warna dasar pada aplikasi.'
                desc2="Berkolaborasi bersama tim dalam divisi desainer UI/UX dalam membuat platform 'Smart Country' bernama DEKAT."
                desc3='Berkontribusi dalam riset UX dari DEKAT dengan mencari referensi terkait aplikasi yang akan dibuat dengan membandingkan berbagai aplikasi yang sudah ada sesuai dengan fitur yang sudah disepakati, kemudian menawarkan solusi optimal untuk aplikasi DEKAT.'
                desc4='Berkontribusi dalam membuat UI Design dari DEKAT mulai dari membuat wireframe, design system, dan UI mockup'
              />
              <AwardText 
                date='02/22 - 07/22' 
                title='UI/UX Designer Internship' 
                company='PT. Media Kreasi Abadi' 
                desc1='Berkolaborasi bersama tim menggunakan metode agile kanban dalam membuat platform edukasi keluarga bernama EduFams dengan metode Design Thinking.'
                desc2="Berkontribusi dalam membuat UX Design dari EduFams mulai dari research untuk mencari permasalahan lewat interview dan observasi, menentukan solusi dari pernyataan masalah yang didapat, membuat userfow untuk kebutuhan aplikasi, hingga business fow sebagai monetisasi dari startup EduFams."
                desc3='Berkontribusi dalam membuat UI Design dari EduFams mulai dari membuat wireframe, design system, UI mockup, hingga prototyping.'
              />
              <AwardText 
                date='10/22 - Present' 
                title='UI/UX Designer Freelance' 
                company='CV. Dua Delapan September' 
                desc1='Berkolaborasi bersama Fullstack Developer dalam membuat website katalog buku untuk CV. Dua Delapan September.'
                desc2="Berkontribusi dalam membuat UX Design dari website mulai dari riset untuk mencari permasalahan yang dihadapi klien dengan melakukan interview."
                desc3='Berkontribusi dalam membuat UI Design dari hasil brief yang sudah dibuat kemudian dituangkan dalam bentuk wireframe, dan UI mockup.'
                desc4='Melakukan presentasi dengan klien terkait hasil proses desain yang dibuat apakah sudah sesuai dengan ekspektasi klien atau belum.'
              />
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

export default Experience