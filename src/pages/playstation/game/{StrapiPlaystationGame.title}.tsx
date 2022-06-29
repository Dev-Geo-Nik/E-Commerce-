import { graphql  } from 'gatsby';
import React from 'react';
import  * as styles from './singlePlaystationGamePage.module.scss';

type SingleGameType = {

    strapiPlaystationGame: {
      id: string
      title: string
      description: {
        data: {
          description: string
        }
      }
      image: {
        localFile: {
          childImageSharp: {
            gatsbyImageData: {
              layout: string
              placeholder: {
                fallback: string
              }
              images: {
                fallback: {
                  src: string
                  srcSet: string
                  sizes: string
                }
                sources: Array<any>
              }
              width: number
              height: number
            }
          }
          url: string
        }
      }
      language: string
      price: number
      stock: string
      videoUrl: string
      publisher: string
      pegi: number
      platform: string
      genre: string
      strapi_id: number
    }
 
  extensions?: {}
}

interface Props{
  pageContext:{
    id: string,
    title: string,
  }
  data:SingleGameType
}

// {pageContext:{title},data}:any
const SinglePlaystationGamePage :React.FC<Props> = ({pageContext,data}) => {
  

  return (
<>
    <h1>{data.strapiPlaystationGame.title}</h1>
</>
);
};

export default SinglePlaystationGamePage


export const query = graphql`
query myQuery ($title: String) {
  strapiPlaystationGame(title: {eq: $title}) {
    id
    title
    description {
      data {
        description
      }
    }
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 200, formats: WEBP)
        }
        url
      }
    }
    language
    price
    stock
    videoUrl
    publisher
    pegi
    platform
    genre
    strapi_id
  }
}

`