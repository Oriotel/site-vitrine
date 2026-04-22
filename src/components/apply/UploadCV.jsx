import React, { useState, useRef } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UploadCV = ({ onFileSelect, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndSelect(files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      validateAndSelect(e.target.files[0]);
    }
  };

  const validateAndSelect = (file) => {
    if (file.type === 'application/pdf') {
      onFileSelect(file);
    } else {
      alert('Veuillez sélectionner un fichier PDF uniquement.');
    }
  };

  const removeFile = () => {
    onFileSelect(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-midnight-slate ml-1">
        Curriculum Vitae <span className="text-red-500">*</span>
      </label>
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl transition-all duration-200 overflow-hidden ${
          isDragging 
            ? 'border-signal-blue bg-signal-blue/5' 
            : selectedFile 
              ? 'border-green-400 bg-green-50/30' 
              : 'border-gray-200 bg-gray-50/50 hover:border-gray-300'
        }`}
      >
        <AnimatePresence mode="wait">
          {selectedFile ? (
            <motion.div
              key="file-selected"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-green-600 shadow-sm border border-green-100">
                  <FileText size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-midnight-slate truncate max-w-[200px]">
                    {selectedFile.name}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • PDF
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                title="Supprimer le fichier"
              >
                <X size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="no-file"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-10 text-center flex flex-col items-center justify-center cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className={`p-3 rounded-full mb-3 transition-colors ${
                isDragging ? 'bg-signal-blue text-white' : 'bg-white text-gray-400 shadow-sm border border-gray-100'
              }`}>
                <Upload size={24} />
              </div>
              <p className="text-sm font-medium text-midnight-slate mb-1">
                Glissez-déposer votre CV ici
              </p>
              <p className="text-xs text-gray-400">
                Ou cliquez pour parcourir (Format PDF uniquement)
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default UploadCV;
