import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";

const BrowseSectionLink = () => {

    const { pathname} = useLocation();
  
  return (
    <>
    {pathname === '/success' || pathname === '/failed' ? (
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