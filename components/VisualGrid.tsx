const VisualGrid = ({ bottomLine = false }: { bottomLine?: boolean }) => (
  <>
    {/* <div className="absolute left-0 top-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800"></div>
    <div className="absolute right-0 top-0 z-20 h-full w-px bg-gradient-to-t from-transparent via-stone-200 dark:via-stone-800"></div>
    <div className="absolute left-0 top-0 z-20 h-full w-px  bg-gradient-to-t from-transparent via-stone-200 dark:via-stone-800"></div>
    <div className="absolute -left-0.5 -top-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
    <div className="absolute -right-0.5 -top-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
    {bottomLine && (
      <>
        <div className="absolute bottom-0 left-0 z-20 h-px w-full  bg-gradient-to-r from-transparent via-stone-200 dark:via-stone-800"></div>
        <div className="absolute -left-0.5 -bottom-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
        <div className="absolute -right-0.5 -bottom-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
      </>
    )} */}
    <div className="absolute left-0 top-0 z-20 h-px w-full bg-gradient-to-r from-stone-200 dark:via-stone-800"></div>
    {/* <div className="absolute right-0 top-0 z-20 h-full w-px bg-gradient-to-t from-transparent via-stone-200 dark:via-stone-800"></div> */}
    <div className="absolute left-0 top-0 z-20 h-full w-px  bg-gradient-to-b from-stone-200 dark:via-stone-800"></div>
    <div className="absolute -left-0.5 -top-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
    <div className="absolute -right-0.5 -top-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
    {bottomLine && (
      <>
        <div className="absolute bottom-0 left-0 z-20 h-px w-full  bg-gradient-to-r from-stone-200 dark:via-stone-800"></div>
        <div className="absolute -left-0.5 -bottom-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
        <div className="absolute -right-0.5 -bottom-0.5 z-20 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
      </>
    )}
  </>
);

export default VisualGrid;
