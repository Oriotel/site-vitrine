/**
 * Form validation utilities for ORIOTEL forms.
 */

export const validators = {
  required: (value) => {
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return 'Ce champ est requis.'
    }
    return null
  },

  email: (value) => {
    if (!value) return null
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(value)) {
      return 'Veuillez entrer une adresse email valide.'
    }
    return null
  },

  phone: (value) => {
    if (!value) return null
    const re = /^[+]?[\d\s\-().]{8,20}$/
    if (!re.test(value)) {
      return 'Veuillez entrer un numéro de téléphone valide.'
    }
    return null
  },

  minLength: (min) => (value) => {
    if (!value) return null
    if (value.length < min) {
      return `Ce champ doit contenir au moins ${min} caractères.`
    }
    return null
  },

  pdfFile: (file) => {
    if (!file) return 'Veuillez joindre votre CV au format PDF.'
    if (file.type !== 'application/pdf') {
      return 'Seuls les fichiers PDF sont acceptés.'
    }
    if (file.size > 5 * 1024 * 1024) {
      return 'Le fichier ne doit pas dépasser 5 Mo.'
    }
    return null
  },
}

/**
 * Validate a form data object against a schema.
 * @param {Object} data - Form field values.
 * @param {Object} schema - { fieldName: [validator1, validator2, ...] }
 * @returns {{ isValid: boolean, errors: Object }}
 */
export const validateForm = (data, schema) => {
  const errors = {}
  let isValid = true

  for (const [field, validatorList] of Object.entries(schema)) {
    for (const validator of validatorList) {
      const error = validator(data[field])
      if (error) {
        errors[field] = error
        isValid = false
        break
      }
    }
  }

  return { isValid, errors }
}
