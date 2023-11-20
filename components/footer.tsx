const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto text-xs text-black">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} FakeStoreName, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
