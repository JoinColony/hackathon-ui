interface Props {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => { 
  return (
    <div className="relative bg-white w-full">
      {children}
    </div>
  );
};

export default DefaultLayout;
