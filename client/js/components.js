function PostItem(props) {
    return (
        <li>
            <h2>
                <a href={"chitiet.html?did=" + props.id} title="">{props.description}</a>
            </h2>
            <div className="item">
                <p>{props.detail}</p>
                <div className="clr"></div>
            </div>
        </li>
    )
}

function Header() {
    return (
        <div id="header">
            <div className="header-left fl">
                <a href="index.html" title=""><img src="../images/logo_edu.png" alt="" /></a>
            </div>
            <div className="header-right fr">
                <a href="index.html" title=""><img src="../images/banner.jpg" alt="" /></a>
            </div>
            <div className="clr"></div>
        </div>
    )
}

function Menu() {
    return (
        <div id="menu">
            <ul>
                <li><a href="index.html" title="">Trang chủ</a></li>
                <li className="active"><a href="tintuc.html" title="">Tin tức</a></li>
                <li><a href="lienhe.html" title="">Liên hệ</a></li>
            </ul>
            <div className="clr"></div>
        </div>
    )
}

function Sidebar() {
    return (
        <>
            <h3>Danh mục tin</h3>
            <ul>
                {listCats.map(cat =>
                    <li key={cat.id}><a href={'danhmuc.html?cid=' + cat.id}>{cat.name}</a></li>
                )}
            </ul>
        </>
    )
}

function Footer() {
    return (
        <div id="footer">
            <p>Trung tâm đào tạo Lập trình viên VinaEnter EDU</p>
            <p>Copyright &copy 2014 - Designed by <a href="" title="">VinaEnter</a></p>
        </div>
    )
}

var listCats = [];
var listNews = [];
async function getListNews() {
    listNews = await axios.get('http://localhost:3000/listNews');
    listNews = listNews.data;
    console.log(listNews);
}

async function getListCats() {
    listCats = await axios.get('http://localhost:3000/listCats');
    listCats = listCats.data;
    console.log(listCats);
}