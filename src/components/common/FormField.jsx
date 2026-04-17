import React from 'react'

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  required = false,
  options,
  rows,
  accept,
  className = '',
  ...props
}) => {
  const baseInputStyles =
    'w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-dark-400 transition-all duration-300 focus:outline-none focus:border-gold-500/50 focus:bg-white/8 text-sm'

  const borderColor = error ? 'border-error/50' : 'border-white/10'

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows || 5}
          className={`${baseInputStyles} ${borderColor} resize-none`}
          {...props}
        />
      )
    }

    if (type === 'select') {
      return (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseInputStyles} ${borderColor} cursor-pointer`}
          {...props}
        >
          <option value="" className="bg-dark-800 text-dark-400">
            {placeholder || 'Sélectionnez...'}
          </option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-dark-800 text-white">
              {opt.label}
            </option>
          ))}
        </select>
      )
    }

    if (type === 'file') {
      return (
        <div className="relative">
          <input
            id={name}
            name={name}
            type="file"
            onChange={onChange}
            required={required}
            accept={accept}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            {...props}
          />
          <div
            className={`${baseInputStyles} ${borderColor} flex items-center gap-3 cursor-pointer`}
          >
            <span className="px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-semibold rounded-md">
              Parcourir
            </span>
            <span className="text-dark-400 text-sm truncate">
              {value || 'Aucun fichier sélectionné'}
            </span>
          </div>
        </div>
      )
    }

    return (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${baseInputStyles} ${borderColor}`}
        {...props}
      />
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-dark-200">
          {label}
          {required && <span className="text-gold-500 ml-1">*</span>}
        </label>
      )}
      {renderInput()}
      {error && (
        <p className="text-error text-xs mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  )
}

export default FormField
