import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const BrowseSectionLink = () => {

    const location = useLocation();
  const currentPathname = location.pathname;
  useEffect(() => {
    console.log(currentPathname);
  });
  
  return (
    <>
    {currentPathname === '/success' || currentPathname === '/failed' ? (
              <Link to="/" style={{textDecoration: 'none', color: 'rgb(100, 100, 100)'}}>
                <li className="fakeBtn">Browse Products</li>
              </Link>
            ) : (
              <li className="fakeBtn">
                <ScrollLink
                  to="main"
                  smooth={true}
                  duration={500}
                  offset={501}
                  style={{ textDecoration: "none" }}
                >
                  Browse section
                </ScrollLink>
              </li>
            )}
    </>
  )
}

export default BrowseSectionLink