const App = (
  <div className="wrapper">
    <Header />

    <Menu />
    <div id="content">
      <div className="content-left fl">
        <Sidebar />
      </div>
      <div className="content-right fr">
        <h3>Tin tức</h3>
        <div className="main-content items-new">
          <ul>
            {listNews.map(news =>
              <PostItem
                key={news.id}
                description={news.description}
                detail={news.detail}
              />
            )}
          </ul>
        </div>
      </div>
      <div className="clr"></div>
    </div>

    <Footer />
  </div>
)

ReactDOM.render(App, document.getElementById("root"))