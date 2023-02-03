import React from 'react';
import { Layout } from './../components/Layout/Layout';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { SectionTitle } from './../components/Global/SectionTitle';
import { OurFeatures } from './../components/OurFeatures/OurFeatures';
import { Testimonial } from './../components/Testimonial/Testimonial';

const About = () => {
  return (
    <Layout>
      <div className="overflow-hidden">
        <div className="container">
          <Breadcrumb paths="about" />
          <div className="mt-8">
            <SectionTitle title="Our Story" />
            <p className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="bg-bgprimary pb-8 pt-4 my-8">
          <OurFeatures title="Why Choose us" />
        </div>
        <Testimonial title="Happy Clients" row />
      </div>
    </Layout>
  );
};
export default About;
