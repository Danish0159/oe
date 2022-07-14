import React from 'react'
import NavbarHome from '../components/Navigations/NavbarHome'
import NavbarMenu from "../components/Navigations/NavbarMenu"
import HomeContent from '../components/HomeContent'

const HomePage = () => {
    return (
        <>
            <NavbarHome></NavbarHome>
            <NavbarMenu></NavbarMenu>
            <HomeContent></HomeContent>
        </>
    )
}

export default HomePage