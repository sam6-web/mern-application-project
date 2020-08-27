import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import HeaderSection from '../components/HeaderSection'
import MainSection from '../components/MainSection'
export class MainPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <HeaderSection/>
                <MainSection/>

            </div>
        )
    }
}

export default MainPage
