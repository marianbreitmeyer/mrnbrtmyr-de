const GradientStrip = () => (
  <div className="absolute left-0 top-0 w-full h-2 pointer-events-none z-10">
    <div className="wrapper-no-p grid grid-cols-8 w-full h-full">
      <div className="col-span-1 h-full bg-teal-800"></div>
      <div className="col-span-1 h-full bg-teal-700"></div>
      <div className="col-span-1 h-full bg-teal-600"></div>
      <div className="col-span-1 h-full bg-teal-500"></div>
      <div className="col-span-1 h-full bg-teal-400"></div>
      <div className="col-span-1 h-full bg-teal-300"></div>
      <div className="col-span-1 h-full bg-teal-200"></div>
      <div className="col-span-1 h-full bg-teal-100"></div>
    </div>
  </div>
);

export default GradientStrip;
