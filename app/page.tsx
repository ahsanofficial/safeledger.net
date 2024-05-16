import BusinessForm from '@/components/Home/BusinessForm/page';
import { Blog } from '../components/Home/Blog/page';
import Experts from "@/components/Home/Experts/page";
import { Homebanner } from "@/components/Home/HomeBanner/page";
import { NumberSpeaks } from "@/components/Home/NumberSpeaks/page";
import { Patners } from "@/components/Home/Partners/page";
import  WeOffer  from "@/components/Home/WeOffer/page";
import TestimonialSlider from '@/components/Landing/Testimonials/page';

export default function Home() {
  return (
    <div>
      <Homebanner />
      <Patners />
      <Experts/>
      <WeOffer/>
      <NumberSpeaks />
      <TestimonialSlider/>
      <Blog/>
      <BusinessForm/>
    </div>
  );
}