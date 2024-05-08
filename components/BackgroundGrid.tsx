const BackgroundGrid = () => (
  <div className="absolute left-0 top-0 w-full min-w-full h-full min-h-full pointer-events-none z-0">
    <div className="wrapper-no-p grid grid-cols-8 w-full h-full">
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full border-r-[1px] border-stone-200/40 dark:border-stone-600/40"></div>
      <div className="col-span-1 h-full"></div>
    </div>
  </div>
);

export default BackgroundGrid;
