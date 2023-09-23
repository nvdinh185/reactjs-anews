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

const listNews = [
    {
        "id": "1",
        "description": "Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan",
        "detail": "Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn sàng đâm va vào tàu Việt Nam.",
        "catId": "1"
    },
    {
        "id": "2",
        "description": "Trọng tài - vết đen của kỳ World Cup sôi động",
        "detail": "World Cup 2014 chưa đi hết lượt đầu vòng bảng nhưng các trọng tài đẳng cấp FIFA đã có tới bốn trận bị chỉ trích dữ dội.",
        "catId": "2"
    },
    {
        "id": "3",
        "description": "Những mỹ nhân Việt duyên dáng ở tuổi tứ tuần",
        "detail": "Việt Trinh, Thu Hà, Hồng Nhung, Thanh Lam... vẫn giữ được nét thanh xuân, tươi trẻ và cuốn hút theo thời gian nhờ phong cách làm đẹp tinh tế.",
        "catId": "1"
    },
    {
        "id": "4",
        "description": "Chuyển nhượng 17/6: Arsenal mua Balotelli, tráo hàng Man Utd",
        "detail": "Đội bóng thành London đang đẩy mạnh việc tuyển lựa những vị trí còn yếu trong đội hình ở cả ba tuyến.",
        "catId": "3"
    },
    {
        "id": "5",
        "description": "Chuyên gia Anh tin chắc vị trí MH370 rơi",
        "detail": "Các chuyên gia thuộc công ty viễn thông Anh Inmarsat cho rằng họ xác định được vị trí chiếc máy bay MH370 đã rơi xuống trên Ấn Độ Dương, tuy nhiên đội.",
        "catId": "1"
    }
]

const listCats = [
    {
        "id": "1",
        "name": "Thời sự"
    },
    {
        "id": "2",
        "name": "Góc nhìn"
    },
    {
        "id": "3",
        "name": "Thế giới"
    },
    {
        "id": "4",
        "name": "Kinh doanh"
    }
]
