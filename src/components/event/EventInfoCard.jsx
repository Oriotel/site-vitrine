import React from 'react';

const EventInfoCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className="p-3 bg-signal-blue/5 rounded-xl text-signal-blue shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
          {title}
        </h4>
        <p className="text-base font-bold text-midnight-slate">
          {value}
        </p>
      </div>
    </div>
  );
};

export default EventInfoCard;
