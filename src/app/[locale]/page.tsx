import HeroSection from '@/components/HeroSection';
import LogoCarousel from '@/components/LogoCarousel';
import PowerOfTemurin from '@/components/PowerOfTemurin';
import DownloadCounter from '@/components/DownloadCounter';
import TemurinFeatures from '@/components/TemurinFeatures';
import WGProjects from '@/components/WGProjects';
import Testimonials from '@/components/Testimonials';
import LatestNews from '@/components/News/LatestNews';
import ContributorsHome from '@/components/Contributors/home'
import { fetchDownloadCount } from '@/utils/fetchDownloadCount';

export default async function HomePage() {
    let total_downloads = 1000000000;
    try {
        total_downloads = await fetchDownloadCount();
    } catch { }
    return (
        <div>
            <HeroSection />
            <LogoCarousel />
            <div className="w-full h-[1px] my-8 lg:my-16 bg-[#3E3355]"></div>
            <PowerOfTemurin />
            <DownloadCounter total={total_downloads} />
            <TemurinFeatures />
            <WGProjects />
            <Testimonials />
            <LatestNews />
            <ContributorsHome />
        </div>
    );
}
