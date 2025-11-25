import { useState } from 'react';
import LabeledInput from './../../components/common/labeledInput';
import Button from '../../components/common/button';
import register from '../../services/auth/register';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
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
            setError('يرجى ملء جميع الحقول');
            return;
        }

        if (!validateEmail(formData.email)) {
            setError('البريد الإلكتروني غير صحيح');
            return;
        }

        if (!validatePassword(formData.password)) {
            setError('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل، حرف كبير ورقم واحد على الأقل');
            return;
        }

        setLoading(true);

        try {
            const result = await register(formData.name, formData.email, formData.password);
            if (result.success) {
                setSuccess('تم التسجيل بنجاح! سيتم توجيهك إلى صفحة تسجيل الدخول.');
                window.location.href = '/login';
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError(err.message || 'حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-200px)] px-4'>
            <div className='w-full max-w-md bg-neutral-dark rounded-2xl shadow-xl border border-neutral p-8 space-y-6'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-white mb-2 drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]' dir="rtl">تسجيل</h1>
                    <p className='text-neutral-text' dir="rtl">إنشاء حساب جديد</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <LabeledInput
                        type="text"
                        id="name"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText="الإسم الكامل"
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder="اسمك الكامل"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <LabeledInput
                        type="email"
                        id="email"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText="البريد الإلكتروني"
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder="بريدك@مثال.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <LabeledInput
                        type="password"
                        id="password"
                        labelstyle="text-sm font-semibold text-white mb-2"
                        labelText="كلمة المرور"
                        inputStyle="w-full px-4 py-3 border border-neutral rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-neutral-light text-white placeholder-neutral-text transition-all"
                        required={true}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                    />


                    <Button
                        type='submit'
                        style='w-full bg-primary hover:bg-primary-dark text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark'
                        text={loading ? 'جاري التسجيل...' : 'إنشاء حساب'}
                        disabled={loading}
                    />

                    {error && (
                        <div className="bg-danger-dark border border-danger text-white px-4 py-3 rounded-lg text-sm" dir="rtl">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="bg-success-dark border border-success text-white px-4 py-3 rounded-lg text-sm" dir="rtl">
                            {success}
                        </div>
                    )}
                </form>

                <div className='text-center pt-4 border-t border-neutral'>
                    <p className='text-sm text-neutral-text' dir="rtl">
                        لديك حساب بالفعل؟{' '}
                        <a href="/login" className='text-primary hover:text-primary-light font-semibold transition-colors underline decoration-primary/50'>
                            تسجيل الدخول
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
