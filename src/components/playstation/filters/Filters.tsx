import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import  * as styles from './filters.module.scss';
import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publisher';


export type QueryPropsCategory  = {
  
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
          url: string
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
        status: string
        id: string
        strapi_id: number
        preOrder?: boolean
        edition?: string
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
          url
        }
        price
        stock
        slug
        videoUrl
        publisher
        genre
        status
        language
        platform
        pegi
        id
        strapi_id
        preOrder
        edition
      }
    }
  }
`


const  Filters :React.FC = () => {
  const {dispatch} = useGameContext()
  const queryData:QueryPropsCategory = useStaticQuery(query)
  const platforms :string[]  = []

  const publishersPS4 :string[] = []
  const genresPS4 :string[]  = []

  const publishersPS5 :string[] = []
  const genresPS5 :string[] = []

  const gamesPS4 :any= [];
  const gamesPS5 :any= [];

  queryData.allStrapiPlaystationGame.nodes.map((game:any) => {


          if(!platforms.includes(game.platform)){
            platforms.push(game.platform.trim())
          }

    //We push every publisher and genre game category to each platform 
          if (game.platform === "playstation 4") {
             gamesPS4.push(game)

            if (!publishersPS4.includes(game.publisher)) {
              publishersPS4.push(game.publisher.trim())
            }
            if (!genresPS4.includes(game.genre)) {
              genresPS4.push(game.genre.trim())
          }

          }

          if (game.platform === "playstation 5") {
            gamesPS5.push(game)
          
            if (!publishersPS5.includes(game.publisher)) {
              publishersPS5.push(game.publisher.trim())
            }
            if (!genresPS5.includes(game.genre)) {
              genresPS5.push(game.genre.trim())
          }

          }

     
    })


    useEffect(()=>{
      dispatch({type:ActionTypes.SET_PLAYSTATION_GAMES_DATA, payload:{
        platforms,
        publishersPS4,
        publishersPS5,
        genresPS4,
        genresPS5,
        gamesPS4,
        gamesPS5,
      }})
    },[])
    
 

  return (
<div className={styles.container}>
      <Platform />
      <Publisher />
      <Genre />
</div>
);
};

export default Filters;

