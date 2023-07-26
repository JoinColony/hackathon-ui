interface Props {
  label: string;
  href: string;
  isHighlighted?: boolean;
}

const NavLink = ({ label, href, isHighlighted = false }: Props) => (
  <a href={href} className={`rounded-md ${isHighlighted ? "bg-light-gray-50" : "bg-light-base-white"} overflow-hidden flex py-2 px-3 items-center justify-start`}>
    <div className="relative leading-[24px] font-medium">
      {label}
    </div>
  </a>
);

export default NavLink;
