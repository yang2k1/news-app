import React from "react"
import Header from "./Component/common/header/Header"
import Footer from "./Component/common/footer/Footer"
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NewsDetail from "./Component/NewsDetail/NewsDetail";
import MarketNews from "./Component/Home/MarketNews/MarketNews";
import StockInfor from "./Component/Home/StockInformation/StockInfor";
import ForWoman from "./Component/Home/Women/ForWomen";
import Homepages from "./Component/Home/Homepages";


const App = () => {
  return (
    <>
      <Router>
          <Header/>
          <div id="main-content" className="container">
          <Routes>
              <Route path="/" element={<Homepages />} />
              <Route path="/bong-da" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/bongda.rss" />} />
              <Route path="/tin-tuc-trong-ngay" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/tintuctrongngay.rss" />} />
              <Route path="/an-ninh-hinh-su" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/anninhhinhsu.rss" />} />
              <Route path="/thoi-trang-hitech" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/thoitranghitech.rss" />} />
              <Route path="/tai-chinh-bat-dong-san" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/taichinhbatdongsan.rss" />} />
              <Route path="/am-thuc" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/amthuc.rss" />} />
              <Route path="/lam-dep" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/lamdep.rss" />} />
              <Route path="/phim" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/phim.rss" />} />
              <Route path="/giao-duc-du-hoc" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/giaoducduhoc.rss" />} />
              <Route path="/ban-tre-cuoc-song" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/bantrecuocsong.rss" />} />
              <Route path="/ca-nhac-mtv" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/canhacmtv.rss" />} />
              <Route path="/the-thao" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/thethao.rss" />} />
              <Route path="/ca-nhac-mtv" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/canhacmtv.rss" />} />
              <Route path="/phi-truong-ky-quac" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/phithuongkyquac.rss" />} />
              <Route path="/cong-nghe-thong-tin" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/congnghethongtin.rss" />} />
              <Route path="/o-to" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/oto.rss" />} />
              <Route path="/thi-truong-tieu-dung" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/thitruongtieudung.rss" />} />
              <Route path="/suc-khoe-doi-song" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/suckhoedoisong.rss" />} />
              <Route path="/cuoi-24h" element={<NewsDetail rssLink="https://cdn.24h.com.vn/upload/rss/cuoi24h.rss" />} />
          </Routes>
              <aside>
                  <MarketNews />
                  <StockInfor/>
                  <ForWoman/>
              </aside>
          </div>
          {/*<Homepages/>*/}
          <Footer/>
      </Router>
    </>
  );
}

export default App;
