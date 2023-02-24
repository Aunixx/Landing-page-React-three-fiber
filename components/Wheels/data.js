import aionSpirit from "../../public/marketplace/aion-spirit.png";
import apolloBlink from "../../public/marketplace/apollo-blink.png";
import maahesNight from "../../public/marketplace/maahes-night.png";
import horusQuake from "../../public/marketplace/horus-quake.png";
import bellonaEternity from "../../public/marketplace/bellona-eternity.png";
import chaosVoid from "../../public/marketplace/chaos-void.png";
import roadRipper from "../../public/marketplace/road-ripper.png";
import sobekWard from "../../public/marketplace/sobek-ward.png";

const swiperCars = [
  {
    featureCar: aionSpirit,
    id: "1",
    carName: "aion Spirit",
    carInfo:
      "A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It has a 2450 horsepower twin-turbo engine that can dominate most cars on a straight-line track.",
    label: "Reputation",
    score: "7.0",
    href: "/aion-spirit",
    carStats: [
      {
        label: "Reputation",
        score: "7.0",
      },
      {
        label: "Speed",
        score: "6.1",
      },
      {
        label: "Acceleration",
        score: "5.7",
      },
      {
        label: "Handling",
        score: "5.2",
      },
      {
        label: "Durability",
        score: "6.0",
      },
    ],
  },
  {
    featureCar: apolloBlink,
    id: "2",
    carName: "apollo Blink",
    carInfo:
      "A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It can launch to unmatched velocity in a few neck-straining seconds making it ideal for tracks with twists and turns.",
    label: "Speed",
    score: "4.0",
    href: "/apollo-blink",

    carStats: [
      {
        label: "Reputation",
        score: "6.0",
      },
      {
        label: "Speed",
        score: "6.9",
      },
      {
        label: "Acceleration",
        score: "7.2",
      },
      {
        label: "Handling",
        score: "8.0",
      },
      {
        label: "Durability",
        score: "6.9",
      },
    ],
  },
  {
    featureCar: maahesNight,
    id: "3",
    carName: "Maahes Night",
    carInfo:
      'Maahes Night, the lion, was the first-ever "Rare" vehicle produced for the Sigma class by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns.',
    label: "Acceleration",
    score: "5.0",
    href: "/mahees-night",

    carStats: [
      {
        label: "Reputation",
        score: "7.0",
      },
      {
        label: "Speed",
        score: "7.2",
      },
      {
        label: "Acceleration",
        score: "6.7",
      },
      {
        label: "Handling",
        score: "7.5",
      },
      {
        label: "Durability",
        score: "6.6",
      },
    ],
  },
  {
    featureCar: horusQuake,
    id: "4",
    carName: "horus Quake",
    carInfo:
      'Horus Quake was the first-ever "Common" vehicle produced for the Sigma class by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns.',
    label: "Handling",
    score: "2.0",
    href: "/horus-quake",

    carStats: [
      {
        label: "Reputation",
        score: "5.0",
      },
      {
        label: "Speed",
        score: "5.2",
      },
      {
        label: "Acceleration",
        score: "4.7",
      },
      {
        label: "Handling",
        score: "5.5",
      },
      {
        label: "Durability",
        score: "4.6",
      },
    ],
  },
  {
    featureCar: bellonaEternity,
    id: "5",
    carName: "bellona Eternity",
    carInfo:
      "A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It can launch to unmatched velocity in a few neck-straining seconds making it ideal for tracks with twists and turns.",
    label: "Durability",
    score: "1.0",
    href: "/bellona-eternity",

    carStats: [
      {
        label: "Reputation",
        score: "7.0",
      },
      {
        label: "Speed",
        score: "7.9",
      },
      {
        label: "Acceleration",
        score: "8.2",
      },
      {
        label: "Handling",
        score: "9.0",
      },
      {
        label: "Durability",
        score: "7.9",
      },
    ],
  },
  {
    featureCar: chaosVoid,
    id: "6",
    carName: "chaos Void",
    carInfo:
      "A capable track car using a combination of low weight, an electric motor, and aggressive aerodynamics. It has a 2330 horsepower twin-turbo engine that can dominate most cars on a straight-line track.",
    label: "Reputation",
    score: "7.0",
    href: "/chaos-void",

    carStats: [
      {
        label: "Reputation",
        score: "6.0",
      },
      {
        label: "Speed",
        score: "5.1",
      },
      {
        label: "Acceleration",
        score: "4.7",
      },
      {
        label: "Handling",
        score: "4.2",
      },
      {
        label: "Durability",
        score: "5.0",
      },
    ],
  },
  {
    featureCar: roadRipper,
    id: "7",
    carName: "Road Ripper",
    carInfo:
      "Road Ripper was designed using never-seen-before technology provided by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns.",
    label: "Reputation",
    score: "9.0",
    href: "/road-ripper",

    carStats: [
      {
        label: "Reputation",
        score: "6.0",
      },
      {
        label: "Speed",
        score: "6.2",
      },
      {
        label: "Acceleration",
        score: "5.7",
      },
      {
        label: "Handling",
        score: "6.5",
      },
      {
        label: "Durability",
        score: "5.6",
      },
    ],
  },
  {
    featureCar: sobekWard,
    id: "8",
    carName: "Sobek Ward",
    carInfo:
      'Sobek Ward, the croc, was the first-ever "Epic" vehicle produced for the Sigma class by the Amenthes nation. Its well-balanced stats give a competitive edge for racing on tracks that contain both straight-line stretches as well as twists and turns.',
    label: "Reputation",
    score: "9.0",
    href: "/sobek-ward",
    carStats: [
      {
        label: "Reputation",
        score: "8.0",
      },
      {
        label: "Speed",
        score: "8.2",
      },
      {
        label: "Acceleration",
        score: "7.7",
      },
      {
        label: "Handling",
        score: "8.5",
      },
      {
        label: "Durability",
        score: "7.6",
      },
    ],
  },
];

export default swiperCars;
