import { Settings } from "@mui/icons-material";
import { Info } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import TimelapseIcon from "@mui/icons-material/Timelapse";

export const routes = [
    {
        id: 1,
        name: "Dash Board",
        path: "/dash-boards",
        icon: <DashboardIcon />,
    },
    {
        id: 2,
        name: "Accounts",
        icon: <AccountCircleIcon />,
        children: [
            {
                id: 3,
                name: "Bác sĩ",
                path: "/accounts",
                icon: <LocalHospitalIcon />,
            },
            {
                id: 4,
                name: "Bệnh nhân",
                path: "/accounts",
                icon: <AssignmentIndIcon />,
            },
            {
                id: 5,
                name: "Tài khoản",
                path: "/accounts",
                icon: <AccountCircleIcon />,
            },
        ],
    },
    {
        id: 6,
        name: "Doctor Settings",
        icon: <LocalHospitalIcon />,
        children: [
            {
                id: 7,
                name: "Bệnh viện",
                path: "/hospitals",
                icon: <LocalHospitalIcon />,
            },
            {
                id: 8,
                name: "Chứng chỉ",
                path: "/certifications",
                icon: <CardMembershipIcon />,
            },
            {
                id: 9,
                name: "Chuyên ngành",
                path: "/majors",
                icon: <CastForEducationIcon />,
            },
        ],
    },
    {
        id: 10,
        name: "History",
        path: "/settings",
        icon: <HistoryIcon />,
    },
    {
        id: 11,
        name: "General Setting",
        icon: <Settings />,
        children: [
            {
                id: 12,
                name: "Thuốc",
                path: "/dash-board/general-setting/drug-manage",
                icon: <MedicalServicesIcon />,
            },
            {
                id: 13,
                name: "Triệu chứng",
                path: "/symptoms",
                icon: <AutoStoriesIcon />,
            },
            {
                id: 14,
                name: "Loại bệnh",
                path: "/dash-board/general-setting/disease-manage",
                icon: <AutoFixNormalIcon />,
            },
            {
                id: 15,
                name: "Nhóm bệnh",
                path: "/disease-group",
                icon: <AddToPhotosIcon />,
            },
            {
                id: 16,
                name: "Khung thời gian",
                path: "/time-frames",
                icon: <TimelapseIcon />,
            },
        ],
    },
];

export const routesControlApp = [
    {
        id: 17,
        name: "About us",
        path: "/about-us",
        children: null,
        icon: <Info />,
    },
];
