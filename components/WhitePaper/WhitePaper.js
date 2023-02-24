import React from "react";
import styles from "../WhitePaper/whitePaper.module.scss";
import Star from "./Star";
import Image from "next/image";
import Upgrade from "/public/Images/upgrade.png";
import Garage from "/public/Images/garage.png";
import Event from "/public/Images/event-tournament.png";
import Table from "/public/Images/table.png";
import Sale from "/public/Images/sale-details.png";
import Token from "/public/Images/token-allocation.png";
import TokenGraph from "/public/Images/token-release-graph.png";
import LogoWhite from "/public/Images/nitro-whitepaper-logo.svg";
import NitroLogo from "/public/Images/logo.svg";
import Scrollspy from "react-scrollspy";
import Link from "next/link";
const WhitePaper = ({}) => {
  return (
    <>
      <div className={styles.NavSection}>
        <div className="container">
          <div className="row">
            <div className={`${styles.PaperNav} nitro-p-0`}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image src={LogoWhite} alt="Logo" />
                </Link>
              </div>
              <Scrollspy
                items={[
                  "overview",
                  "gameplay",
                  "decentralized",
                  "genesis",
                  "nitro-tokenomics",
                  "technology",
                  "team",
                ]}
                currentClassName={styles.current}
              >
                <li>
                  <a href="#overview">1. Overview</a>
                </li>
                <li>
                  <a href="#gameplay">2. Gameplay</a>
                </li>
                <Scrollspy
                  items={[
                    "gp-lore",
                    "gp-collectables",
                    "gp-garage",
                    "gp-sim-racing",
                    "gp-skill-based-racing",
                    "gp-event-tournament",
                    "gp-metaverse",
                  ]}
                  currentClassName={styles.current}
                >
                  <li className="ms-3">
                    <a href="#gp-lore">2.1 Lore</a>
                  </li>
                  <li className="ms-3">
                    <a href="#gp-collectables">2.2 Collectables</a>
                  </li>
                  <Scrollspy
                    items={[
                      "c-cars",
                      "c-drivers",
                      "c-upgrades",
                      "c-car-fusion",
                    ]}
                    currentClassName={styles.current}
                  >
                    <li className="ms-5">
                      <a href="#c-cars">2.2.1 Cars</a>
                    </li>
                    <li className="ms-5">
                      <a href="#c-drivers">2.2.2 Drivers</a>
                    </li>
                    <li className="ms-5">
                      <a href="#c-upgrades">2.2.3 Upgrades</a>
                    </li>
                    <li className="ms-5">
                      <a href="#c-car-fusion">2.2.3 Car fusion</a>
                    </li>
                  </Scrollspy>
                  <li className="ms-3">
                    <a href="#gp-garage">2.3 Garage</a>
                  </li>
                  <li className="ms-3">
                    <a href="#gp-sim-racing">2.4. Sim Racing</a>
                  </li>
                  <Scrollspy
                    items={[
                      "sr-game-modes",
                      "sr-inventory",
                      "sr-tracks",
                      "sr-weather",
                    ]}
                    currentClassName={styles.current}
                  >
                    <li className="ms-5">
                      <a href="#sr-game-modes">2.4.1. Game Modes</a>
                    </li>
                    <li className="ms-5">
                      <a href="#sr-inventory">2.4.2. Inventory</a>
                    </li>
                    <li className="ms-5">
                      <a href="#sr-tracks">2.4.3. Tracks</a>
                    </li>
                    <li className="ms-5">
                      <a href="#sr-weather">2.4.4. Weather</a>
                    </li>
                  </Scrollspy>
                  <li className="ms-3">
                    <a href="#gp-skill-based-racing">2.5. Skill-based Racing</a>
                  </li>
                  <Scrollspy
                    items={["sb-game-modes", "sb-race-prep", "sb-sprint"]}
                    currentClassName={styles.current}
                  >
                    <li className="ms-5">
                      <a href="#sb-game-modes">2.5.1. Game Modes</a>
                    </li>
                    <li className="ms-5">
                      <a href="#sb-race-prep">2.5.2. Race Preparation</a>
                    </li>
                    <li className="ms-5">
                      <a href="#sb-sprint">2.5.3. The Sprint</a>
                    </li>
                  </Scrollspy>
                  <li className="ms-3">
                    <a href="#gp-event-tournament">2.6. Event & Tournaments</a>
                  </li>
                  <li className="ms-3">
                    <a href="#gp-metaverse">2.7. Metaverse</a>
                  </li>
                  <Scrollspy
                    items={[
                      "m-land",
                      "m-buildings",
                      "m-avatars",
                      "m-communities-guild",
                      "m-factories",
                    ]}
                    currentClassName={styles.current}
                  >
                    <li className="ms-5">
                      <a href="#m-land">2.7.1. Land</a>
                    </li>
                    <li className="ms-5">
                      <a href="#m-buildings">2.7.2. Buildings</a>
                    </li>
                    <li className="ms-5">
                      <a href="#m-avatars">2.7.3. Avatars</a>
                    </li>
                    <li className="ms-5">
                      <a href="#m-communities-guild">
                        2.7.4. Communities & Guilds
                      </a>
                    </li>
                    <li className="ms-5">
                      <a href="#m-factories">2.7.5. Factories</a>
                    </li>
                  </Scrollspy>
                </Scrollspy>
                <li className="ms-3">
                  <a href="#decentralized">
                    3. Decentralized Organization & Long-Term Sustainability
                  </a>
                </li>
                <li className="ms-3">
                  <a href="#genesis">4. Genesis Release</a>
                </li>
                <li className="ms-3">
                  <a href="#nitro-tokenomics">5. Nitro Tokenomics</a>
                </li>
                <li className="ms-3">
                  <a href="#technology">6. Technology</a>
                </li>
                <li className="ms-3">
                  <a href="#team">7. Team</a>
                </li>
              </Scrollspy>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ContentSection}>
        <div className={styles.container}>
          <div className={styles.SectionOverview} id="overview">
            <div className="row">
              <div className={styles.Heading}>
                <h1>Overview</h1>
              </div>
              <div className={styles.Content}>
                <p>
                  Nitro League is a decentralized game metaverse where the
                  community can earn tokens by racing futuristic cars
                  competitively or exploring the many in-game activities
                  casually.
                </p>
                <p>
                  Non-Fungible Tokens (NFTs) have gained tremendous popularity
                  among the crypto community since the beginning of 2021,
                  reaching $13 billion in Sales by October 2021. It is being
                  recommended as the number one choice for investment by most
                  financial experts around the globe. The gaming community has
                  been spending on digital assets for decades, and NFTs have
                  become the most logical way for gamers to own their assets,
                  even outside the game. Despite the fact, only about 20% of the
                  NFT assets are game-related, because of how new the NFT
                  marketplace is. Even the NFT games that have been released
                  were produced in unrealistically tight timelines without
                  paying much attention to game quality or logic.
                </p>
                <p>
                  The team at Nitro League has been creating games for decades
                  and aims to launch the first-ever high-quality, sustainable,
                  and addictive NFT racing game to hit the market. Our vision is
                  to leverage the true power of blockchain technology by making
                  every aspect of the game decentralized, so the community can
                  hold all the power in the game.
                </p>
                <h5>Problems Worth Solving:</h5>
                <ul>
                  <li>
                    ​Pay To Win: In conventional games, rich players can simply
                    buy items that make them progress in the game faster than
                    poor players. This creates a very unpleasant gaming
                    experience for veterans that are highly skilled but are
                    designed to lose against richer players. The best sports
                    tournaments ensure that the most skilled players around the
                    world compete with each other, not the richest.
                  </li>
                  <li>
                    Improper Balancing Of Characters: Most games release a large
                    number of characters so the players can choose from a large
                    pool of heroes; however, this usually leads to poor
                    balancing between characters. Without proper balancing, the
                    weaker characters will be valued lower and eventually leave
                    no liquidity‌.
                  </li>
                  <li>
                    Barrier To Entry For New Players: Most NFT games do not
                    provide a player hierarchy or rank system that leaves the
                    strong dominating the tournaments. New players have no
                    chance to earn until they have spent enough time and money
                    within the game to master the mechanics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.SectionGameplay} id="gameplay">
            <div className="row">
              <div className={styles.Heading}>
                <h2>Gameplay</h2>
              </div>
              <div className={styles.Content}>
                <div id="gp-lore">
                  <h3>2.1. Lore</h3>
                  <h4>The World</h4>
                  <p>
                    The year is 3050. The world has evolved and progressed into
                    a very optimistic future. There were no apocalyptic events
                    in the past. Technology is the best we can envision, which
                    includes buildings, power & energy supply, and preservation
                    of nature (greenery). Public transport vehicles are all
                    self-driving and mostly flying. Land space on earth is
                    usually used for nature (plants, animals, water bodies,
                    etc.)
                  </p>
                  <h4>The Racing Fever</h4>
                  <p>
                    Communities are productive and wealthy with all necessities
                    of life taken care of (food, water, power, education, etc.).
                    People work only to support their hobbies. Needless to say,
                    the most hard-working people are the ones with luxurious
                    hobbies (i.e. collecting cars), and the most well-paid jobs
                    are to fuel these hobbies (i.e. car racing). There are no
                    roads on land like in 2020. Car racing is one of the main
                    sports in 3050 (similar to horse racing in 2020).
                  </p>
                  <h4>The City Of Racing</h4>
                  <p>
                    The city of Ethermoor hosts the biggest racing events in the
                    universe. The ancient city was created by racing enthusiasts
                    and is built to promote the racing craze for the entire
                    universe. Status, power, honor, and wealth are now earned
                    through racing in the grand Nitro arena. In the middle of
                    the city lies the main attraction, the grand racing arena.
                    The best place in the universe to witness innovative cars
                    and thrilling races. Drivers from around the world dream of
                    getting a chance to race at the grand arena.
                  </p>
                  <h4>Society Structure</h4>
                  <p>
                    The known universe in 3050 is ruled by “The Supreme Six”.
                    These 6 nations have managed to live in harmony for
                    centuries with an understanding of each other’s differences.
                    Any disputes that do arise are settled the old fashion way -
                    a well-executed sports tournament. The most popular of these
                    sports is car racing, and the best events are hosted in the
                    city of Ethermoor at the Nitro Arena.
                  </p>
                  <p>
                    The players are divided into clans that are part of a
                    nation. Nations are known for their unique racing skills and
                    technology. There can be any number of clans in each nation
                    registered by real-world Nitro Elders. To race in the Nitro
                    League, players must join a clan. Players are rewarded a
                    badge (rank system) by the clan based on their Reputation
                    Points (RP). Players can switch nations or clans at any
                    time; however, switching nations or clans have consequences
                    (like losing nation/clan-specific attribute bonuses and
                    locations).
                  </p>
                  <p>
                    When players win matches, they earn RP from the matches and
                    lose it when they don’t perform. If the player reaches a
                    certain tier/rank and stops playing the game, there would be
                    a decay in RP which would be demoting the player’s account
                    to help other active players reach higher tiers.
                  </p>
                </div>
                <div id="gp-collectables">
                  <h3>2.2. Collectables</h3>
                  <div id="c-cars">
                    <h5>2.2.1 Cars</h5>
                    <p>
                      Nitro League offers some of the most exotic futuristic NFT
                      cars the world has ever seen. All cars in our game
                      universe are built for racing and can be traded in
                      real-world NFT marketplaces. The designs are inspired by
                      different eras, starting from the year 2020 up to the year
                      3050.
                    </p>
                    <p>
                      The value of any car can be gauged by its rarity - Common,
                      Uncommon, Rare, Special, and Legendary. Common cars are
                      cheaper to buy and don’t perform as well in races;
                      whereas, rare cars are produced in lesser numbers, are
                      more expensive, and perform better in races. Players can
                      customize their cars for the race conditions with
                      different components to influence the outcome of the
                      computer-simulated races.
                    </p>
                    <h5>Classes</h5>
                    <p>
                      There are 6 main car classes derived from the unique
                      talent and technologies offered by “the Supreme Six”
                      nations. Each class comes with its unique advantage on the
                      race track giving attribute bonuses for Reputation, Speed,
                      Acceleration, Handling, and Durability.
                    </p>
                    <h4>ALPHA CLASS</h4>
                    <p>
                      Produced during the year 1900 to 2020, this class includes
                      4-wheel vehicles that are street, sports, rally, and drag
                      cars. These are the original designs, the leaders of the
                      pack, that inspired all the models to follow for years to
                      come. The cars in this class have been winning for over a
                      thousand years, breeding confidence, and naturally gaining
                      people’s trust. The designs have been extremely
                      charismatic, charming, and intimidating on the race tracks
                      since the beginning. This class is suited for the
                      strong-willed who believe that nothing can stand in their
                      way.
                    </p>
                    <Star />
                    <h4>BETA CLASS</h4>
                    <p>
                      Produced during the year 1950 to 2050, this class includes
                      4-wheel vehicles that are street, sports, rally, and drag
                      cars. Although very similar to Alpha class vehicles, Beta
                      class vehicles were designed to be safer, stronger, and
                      long-lasting with exceptionally better handling. They are
                      friendlier looking on the race track, and not as
                      intimidating; hence, overshadowed by the reputation of
                      Alpha class. This class is suited for reserved players who
                      believe that defense is their best offense.
                    </p>
                    <Star />
                    <h4>GAMMA CLASS</h4>
                    <p>
                      Produced during the year 2500 to 3050, this class includes
                      2 to 3 wheel vehicles that are rocket, bike, and
                      bullet-style. These vehicles are made for adventurous
                      journeys and constant exploration. They possess the
                      capability to create their own path on the race tracks due
                      to their slim size and skillful aero-dynamics. The
                      vehicles in this class are fully aware of their
                      surroundings and can make quick moves to stun their
                      opponents. These vehicles are vulnerable to being pushed
                      around by other classes due to their lightweight design.
                      This class is suited for independent players who believe
                      in quick take-offs and always rush to the finish line
                      while keeping their distance from other racers.
                    </p>
                    <Star />
                    <h4>OMEGA CLASS</h4>
                    <p>
                      Produced since the year 3000, this class includes hover
                      vehicles that are street, sports, and muscle cars. This
                      class hasn’t been around for a long time, but it has the
                      fastest vehicles the world has ever seen. The hover cars
                      are the most technologically advanced piece of machinery
                      ever invented and can withstand any criticism from
                      old-timers about having no wheels. Having so much speed
                      does give them a slight disadvantage in terms of their
                      poor handling on the race tracks. With artificial
                      intelligence controlling most functions, the vehicles in
                      this class are the most calculated and evolved on the race
                      track. This class is suited for the self-assured nerds who
                      are driven by performance and enjoy the action more than
                      the rewards.
                    </p>
                    <Star />
                    <h4>DELTA CLASS</h4>
                    <p>
                      Produced since the year 2020, this class includes F1-style
                      vehicles that are 4-wheelers, 3-wheelers, 2-wheelers, and
                      hover cars. These vehicles have been around for as long as
                      the Alpha class and produced up to recent times (year
                      3050); however, their looks have not been changed very
                      much, making them very deceptive on the race track. They
                      are very agile when racing and can overtake opponents in
                      the blink of an eye. To prove their mad skills; however,
                      they are self-sabotaging by nature. Even the slightest
                      nudge from any other class can make them go flying off the
                      race track. This class is suited for the old-timers who
                      believe that F1 cars are the best thing that ever happened
                      to racing.
                    </p>
                    <Star />
                    <h4>SIGMA CLASS</h4>
                    <p>
                      Produced in the year 3000, this class includes 4-wheel
                      vehicles that are street, sports, rally, muscle, and drag
                      cars. Although fairly new, the reputation of vehicles in
                      this class is a rockstar and is thought to surpass that of
                      Alpha class in the future. Similar to the Omega class,
                      Sigma is also the most technologically advanced class in
                      the world. The vehicles are known for their artificial
                      intelligence providing very calculated and evolved skills
                      on the race tracks. Sigma has come up with some of the
                      most exotic futuristic car designs the world has ever
                      seen, along with the most well-balanced racing attributes.
                      This class is suited for the cunning racers who are
                      confident in their skills and don’t like playing by the
                      rules.
                    </p>
                    <Star />
                  </div>
                  <div id="c-drivers">
                    <h3>2.2.2. Drivers</h3>
                    <p>
                      Nitro League offers a wide selection of drivers to choose
                      from. Selecting the right driver for a race is just as
                      important as the car to win any event. Players can own
                      multiple drivers (NFTs) in their inventory and choose the
                      one best suited for each race.
                    </p>
                    <p>
                      Driver traits set them apart from each other and affect
                      the outcome of the race. These traits include passion,
                      confidence, mood, reaction time, and risk-taking. The more
                      you train with a driver, the better they perform in races.
                      Drivers do get tired which affects their mood inversely,
                      so players can relax their drivers by taking them to a spa
                      or club.
                    </p>
                  </div>
                  <div id="c-upgrades">
                    <h3>2.2.3. Upgrades</h3>
                    <h4>Car Upgrades</h4>
                    <h5>
                      There Are 3 Types Of Car Upgrades Available In The Game.
                    </h5>
                    <ol>
                      <li>Performance Parts</li>
                      <li>Decorations</li>
                      <li>Power-ups</li>
                    </ol>
                    <h4>PERFORMANCE PARTS:</h4>
                    <p>
                      Each car is made up of 8 different performance parts -
                      Engine, Spoiler, Tires/Hover Disks, Breaks, Booster Kit,
                      Hood, Air Intake, and Exhaust. Car parts can be upgraded
                      to give an attribute bonus to the car. Cars with better
                      parts have a higher chance of winning races. Car parts are
                      NFT assets that can be sold separately or bundled with the
                      car.
                    </p>
                    <h4>DECORATIONS</h4>
                    <p>
                      Car decorations can be upgraded to give a reputation bonus
                      to the car, and visual styling/personalization. Cars with
                      better decorations have a higher chance of selling at a
                      better value in the marketplace. Decorations are NFT
                      assets that can be sold separately or bundled with the
                      car.
                    </p>
                    <h4>POWER-UPS</h4>
                    <p>
                      Power-ups (boosters) are consumable items and are used
                      once per race. A player can own many boosters; however,
                      they can only choose to use 2 boosters in a single race.
                    </p>
                    <h4>Driver Upgrades</h4>
                    <p>
                      Nitro League offers beautiful accessories to personalize
                      your driver. These accessories are not just for show, they
                      also improve your chances of winning the race. Each trait
                      of a driver gets upgraded with helmets, jackets, gloves,
                      and boots. These accessories come in different rarities
                      and can be used by any driver.
                    </p>
                    <div className="pb-5 mb-5">
                      <Image src={Upgrade} alt="" layout="intrinsic" />
                    </div>
                  </div>
                  <div id="c-car-fusion">
                    <h3>2.2.4. Car Fusion</h3>
                    <p>
                      Fusion Cloning is one of the most sought-after activities
                      in the game. It is performed to produce new unique
                      vehicles in the game which are faster and more valuable
                      than the genesis cars. To perform fusion, the player must
                      own the 2 genesis cars required for fusion, as well as
                      other requirements stated on the blueprints rewarded to
                      the player.
                    </p>
                    <h5>Requirements To Clone A Car Through Fusion:</h5>
                    <ul>
                      <li>
                        Required number of blueprint cards (awarded in races and
                        other activities).
                      </li>
                      <li>Required XP and RP level.</li>
                      <li>
                        2 cars (blueprint will state which 2 cars can be fused).
                      </li>
                      <li>Car fusion pod. Can be unlocked in the garage.</li>
                      <li>Robot - to carry out the fusion process.</li>
                      <li>
                        Credit tokens (awarded in races, events, and other
                        activities).
                      </li>
                      <li>Nitro Tokens</li>
                      <li>
                        Time - Fusion can take a few days depending on the
                        model.
                      </li>
                    </ul>
                    <h5>Fusion Cloning Result</h5>
                    <ul>
                      <li>
                        The 2 original cars used for fusion will be destroyed
                        (burnt).
                      </li>
                      <li>
                        The 1 new car (fusion clone) will be produced of higher
                        rarity with basic attributes better than the 2 parent
                        cars.
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="gp-garage">
                  <h3>2.3. Garage</h3>
                  <p>
                    The garage is a very high-tech laboratory-type personal
                    space. It has robotic machinery and digital controls all
                    over. The player will spend most of the time in their
                    garage, which will feature mini-games, car upgrades, store,
                    social activities, notifications, asset showcase, and much
                    more.
                  </p>
                  <h5>ACTIVITIES</h5>
                  <ul>
                    <li>
                      CAR FUSION: Get rid of your old unwanted cars to create
                      something faster, better, stronger, and unique.
                    </li>
                    <li>
                      LOOT BOX &amp; DAILY REWARDS: Players can log into the
                      garage daily to claim various rewards offered in the game
                      like credit tokens, power-ups, fuel, etc.
                    </li>
                    <li>
                      MANAGE UPGRADES: Manage your cars and car upgrades
                      (performance parts, decorations, boosters).
                    </li>
                    <li>
                      MANAGE INVENTORY: Store assets (parts, fuel, blueprints,
                      wallpapers, etc) in the inventory. Inventory items are
                      visible in the 3D space and also manageable through an
                      interactive menu.
                    </li>
                    <li>
                      NFT CAR PARKING: Manage your NFT car collection in the
                      garage parking slots, which can be upgraded to add more
                      slots.
                    </li>
                    <li>
                      NFT ASSET DISPLAYS: NFT assets (car parts, trophies, etc.)
                      are showcased on fancy displays, and also accessible
                      through the inventory menu.
                    </li>
                    <li>
                      MANAGE ROBOT: Get a robot companion in the garage who will
                      help you out with various tasks in the garage.
                    </li>
                    <li>
                      NAVIGATION MENUS: Click on futuristic monitors to open up
                      different menus and view information for racer profile,
                      car, club, leaderboard, achievements, etc.
                    </li>
                    <li>
                      VISIT FRIENDS: Invite friends to view your garage and
                      assets, hang out in their garage online and leave them a
                      rating.
                    </li>
                    <li>
                      BUY BIGGER GARAGE: You can buy a new NFT garage (with more
                      parking slots and shelf space).
                    </li>
                    <li>
                      PERSONALIZE YOUR SPACE: Acquire NFTs to decorate your
                      garage. The collection includes sofa sets, car pods, robot
                      huts, display shelves, workbenches, wallpapers, floor
                      tilings, car parking decorations, plantation, and much
                      more.
                    </li>
                  </ul>
                  <div className="pb-5 mb-5">
                    <Image src={Garage} alt="" layout="intrinsic" />
                  </div>
                </div>
                <div id="gp-sim-racing">
                  <h3>2.4. Sim Racing</h3>
                  <p>
                    Nitro League provides one of the best motorsports management
                    game experiences on the blockchain. There are several racing
                    events held on the 6 islands of Nitro Prime. Players can
                    evaluate the conditions of each race (track, weather, etc.)
                    and equip the best suited NFTs (car, drivers, upgrades,
                    power-ups, etc.) to dominate other players in the race and
                    win big rewards.
                  </p>
                  <div id="sr-game-modes">
                    <h3>2.4.1. Game Modes</h3>
                    <h5>
                      Nitro League offers 3 different racing modes for its
                      community.
                    </h5>
                    <ol>
                      <li>
                        Free-to-Play Mode: Practice your strategy and get
                        recognized.
                      </li>
                      <li>
                        Solo Events: Play-to-Earn as an independent player.
                      </li>
                      <li>
                        Team Events: Play-to-Earn by joining a winning team.
                      </li>
                    </ol>
                  </div>
                  <div id="sr-inventory">
                    <h3>2.4.2. Inventory</h3>
                    <p>
                      The whole objective of the game is to know which items in
                      your inventory are best suited for the race conditions in
                      a specific event. There are a whole range of NFT items
                      available on the marketplace including cars, car upgrades,
                      drivers, driver accessories, power-ups, and pit robots.
                      All of these NFT assets come in different rarities, so
                      keeping a combination of assets that compliment each other
                      for suitable events is a sure way to dominate the race
                      tracks.
                    </p>
                  </div>
                  <div id="sr-tracks">
                    <h3>2.4.3. Tracks</h3>
                    <p>
                      Several exciting race tracks are available in the game to
                      challenge and entertain the players. Races will have to
                      make educated decisions about which car, driver, and car
                      components to use depending on the race track. Following
                      are some of the track features that will affect the
                      outcome of the race.
                    </p>
                    <ul>
                      <li>
                        Material (asphalt, concrete, fiber, rubber, limestone,
                        etc.)
                      </li>
                      <li>Straight stretches (drag opportunities)</li>
                      <li>Twists &amp; Turns (drifting opportunities)</li>
                      <li>Jumps (airtime opportunities)</li>
                      <li>Obstacles (damage probability)</li>
                      <li>Booster strips (power-up advantage)</li>
                    </ul>
                  </div>
                  <div id="sr-weather">
                    <h3>2.4.4. Weather</h3>
                    <p>
                      Depending on which island the race event is held on, the
                      weather will vary drastically. Players that possess the
                      best knowledge of how these conditions affect the race
                      will have a better chance of winning.
                    </p>
                    <p>
                      There are 6 main weather conditions that an event can have
                      - sunny, cloudy, windy, rainy, snowy, and foggy. Players
                      must choose suitable tires for rain, suitable headlights
                      for better visibility in fog, and durable cars for windy
                      conditions. Taking a hover car in a windy race can end up
                      in undesirable results.
                    </p>
                  </div>
                </div>
                <div id="gp-skill-based-racing">
                  <h3>2.5. Skill-based Racing</h3>
                  <p>
                    This is where the Play-to-Earn excitement really begins.
                    Players get to drive their NFT cars on the track and race
                    against each other. The game provides many opportunities for
                    racers to show off their driving skills and dominate other
                    players on the leaderboard. The ones who succeed get big
                    rewards and recognition.
                  </p>
                  <div id="sb-game-modes">
                    <h3>2.5.1. Game Modes</h3>
                    <h5>
                      Nitro League Offers 5 Different Racing Modes For Its
                      Community.
                    </h5>
                    <ol>
                      <li>
                        Free-to-Play Mode: Practice your driving skills and get
                        recognized.
                      </li>
                      <li>
                        Single Player Time Trials Mode: Play-to-Earn as an
                        independent player in time trail races.
                      </li>
                      <li>
                        Single Player Head to Head Mode: Play-to-Earn as an
                        independent player in head to head multiplayer races.
                      </li>
                      <li>
                        Team Time Trials Mode: Play-to-Earn as a team in time
                        trail races.
                      </li>
                      <li>
                        Team Head to Head Mode: Play-to-Earn as a team in head
                        to head multiplayer races.
                      </li>
                    </ol>
                  </div>
                  <div id="sb-race-prep">
                    <h3>2.5.2. Race Preparation</h3>
                    <ul>
                      <li>
                        Races will be held on different islands presenting
                        different weather conditions.
                      </li>
                      <li>
                        The tracks are generated specially for each event and
                        will have different twists and turns, straight
                        stretches, jumps, obstacles, etc.
                      </li>
                      <li>
                        Players will prepare for the race by selecting a
                        suitable car, driver, upgrades, and power-ups for the
                        race.
                      </li>
                      <li>
                        Cars have a cooldown period, so they cannot participate
                        in back to back races.
                      </li>
                      <li>
                        There is a cooldown reset card available in the game
                        which can be used to instantly make any car available
                        for the race. These cards are rewarded within the game
                        and can be purchased from the store.
                      </li>
                      <li>
                        It will cost players Fuel to enter a race which is
                        rewarded in game and available in store.{" "}
                      </li>
                    </ul>
                  </div>
                  <div id="sb-sprint">
                    <h3>2.5.3. The Sprint</h3>
                    <ul>
                      <li>
                        During the countdown, players will be able to perform
                        burnout to get a perfect start.
                      </li>
                      <li>
                        Races are sprints from start to finish with checkpoints
                        in between.
                      </li>
                      <li>
                        Players can turn left and right, brake, and drift.
                      </li>
                      <li>
                        Players can drive over booster strips to fill up their
                        speed boost bar and use it at the right moment to
                        overtake opponents.
                      </li>
                      <li>
                        Players can take cliff jumps and ramp jumps to fill up
                        their speed booster bar.
                      </li>
                      <li>
                        Players have to avoid obstacles on the track in order to
                        avoid damage.
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="gp-event-tournament">
                  <h3>2.6. Event & Tournaments</h3>
                  <div className="pb-5 mb-5">
                    <Image src={Event} alt="" layout="intrinsic" />
                  </div>
                  <p>
                    Players will compete in events to ultimately see who is the
                    best driver in the metaverse and win rewards accordingly.
                    Players can enter free events with smaller rewards using
                    their free cars; however, they must own a premium NFT car to
                    enter events with bigger rewards. Player’s performance in
                    races determines their ranking on the Daily event
                    leaderboard, yielding prizes.
                  </p>
                  <p>
                    Players with high scores in the Daily events will be invited
                    to race in the Weekly tournaments, where top players are
                    promoted to a higher rank based on their skill (RP level).
                    At the end of every season, top-scoring players in the
                    tournaments are invited to compete against top players in
                    the quarterly “Championship event” with a HUGE audience and
                    HUGE rewards.
                  </p>
                  <h5>
                    Following Are The Type Of Events Available In Nitro League:
                  </h5>
                  <ul>
                    <li>Practice events</li>
                    <li>Daily events</li>
                    <li>Special events</li>
                    <li>Weekly tournaments</li>
                    <li>Season championships</li>
                  </ul>
                </div>
                <div id="gp-metaverse">
                  <h3>2.7. Metaverse</h3>
                  <div id="m-land">
                    <h3>2.7.1. Land</h3>
                    <p>
                      Owning land on Nitro Prime is a revenue-generating
                      business. This is because a portion of the revenue
                      generated from the races that take place on an island is
                      distributed to the landowners of that island. The more
                      land plots you own, the more revenue you earn per race.
                      There are 6 islands on the planet offering a total of
                      60,200 land NFTs in different sizes and locations.
                    </p>
                    <div className="pb-5 mb-5">
                      <Image src={Table} alt="" layout="intrinsic" />
                    </div>
                    <p>
                      Land NFTs will be available for sale in drops of 500-1,000
                      plots. The genesis drop of Land NFTs for one of the
                      islands is scheduled for release this summer.
                    </p>
                    <p>
                      Land is a very valuable NFT item that allows for flexible
                      ways of earning money based on the interests of the land
                      owner. Following are some of the ways a land NFT can be
                      utilized:
                    </p>
                    <ul>
                      <li>
                        RACE EARNINGS: A portion of the revenue earned from the
                        races on the island will go to the landowners of the
                        island. A higher stake of land will result in higher
                        returns.
                      </li>
                      <li>
                        RESERVED SPOTS IN RACING EVENTS: Owning land will give
                        you access to reserved slots in each event.
                      </li>
                      <li>
                        EXCLUSIVE LAND OWNER RACES: There will be special events
                        that only landowners can participate in.
                      </li>
                      <li>
                        IN-GAME SERVICES: Landowners can provide services for
                        in-game activities. For example, players can take their
                        drivers to relax at the communal spaces.
                      </li>
                      <li>
                        CAR SHOWROOMS: Landowners can sell digital or real-world
                        assets through their land. Landowners can sell NFT
                        assets from famous content creators by organizing events
                        on their land and keep commission on the sales.
                      </li>
                      <li>
                        SOCIAL EVENTS (CAR MEETS): Landowners can organize
                        social events (hangout places). For example, concerts,
                        car meets, weddings, streamer events, parties, etc.
                      </li>
                      <li>
                        ADVERTISING: Landowners can run advertisements from
                        sponsors.
                      </li>
                      <li>
                        RENT: Landowners can rent out their land or properties
                        if they don’t want to manage the activities for
                        monetizing the land themselves.
                      </li>
                      <li>
                        RETAIL SERVICES: Landowners can create stores and charge
                        a fee for special avatar and car customization services
                        like tire shops, paint shops, repair shops, hair salons,
                        clothing stores, etc.
                      </li>
                    </ul>
                  </div>
                  <div id="m-buildings">
                    <h3>2.7.2. Buildings</h3>
                    <h4>Cribs</h4>
                    <p>
                      Players can purchase buildings and structures to
                      personalize their living space. There are several types of
                      customizable building NFTs available in Nitro Prime. The
                      type of building you can place on the land depends
                      entirely on how big your plot is.
                    </p>
                    <ul>
                      <li>
                        Small plots can accommodate small houses, condos,
                        lodges, garages, etc.
                      </li>
                      <li>
                        Medium plots can accommodate large villas, small stores,
                        car museums, etc.
                      </li>
                      <li>
                        Large plots can accommodate apartment complexes, guild
                        towers, resorts, etc.
                      </li>
                    </ul>
                    <h4>Communal Spaces</h4>
                    <p>
                      Communal Space provides common services to the players for
                      relaxation, fitness, socialization, etc. Communal spaces
                      are owned by guilds and clans, who will charge a fee for
                      their services. The initial communal spaces that will be
                      released on the Nitro Prime will include clubhouses, pool
                      areas, fitness centers, game rooms, concert halls,
                      shopping malls, parks, etc.
                    </p>
                    <h4>Landmarks</h4>
                    <p>
                      There are 82 unique landmark NFTs that will be released in
                      the game. Guilds, clans, or players can own landmarks.
                      Land closer to famous landmarks will have a higher value.
                      Landmarks will consist of monuments, castles, bridges,
                      observation points, and other architectural wonders. These
                      landmarks once existed on Earth and have been transported
                      to Nitro Prime in their ruined state as a reminder for the
                      importance of peace. Some of the landmarks you will find
                      in the game are Eiffel tower, Burj al Arab, Colosseum,
                      Statue of liberty, Taj Mahal, Leaning Tower of Pisa, etc.
                    </p>
                  </div>
                  <div id="m-avatars">
                    <h3>2.7.3. Avatars</h3>
                  </div>
                  <div id="m-communities-guides">
                    <h3>2.7.4. Communities & Guilds</h3>
                  </div>
                  <div id="m-factories">
                    <h3>2.7.5. Factories</h3>
                    <p>
                      Production factories will truly decentralize the game by
                      letting the community build the Nitro world. Factories
                      will be owned by players or guilds to produce their own
                      NFT assets including cars, drivers, props, tracks,
                      buildings, etc. There will be a total of 200 factory plots
                      on Nitro Prime. You can get access to a factory by
                      directly purchasing the plot or leasing it for a fixed
                      period of time.
                    </p>
                    <p>
                      Production limits are controlled by distribution of
                      production tokens. Landowners are rewarded production
                      tokens for taking part in various activities in the game.
                      These production tokens can be traded with Factory owners
                      to increase their production capacity. Factory owners will
                      be able to monetize through the initial sale of their
                      NFTs, transaction fees, sponsorships, transportation fees,
                      fusion fees, and much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.SectionDecentralized} id="decentralized">
            <div className="row">
              <div className={styles.Heading}>
                <h2>
                  3. Decentralized Organization & Long-Term Sustainability
                </h2>
              </div>
              <div className={styles.Content}>
                <p>
                  The Nitro team’s vision is to make the ownership of Nitro
                  metaverse truly decentralized with respect to technology,
                  authority, and economy. Nitro holders will be able to
                  participate in key economic decisions by staking their tokens
                  in the ecosystem.
                </p>
                <p>
                  Nitro League is a platform providing NFT assets that the
                  players can own in the real world. Unlike conventional gaming,
                  where the game assets do not hold any real-world value, Nitro
                  assets can be traded freely on any marketplace outside of the
                  game. Aside from NFT assets, players are awarded credits and
                  Nitro tokens for performing well in friendly racing
                  competitions using their NFT cars. Players spend a great deal
                  of time and money acquiring their favorite assets, and the
                  beauty of NFT assets is that no matter what happens to the
                  game or the developer, the player remains the rightful owner
                  of the NFT assets and tokens which can never be monopolized by
                  the game developer.
                </p>
                <p>
                  Nitro League is a skill-based game with unlimited
                  possibilities for expansion to provide endless entertainment
                  to the gaming community. Nitro League presents an open-world
                  metaverse with beautiful landscapes and structures as far as
                  the eye can see. As the game community grows, players will be
                  able to freely roam around in different cities and own
                  garages, tracks, factories, and land. Our vision is to
                  leverage the true power of blockchain technology to make every
                  aspect of the game decentralized so the community can hold all
                  the power in the game. Players will be able to create and host
                  racing events and other activities and broadcast them online
                  for a real-world sporting experience. Nitro League will also
                  invite sponsors and advertisers to help support the developers
                  in the continued delivery of high-quality, fresh, and exciting
                  content to expand the Nitro metaverse.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.SectionGenesis}>
            <div className="row">
              <div className={styles.Heading}>
                <h2 id="genesis">4. Genesis Release</h2>
              </div>
              <div className={styles.Content}>
                <p>
                  Genesis cars are the first batch of 5,000 NFT cars released by
                  the Nitro factory. 4,200 of these cars will be on sale on the
                  Terra Virtua marketplace soon. Genesis car holders will get
                  special benefits starting with early access to the game’s Beta
                  version, as well as access to the premium loot box rewards.
                </p>
                <h5>Allocation Of 5,000 Genesis Cars Released</h5>
                <ul>
                  <li>Sale - 4,200</li>
                  <li>Presale rewards &amp; giveaways - 100</li>
                  <li>In game contests - 100</li>
                  <li>Influencers - 600</li>
                </ul>
                <h5>
                  The Auction For 4,200 Genesis Cars Started On 15th Dec 2021
                </h5>
                <p>
                  Genesis cars will be selling on a bonding curve with each
                  subsequent purchase increasing the price. Claiming of the
                  genesis NFT cars will begin on 01 Feb 2022, and every claim
                  will have a chance of winning a rare car decoration.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.SectionNitro} id="nitro-tokenomics">
            <div className="row">
              <div className={styles.Heading}>
                <h2>5. Nitro Tokenomics</h2>
              </div>
              <div className={styles.Content}>
                <h5>TOTAL SUPPLY: 1,000,000,000 Nitro Tokens</h5>
                <div className="d-flex">
                  <div className="pb-5 mb-5">
                    <Image src={Sale} alt="" layout="intrinsic" />
                  </div>
                  <div className="pb-5 mb-5">
                    <Image src={Token} alt="" layout="intrinsic" />
                  </div>
                </div>
                <div className="pb-5 mb-5">
                  <Image src={TokenGraph} alt="" layout="intrinsic" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.SectionTechnology} id="technology">
            <div className="row">
              <div className={styles.Heading}>
                <h2>6. Technology</h2>
              </div>
              <div className={styles.Content}>
                <h3>COMING SOON</h3>
              </div>
            </div>
          </div>
          <div className={styles.SectionTeam} id="team">
            <div className="row">
              <div className={styles.Heading}>
                <h2>6. Team</h2>
              </div>
              <div className={styles.Content}>
                <h3>Zaynab Tucker</h3>
                <h5>Chief Executive Officer</h5>
                <p>
                  A successful leader with 20+ years of experience in working
                  across the technology, media, and financial sectors. A history
                  of driving digital transformation and growth for Fortune 500
                  companies like HSBC, Mastercard, VISA, and Emirates Group
                </p>
                <h3>Rizwan Siddiqui</h3>
                <h5>Chief Creative Officer</h5>
                <p>
                  Founding member of an award-winning gaming studio that has
                  crossed 1M+ downloads/day. As a product designer and marketer,
                  he has built digital products and campaigns for companies
                  including NBC Universal, P&G, Barclays, Toyota, and Manchester
                  United.
                </p>
                <h3>Haseeb Khan</h3>
                <h5>Chief Technology Officer</h5>
                <p>
                  Haseeb has been rated as one of the top technologists and
                  chief software architects in the region. Having worked with
                  several start-ups as CTO as well as delivered large-scale
                  enterprise and consumer platforms. Delivered projects for
                  companies including Yahoo!, AOL, Intuit, Groupon, ABB, and WSJ
                  to name a few.
                </p>
                <h3>Irfan Khan</h3>
                <h5>Chief Game Designer</h5>
                <p>
                  Brought up and educated in the cold winters of Winnipeg,
                  Canada, Irfan started his career in the telecom sector where
                  he designed and implemented intelligent software applications
                  and gamified business processes. His passion for games lured
                  him to various game studios where he led talented teams in
                  publishing 400+ apps and games, with a network of 100M+ users.
                  He believes that gaming should be applied to every aspect of
                  life, so we get addicted to our daily routines
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.NitroLogo}>
          <Link href="/">
            <Image src={NitroLogo} alt="" layout="intrinsic" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhitePaper;
