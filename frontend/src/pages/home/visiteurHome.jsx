import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button';

function VisiteurHome() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirection vers la page de recherche avec les critères
        navigate('/recherche', { state: { query: searchQuery } });
    };

    // Données d'exemple pour les annonces vedettes (à remplacer par des données API)
    const featuredListings = [
        {
            id: 1,
            title: "شقة عصرية وسط المدينة",
            price: 250000,
            location: "الدار البيضاء، المعاريف",
            image: "/apparemment.jpg",
            surface: 85,
            rooms: 3
        },
        {
            id: 2,
            title: "فيلا مع حديقة",
            price: 850000,
            location: "الرباط، الأكدال",
            image: "/villa.jpeg",
            surface: 200,
            rooms: 5
        },
        {
            id: 3,
            title: "استوديو مفروش",
            price: 120000,
            location: "مراكش، الكليز",
            image: "/studio.jpg",
            surface: 35,
            rooms: 1
        }
    ];

    const features = [
        {
            icon: "🏠",
            title: "الإعلانات العقارية",
            description: "ابحث عن العقار الذي تحلم به من بين آلاف الإعلانات المتحقق منها"
        },
        {
            icon: "💰",
            title: "الادخار الجماعي",
            description: "شارك في مجموعات الادخار الدار/الدرة لتمويل مشروعك"
        },
        {
            icon: "💬",
            title: "التواصل المباشر",
            description: "تواصل مباشرة مع البائعين عبر نظام الدردشة لدينا"
        },
        {
            icon: "🔒",
            title: "آمن وموثوق",
            description: "منصة آمنة مع مراقبة الإعلانات والتحقق من المستخدمين"
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 text-white overflow-hidden m-0">
                {/* Image de fond avec la même largeur que la navbar */}
                <div className="absolute inset-0 flex justify-center">
                    <div 
                        className="w-full container mx-auto px-4 md:px-6 lg:px-8 h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/immobilier-search.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Overlay dégradé blanc vers noir */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/80"></div>
                    </div>
                </div>
                
                {/* Contenu */}
                <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" dir="rtl">
                            ابحث عن عقارك المثالي
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg" dir="rtl">
                            المنصة التي تجمع بين الإعلانات العقارية والادخار الجماعي
                        </p>
                        
                        {/* Barre de recherche principale */}
                        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                            <div className="bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row gap-2">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="ابحث بالكلمات المفتاحية، المدينة، الحي..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary text-neutral-dark bg-white"
                                        dir="rtl"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    text="بحث"
                                    style="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                                />
                            </div>
                        </form>
                        
                        <div className="mt-8">
                            <Button
                                text="اكتشف الإعلانات"
                                action={() => navigate('/recherche')}
                                style="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Annonces vedettes */}
            <section className="py-16 md:py-24 bg-neutral-dark">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dir="rtl">
                            الإعلانات المميزة
                        </h2>
                        <p className="text-lg text-neutral-text" dir="rtl">
                            اكتشف أفضل اختياراتنا
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {featuredListings.map((listing) => (
                            <div
                                key={listing.id}
                                className="bg-neutral-dark border border-neutral rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                                
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={listing.image}
                                        alt={listing.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg" dir="rtl">
                                        مميز
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2" dir="rtl">
                                        {listing.title}
                                    </h3>
                                    <p className="text-2xl font-bold text-primary mb-4 drop-shadow-[0_0_6px_rgba(0,217,255,0.4)]">
                                        {listing.price.toLocaleString('ar-MA')} درهم
                                    </p>
                                    <div className="flex items-center text-neutral-text mb-4" dir="rtl">
                                        <span className="ml-2">📍</span>
                                        <span>{listing.location}</span>
                                    </div>
                                    <div className="flex gap-4 text-sm text-neutral-text" dir="rtl">
                                        <span>{listing.surface} م²</span>
                                        <span>•</span>
                                        <span>{listing.rooms} غرفة{listing.rooms > 1 ? '' : ''}</span>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-neutral">
                                        <Button
                                            text="عرض التفاصيل"
                                            action={() => navigate(`/annonce/${listing.id}`)}
                                            style="w-full py-2 bg-primary hover:bg-primary-dark text-black hover:text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-primary/50"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Button
                            text="عرض جميع الإعلانات"
                            action={() => navigate('/recherche')}
                            style="px-8 py-3 border-2 border-primary text-white hover:bg-primary hover:text-black font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/50"
                        />
                    </div>
                </div>
            </section>

            {/* Section Fonctionnalités */}
            <section className="py-16 md:py-24 bg-neutral-light">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" dir="rtl">
                            لماذا تختار CoProp؟
                        </h2>
                        <p className="text-lg text-neutral-text" dir="rtl">
                            منصة شاملة لمشروعك العقاري
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-neutral-dark border border-neutral p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center"
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-text">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA Inscription */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" dir="rtl">
                        هل أنت مستعد للبدء؟
                    </h2>
                    <p className="text-xl mb-8 text-white/90" dir="rtl">
                        أنشئ حسابك مجاناً واحصل على جميع الميزات
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            text="التسجيل"
                            action={() => navigate('/inscription')}
                            style="px-8 py-4 bg-white text-neutral-dark font-semibold rounded-lg hover:bg-neutral-light hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        />
                        <Button
                            text="تسجيل الدخول"
                            action={() => navigate('/connexion')}
                            style="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all duration-200"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VisiteurHome;