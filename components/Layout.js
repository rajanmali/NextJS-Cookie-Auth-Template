import Link from "next/link";
import PropTypes from "prop-types";

const Layout = ({ children, title }) => {
  return (
    <div className="container">
      <nav className="navbar">
        <span>
          Welcome, <strong>Guest</strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <button>Log out</button>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </nav>
      <h1>{title}</h1>
      {children}

      <style jsx>{`
        .container {
          width: 75%;
          margin: 0 auto;
        }

        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        a {
          margin-right: 0.5em;
        }

        button: {
          text-decortion: underline;
          padding: 0;
          font: inherit;
          cursor: pointer;
          border-style: none;
          color: rgb(0, 0, 238);
        }

        h1 {
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
};

export default Layout;
