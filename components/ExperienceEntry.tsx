type ExperienceEntryProps = {
  employer: EntryProps;
  roles: EntryProps[];
  description?: string;
};

type EntryProps = {
  date?: string;
  title: string;
};

const ExperienceEntry: React.FC<ExperienceEntryProps> = ({
  employer,
  roles,
  description,
}) => {
  return (
    <div className="flex flex-col gap-y-2 pb-8 border-b-[1px] last:border-b-0 border-stone-200">
      {/* <h4 className="ml-[10rem]">{employer}</h4> */}
      <div className="flex">
        <div className="mr-8 max-w-[8rem] w-full text-stone-400 dark:text-stone-400">
          {employer.date}
        </div>
        <p className="text-stone-600 dark:text-gray-400 font-semibold">
          {employer.title}
        </p>
      </div>
      {roles.map((entry, index) => {
        return (
          <div className="flex flex-col ml-[10rem]" key={index}>
            <p className="text-stone-600 dark:text-gray-400">{entry.title}</p>
            {entry.date && (
              <div className="mr-8 max-w-[8rem] w-full text-stone-400 dark:text-stone-400 text-sm">
                {entry.date}
              </div>
            )}
          </div>
        );
      })}

      {description && (
        <p className="ml-[10rem] text-stone-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default ExperienceEntry;
