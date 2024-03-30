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
    <div className="flex pb-8 border-b-[1px] last:border-b-0 border-stone-200 dark:border-stone-800">
      <div className="flex flex-col max-w-[16rem] w-full">
        <p className="text-stone-600 dark:text-stone-400 font-semibold">
          {employer.title}
        </p>
        <div className="mr-8 max-w-[8rem] w-full text-stone-400 dark:text-stone-600">
          {employer.date}
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {roles.map((entry, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <p className="text-stone-600 dark:text-stone-400">
                {entry.title}
              </p>
              {entry.date && (
                <div className="mr-8 max-w-[8rem] w-full text-stone-400 dark:text-stone-600 text-sm">
                  {entry.date}
                </div>
              )}
            </div>
          );
        })}

        {description && (
          <p className="text-stone-600 dark:text-stone-400">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceEntry;
