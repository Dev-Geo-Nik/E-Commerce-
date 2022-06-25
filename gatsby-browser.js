
const React = require("react")
const {GameContextProvider} = require("./src/context/game/GameContext");

exports.wrapRootElement   = ({element}) =>{
    return  <GameContextProvider > {element}</GameContextProvider>
}



// const Layout = require("./src/components/layout/Layout").default

// exports.wrapPageElement = ({element,props})=>{
//     return<Layout {...props}>{element}</Layout>
// }