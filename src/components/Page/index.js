import React from 'react';
import PageContent from '../PageContent';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {
  
  const renderPage = () => {
    switch (currentPage.name) {
      case '':
        return < />;
      case '':
        return < />;
      case '':
        return < />;
      case '':
        return < />;
      default:
        return < />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;