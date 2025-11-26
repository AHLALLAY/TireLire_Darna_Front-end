import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabeledInput from './../../components/common/labeledInput';
import Button from '../../components/common/button';
import login from '../../services/auth/login';
import { useTranslation } from 'react-i18next';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(formData.email, formData.password);
        if (res.success) {
            navigate('/');

        } else {
            setError(res.message);
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-200px)] px-4'>
            <div className='w-full max-w-md bg-neutral-dark rounded-2xl shadow-xl border border-neutral p-8 space-y-6' dir={isRTL ? 'rtl' : 'ltr'}>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-white mb-2 drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]'>{t('auth.login.title')}</h1>
                    <p className='text-neutral-text'>{t('auth.login.subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <LabeledInput
                        type="email"
                        id="email"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText={t('auth.login.email')}
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder={t('auth.login.emailPlaceholder')}
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <LabeledInput
                        type="password"
                        id="password"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText={t('auth.login.password')}
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button
                        type='submit'
                        style='w-full bg-primary hover:bg-primary-dark text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark'
                        text={t('auth.login.submit')}
                    />

                    {error && (
                        <div className="bg-danger-dark border border-danger text-white px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="bg-success-dark border border-success text-white px-4 py-3 rounded-lg text-sm">
                            {success}
                        </div>
                    )}
                </form>

                <div className='text-center pt-4 border-t border-neutral'>
                    <p className='text-sm text-neutral-text'>
                        {t('auth.login.noAccount')}{' '}
                        <a href="/signup" className='text-primary hover:text-primary-light font-semibold transition-colors underline decoration-primary/50'>
                            {t('auth.login.signup')}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;