import Layout from "../layouts/index";
import getNotionData from "../data/notion";
import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import NavBar from "../components/NavBar";
import { scrollToBottom, scrollToTop } from "../static/js/utilities";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Squiggle = styled.div`
  position: absolute;
  left: -81px;
  top: 530px;
  background-image: url("/static/images/squiggle-animated.svg");
  height: 5px;
  width: 19rem;
  transform: rotate(90deg);
`;

const Blob = styled.img`
  position: absolute;
  top: 82vh;
  left: 170px;
  z-index: 1;
`;

const MainSection = styled.div`
  height: 100vh;
`;

const MainTextContainer = styled.div`
  margin: 10rem;
  padding: 10px;
  margin-top: 6rem;
`;
const SecondSection = styled.section`
  height: 100vh;
  background-color: #fae0a8;
  position: relative;
`;

const SecondaryTextContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 75px;
  padding: 65px;
  background-color: #ffffff;
  width: 60%;
`;

export default function Page({ sections, etag, meta }) {
  const focused = useFocus();
  useEffect(() => {
    if (focused) {
      fetch(window.location, {
        headers: {
          pragma: "no-cache",
        },
      }).then((res) => {
        if (res.ok && res.headers.get("x-version") !== etag) {
          window.location.reload();
        }
      });
    }
  }, [focused]);

  const sectionIntro = sections[1];
  const sectionSecondary = sections[2];
  return (
    <Layout>
      <Squiggle />
      <Blob />
      <Head>
        {meta.title && <title>{meta.title[0][0]}</title>}
        {meta.description && (
          <meta name="description" content={meta.description[0][0]} />
        )}
      </Head>
      <MainSection>
        <header>
          <NavBar />
        </header>
        <MainTextContainer>
          <Flex style={{ justifyContent: "center" }}>
            <div style={{ marginRight: "3rem" }}>
              <h1>{sectionIntro.title[0]}</h1>
              <p className="p-main-text">{sectionIntro.children[0].value[0]}</p>
            </div>
            <div style={{ position: "relative" }}>
              <img src={sectionIntro.children[2].src} height={285} />
              <img className="orangles" src={"/static/images/orangles.svg"} />
            </div>
          </Flex>
        </MainTextContainer>
        <div className="button-scroll_down bounce">
          <IconButton
            icon={"ChevronsDown"}
            color={"#43a2a2"}
            size={40}
            onClick={scrollToBottom}
          />
        </div>
        <Blob src={"static/images/boho-circle.svg"} height={225} />
      </MainSection>
      <SecondSection>
        <SecondaryTextContainer>
          <h1>{sectionSecondary.title[0]}</h1>
          <p>{sectionSecondary.children[0].value[0]}</p>
        </SecondaryTextContainer>
        <IconButton
          icon={"ChevronsUp"}
          color={"#43a2a2"}
          size={40}
          style={{ position: "absolute", bottom: "55px", right: "10px" }}
          onClick={scrollToTop}
        />
      </SecondSection>

      <Footer />
    </Layout>
  );
}

Page.getInitialProps = async ({ res }) => {
  const notionData = await getNotionData();
  const etag = require("crypto")
    .createHash("md5")
    .update(JSON.stringify(notionData))
    .digest("hex");

  if (res) {
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
    res.setHeader("X-version", etag);
  }

  return { ...notionData, etag };
};

const useFocus = () => {
  const [state, setState] = useState(null);
  const onFocusEvent = (event) => {
    setState(true);
  };
  const onBlurEvent = (event) => {
    setState(false);
  };
  useEffect(() => {
    window.addEventListener("focus", onFocusEvent);
    window.addEventListener("blur", onBlurEvent);
    return () => {
      window.removeEventListener("focus", onFocusEvent);
      window.removeEventListener("blur", onBlurEvent);
    };
  });
  return state;
};
