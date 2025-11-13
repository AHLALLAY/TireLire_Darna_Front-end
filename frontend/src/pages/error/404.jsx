import Button from "../../components/common/button";
import { useNavigate } from "react-router-dom";

function Error404() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToSearch = () => {
        navigate('/recherche');
    };

    return (
        <div className="min-h-screen bg-neutral-light flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Illustration 404 */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <h1 className="text-9xl md:text-[12rem] font-bold text-primary drop-shadow-[0_0_20px_rgba(0,217,255,0.5)] animate-pulse">
                            404
                        </h1>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl">
                            🏠
                        </div>
                    </div>
                </div>

                {/* Message principal */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dir="rtl">
                        عذراً، الصفحة غير موجودة
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-text mb-2" dir="rtl">
                        يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها
                    </p>
                    <p className="text-base text-neutral-text" dir="rtl">
                        لا تقلق، يمكنك العودة إلى الصفحة الرئيسية أو البحث عن عقارك المثالي
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Button
                        action={goToHome}
                        text="العودة إلى الصفحة الرئيسية"
                        style="px-8 py-3 bg-primary hover:bg-primary-dark text-black hover:text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5"
                    />
                    <Button
                        action={goToSearch}
                        text="البحث عن عقار"
                        style="px-8 py-3 border-2 border-primary text-white hover:bg-primary hover:text-black font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Error404;