import banner from '../../assets/Banner/banner.png'

const HomeBanner = () => {
    return (
        <div className="hero md:min-h-screen min-h-fit" style={{backgroundImage:`url(${banner})`}} >
  {/* <div className="hero-overlay bg-opacity-30"></div> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl bg-white text-black p-4 bg-opacity-20 rounded-lg">
      <h1 className="mb-5  md:text-5xl font-bold text-xl text-black">Task Genius</h1>
      <p className="mb-5 text-xs md:text-lg">Effective task management is crucial for achieving goals, maintaining productivity, and reducing stress. Whether you`re a student, professional, or entrepreneur, staying organized and on top of your tasks is essential.Use Task Genius to become a genius in time management.</p>
      <button className="btn md:btn-md btn-xs bg-slate-800 text-white hover:bg-slate-600">Get Started with Task Genius</button>
    </div>
  </div>
</div>
    );
};

export default HomeBanner;