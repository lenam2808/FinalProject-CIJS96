import Navbar from '../components/Navbar';
import './About.css'

const About = () => {
  return (
    <div className='container'>
        <Navbar />

        <div className='aboutHeader'>
            <h2>Giới thiệu</h2>
        </div>

        <div className='aboutContent'>
            <div className='aboutText'>
            Mùa thu năm 2015, chúng tôi mở những lớp học lập trình đầu tiên trong một căn gác nhỏ đơn sơ, nằm sâu trong con phố Trần Đại Nghĩa (Hà Nội). Khởi đầu là dự án phi lợi nhuận, thầy trò gom góp nhau từng chiếc bàn, chiếc ghế, laptop cho đến phấn bảng. Với chúng tôi, lý do bắt đầu hành trình gian nan ấy là ước mơ về một ngôi nhà công nghệ nơi tụi nhỏ được thỏa sức sáng tạo, theo đuổi đam mê và không từ bỏ. Trải qua 8 năm thành lập và phát triển, MindX đã vươn mình để trở thành hệ sinh thái giáo dục Công nghệ - Khởi nghiệp hàng đầu Đông Nam Á. Từ một lớp học lập trình miễn phí, MindX đã mở rộng với hơn 40 cơ sở trên toàn quốc, đào tạo gần 40.000 học viên. Chúng tôi không ngừng nỗ lực đem lại cơ hội làm việc toàn cầu cho thế hệ trẻ Việt Nam, vượt xa khỏi phạm vi lãnh thổ để trở thành những nhà phát triển công nghệ xuất sắc.
            </div>
            <div className='aboutContact'>
                <p>Thời gian thành lập: Mùa thu năm 2015</p>
                <p>Trụ sở: Tầng 2, Tòa 29T1 Hoàng Đạo Thúy, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
                <p>Website: https://mindx.edu.vn/</p>
                <p>Email: contact.18hcm@mindx.edu.vn</p>
                <p>Số điện thoại: 02477705666</p>
            </div>
        </div>

        <div className='aboutImg'>
            <img src='https://images-proxy.mindx.edu.vn/1120x,webp/https://website-dev.hn.ss.bfcplatform.vn/340962698_1888401918182897_2966498731149865186_n_0dcf1d9a16.jpg' />
        </div>
    </div>
  )
}

export default About