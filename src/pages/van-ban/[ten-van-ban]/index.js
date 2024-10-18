import axiosClient from "@/api/axiosClient";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const VanBan = () => {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [content, setContent] = useState('');
    const [created, setCreated] = useState('');

    useEffect(() => {
        const fetchDocumentDetail = async () => {
            const documentId = router.query['ten-van-ban'];
            try {
                const res = await axiosClient.get(`/documents/details/${documentId}`);
                setTitle(res?.title);
                setSubTitle(res?.sub_title);
                setContent(res?.content);
                setCreated(res?.created);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDocumentDetail();
    }, [router]);

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
            <div id="content-wrapper" class="main">
                <div class="container main-content">
                <div class="row breadcrumb-wrapper">
                    <div class="col-md-7 col-sm-8 col-xs-8">
                        <div class="title-dcnt">Văn bản/Hướng dẫn</div>
                    </div>
                    <div class="col-md-5 col-sm-4 col-xs-4">
                        <div class="back-page">
                            &laquo;&nbsp;<a href="/">Quay lại</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="gr-chitiet">
                            <div class="row">
                            <div class="col-md-12 date-pub-c">
                                {created ? `Ngày đăng bài: ${created}` : ''}
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-12">
                                <div class="title-tieudiem-c">
                                    <a>{title}</a>
                                </div>
                            </div>
                            </div>
                            <div class="row des-news">
                            <div class="col-md-12">{subTitle}</div>
                            </div>
                            <div class="row content-news">
                            <div class="col-md-12" dangerouslySetInnerHTML={{ __html: content }}></div>
                            </div>
                            <div class="row des-news">
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <div class="pull-right">
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="gr-thongbao">
                            <div class="related-wrapper">
                            <div class="related-title">Văn bản/Hướng dẫn khác</div>
                            </div>
                            <table id="lstRelated" cellspacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tr>
                                <td>
                                    <div class="item-thongbao">
                                        <div class="title-thongbao">
                                        <a href='#' style={{ fontSize: "14px !important" }}>Công văn số 4546/BGDĐT-VP ngày 04/10/2019
                                        </a>
                                        </div>
                                        <div class="date-sub">
                                        <label class="sub-tb">Tin đăng vào</label><label class="date">16/10/2019 16:15:29</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="item-thongbao">
                                        <div class="title-thongbao">
                                        <a href='#' style={{ fontSize: "14px !important" }}>Thông tư số 24/2018/TT-BGDĐT ngày 28/9/2018
                                        </a>
                                        </div>
                                        <div class="date-sub">
                                        <label class="sub-tb">Tin đăng vào</label><label class="date">16/10/2019 16:20:17</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="item-thongbao">
                                        <div class="title-thongbao">
                                        <a href='#' style={{ fontSize: "14px !important" }}>Văn bản số 2199/BGDĐT-VP ngày 22/5/2019
                                        </a>
                                        </div>
                                        <div class="date-sub">
                                        <label class="sub-tb">Tin đăng vào</label><label class="date">16/10/2019 16:22:16</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="item-thongbao">
                                        <div class="title-thongbao">
                                        <a href='#' style={{ fontSize: "14px !important" }}>Văn bản số 2034/BGDĐT-NGCBQLGD ngày 13/5/2019
                                        </a>
                                        </div>
                                        <div class="date-sub">
                                        <label class="sub-tb">Tin đăng vào</label><label class="date">16/10/2019 16:23:14</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="item-thongbao">
                                        <div class="title-thongbao">
                                        <a href='#' style={{ fontSize: "14px !important" }}>Văn bản số 1688/BGDĐT-VP ngày 22/4/2019
                                        </a>
                                        </div>
                                        <div class="date-sub">
                                        <label class="sub-tb">Tin đăng vào</label><label class="date">16/10/2019 16:24:31</label>
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
            <div id="footer-wrapper" class="footer diaPhuong" style={{ position: "relative" }}>
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
        </>
    );
}

export default VanBan;
