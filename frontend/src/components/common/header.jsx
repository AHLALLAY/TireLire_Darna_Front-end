import { useNavigate } from "react-router-dom";
import Button from "./button.jsx";

function Header({ role = 1 }) {
    const visiteur = [
        { label: "الرئيسية", path: "/" },
        { label: "البحث", path: "/search" },
        { label: "تسجيل الدخول", path: "/login" },
        { label: "التسجيل", path: "/signup" }
    ];

    const authentifiedUsers = [
        { label: "الرئيسية", path: "/" },
        { label: "البحث", path: "/search" },
        { label: "إعلاناتي", path: "/my-listings" },
        { label: "الرسائل", path: "/messages" },
        { label: "الإشعارات", path: "/notifications" },
        { label: "ملفي الشخصي", path: "/my-profile" },
        { label: "تسجيل الخروج", path: "/logout" }
    ];

    const admin = [
        { label: "الرئيسية", path: "/" },
        { label: "البحث", path: "/search" },
        { label: "المراقبة", path: "/moderation" },
        { label: "الإحصائيات", path: "/statistics" },
        { label: "ملفي الشخصي", path: "/my-profile" },
        { label: "تسجيل الخروج", path: "/logout" }
    ];

    const chooseNavBar = (role) => {
        switch (role) {
            case 1:
                return visiteur;
            case 2:
                return authentifiedUsers;
            case 3:
                return admin;
            default:
                return [];
        }
    };

    const goTo = useNavigate();
    const handlActions = (path) => {
        return () => goTo(path);
    }

    return (
        <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center py-4" dir="rtl">
            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                {role && chooseNavBar(role).map((element, index) => {
                    const isLogin = element.label === "تسجيل الدخول";
                    const isSignUp = element.label === "التسجيل";
                    return (
                        <Button
                            key={index}
                            text={element.label}
                            action={handlActions(element.path)}
                            style={
                                isSignUp 
                                    ? "px-4 py-2 bg-primary text-black rounded-lg font-medium hover:bg-primary-dark hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/50"
                                    : isLogin
                                    ? "px-4 py-2 border-2 border-primary text-white rounded-lg font-medium hover:bg-primary hover:text-black transition-all duration-200 shadow-sm hover:shadow-primary/50"
                                    : "px-4 py-2 text-white rounded-lg font-medium hover:text-primary hover:bg-primary/20 transition-all duration-200"
                            }
                        />
                    );
                })}
            </div>
            <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    CoProp
                </h1>
            </div>
        </nav>
    );
}

export default Header;