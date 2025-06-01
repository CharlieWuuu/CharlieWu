// import Link from 'next/link';
import styles from './page.module.scss';
// import hiking_map from '../images/hiking_map.png';
// import data from '../data/data.json';
import MasonryGallery from '@/components/MasonryGallery';

export default function Index() {
    // console.log(data);
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span className={styles.title}>Website Engineer</span>
                <span className={styles.slogan}>開發 ✕ 設計 ✕ 編輯｜讓資訊更簡潔易解</span>
            </div>
            <MasonryGallery />
        </div>
    );
}
