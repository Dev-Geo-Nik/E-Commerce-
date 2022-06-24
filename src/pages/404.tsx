
import React from 'react';


import SEO from '../components/layout/Seo';

interface Props {
  path: string;
}

const  NotFoundPage :React.FC<Props> = () => {
  const description = "Something when wrong.please navigate back to home page"
  return (  
< >
    <SEO title="Error 404"  description={description}/>
  
</>
);
};

export default NotFoundPage;

