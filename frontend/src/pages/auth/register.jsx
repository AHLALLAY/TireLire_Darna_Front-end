import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LabeledInput from './../../components/common/labeledInput';
import Button from '../../components/common/button';
import register from '../../services/auth/register';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const direction = isRTL ? 'rtl' : 'ltr';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        if (error) setError('');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.password) {
            setError(t('auth.register.errors.required'));
            return;
        }

        if (!validateEmail(formData.email)) {
            setError(t('auth.register.errors.invalidEmail'));
            return;
        }

        if (!validatePassword(formData.password)) {
            setError(t('auth.register.errors.invalidPassword'));
            return;
        }

        setLoading(true);

        try {
            const result = await register(formData.name, formData.email, formData.password);
            if (result.success) {
                setSuccess(t('auth.register.success'));
                window.location.href = '/login';
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError(err.message || t('auth.register.errors.generic'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-200px)] px-4'>
            <div className='w-full max-w-md bg-neutral-dark rounded-2xl shadow-xl border border-neutral p-8 space-y-6' dir={isRTL ? 'rtl' : 'ltr'}>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-white mb-2 drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]'>{t('auth.register.title')}</h1>
                    <p className='text-neutral-text'>{t('auth.register.subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <LabeledInput
                        type="text"
                        id="name"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText={t('auth.register.fullName')}
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder={t('auth.register.fullNamePlaceholder')}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <LabeledInput
                        type="email"
                        id="email"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText={t('auth.register.email')}
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder={t('auth.register.emailPlaceholder')}
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <LabeledInput
                        type="password"
                        id="password"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText={t('auth.register.password')}
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder={t('auth.register.passwordPlaceholder')}
                        value={formData.password}
                        onChange={handleChange}
                    />


                    <Button
                        type='submit'
                        style='w-full bg-primary hover:bg-primary-dark text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark'
                        text={loading ? t('auth.register.submitting') : t('auth.register.submit')}
                        disabled={loading}
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
                    <p className='text-sm text-neutral-text' dir="rtl">
                        {t('auth.register.hasAccount')}{' '}
                        <a href="/login" className='text-primary hover:text-primary-light font-semibold transition-colors underline decoration-primary/50'>
                            {t('auth.register.login')}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
