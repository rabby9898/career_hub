const Footer = () => {
  return (
    <>
      <div className="px-52 bg-black text-white">
        <footer className="footer p-10  text-base-content">
          <aside>
            <img src="https://i.ibb.co/qFwtSJ6/social.png" alt="" />
            <p className="text-white">
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav className="text-white">
            <header className="footer-title ">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="text-white">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="text-white">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
