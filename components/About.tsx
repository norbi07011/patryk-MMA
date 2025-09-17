
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ImageSlider from './ImageSlider';

const About: React.FC = () => {
  const { t } = useLanguage();
  const images = [
  '/images/galeria zdjec (1).jpg',
  '/images/galeria zdjec (2).jpg',
  '/images/galeria zdjec (3).jpg',
  '/images/galeria zdjec (5).jpg',
  '/images/galeria zdjec (6).png',
  '/images/galeria zdjec (7).jpg',
  '/images/galeria zdjec (8).jpg',
  '/images/galeria zdjec (9).png',
  '/images/galeria zdjec (10).jpg',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">{t('about.title')}</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl">
          <img src="https://picsum.photos/seed/pk/400/400" alt="Patryk Kulpa" className="rounded-full w-40 h-40 mx-auto mb-6 border-4 border-neon-yellow shadow-lg shadow-neon-yellow/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-yellow/50"/>
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{t('about.bio_title')}</h3>
          <p className="text-center text-neon-yellow mb-4">{t('about.bio_subtitle')}</p>
          <p className="text-gray-600 dark:text-gray-300 text-justify">
            {t('about.bio_content')}
          </p>
          <p className="mt-6 text-center text-lg italic font-semibold text-gray-700 dark:text-gray-200">"{t('about.passion_slogan')}"</p>
        </div>

        <div className="flex flex-col space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                 <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">{t('about.gallery_title')}</h3>
                <ImageSlider images={images} />
            </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Certyfikat</h3>
        <div className="p-1 bg-gray-200 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-yellow/30 flex flex-col gap-4">
          <img src="/images/certyfikat.jpg" alt="Certyfikat 1" className="rounded-md shadow-md w-full"/>
          <img src="/images/certyfikat 1.jpg" alt="Certyfikat 2" className="rounded-md shadow-md w-full"/>
        </div>
             </div>
             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">{t('about.video_gallery_title')}</h3>
                <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-neon-yellow/30">
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/2Xvg_k_Ua-A"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;