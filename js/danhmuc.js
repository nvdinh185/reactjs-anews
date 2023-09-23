function getParameterByName(name, url = location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var cId = getParameterByName('cid');

var listNewsByCat = listNews.filter(news => news.catId == cId);

var catName = listCats.find(cat => cat.id == cId).name;

const App = (
  <div className="wrapper">
    <Header />

    <Menu />
    <div id="content">
      <div className="content-left fl">
        <Sidebar />
      </div>
      <div className="content-right fr">
        <h3>Tin tức :: {catName}</h3>
        <div className="main-content items-new">
          <ul>
            {listNewsByCat.map(news =>
              <PostItem
                key={news.id}
                id={news.id}
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