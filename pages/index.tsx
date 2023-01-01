import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type useMediaQueryType = {
  isPc: boolean;
  isMoblie: boolean;
};
const Home: NextPage = () => {
  const [mq, setMq] = useState<useMediaQueryType>();
  useEffect(() => {
    const onResize = () => {
      const mq = {
        isPc: window.matchMedia("screen and (min-width: 576px)").matches,
        isMoblie: window.matchMedia("screen and (max-width: 575px)").matches,
      };
      setMq(mq);
    };
    onResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  return (
    <Box>
      <Head>
        <title>「ラグナロクアップルズ」公式サイト</title>
        <meta name="description" content="「ラグナロクアップルズ」公式サイト" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          href="https://pbs.twimg.com/profile_images/1510988579882758145/03jJzJae.jpg"
        />
      </Head>
      <Header mq={mq} />
      <main>
        <Box w="full" h="480px" position="relative" zIndex={-1}>
          <video
            id="title-background-video"
            poster="/image/titleanimation.gif"
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source src="/video/titlemp4.mp4" type="video/mp4"></source>
          </video>
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: mq?.isPc && !mq.isMoblie ? "100%" : "auto",
              display: "flex",
              flexDirection: mq?.isPc && !mq.isMoblie ? "row" : "column",
              alignItems: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [50, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box flex={6}>
              <Image src="/image/logokiri.png" />
            </Box>
            <Box flex={4}>
              <Heading color="tomato" as="h1" size="2xl">
                繰り返せ、
                <br />
                救いのない現実を。
              </Heading>
              <Heading color={mq?.isPc && !mq.isMoblie ? "white" : "black"}>
                随時開発中
              </Heading>
            </Box>
          </motion.div>
        </Box>
        <a
          className="twitter-timeline"
          href="https://twitter.com/Ragnarokapples?ref_src=twsrc%5Etfw"
        >
          Tweets by Ragnarokapples
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </main>

      <footer></footer>
    </Box>
  );
};

export default Home;
