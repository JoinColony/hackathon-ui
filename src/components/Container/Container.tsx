interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full max-w-[1280px] mx-auto px-5">{children}</div>;
};

export default Container;
