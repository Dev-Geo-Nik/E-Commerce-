export enum ActionTypes { 
    SET_PLAYSTATION_GAMES_DATA = "SET_PLAYSTATION_GAMES_DATA",
    CHANGE_PLAYSTATION_PLATFORM = "CHANGE_PLAYSTATION_PLATFORM",
    CHANGE_PLAYSTATION_PUBLISHER = "CHANGE_PLAYSTATION_PUBLISHER",
    CHANGE_PLAYSTATION_GENRE = "CHANGE_PLAYSTATION_GENRE",
    RESET_PLAYSTATION_FILTERS = "RESET_PLAYSTATION_FILTERS",
    TOGGLE_LOADING = "TOGGLE_LOADING",
    LOGIN_USER = "LOGIN_USER",
    FETCH_FAVORITES = "FETCH_FAVORITES",
    INITIALIZE_CART = "INITIALIZE_CART",
    ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
    DISPLAY_POPUP_WINDOW = "DISPLAY_POPUP_WINDOW"
 }


export enum PayloadTypes{}

export interface Action {
type:ActionTypes;
payload?: any;
}



export type PlaystationGameType = {
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

export type  PlaystationSingleGameType = [
   { title: string
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
    favored:boolean
    strapi_id: number
    preOrder?: boolean
    edition?: string
    discountPrice: string
}
]


export enum PlaystationGameStatus{
    NO_STATUS = "No-Status",
    NEW = "New",
    HOT = "Hot",
    BEST_SELLER = "Best Seller",
    PRE_ORDER = "Pre-Order",
    ON_SALE = "On-Sale",
    TRENDING = "Trending",

}


export type UserRegisterChecker ={
  isUserRegistered:boolean,
  message:string,
  errorMessages:string[] 
}


