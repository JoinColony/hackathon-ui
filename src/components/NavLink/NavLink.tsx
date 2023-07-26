interface Props {
  label: string;
  href: string;
  isHighlighted?: boolean;
}

const NavLink = ({ label, href, isHighlighted = false }: Props) => (
  <a href={href} className={`rounded-md ${isHighlighted ? "bg-gray-50" : ''} overflow-hidden flex py-2 px-3 items-center justify-start`}>
    <div className="relative leading-[24px] font-medium">
      {label}
    </div>
  </a>
);

export default NavLink;
