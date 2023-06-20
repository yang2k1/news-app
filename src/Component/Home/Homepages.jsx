import React from "react"
import MarketNews from "./MarketNews/MarketNews";
// import Home from "./Home/Home";
import StockInfor from "./StockInformation/StockInfor";
import ForWoman from "./Women/ForWomen";
import './hompage.css'
import MainContent from "./Home/MainContent";
const Homepages = () => {
    return (
        <>
            <div id="main-content" className="container">
            {/*<Home />*/}
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
