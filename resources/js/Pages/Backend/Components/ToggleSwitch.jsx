import React, { useState, useEffect } from 'react';

const ToggleSwitch = ({ id, defaultChecked, onChange }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useEffect(() => {
        if (onChange) {
            onChange(isChecked);
        }
    }, [isChecked, onChange]);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center">
            <input 
                id={id}
                type="checkbox" 
                className="hidden" 
                checked={isChecked} 
                onChange={handleToggle} 
            />
            <label htmlFor={id} className="flex items-center cursor-pointer">
                <div className={`relative w-11 h-6 rounded-full ${isChecked ? 'bg-green-500' : 'bg-gray-400'}`}>
                    <span className={`absolute top-0.5 start-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-all ${isChecked ? 'translate-x-full' : ''}`}></span>
                </div>
            </label>
        </div>
    );
};

export default ToggleSwitch;
