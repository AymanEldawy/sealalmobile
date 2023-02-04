import React from 'react';

import { Breadcrumb } from './../Breadcrumb/Breadcrumb';
import { SectionTitle } from './../Global/SectionTitle';
import { Layout } from './../Layout/Layout';
import { ProfileSidebar } from './ProfileSidebar';

export const ProfileLayout = ({ children, breadcrumbPath, title }) => {
  return (
    <Layout>
      <div className="container">
        <Breadcrumb paths={breadcrumbPath} />
        <div className="flex gap-4 mb-8">
          <ProfileSidebar />
          <div className="flex-1">
            <SectionTitle title={title} />
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
