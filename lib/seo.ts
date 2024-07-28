export const defaultSEO = {
    title: 'ClassA - Transform Your Digital Presence',
    description: 'Discover our effective and sustainable digital marketing solutions to boost your business. From traffic management to graphic design, we offer a full range of services.',
    url: 'https://www.classaagency.com',
    image: '/images/og-image.png',
    keywords: 'digital marketing, SEO, traffic management, website creation, graphic design, ClassA',
    twitterHandle: '@ClassAAgency',
  };
  
  export const getSEO = (overrides = {}) => {
    return {
      ...defaultSEO,
      ...overrides,
    };
  };
  