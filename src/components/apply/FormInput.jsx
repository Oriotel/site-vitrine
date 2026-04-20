import React from 'react';

const FormInput = ({ label, name, type = 'text', value, onChange, placeholder, required = false, isTextArea = false }) => {
  const baseClasses = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-signal-blue/20 focus:border-signal-blue transition-all bg-gray-50/50 text-midnight-slate placeholder:text-gray-400";

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-semibold text-midnight-slate ml-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows="4"
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
        />
      )}
    </div>
  );
};

export default FormInput;
