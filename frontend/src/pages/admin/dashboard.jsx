import { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/sidebar';
import Metrics from '../../components/admin/metrics';
import Charts from '../../components/admin/charts';
import RecentActivities from '../../components/admin/recentActivities';
import PeriodSelector from '../../components/admin/periodSelector';
import {
    getOverviewStatistics,
    getRecentActivities,
    getEvolutionData,
    getGeographicDistribution,
    getPropertyTypesDistribution
} from '../../services/admin/statisticsService';

function Dashboard() {
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('month');
    const [customStartDate, setCustomStartDate] = useState('');
    const [customEndDate, setCustomEndDate] = useState('');
    
    const [statistics, setStatistics] = useState(null);
    const [activities, setActivities] = useState([]);
    const [evolutionData, setEvolutionData] = useState(null);
    const [geographicData, setGeographicData] = useState(null);
    const [propertyTypesData, setPropertyTypesData] = useState(null);

    // Récupérer le token depuis le localStorage (à adapter selon votre système d'auth)
    const getAuthToken = () => {
        return localStorage.getItem('authToken') || null;
    };

    useEffect(() => {
        loadDashboardData();
    }, [period, customStartDate, customEndDate]);

    const loadDashboardData = async () => {
        setLoading(true);
        const token = getAuthToken();

        try {
            // Charger les statistiques générales
            const overview = await getOverviewStatistics(
                token,
                period,
                customStartDate || null,
                customEndDate || null
            );
            
            if (overview.status !== 'failed') {
                setStatistics(overview);
            }

            // Charger les activités récentes
            const recentActivities = await getRecentActivities(token, 10);
            if (recentActivities.status !== 'failed' && Array.isArray(recentActivities)) {
                setActivities(recentActivities);
            }

            // Charger les données d'évolution
            const [usersEvolution, listingsEvolution] = await Promise.all([
                getEvolutionData(token, 'users', period),
                getEvolutionData(token, 'listings', period)
            ]);

            if (usersEvolution.status !== 'failed' && listingsEvolution.status !== 'failed') {
                setEvolutionData({
                    users: usersEvolution,
                    listings: listingsEvolution
                });
            }

            // Charger la répartition géographique
            const geographic = await getGeographicDistribution(token, 10);
            if (geographic.status !== 'failed') {
                setGeographicData(geographic);
            }

            // Charger la répartition par type de bien
            const propertyTypes = await getPropertyTypesDistribution(token);
            if (propertyTypes.status !== 'failed') {
                setPropertyTypesData(propertyTypes);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
            // En cas d'erreur, utiliser des données de démonstration
            setStatistics({
                users: { total: 0, activeThisMonth: 0 },
                listings: { total: 0, published: 0, pending: 0 },
                messages: { total: 0, today: 0 }
            });
        } finally {
            setLoading(false);
        }
    };

    const handlePeriodChange = (newPeriod) => {
        setPeriod(newPeriod);
        if (newPeriod !== 'custom') {
            setCustomStartDate('');
            setCustomEndDate('');
        }
    };

    const handleCustomDateChange = (type, value) => {
        if (type === 'start') {
            setCustomStartDate(value);
        } else {
            setCustomEndDate(value);
        }
    };

    return (
        <div className="flex min-h-screen bg-neutral-light">
            <Sidebar />
            
            <main className="flex-1 p-6 space-y-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold mb-2">لوحة تحكم الإدارة</h1>
                    <p className="text-neutral-text">نظرة عامة على إحصائيات المنصة</p>
                </div>

                <PeriodSelector
                    period={period}
                    onPeriodChange={handlePeriodChange}
                    onCustomDateChange={handleCustomDateChange}
                    customStartDate={customStartDate}
                    customEndDate={customEndDate}
                />

                <Metrics statistics={statistics} loading={loading} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Charts
                            evolutionData={evolutionData}
                            geographicData={geographicData}
                            propertyTypesData={propertyTypesData}
                            loading={loading}
                        />
                    </div>
                    <div>
                        <RecentActivities activities={activities} loading={loading} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;