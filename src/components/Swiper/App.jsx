// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { useState, useRef, useEffect } from 'react'
// import required modules
import { Pagination } from 'swiper/modules'
import CardBachelor from '../CardBachelor/App'
export default function App() {
    const Language = localStorage.getItem('i18nextLng') || 'uz'
    const [showPagination, setShowPagination] = useState(false)
    const swiperRef = useRef(null)
    const handleResize = () => {
        const windowWidth = window.innerWidth
        if (windowWidth <= 800) {
            setShowPagination(true)
        } else {
            setShowPagination(false)
        }
    }

    useEffect(() => {
        handleResize() // Initial check
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const CONTRACT_INFO_UZ = {
        'Maktabgacha ta’lim': {
            Kunduzgi: '14.19',
            Kechki: '11.4',
            // Sirtqi: '12.6',
        }, //check
        Tarix: {
            Kunduzgi: '18.48',
            Kechki: '14.8',
            // Sirtqi: '12.9',
        }, //check
        'Kompyuter injiniringi': {
            Kunduzgi: '17.38',
            Kechki: '13.9',
            // Sirtqi: '12.9',
        }, //check
        'Dasturiy injiniring': {
            Kunduzgi: '18.48',
            Kechki: '14.8',
            // Sirtqi: '12.9',
        }, //check
        'Moliya va moliyaviy texnologiyalar': {
            Kunduzgi: '21.78',
            Kechki: '17.4',
            // Sirtqi: '14.85',
        }, //check

        'Boshlang’ich ta’lim': {
            Kunduzgi: '18.48',
            Kechki: '14.8',
            // Sirtqi: '12.6',
        }, //check

        'Buxgalteriya hisobi': {
            Kunduzgi: '21.78',
            Kechki: '17.4',
            // Sirtqi: '14.85',
        }, //check

        'Turizm va mehmondoʻstlik': {
            Kunduzgi: '18.48',
            Kechki: '14.8',
            // Sirtqi: '12.6',
        },

        Iqtisodiyot: {
            Kunduzgi: '21.78',
            Kechki: '17.4',
            // Sirtqi: '14.85',
        },
        Psixologiya: {
            Kunduzgi: '18.48',
            Kechki: '14.8',
            // Sirtqi: '12.9',
        },
        Logistika: {
            Kunduzgi: '18.48',
            Kechki: '14.8',
            // Sirtqi: '12.9',
        },

        'Bank ishi': {
            Kunduzgi: '21.58',
            Kechki: '17.4',
            // Sirtqi: '14.85',
        },
        'Ijtimoiy ish': {
            Kunduzgi: '17.38',
            Kechki: '13.9',
            // Sirtqi: '12.6',
        },
        'Maxsus pedagogika': {
            Kunduzgi: '18.48',
            Kechki: '14.8',
        },
        'Xorijiy til va adabiyoti': {
            Kunduzgi: '18.48',
            Kechki: '16.6',
        },
        'O‘zbek tili va adabiyoti': {
            Kunduzgi: '18.48',
            Kechki: '14.8',
        },

        Matematika: {
            Kunduzgi: '17.38',
            Kechki: '13.9',
        },

        Arxitektura: {
            Kunduzgi: '18.48',
            Kechki: '15.7',
        },
    }
    const CONTRACT_INFO_RU = {
        'Дошкольное образование': {
            Дневное: '14.19',
            Вечернее: '11.4',
            // Заочное: '12.6',
        },
        История: {
            Дневное: '18.48',
            Вечернее: '14.8',
            // Заочное: '12.9',
        },
        'Компьютерная инженерия': {
            Дневное: '17.38',
            Вечернее: '13.9',
            // Заочное: '12.9',
        },
        'Программная инженерия': {
            Дневное: '18.48',
            Вечернее: '14.8',
            // Заочное: '12.9',
        },
        'Финансы и финансовые технологии': {
            Дневное: '21.78',
            Вечернее: '17.4',
            // Заочное: '14.85',
        },

        'Начальное образование': {
            Дневное: '18.48',
            Вечернее: '14.8',
            // Заочное: '12.6',
        },

        'Бухгалтерский учет': {
            Дневное: '21.78',
            Вечернее: '17.4',
            // Заочное: '14.85',
        },

        'Туризм и гостеприимство': {
            Дневное: '18.48',
            Вечернее: '14.8',
            // Заочное: '12.6',
        },

        Экономика: {
            Дневное: '21.78',
            Вечернее: '17.4',
            // Заочное: '14.85',
        },
        Психология: {
            Дневное: '18.48',
            Вечернее: '14.8',
            // Заочное: '12.9',
        },
        Логистика: {
            Дневное: '18.48',
            Вечернее: '14.8',
            // Заочное: '12.9',
        },

        'Банковское дело': {
            Дневное: '21.58',
            Вечернее: '17.4',
            // Заочное: '14.85',
        },
        'Социальная работа': {
            Дневное: '17.38',
            Вечернее: '13.9',
            // Заочное: '12.6',
        },
        'Специальная педагогика': {
            Дневное: '18.48',
            Вечернее: '14.8',
        },
        'Иностранный язык и литература': {
            Дневное: '18.48',
            Вечернее: '16.6',
        },
        'Узбекский язык и литература': {
            Дневное: '18.48',
            Вечернее: '14.8',
        },

        Математика: {
            Дневное: '17.38',
            Вечернее: '13.9',
        },

        Архитектура: {
            Дневное: '18.48',
            Вечернее: '15.7',
        },
    }
    const CONTRACT_INFO_EN = {
        'Preschool Education': {
            FullTime: '14.19',
            Evening: '11.4',
            // PartTime: '12.6',
        },
        History: {
            FullTime: '18.48',
            Evening: '14.8',
            // PartTime: '12.9',
        },
        'Computer Engineering': {
            FullTime: '17.38',
            Evening: '13.9',
            // PartTime: '12.9',
        },
        'Software Engineering': {
            FullTime: '18.48',
            Evening: '14.8',
            // PartTime: '12.9',
        },
        'Finance and Financial Technologies': {
            FullTime: '21.78',
            Evening: '17.4',
            // PartTime: '14.85',
        },

        'Primary Education': {
            FullTime: '18.48',
            Evening: '14.8',
            // PartTime: '12.6',
        },

        Accounting: {
            FullTime: '21.78',
            Evening: '17.4',
            // PartTime: '14.85',
        },

        'Tourism and Hospitality': {
            FullTime: '18.48',
            Evening: '14.8',
            // PartTime: '12.6',
        },

        Economics: {
            FullTime: '21.78',
            Evening: '17.4',
            // PartTime: '14.85',
        },
        Psychology: {
            FullTime: '18.48',
            Evening: '14.8',
            // PartTime: '12.9',
        },
        Logistics: {
            FullTime: '18.48',
            Evening: '14.8',
            // PartTime: '12.9',
        },

        Banking: {
            FullTime: '21.58',
            Evening: '17.4',
            // PartTime: '14.85',
        },
        'Social Work': {
            FullTime: '17.38',
            Evening: '13.9',
            // PartTime: '12.6',
        },
        'Special Pedagogy': {
            FullTime: '18.48',
            Evening: '14.8',
        },
        'Foreign Language and Literature': {
            FullTime: '18.48',
            Evening: '16.6',
        },
        'Uzbek Language and Literature': {
            FullTime: '18.48',
            Evening: '14.8',
        },

        Mathematics: {
            FullTime: '17.38',
            Evening: '13.9',
        },

        Architecture: {
            FullTime: '18.48',
            Evening: '15.7',
        },
    }

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={showPagination ? { clickable: true } : false}
                className="mySwiper"
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Pagination]}
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                }}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    800: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1100: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                }}
            >
                {Language === 'uz'
                    ? Object.keys(CONTRACT_INFO_UZ).map((key, index) => (
                          <SwiperSlide
                              key={index}
                              style={{
                                  display: 'flex',
                                  height: 'auto', // Automatically adjust based on content
                                  flexDirection: 'column',
                                  justifyContent: 'stretch', // Stret
                              }}
                          >
                              <CardBachelor
                                  title={key}
                                  priceKun={CONTRACT_INFO_UZ[key].Kunduzgi}
                                  priceKech={CONTRACT_INFO_UZ[key].Kechki}
                                  priceSirt={CONTRACT_INFO_UZ[key].Sirtqi}
                                  style={{
                                      flex: 1,
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'space-between', // Ensures the content fills the SwiperSlide height
                                  }}
                              />
                          </SwiperSlide>
                      ))
                    : Language === 'ru'
                      ? Object.keys(CONTRACT_INFO_RU).map((key, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    display: 'flex',
                                    height: 'auto', // Automatically adjust based on content
                                    flexDirection: 'column',
                                    justifyContent: 'stretch', // Stret
                                }}
                            >
                                <CardBachelor
                                    title={key}
                                    priceKun={CONTRACT_INFO_RU[key].Дневное}
                                    priceKech={CONTRACT_INFO_RU[key].Вечернее}
                                    priceSirt={CONTRACT_INFO_RU[key].Заочное}
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', // Ensures the content fills the SwiperSlide height
                                    }}
                                />
                            </SwiperSlide>
                        ))
                      : Object.keys(CONTRACT_INFO_EN).map((key, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    display: 'flex',
                                    height: 'auto', // Automatically adjust based on content
                                    flexDirection: 'column',
                                    justifyContent: 'stretch', // Stret
                                }}
                            >
                                <CardBachelor
                                    title={key}
                                    priceKun={CONTRACT_INFO_EN[key].FullTime}
                                    priceKech={CONTRACT_INFO_EN[key].Evening}
                                    priceSirt={CONTRACT_INFO_EN[key].PartTime}
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between', // Ensures the content fills the SwiperSlide height
                                    }}
                                />
                            </SwiperSlide>
                        ))}
            </Swiper>
        </>
    )
}
