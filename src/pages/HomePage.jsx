import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Welcome to <span className="text-primary-600">React Architecture</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A premium, scalable, and well-structured starter for your next big project.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        <FeatureCard
          title="Microservices Ready"
          description="Built with a modular architecture that easily scales from simple apps to complex microservices."
          icon="🚀"
        />
        <FeatureCard
          title="Modern Styling"
          description="Leveraging Tailwind CSS with custom theme tokens and typography for a stunning UI."
          icon="🎨"
        />
        <FeatureCard
          title="State Management"
          description="Integrated with Redux Toolkit for efficient and predictable state handling."
          icon="📦"
        />
      </main>

      <footer className="mt-16 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} React Architecture. All rights reserved.
      </footer>
    </div>
  )
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
)

export default HomePage
