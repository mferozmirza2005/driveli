import { TbCurrentLocation } from "react-icons/tb";
import { FaRegDotCircle } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import Styles from "@/styles/Home.module.css";
import { IconContext } from "react-icons";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Driveli</title>
        <meta name="description" content="Driving School Applicaltion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon/favicon.ico" />
      </Head>
      <app-home>
        <div className={Styles.headerbackground}>
          <Image
          src='/images/home/branding_pattern.svg'
          alt="Branding Pattern."
          width={300}
          height={400}
          ></Image>
        </div>
        <header className={Styles.header}>
          <div className={Styles.headercontent}>
            <nav>
              <Image
                src="/images/home/logo_driveli.svg"
                alt="Brand Logo"
                width={130}
                height={50}
                priority
              ></Image>
              <div className={Styles.userNnav}>
                <Image
                  src="/images/home/icon_user-circle.svg"
                  alt="User Icon"
                  width={100}
                  height={24}
                  priority
                ></Image>
                <Image
                  src="/images/home/icon_bars.svg"
                  alt="Navigation Bar Button"
                  width={100}
                  height={24}
                  priority
                ></Image>
              </div>
            </nav>
            <main className={Styles.main}>
              <div className={Styles.intro}>
                <h1>
                  Find & Learn to <span>drive smarter.</span>
                </h1>
                <p>
                  Find instructors near you, check their ratings,
                  <br />
                  book a lesson, pay online and save your money.
                </p>
              </div>
              <div className={Styles.mainEnd}>
              <div className={Styles.locationbar}>
                <div className={Styles.locbar_search}>
                  <span className={Styles.loc_icon}>
                    <IconContext.Provider value={{ color: "gray" }}>
                      <SlLocationPin />
                    </IconContext.Provider>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter postal code or area"
                    ></input>
                  <span className={Styles.go}>Go</span>
                </div>
                <div id="location_dropdown" className={Styles.loc_dropdown}>
                  <div className={Styles.current}>
                    <IconContext.Provider
                      value={{ color: "navy", size: "1.1rem" }}
                    >
                      <TbCurrentLocation />
                    </IconContext.Provider>
                    <span>current location</span>
                  </div>
                  <div className={Styles.recent}>
                    <h4>recent search</h4>
                    <ul>
                      <li>
                        Lorem ipsum
                        <span>
                        <IconContext.Provider value={{ color: "green" }}>
                          <FaRegDotCircle />
                        </IconContext.Provider>
                        </span>
                      </li>
                    </ul>
                    </div>
                    <div className={Styles.popular}>
                    <h4>Popular locations</h4>
                    <ul>
                      <li>
                        Lorem ipsum
                        <span>
                        <IconContext.Provider value={{ color: "gray" }}>
                          <FaRegDotCircle />
                        </IconContext.Provider>
                        </span>
                      </li>
                      <hr />
                      <li>
                        Lorem ipsum
                        <span>
                        <IconContext.Provider value={{ color: "gray" }}>
                          <FaRegDotCircle />
                        </IconContext.Provider>
                        </span>
                      </li>
                      <hr />
                      <li>
                        Lorem ipsum
                        <span>
                        <IconContext.Provider value={{ color: "gray" }}>
                          <FaRegDotCircle />
                        </IconContext.Provider>
                        </span>
                      </li>
                      <hr />
                      <li>
                        Lorem ipsum
                        <span>
                        <IconContext.Provider value={{ color: "gray" }}>
                          <FaRegDotCircle />
                        </IconContext.Provider>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Image
                className={Styles.coach}
                src="/images/home/illustration_search-instructors.png"
                alt="Instructor searching..."
                width={170}
                height={260}
                ></Image>
              <Image
                className={Styles.car}
                src="/images/home/template_car-left-perspective.png"
                alt="Instructor searching..."
                width={450}
                height={230}
              ></Image>
                </div>
            </main>
          </div>
        </header>
      </app-home>
    </>
  );
}
