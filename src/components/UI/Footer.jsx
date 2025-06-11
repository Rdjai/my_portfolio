const Footer = () => {
  return (
    <>
      <footer className="max-w-3xl mx-auto py-5 border-t-2 border-[#ffdb70]">
        <p className="text-center text-[#fafafa]">
          <strong>
            © {new Date().getFullYear()} Jagannath Kashyap. All rights reserved.
          </strong>
        </p>
      </footer>
    </>
  );
};

export default Footer;
