import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);
  const filtered_data = data?.filter((obj) => obj.owner !== "0x0000000000000000000000000000000000000000");

  return (
    <Container maxWidth="lg">
      <h1>Tipsy Dancers</h1> {/* Replaced the header text */}
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={filtered_data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}



