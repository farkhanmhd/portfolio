import Clock from './Clock';

const Header = () => {
  return (
    <header className="fixed left-0 top-7 z-[999] flex w-full justify-between px-4 px-4 mix-blend-difference sm:px-8 xl:px-24">
      <span className="text-md text-white">FM</span>
      <Clock />
    </header>
  );
};

export default Header;
