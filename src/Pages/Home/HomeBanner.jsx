import banner from '../assets/Banner/banner.png'

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage:`url(${banner})`}} >
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl bg-slate-900 p-4 bg-opacity-60 rounded-lg">
      <h1 className="mb-5 text-5xl font-bold text-black">Task Genius</h1>
      <p className="mb-5">Effective task management is crucial for achieving goals, maintaining productivity, and reducing stress. Whether you`re a student, professional, or entrepreneur, staying organized and on top of your tasks is essential.Use Task Genius to become a genius in time management.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default HomeBanner;