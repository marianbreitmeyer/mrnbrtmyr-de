type ContactProps = {
  title: string;
  handle: string;
  href: string;
};

const Contact: React.FC<ContactProps> = ({ title, handle, href }) => {
  return (
    <div className="flex flex-col md:flex-row pb-8 border-subtle relative">
      <p className="md:max-w-[16rem] w-full mb-4 md:mb-0 text-subtle">
        {title}
      </p>

      <div className="flex flex-col gap-y-4">
        <a href={href} target="_blank" className="text-moderate">
          {handle}
        </a>
      </div>
      <div className="bg-gradient-subtle w-full h-full min-h-full m-auto absolute -z-10"></div>
    </div>
  );
};

export default Contact;
