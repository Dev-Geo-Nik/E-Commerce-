import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import  * as styles from './filters.module.scss';
import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publisher';


export type QueryPropsCategory = {
  
    allStrapiPlaystationGame: {
      nodes: Array<{
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
          }
        }
        price: number
        stock: string
        slug: string
        videoUrl: string
        publisher: string
        genre: string
        language: string
        platform: string
        pegi: number
        id: string
      }>
    }
  
  extensions?: {}
}

const query = graphql`
{
  allStrapiPlaystationGame {
    nodes {
      title
      description {
        data {
          description
        }
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: TRACED_SVG, formats: WEBP)
          }
        }
      }
      price
      stock
      slug
      videoUrl
      publisher
      genre
      language
      platform
      pegi
      id
    }
  }
}
`


const  Filters :React.FC = () => {
  const queryData:QueryPropsCategory = useStaticQuery(query)
  const platforms :string[]  = []

  const publishersPS4 :string[] | null = []
  const genresPS4 :string[] | null = []

  const publishersPS5 :string[] | null = []
  const genresPS5 :string[] | null = []


  queryData.allStrapiPlaystationGame.nodes.map((game:any) => {
         
          if(!platforms.includes(game.platform)){
            platforms.push(game.platform.trim())
          }

    //We push every publisher and genre category to each platform 
          if (game.platform === "playstation 4") {

            if (!publishersPS4.includes(game.publisher)) {
              publishersPS4.push(game.publisher.trim())
            }
            if (!genresPS4.includes(game.genre)) {
              genresPS4.push(game.genre.trim())
          }

          }

          if (game.platform === "playstation 5") {

          
            if (!publishersPS5.includes(game.publisher)) {
              publishersPS5.push(game.publisher.trim())
            }
            if (!genresPS5.includes(game.genre)) {
              genresPS5.push(game.genre.trim())
          }

          }

     
    })


    


  return (
<div className={styles.container}>
      <Platform platforms={platforms}   />
      <Publisher  publishersPS4= {publishersPS4} publishersPS5={publishersPS5}  />
      <Genre  genresPS4= {genresPS4}  genresPS5= {genresPS5} />
</div>
);
};

export default Filters;

