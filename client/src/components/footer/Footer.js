// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/auth";
// import { useNavigate } from "react-router-dom";
// import Search from "../forms/Search";
// import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
// import { Badge } from "antd";
// import { FaShoppingBag } from "react-icons/fa";
// import storeLogo from "../../images/logo.png";
import React from "react";
import { Link } from 'react-router-dom';

import facebook from "../../images/fb-banner.png";
import youtube from "../../images/VCB-OUTRO-FN.00_00_00_00.Still001-1024x576.png";
import shopee from "../../images/banner-shopep-vcb-1024x528.png";
import bct from "../../images/logoSaleNoti.png";

export default function Footer() {
  return (
    <>
        <div>
            <section className="row col-md-8 mb-3 mx-auto">
                <hr />
                <nav className="col-md-4">
                    <h4>FANPAGE</h4>
                    <div >
                        <Link to="https://fb.com/chanhdeptrai">
                            <img width="100%" height="100%" src={facebook} alt=""
                                sizes="(max-width: 1020px) 100vw, 1020px" />
                        </Link>
                    </div>
                </nav>
                <nav className="col-md-4">
                    <h4>YOUTUBE</h4>
                    <div >
                        <Link to="https://fb.com/chanhdeptrai">
                            <img width="100%" height="100%" src={youtube} alt=""
                                sizes="(max-width: 1020px) 100vw, 1020px" />
                        </Link>
                    </div>
                </nav>
                <nav className="col-md-4">
                    <h4>SHOPEE</h4>
                    <div >
                        <Link to="https://fb.com/chanhdeptrai">
                            <img width="100%" height="100%" src={shopee} alt=""
                                sizes="(max-width: 1020px) 100vw, 1020px" />
                        </Link>
                    </div>
                </nav>
            </section>
        </div>

        <div>
            <div className="row col-md-8 mx-auto">
                <hr />
                <ul className="col-md-4" style={{listStyleType:"none"}}>
                    <li>
                        <strong>LIÊN HỆ VỚI CHÚNG TÔI</strong>
                    </li>
                    <li style={{ color: 'red' }}>
                        <a style={{ textDecoration: 'none' }} href='tel:+84984320841'>Hotline mua hàng 1: <strong>098 43 20841</strong></a>
                    </li>
                    <li style={{ color: 'red' }}>
                        <a style={{ textDecoration: 'none' }} href='tel:+84986363131'>Hotline mua hàng 2: <strong>098 63 63131</strong></a>
                    </li>
                    <li>
                        (Tư vẫn miễn phí từ 8h30-22h các ngày trong tuần)
                    </li>
                    <br/>
                    <li>
                        <strong>HỖ TRỢ KHÁCH HÀNG</strong>
                    </li>
                    <li>
                        <a style={{textDecoration:'none'}} href='/'>Điều khoản sử dụng</a>
                    </li>
                    <li>
                        <a style={{ textDecoration: 'none' }} href='/'>Chính sách đổi và bảo hành</a>
                    </li>
                    <li>
                        <a style={{ textDecoration: 'none' }} href='/'>Chính sách vận chuyển &amp; thanh toán</a>
                    </li>
                    <li>
                        <a style={{ textDecoration: 'none' }} href='/'>Chính sách bảo mật</a>
                    </li>
                </ul>

                <ul className="col-md-4" style={{listStyleType:"none"}}>
                    <li>
                        <strong>© CÔNG TY TNHH CYBER SILVER</strong>
                    </li>
                    <li>
                        Showroom:
                        <br/>12A Nhiêu Tứ - Phường 7 - Phú Nhuận - TP HCM
                    </li>
                    <br/>
                    <li>
                        Tel: 098.63.63131
                    </li>
                    <li>
                        <a style={{ textDecoration: 'none' }} href="mailto:chanhvokts@gmail.com">Email: chanhvokts@gmail.com</a>
                    </li>
                    <li>
                        Đã chứng nhận đăng ký kinh doanh: 0107994675
                    </li>
                </ul>

                <ul className="col-md-4" style={{listStyleType:"none"}}>
                    <a href="/">
                        <img src={bct} alt="BoCongThuong" height="65px"/>
                    </a>
                </ul>
            </div>
        </div>
    </>
  );
}