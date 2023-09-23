setTimeout(() => {
  function getParameterByName(name, url = location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  var dId = getParameterByName('did');

  var newsById = listNews.find(news => news.id == dId);

  const App = (
    <div className="wrapper">
      <Header />

      <Menu />
      <div id="content">
        <div className="content-left fl">
          <Sidebar />
        </div>
        <div className="content-right fr">
          <h3>{newsById.description}</h3>
          <div className="main-content">
            <p>{newsById.detail}</p>
          </div>
        </div>
        <div className="clr"></div>
      </div>

      <Footer />
    </div>
  )

  ReactDOM.render(App, document.getElementById("root"))
}, 1000);