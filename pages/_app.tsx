import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      
      activeChain={{
        chainId: 25,
        rpc: ["https://mainnet.cronoslabs.com/v1/55e37d8975113ae7a44603ef8ce460aa"],
        nativeCurrency: {
          decimals: 18,
          name: "Cronos",
          symbol: "CRO",
        },
        shortName: "CRO",
        slug: "Cronos",
        testnet: false,
        chain: "Cronos Mainnet",
        name: "Cronos Mainnet",
      }}
    >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
