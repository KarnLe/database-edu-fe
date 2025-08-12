import Link from "next/link";
import { useState, useEffect } from "react";
import AccessPotalPageModal from "@/components/accessPotalPageModal";
import axiosClient from "@/api/axiosClient";
import { swtoast } from '@/mixins/Swal.mixin';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [levelId, setLevelId] = useState(null);
    const [documentList, setDocumentList] = useState([]);

    useEffect(() => {
        const fetchDocumentList = async () => {
            try {
                const res = await axiosClient.get("/documents");
                const documentList = (Array.isArray(res) && res) || [];
                setDocumentList(documentList);
            } catch (error) {
                throw new Error(error);
            }
        }
        fetchDocumentList()
        .catch((error) => {
            console.log(error);
            swtoast.error({
                text: "Gặp lỗi khi tải danh sách văn bản, vui lòng thử lại."
            });
        });
    }, []);

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
                <div class="navi-solu">SỞ GD&ĐT TỈNH AN GIANG</div>
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
                                                        <div class="col-md-12 text-dcnt">Quản lý cấp Phòng</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt">
                                                <a href="https://sgdkiengiang.ioc.edu.vn/">
                                                    <div class="item-dcnt">
                                                        <div class="col-md-12 text-dcnt">Quản lý cấp Sở</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <div class="item-cha-dcnt">
                                                <a href="https://iockg.vnptkiengiang.vn/">
                                                    <div class="item-dcnt">
                                                        <div class="col-md-12 text-dcnt">Trung tâm điều hành giáo dục tỉnh An Giang</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                {documentList && documentList.map((document) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div class="item-thongbao">
                                                                    <div class="title-thongbao">
                                                                        <Link href={`/van-ban/${document?.id}`}>{document?.title}</Link>
                                                                    </div>
                                                                    <div class="date-sub">
                                                                        <label class="sub-tb">Tin đăng vào</label><label class="date">{document?.created}</label>
                                                                    </div>
                                                                    <div class="chuthich-tb comment">{document?.sub_title}</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
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
