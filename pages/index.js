import Layout from "../layouts/index";
import getNotionData from "../data/notion";
import { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import SocialLinks from "../components/SocialLinks";
import { X, Circle } from "react-feather";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Squiggle = styled.div`
  background-image: url("/static/images/squiggle-animated.svg");
  height: 5px;
  width: 50%;
  color: olive;
  margin: 0 auto;
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

  return (
    <Layout>
      <Head>
        {meta.title && <title>{meta.title[0][0]}</title>}
        {meta.description && (
          <meta name="description" content={meta.description[0][0]} />
        )}
      </Head>
      <Circle size={10} />
      <section>
        <h1>{sectionIntro.title[0]}</h1>
        <Flex>
          <div>
            <p>{sectionIntro.children[0].value[0]}</p>{" "}
            <div style={{ marginTop: "15px" }}>
              <SocialLinks />
            </div>
          </div>

          <img src={sectionIntro.children[2].src} height={100} />
        </Flex>
      </section>
      <Squiggle />
      <X size={10} />
      <footer>
        Built by Christen with Notion + Next.js + Zeit; Designed by Vivian
        Johnston
      </footer>
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
