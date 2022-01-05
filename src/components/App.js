import React from 'react'


import CustomAppBar from "./main/CustomAppBar";
import HomePage from "./views/HomePage";
import Footer from "./main/Footer";


const App = () => {
    return (
        <CustomAppBar>
            <HomePage/>
            <Footer/>
        </CustomAppBar>
    )
}

export default App