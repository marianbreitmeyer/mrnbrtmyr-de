type ContactProps = {
  title: string;
  handle: string;
  href: string;
};

const Contact: React.FC<ContactProps> = ({ title, handle, href }) => {
  return (
    <div className="flex flex-col md:flex-row pb-8 border-b-subtle relative h-padding">
      <p className="md:max-w-[16rem] w-full mb-4 md:mb-0 text-subtle">
        {title}
      </p>

      <div className="flex flex-col gap-y-4">
        <a href={href} target="_blank" className="text-moderate">
          {handle}
        </a>
      </div>
      {/* <div className="bg-gradient-subtle w-full h-full min-h-full m-auto absolute -z-10"></div> */}
      <div className="absolute left-0 bottom-0 z-20 h-px w-full  bg-gradient-to-t from-transparent via-stone-200 dark:via-stone-800"></div>
      <div className="absolute -left-0.5 -bottom-0.5 z-30 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
      <div className="absolute -right-0.5 -bottom-0.5 z-30 h-1 w-1 bg-stone-400 dark:bg-stone-600 rounded-full"></div>
    </div>
  );
};

export default Contact;
