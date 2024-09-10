import Link from "next/link";
import { useState } from "react";
import AccessPotalPageModal from "@/components/accessPotalPageModal";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [levelId, setLevelId] = useState(null);

    const showModal = (levelId = null) => {
        setLevelId(levelId);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div id="header-wrapper" class="header maSo92">
                <a href="/">
                <img class="logo" src="/logo-SGDDT-KG.png" style={{ width: "60px", height: "60px", margin: "10px" }}/>
                </a>
                <div class="navi-solu">SỞ GD&ĐT TỈNH KIÊN GIANG</div>
                <div class="vavi-logo hidden-sm hidden-xs">CƠ SỞ DỮ LIỆU NGÀNH GIÁO DỤC VÀ ĐÀO TẠO</div>
                <div class="supportMoetMobile">
                    <p class="csdlFooter">CƠ SỞ DỮ LIỆU NGÀNH GIÁO DỤC VÀ ĐÀO TẠO</p>
                </div>
                <img class="bg-right-hea" src="/bg.png" />
            </div>
            <div id="content-wrapper" class="main home-page" >
                <div class="container main-content">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="row">
                                <div className="menu-access-portal">
                                    <div className="row">
                                        <div class="col-md-7">
                                            <div class="title-dcnt">DÀNH CHO NHÀ TRƯỜNG</div>
                                        </div>
                                        <div class="col-md-5">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(1)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý Mầm Non</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(2)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý Tiểu Học</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(3)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý TH & THCS</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(4)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý THCS</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(5)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý PT DTNT THCS</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(6)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý THCS & THPT</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(7)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý THPT</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt" onClick={() => showModal(8)}>
                                                <div class="item-dcnt">
                                                    <div class="col-md-12 text-dcnt">Quản Lý GDTX</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style={{ marginTop: "12px" }}>
                                <div className="menu-access-portal">
                                    <div className="row">
                                        <div class="col-md-7">
                                            <div class="title-dcnt">DÀNH CHO NHÀ QUẢN LÝ</div>
                                        </div>
                                        <div class="col-md-5">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt">
                                                <a href="https://sgdkiengiang.ioc.edu.vn/">
                                                    <div class="item-dcnt">
                                                        <div class="col-md-12 text-dcnt">Quản lý Mầm Non</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt">
                                                <a href="https://sgdkiengiang.ioc.edu.vn/">
                                                    <div class="item-dcnt">
                                                        <div class="col-md-12 text-dcnt">Quản lý Mầm Non</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12 gr-khoiquanly">
                                <div class="title-dcnt">
                                    dành cho nhà trường
                                </div>
                                <div class="item-cha-dcnt" style={{ cursor: "pointer" }} onClick={() => showModal(1)}>
                                    <div class="item-dcnt">
                                        <div class="col-md-12 text-dcnt">Quản lý Mầm Non</div>
                                        <div class="col-md-12 img-icon-dcnt">
                                            <img src="https://csdl.cantho.edu.vn/img/1.png" width="48px" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item-cha-dcnt" style={{ cursor: "pointer" }} onClick={() => showModal(2)}>
                                    <div class="item-dcnt">
                                        <div class="col-md-12 text-dcnt">Quản lý Tiểu Học</div>
                                        <div class="col-md-12 img-icon-dcnt">
                                            <img src="https://csdl.cantho.edu.vn/img/2.png" width="48px" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item-cha-dcnt" style={{ cursor: "pointer" }} onClick={() => showModal(4)}>
                                    <div class="item-dcnt-3">
                                        <div class="col-md-12 text-dcnt">Quản lý THCS</div>
                                        <div class="col-md-12 img-icon-dcnt">
                                            <img src="https://csdl.cantho.edu.vn/img/3.png" width="48px" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item-cha-dcnt" style={{ cursor: "pointer" }} onClick={() => showModal(7)}>
                                    <div class="item-dcnt-4">
                                        <div class="col-md-12 text-dcnt">Quản lý THPT</div>
                                        <div class="col-md-12 img-icon-dcnt">
                                            <img src="https://csdl.cantho.edu.vn/img/4.png" width="48px" />
                                        </div>
                                    </div>
                                </div>
                                <div class="item-cha-dcnt" style={{ cursor: "pointer" }} onClick={() => showModal(8)}>
                                    <div class="item-dcnt-5">
                                        <div class="col-md-12 text-dcnt">Quản lý GDTX</div>
                                        <div class="col-md-12 img-icon-dcnt">
                                            <img src="https://csdl.cantho.edu.vn/img/5.png" width="48px" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 gr-khoiquanly">
                                    <div class="title-dcnt">
                                        dành cho nhà quản lý
                                    </div>
                                    <div class="item-cha-dcnt">
                                        <a href="https://sgdkiengiang.ioc.edu.vn/">
                                            <div class="item-dcnt-6">
                                                <div class="col-md-12 text-dcnt">Quản lý cấp Phòng GD&ĐT</div>
                                                <div class="col-md-12 img-icon-dcnt">
                                                    <img src="https://csdl.cantho.edu.vn/img/6.png" width="48px" alt="" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="item-cha-dcnt">
                                        <a href="https://sgdkiengiang.ioc.edu.vn/">
                                            <div class="item-dcnt-7">
                                                <div class="col-md-12 text-dcnt">Quản lý cấp Sở GD&ĐT</div>
                                                <div class="col-md-12 img-icon-dcnt">
                                                    <img src="https://csdl.cantho.edu.vn/img/7.png" width="48px"/>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    </div>
                            </div> */}
                        </div>
                        <div class="col-md-7">
                            <div class="row">
                                <div class="col-md-12 gr-content-thongbao">
                                    <div class="gr-thongbao"  id="gr-thongbao-right">
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div id="ContentPlaceHolder1_ctl00_listThongBao" class="title-dcnt">Văn bản/Hướng dẫn</div>
                                            </div>
                                            <div class="col-md-5">
                                            </div>
                                        </div>
                                        <div class="RadAjaxPanel" id="ctl00_ContentPlaceHolder1_ctl00_ctl00_ContentPlaceHolder1_ctl00_lstNotifyPanel">
                                            <table id="ContentPlaceHolder1_ctl00_lstNotify" cellspacing="0" style={{ borderCollapse: "collapse" }}>
                                                <tr>
                                                    <td>
                                                        <div class="item-thongbao">
                                                            <div class="title-thongbao">
                                                                <Link href='/van-ban/cong-van-so-3240-bgddt-csvc-ngay-28-06-2024-ve-viec-thuc-hien-bao-cao-thuc-trang-nhu-cau-ve-so-lop-hoc-phong-hoc-phong-cong-vu-cho-giao-vien-906'>
                                                                    Công văn số 3240/BGDĐT-CSVC ngày 28/06/2024 về việc thực hiện báo cáo thực trạng, nhu cầu về số lớp học, phòng học, phòng công vụ cho giáo viên
                                                                </Link>
                                                            </div>
                                                            <div class="date-sub">
                                                                <label class="sub-tb">Tin đăng vào</label><label class="date">30/06/2024 08:43:32</label>
                                                            </div>
                                                            <div class="chuthich-tb comment">
                                                                Công văn số 3240/BGDĐT-CSVC ngày 28/06/2024 về việc thực hiện báo cáo thực trạng, nhu cầu về số lớp học, phòng học, phòng công vụ cho giáo viên
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="item-thongbao">
                                                            <div class="title-thongbao">
                                                                <Link href='/van-ban/bao-cao-de-an-ngoai-ngu-2024-889'>
                                                                    Báo cáo Đề án ngoại ngữ 2024
                                                                </Link>
                                                            </div>
                                                            <div class="date-sub">
                                                                <label class="sub-tb">Tin đăng vào</label><label class="date">20/06/2024 10:07:18</label>
                                                            </div>
                                                            <div class="chuthich-tb comment">
                                                                Công văn số 2793/BGDĐT-KHTC vv báo cáo kết quả thực hiện năm 2023, ước thực hiện năm 2024 và xây dựng kế hoạch triển khai  Đề án NNQG năm 2025 kèm hướng dẫn thực hiện trên CSDL
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="item-thongbao">
                                                            <div class="title-thongbao">
                                                                <Link href='/van-ban/cong-van-so-2523-bgddt-cntt-trien-khai-bao-cao-thong-ke-giao-duc-ky-cuoi-nam-hoc-2023-2024-va-chan-chinh-nop-bctk-ky-dau-nam-873'>
                                                                    Công văn số 2523/BGDĐT-CNTT Triển khai Báo cáo thống kê giáo  dục kỳ cuối năm học 2023-2024 và chấn chỉnh nộp BCTK kỳ đầu năm.
                                                                </Link>
                                                            </div>
                                                            <div class="date-sub">
                                                                <label class="sub-tb">Tin đăng vào</label><label class="date">05/06/2024 14:05:49</label>
                                                            </div>
                                                            <div class="chuthich-tb comment">
                                                                Công văn số 2523/BGDĐT-CNTT ngày 30/5/2024 về việc Triển khai Báo cáo thống kê giáo  dục kỳ cuối năm học 2023-2024 và  chấn chỉnh nộp BCTK kỳ đầu năm và danh sách các sở giáo dục và đào tạo chưa hoàn thành báo cáo thống kê giáo dục kỳ đầu năm học 2023-2024
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="item-thongbao">
                                                            <div class="title-thongbao">
                                                                <Link href='/van-ban/thong-bao-tam-dung-bao-tri-he-thong-569'>
                                                                    THÔNG BÁO TẠM DỪNG BẢO TRÌ HỆ THỐNG
                                                                </Link>
                                                            </div>
                                                            <div class="date-sub">
                                                                <label class="sub-tb">Tin đăng vào</label><label class="date">11/01/2024 09:12:13</label>
                                                            </div>
                                                            <div class="chuthich-tb comment">
                                                                Thông báo tạm dừng bảo trì hệ thống dự kiến từ 21h00 Thứ 6, ngày 12/01/2024 đến hết 24h Chủ Nhật, ngày 14/01/2024.
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="empty-record">
                                        </div>
                                        <table style={{ width: "100%" }}>
                                            <tr>
                                                <td style={{ textAlign: "right" }}>
                                                    <div style={{ display: "table", float: "right", marginTop: "6px" }}>
                                                        <div style={{ display: "table-cell" }}>
                                                            <div class="RadAjaxPanel" id="ctl00_ContentPlaceHolder1_ctl00_ctl00_ContentPlaceHolder1_ctl00_PrevPanel">
                                                                <a id="ContentPlaceHolder1_ctl00_Prev" class="aspNetDisabled btn btn-slide btn-prev"></a>
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "table-cell", paddingLeft: "4px" }}>
                                                            <div class="RadAjaxPanel" id="ctl00_ContentPlaceHolder1_ctl00_ctl00_ContentPlaceHolder1_ctl00_NextPanel">
                                                                <a id="ContentPlaceHolder1_ctl00_Next" class="btn btn-slide btn-next" href="javascript:__doPostBack(&#39;ctl00$ContentPlaceHolder1$ctl00$Next&#39;,&#39;&#39;)"></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-wrapper" class="footer diaPhuong" style={{ position: "relative", marginTop: "24px" }}>
                <div class="sticky-stopper"></div>
                <div class="f-left">
                    <div class="img-vhb">
                    </div>
                </div>
                <div class="f-right">
                    <div class="grf1">
                        <div class="title-f" style={{ marginRight: "10px", textAlign: "right" }}>CƠ SỞ DỮ LIỆU NGÀNH GIÁO DỤC VÀ ĐÀO TẠO</div>
                    </div>
                </div>
            </div>
            { isModalOpen && <AccessPotalPageModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} levelId={levelId}/> }
        </>
    );
}

export default HomePage;
