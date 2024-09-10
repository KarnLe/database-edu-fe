import { useEffect, useState } from "react";
import { Select, Modal } from 'antd';
import axiosClient from "@/api/axiosClient";
import { swtoast } from '@/mixins/Swal.mixin';

const AccessPotalPageModal = ({ isModalOpen, handleOk, handleCancel, levelId = null }) => {
    const [modalLoading, setModalLoading] = useState(true);

    const [levelList, setLevelList] = useState([]);
    const [levelIdSelected, setLevelIdSelected] = useState(levelId);

    const [schoolList, setSchoolList] = useState([]);
    const [schoolIdSelected, setSchoolIdSelected] = useState(null);

    const [schoolSelectDisable, setSchoolSelectDisable] = useState(true);
    const [schoolSelectLoading, setSchoolSelectLoading] = useState(false);

    useEffect(() => {
        const fetchLevelList = async () => {
            try {
                const res = await axiosClient.get("/levels");
                const levelList = [];
                levelList = Array.isArray(res) && res.map((level) => ({
                    value: level?.id,
                    label: level?.name
                }));
                setLevelList(levelList);
            } catch (error) {
                throw new Error(error);
            }
        }
        fetchLevelList()
        .then(() => setModalLoading(false))
        .catch((error) => {
            console.log(error);
            swtoast.error({
                text: "Gặp lỗi khi tải danh sách cấp, vui lòng thử lại."
            });
            setModalLoading(false);
            handleCancel();
        });
    }, []);

    useEffect(() => {
        const fetchShoolList = async (levelId = "") => {
            try {
                const res = await axiosClient.get(`/schools?level_id=${levelId}`);
                const newSchoolList = [];
                newSchoolList = Array.isArray(res) && res.map((school) => ({
                    value: school?.id,
                    label: school?.name,
                    url: school?.url
                }));
                setSchoolList(newSchoolList);
            } catch (error) {
                throw new Error(error);
            }
        }
        if(levelIdSelected) {
            setSchoolSelectDisable(true);
            setSchoolSelectLoading(true);
            fetchShoolList(levelIdSelected)
            .then(() => {
                setSchoolSelectLoading(false);
                setSchoolSelectDisable(false);
            })
            .catch((error) => {
                console.log(error);
                swtoast.error({
                    text: "Gặp lỗi khi tải danh sách trường, vui lòng thử lại."
                });
                setSchoolSelectLoading(false);
            });
        }
    }, [levelIdSelected]);

    const handleAccess = () => {
        const school = schoolList.find((school) => school.value === schoolIdSelected);
        const url = school?.url || "";
        location.assign(url);
        handleOk();
    }

    return (
        <Modal 
                title={<h1 style={{ color: "#1f7ed0", fontSize: "24px" }}>Truy cập hệ thống quản lý cấp Trường</h1>}
                okText="Truy cập"
                cancelText="Hủy" 
                open={isModalOpen} 
                onOk={handleAccess} 
                onCancel={handleCancel} 
                centered 
                loading={modalLoading} 
            >
                <label style={{ color: "#1f7ed0" }}>Cấp học</label>
                <Select
                    size="large"
                    value={levelIdSelected}
                    placeholder="Chọn cấp"
                    style={{ width: "100%", marginBottom: "12px" }}
                    options={levelList}
                    onChange={(levelId) => setLevelIdSelected(levelId)}
                />
                <label style={{ color: "#1f7ed0" }}>Trường học</label>
                <Select
                    size="large"
                    value={schoolIdSelected}
                    placeholder="Chọn trường"
                    style={{ width: "100%", marginBottom: "16px" }}
                    options={schoolList}
                    disabled={schoolSelectDisable}
                    loading={schoolSelectLoading}
                    onChange={(schoolId) => setSchoolIdSelected(schoolId)}
                />
            </Modal>
    );
}

export default AccessPotalPageModal;
