import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { SectionTitle } from './../components/Global/SectionTitle';
import { OurFeatures } from './../components/OurFeatures/OurFeatures';
import { Testimonial } from './../components/Testimonial/Testimonial';
import { LanguageContext } from './../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

const About = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <div className="overflow-hidden">
        <div className="container">
          <Breadcrumb paths="about" />
          <div className="mt-8">
            <SectionTitle title={fetchWord('our_story', lang)} />
            <p className="text-secondary">
              {fetchWord('our_story_description', lang)}
            </p>
          </div>
        </div>
        <div className="bg-bgprimary pb-8 pt-4 my-8">
          <OurFeatures title={fetchWord('why_choose_us', lang)} />
        </div>
        <Testimonial title={fetchWord('happy_clients', lang)} row />
      </div>
    </Layout>
  );
};
export default About;
