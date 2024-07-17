import Navbar from '../components/Navbar';
import './Promotion.css';

const promote = [
    {
        img: "./promote1.webp",
        title: "BẢNG GIÁ BỎNG, NƯỚC MỚI NHẤT 2024",
        date: "01/07/2024",
      },
      {
        img: "./promote2.webp",
        title: "THẺ U22 ƯU ĐÃI GIÁ VÉ CHO HỌC SINH, SINH VIÊN 55.000Đ/VÉ 2D",
        date: "31/01/2024",
      },
      {
        img: "./promote3.webp",
        title: "SPECIAL MONDAY - ĐỒNG GIÁ 50.000Đ/VÉ 2D THỨ 2 CUỐI THÁNG",
        date: "28/09/2022",
      },
      {
        img: "./promote4.webp",
        title: "SIÊU ƯU ĐÃI “PHIM THẬT HAY - COMBO THẬT ĐÃ” CHÍNH THỨC TRỞ LẠI",
        date: "04/09/2019",
      },
      {
        img: "./promote5.webp",
        title: "Đồng giá 49k bộ phim hoạt hình “Những chú chó hoàng gia",
        date: "17/05/2019",
      },
      {
        img: "./promote6.webp",
        title: "XEM PHIM HAY HƯỞNG NGAY ƯU ĐÃI “ĂN THẢ GA – CHƠI CỰC ĐÃ",
        date: "23/04/2019",
      },
]

const Promotion = () => {
  return (
    <div className='container'>
        <Navbar />

        <div className='promoteHeader'>
            <h2>khuyến mãi</h2>
        </div>
        <div className='promoteList'>
        {promote.map((item, idx) => {
          return (
            <div className="promoteItem" key={idx}>
              <div className="promoteImg">
                <img src={item.img} className='zoom'/>
              </div>
              <div className="promoteContent">
                <div className="promotedate">{item.date}</div>
                <div className="promoteTitle">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Promotion;