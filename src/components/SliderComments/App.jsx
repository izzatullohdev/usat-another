// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './App.css'
// import Avatar from '../../assets/logos/avatar.svg'
import Yusuf from '../../assets/logos/Yusuf.png'
import Muqaddas from '../../assets/logos/Muqaddas.png'
// import required modules
import { Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
export default function App() {
    const { t } = useTranslation()
    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item1')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={Yusuf}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    {t('student_name1')}
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item2')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={
                                    'https://admin.studyin-uzbekistan.uz/media/universities/reviews/2025/05/06/image_2025-05-06_18-44-50.png'
                                }
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    {t('student_name2')}
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item3')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src="https://admin.studyin-uzbekistan.uz/media/universities/reviews/2025/05/06/image_2025-05-06_18-52-53.png"
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    {t('student_name')}
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    {' '}
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item4')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                }}
                                src={
                                    'https://admin.studyin-uzbekistan.uz/media/universities/reviews/2025/05/06/image_2025-05-06_18-37-19.png'
                                }
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    {t('student_name3')}
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
                <SwiperSlide style={{ width: '100%', height: '100%' }}>
                    <li className="comments_item">
                        <p className="comments_item_text">
                            {t('comments_item5')}
                        </p>
                        <div className="comments_item_author">
                            <img
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    objectFit: 'contain',
                                    objectPosition: 'center',
                                }}
                                src={Muqaddas}
                                alt="Avatar icon"
                            />
                            <div>
                                <h3 className="comments_author_title">
                                    {t('student_name4')}
                                </h3>
                                <p className="comments_author_text">
                                    {t('comments_info')}
                                </p>
                            </div>
                        </div>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
