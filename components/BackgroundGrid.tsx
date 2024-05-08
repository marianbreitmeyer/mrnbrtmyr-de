const BackgroundGrid = () => (
  <div className="absolute top-0 left-0 w-full h-full min-h-full pointer-events-none z-0">
    <div className="wrapper-no-p grid grid-cols-8 w-full h-full">
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-700/20"></div>
      <div className="col-span-1 h-full"></div>
    </div>
  </div>
);

export default BackgroundGrid;
