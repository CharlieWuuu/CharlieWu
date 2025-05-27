import Link from 'next/link';
import styles from './page.module.scss';
import hiking_map from '../images/hiking_map.png';
export default function Index() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span className={styles.title}>Website Engineer</span>
                <span className={styles.slogan}>開發 × 設計 × 編輯｜讓資訊更簡潔易解</span>
            </div>

            <div className={styles.work_wrapper}>
                <Link href="/work" className={styles.button}>
                    <img src={hiking_map.src} alt="" />
                    <p>Hiking Map</p>
                </Link>
            </div>
        </div>
    );
}
