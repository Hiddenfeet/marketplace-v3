import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Cronos } from "@thirdweb-dev/chains";
import { useChainId, useAddress, useSwitchChain } from "@thirdweb-dev/react";
import { Container, Flex, Heading, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  const address = useAddress();
  const chainid = useChainId();
  const switchChain = useSwitchChain();

  if (!address) {
    return (
      <Container maxW={"1200px"}>
        <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Please Connect a Wallet</Heading>
        </Flex>
      </Container>
    );
  }

  if (chainid !== Cronos.chainId) {
    return (
      <Container maxW={"1200px"}>
        <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
          <Heading>Switch to Cronos Network</Heading>
          <Button onClick={() => switchChain(Cronos.chainId)}>
            Switch to Cronos
          </Button>
        </Flex>
      </Container>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  TIPSY DANCERs 
                </span>
                <br />
                exclusive NFT Marketplace
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://liquor-token-cronos.com/"
                  target="_blank"
                >
                  LIQUOR TOKEN CRONOS
                </Link>{" "}
                offers the opportunity to trade their Cronos Mainnet 
                collection <b>Tipsy Dancers NFT</b> with <i>$CRO</i>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link 
                  className={styles.heroCta}
                  href="https://dancers.liquor-token-cronos.com/"
                  target="_blank"
                >   
                  Mint a Tipsy Dancer with $Moonshine
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://distillery.liquor-token-cronos.com/"
                  target="_blank"
                >
                  Earn $Moonshine
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
