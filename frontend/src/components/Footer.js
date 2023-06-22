import { useLocation } from "react-router-dom";

function Footer() {

  const date = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="footer">
      {location.pathname === '/' && (
        <p className="footer__copyright">&copy; {date} Kirill Golovin связь с автором сайта ariun.mesto@gmail.com</p>
      )}
    </footer>
  )
}

export default Footer