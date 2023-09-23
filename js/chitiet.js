const App = (
  <div className="wrapper">
    <Header />

    <Menu />
    <div id="content">
      <div className="content-left fl">
        <Sidebar />
      </div>
      <div className="content-right fr">
        <h3>Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan</h3>
        <div className="main-content">
          <p>Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va
            vào tàu Việt Nam.</p>
          <p>Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va
            vào tàu Việt Nam.</p>
          <p>Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va
            vào tàu Việt Nam.</p>
          <p>Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va
            vào tàu Việt Nam.</p>
        </div>
      </div>
      <div className="clr"></div>
    </div>

    <Footer />
  </div>
)

ReactDOM.render(App, document.getElementById("root"))