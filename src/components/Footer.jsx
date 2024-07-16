import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerMain">
        <div className="iconList">
          <div className="socialMediaIcon">
            <img src="./fb_icon.webp" />
            <img src="./zalo_icon.webp" />
            <img src="./ytb_icon.webp" />
          </div>
          <div className="blank"></div>
          <div className="bigIcon">
            <img src="./ggp_icon.webp" />
            <img src="./appstore_icon.webp" />
            <img src="./bct_icon.webp" />
          </div>
        </div>

        <div className="footerText">
            <p>Cơ quan chủ quản: BỘ VĂN HÓA, THỂ THAO VÀ DU LỊCH</p>
            <p>Bản quyền thuộc MindX.</p>
            <p>Giấy phép số: 224/GP- TTĐT ngày 31/8/2010 - Chịu trách nhiệm: Lê Hoài Nam.</p>
            <p>Địa chỉ: 87 Láng Hạ, Quận Ba Đình, Tp. Hà Nội - Điện thoại: 123456789</p>
        </div>

        <div className="copyright">Copyright 2023. NCC All Rights Reservered. Dev by Lê Hoài Nam</div>
      </div>
    </div>
  );
};

export default Footer;
