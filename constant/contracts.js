import { generativeCars_abi } from "./generativeCars_abi";

export const contract = {
  generativeCars: {
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contract: "",
    name: "GenerativeCars",
    abi: generativeCars_abi,
  },
};
