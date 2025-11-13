import { useState } from 'react';
import Button from '../common/button';

function SearchBar({ 
    onSearch, 
    placeholder = "ابحث بالكلمات المفتاحية، المدينة، الحي...",
    className = "",
    showButton = true,
    buttonText = "بحث"
}) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`max-w-2xl mx-auto ${className}`}>
            <div className="bg-white rounded-lg shadow-2xl p-2 flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary text-neutral-dark bg-white"
                        dir="rtl"
                    />
                </div>
                {showButton && (
                    <Button
                        type="submit"
                        text={buttonText}
                        style="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    />
                )}
            </div>
        </form>
    );
}

export default SearchBar;

