const Header = (): JSX.Element => {
  return (
    <nav className="p-5 px-2 bg-gray-400 border-gray-200">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center" href="https://ridian.io/">
          <img
            alt="Ridian Logo"
            className="h-6 mx-3 sm:h-9"
            src="https://www.ridian.io/_next/image?url=%2Fimages%2Fridian-logo.png&w=3840&q=75"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
