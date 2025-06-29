import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import banner from '../../assets/home-banner.png'

const popularServices = [
  { name: 'Plumbing', img: 'https://img.freepik.com/free-vector/plumbing-service-advertising-banner-repairman-uniform-standing-with-wrench-hand-tools-box-near-sink_575670-1705.jpg?semt=ais_hybrid&w=740', to: '/services/plumbing' },
  { name: 'Electrician', img: 'https://t4.ftcdn.net/jpg/11/66/04/09/360_F_1166040934_x8kGgvbpoMfatoBqu60I9lhDeiaomEHC.jpg', to: '/services/electrician' },
  { name: 'Salon at Home', img: 'https://media.gettyimages.com/id/pop033/vector/man-getting-haircut.jpg?s=612x612&w=0&k=20&c=EOkSuxsdxpM4toekb0fROqunydH1Gjhx0d271RpFgLg=', to: '/services/salon' },
  { name: 'AC Repair', img: 'https://media.istockphoto.com/id/1323570577/vector/air-conditioner-repair-service-friendly-smiling-repairman.jpg?s=612x612&w=0&k=20&c=Tt3aD0QyuJlcJlv6N093tezEFD5v8tS22VpvxBdAnBs=', to: '/services/ac-repair' },
  { name: 'House Cleaning', img: 'https://thumbs.dreamstime.com/b/smiling-cartoon-cleaning-woman-mop-bucket-384145220.jpg', to: '/services/cleaning' },
  { name: 'Painting', img: 'https://media.istockphoto.com/id/578576392/vector/painter-coloring-wall-by-paint-roller-people-occupations.jpg?s=612x612&w=0&k=20&c=pj4JtRaGsU66VRS8o49X-uS0ZWqYV98qDocq4zpk61Y=', to: '/services/painting' },
  { name: 'Carpentry', img: 'https://i.pinimg.com/originals/15/b4/07/15b4070ae324c30e412f413076c0f79b.jpg', to: '/services/carpentry' },
  { name: 'Pest Control', img: 'https://thumbs.dreamstime.com/b/pest-control-symbol-rat-silhouette-pest-control-symbol-rat-silhouette-white-background-350446798.jpg', to: '/services/pest-control' }
];

const Home = () => (
  <div className="font-sans text-gray-800">
    <Hero />

    <section className="max-w-screen-xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl text-blue-600 font-semibold mb-6">Popular Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularServices.map((svc) => (
          <Link key={svc.name} to={svc.to} className="bg-white rounded-lg shadow-md hover:-translate-y-1 transition-transform">
            <img src={svc.img} alt={svc.name} className="w-4/5 h-52 object-cover mx-auto mt-4 rounded" />
            <div className="p-3">
              <h3 className="text-lg font-medium">{svc.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="bg-gray-50 py-16 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-12">Why Choose LocalKart?</h2>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-8">
        {[
          ['🔍', 'Easy Search', 'Find services quickly with our smart search'],
          ['📅', 'Book Instantly', 'Select time slots that work for you'],
          ['👤', 'Trusted Providers', 'All service providers are verified'],
          ['✅', 'Quality Assured', '100% satisfaction guarantee'],
          ['💸', 'Affordable Pricing', 'Transparent and competitive rates'],
          ['🔐', 'Secure Payments', 'Pay safely with encrypted transactions'],
          ['📞', '24/7 Support', 'Always here to help via chat or call'],
          ['🌐', 'Wide Reach', 'Available across multiple cities and towns']
        ].map(([icon, title, desc], i) => (
          <div key={i} className="bg-white max-w-xs w-full p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full text-xl mx-auto mb-4">
              {icon}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">{title}</div>
            <div className="text-sm text-gray-500">{desc}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-blue-600 text-white py-16 px-4 text-center">
      <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
      <p className="text-lg mb-8">Join thousands of satisfied customers and service providers</p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/book" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Book Services</Link>
        <Link to="/provider" className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition">Become a Provider</Link>
      </div>
    </section>

    <footer className="bg-slate-900 text-slate-300 text-center py-12 px-4">
      <h2 className="text-white text-xl mb-2">LocalKart</h2>
      <p className="text-slate-400 mb-4">Your trusted local service marketplace</p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
        <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
      </div>
    </footer>
  </div>
);

export default Home;
