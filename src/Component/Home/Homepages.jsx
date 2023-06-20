import React from "react"
import MarketNews from "./MarketNews/MarketNews";
import StockInfor from "./StockInformation/StockInfor";
import ForWoman from "./Women/ForWomen";
import MainContent from "./Home/MainContent";
import './homePage.css'

const Homepages = () => {
    return (
        <>
            <div id="main-content" className="container">
            <MainContent/>
                <aside>
                    <MarketNews />
                    <StockInfor/>
                    <ForWoman/>
                </aside>
            </div>
        </>
    )
}

export default Homepages
