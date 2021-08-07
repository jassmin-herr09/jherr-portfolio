import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/reset.css"


const Layout = (props) => {
    return (
        <>
           <Header />
            <div>
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />

        </>    
    )

}

export default Layout