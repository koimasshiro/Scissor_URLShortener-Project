import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import '../../App.css'
import logo from '../../Assets/SVGs/vector7.svg'
import arrowdown from '../../Assets/SVGs/expand_more_FILL0_wght400_GRAD0_opsz48.svg';
import headerline from '../../Assets/SVGs/Vector 3.svg'
import QRCode from "qrcode.react";
import icon from '../../Assets/SVGs/edit.svg'


interface IFormContainerProps {
  updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const { updateReloadState } = props;
  const [fullUrl, setFullUrl] = React.useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
      updateReloadState();
    } catch (error) {
      console.log(error);
    }
  };





  return (

    <>
      <div className="home">
        <div className="main">
          <header className="header">
            <nav className="navbar">
              <div className="nav-logo">
                <img
                  src={logo}
                  alt="logo"
                  className="logo-image"
                />
                <div className="stroke"></div>
                <h2 className="logo-title">SCISSOR</h2>
              </div>
              <ul className="nav-list">
                <li>
                  <a className="nav-item" href="#">
                    My URLs
                  </a>
                </li>
                <li>
                  <a className="nav-item" href="#section3">
                    Features
                    <img
                      src={arrowdown}
                      alt="expand"
                    />
                  </a>
                </li>
              </ul>
              <div className="buttons">
                <button className="btn">Log in</button>
                <button className="btn">Try for free</button>
              </div>
              <div className="menu">
                <img
                  src="./Assets/SVGs/menu_FILL0_wght400_GRAD0_opsz48.svg"
                  alt="menu"
                />
              </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
              <h1 className="hero-header">
                Optimize Your Online Experience with Our Advanced{" "}
                <span className="text-style">URL Shortening</span> Solution
                <img
                  className="under-hero-header"
                  src={headerline}
                  alt=""
                />
              </h1>
              <p className="hero-subheader">
                Personalize your shortened URLs to align with your brand
                identity. Utilize custom slugs, branded links, and domain
                customization options to reinforce your brand presence and
                enhance user engagement.
              </p>
              <div>
              </div>
            </section>
          </header>
          {/* <div className="image">
            <img className="group2" src="./Assets/SVGs/Group 3.svg" alt="" />
          </div> */}


          <div className="container mx-auto p-2">
            <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
              <div className="w-full h-full rounded-xl p-20 backdrop-brightness-50">
                <h2 className="text-white text-4xl text-center pb-4">URL Shortener</h2>
                <p className="text-white text-center pb-2 text-xl font-extralight">
                  paste your untidy link to shorten it
                </p>
                <p className="text-white text-center pb-4 text-sm font-thin">
                  free tool to shorten a URL or reduce link, Use our URL shortener to
                  create a shortened & neat link making it easy to use
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="flex">
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                        Paste Link /
                      </div>
                      <input
                        type="text"
                        placeholder="add your link"
                        required
                        className="block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                        value={fullUrl}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFullUrl(e.target.value)
                        }
                      />
                      <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Shorten URL
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
      
{/*       
      <div className="qr-container">
      <form onSubmit={downloadQRCode} className="qr-container__form">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div className="qr-container__qr-code" ref={qrRef}>
        {qrCode}
      </div>
    </div> */}
    </>
  );
};

export default FormContainer;
