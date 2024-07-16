import Navbar from "../components/Navbar";
import "./News.css";

const news = [
  {
    img: "./news1.webp",
    title: "THÔNG BÁO HOÀN THÀNH KHẢO SÁT CƠ SỞ VẬT CHẤT NĂM 2024",
    date: "16/07/2024",
  },
  {
    img: "./news2.webp",
    title: "REVIEW PHIM HOẠT HÌNH HOT NHẤT HÈ NÀY - KẺ TRỘM MẶT TRĂNG 4",
    date: "12/07/2024",
  },
  {
    img: "./news3.webp",
    title: "KHẢO SÁT ONLINE VỀ CHẤT LƯỢNG CƠ SỞ VẬT CHẤT 2024",
    date: "08/07/2024",
  },
  {
    img: "./news4.webp",
    title:
      "Phim hoạt hình hot nhất hè 2024: Pixar chạy đua phòng vé cùng Illumination",
    date: "25/06/2024",
  },
  {
    img: "./news5.webp",
    title: "Phim khởi chiếu tháng 6/2024 (dự kiến) ",
    date: "10/06/2024",
  },
  {
    img: "./news6.webp",
    title: "Chúc mừng năm mới 2024!!!",
    date: "10/06/2024",
  },
  {
    img: "./news7.webp",
    title: "NCC – ĐIỂM HẸN CUỐI TUẦN",
    date: "19/04/2023",
  },
  {
    img: "./news8.webp",
    title:
      "Bom tấn siêu quái vật “Chúa Tể Godzilla” thống lĩnh phòng vé thế giới và Việt Nam",
    date: "03/06/2019",
  },
];

const News = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="newsHSeader">
        <h2>Tin tức</h2>
      </div>
      <div className="newsList">
        {/* <div className="newsItem">
          <div className="newsImg">
            <img src="./news8.webp" />
          </div>
          <div className="newsContent">
            <div className="newsdate">03/06/2019</div>
            <div className="newsTitle">
              Bom tấn siêu quái vật “Chúa Tể Godzilla” thống lĩnh phòng vé thế
              giới và Việt Nam
            </div>
          </div>
        </div> */}

        {news.map((item, idx) => {
          return (
            <div className="newsItem" key={idx}>
              <div className="newsImg">
                <img src={item.img} />
              </div>
              <div className="newsContent">
                <div className="newsdate">{item.date}</div>
                <div className="newsTitle">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
