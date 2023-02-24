import deed1 from "/public/Images/deed1.svg";
import deed2 from "/public/Images/deed2.svg";
import deed3 from "/public/Images/deed3.svg";
import { awsAssetsFetcher } from "utils/awsAssetsFetcher";

export const deedsData = [
  {
    img: deed1,
    item: "Land deed",
    zone: "Nitro city - Zone name",
    price: "0.05 Eth",
    theme: "theme-1",
    deedName: "Nefron",
    gif: awsAssetsFetcher("Desert", "gif"),
  },
  {
    img: deed2,
    item: "Land deed",
    zone: "Nitro city - Zone name",
    price: "0.05 Eth",
    theme: "theme-2",
    deedName: "Yokjna",
    gif: awsAssetsFetcher("Eco-Friendly", "gif"),
  },
  {
    img: deed3,
    item: "Land deed",
    zone: "Nitro city - Zone name",
    price: "0.05 Eth",
    theme: "theme-3",
    deedName: "Evalon",
    gif: awsAssetsFetcher("Floating", "gif"),
  },
  {
    img: deed2,
    item: "Land deed",
    zone: "Nitro city - Zone name",
    price: "0.05 Eth",
    theme: "theme-4",
    deedName: "Azura",
    gif: awsAssetsFetcher("Lava-1", "gif"),
  },
  {
    img: deed2,
    item: "Land deed",
    zone: "Nitro city - Zone name",
    price: "0.05 Eth",
    theme: "theme-4",
    deedName: "Azura",
    gif: awsAssetsFetcher("Desert", "gif"),
  },
  {
    img: deed2,
    item: "Land deed",
    zone: "Nitro city - Zone name",
    price: "0.05 Eth",
    theme: "theme-4",
    deedName: "Azura",
    gif: awsAssetsFetcher("Lava-1", "gif"),
  },
];
