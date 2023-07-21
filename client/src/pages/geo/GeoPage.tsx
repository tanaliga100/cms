import { useOutletContext } from "react-router-dom";

export interface User {
  _id: string;
  city: string;
  state: string | null;
  country: string;
  role: string;
}

const GeoPage = () => {
  const theme = useTheme();
  const data = useOutletContext<any>();
  const users: User[] = data.data.users;

  // FORMAT THE DATE HERE...
  const aggregate = users.reduce(
    (acc: any, current: any) => {
      //desctruct
      const { _id, city, coordinates, country, role, state } = current;
      // Group by role
      acc.roleCounts[role] = (acc.roleCounts[role] || 0) + 1;
      // Group by country
      acc.countryCounts[country] = (acc.countryCounts[country] || 0) + 1;
      // Users Location
      acc.userLocation[coordinates] = acc.userLocation[coordinates] + 1;
      return acc;
    },
    {
      countryCounts: {},
      roleCounts: {},
      userLocation: {},
    }
  );
  console.log("AGGREGATE", aggregate);
  const geoData = [
    {
      id: "AFG",
      value: 996540,
    },
    {
      id: "AGO",
      value: 611234,
    },
    {
      id: "ALB",
      value: 346545,
    },
    {
      id: "ARE",
      value: 578860,
    },
    {
      id: "ARG",
      value: 389363,
    },
    {
      id: "ARM",
      value: 952394,
    },
    {
      id: "ATA",
      value: 253890,
    },
    {
      id: "ATF",
      value: 422848,
    },
    {
      id: "AUT",
      value: 588884,
    },
    {
      id: "AZE",
      value: 360104,
    },
    {
      id: "BDI",
      value: 610155,
    },
    {
      id: "BEL",
      value: 107567,
    },
    {
      id: "BEN",
      value: 948924,
    },
    {
      id: "BFA",
      value: 492308,
    },
    {
      id: "BGD",
      value: 231097,
    },
    {
      id: "BGR",
      value: 997924,
    },
    {
      id: "BHS",
      value: 796377,
    },
    {
      id: "BIH",
      value: 495604,
    },
    {
      id: "BLR",
      value: 484931,
    },
    {
      id: "BLZ",
      value: 528139,
    },
    {
      id: "BOL",
      value: 956201,
    },
    {
      id: "BRN",
      value: 450195,
    },
    {
      id: "BTN",
      value: 805560,
    },
    {
      id: "BWA",
      value: 886809,
    },
    {
      id: "CAF",
      value: 218208,
    },
    {
      id: "CAN",
      value: 280244,
    },
    {
      id: "CHE",
      value: 912596,
    },
    {
      id: "CHL",
      value: 39288,
    },
    {
      id: "CHN",
      value: 303089,
    },
    {
      id: "CIV",
      value: 250439,
    },
    {
      id: "CMR",
      value: 982903,
    },
    {
      id: "COG",
      value: 975311,
    },
    {
      id: "COL",
      value: 998630,
    },
    {
      id: "CRI",
      value: 786503,
    },
    {
      id: "CUB",
      value: 845468,
    },
    {
      id: "-99",
      value: 389820,
    },
    {
      id: "CYP",
      value: 187403,
    },
    {
      id: "CZE",
      value: 932684,
    },
    {
      id: "DEU",
      value: 341436,
    },
    {
      id: "DJI",
      value: 650599,
    },
    {
      id: "DNK",
      value: 362214,
    },
    {
      id: "DOM",
      value: 695511,
    },
    {
      id: "DZA",
      value: 332576,
    },
    {
      id: "ECU",
      value: 461304,
    },
    {
      id: "EGY",
      value: 396511,
    },
    {
      id: "ERI",
      value: 606480,
    },
    {
      id: "ESP",
      value: 936591,
    },
    {
      id: "EST",
      value: 290956,
    },
    {
      id: "ETH",
      value: 99614,
    },
    {
      id: "FIN",
      value: 505639,
    },
    {
      id: "FJI",
      value: 606881,
    },
    {
      id: "FLK",
      value: 609014,
    },
    {
      id: "FRA",
      value: 650662,
    },
    {
      id: "GAB",
      value: 533146,
    },
    {
      id: "GBR",
      value: 27462,
    },
    {
      id: "GEO",
      value: 901360,
    },
    {
      id: "GHA",
      value: 230254,
    },
    {
      id: "GIN",
      value: 764114,
    },
    {
      id: "GMB",
      value: 66991,
    },
    {
      id: "GNB",
      value: 51363,
    },
    {
      id: "GNQ",
      value: 872896,
    },
    {
      id: "GRC",
      value: 890768,
    },
    {
      id: "GTM",
      value: 380138,
    },
    {
      id: "GUY",
      value: 760664,
    },
    {
      id: "HND",
      value: 855716,
    },
    {
      id: "HRV",
      value: 769813,
    },
    {
      id: "HTI",
      value: 203702,
    },
    {
      id: "HUN",
      value: 235296,
    },
    {
      id: "IDN",
      value: 987012,
    },
    {
      id: "IND",
      value: 800474,
    },
    {
      id: "IRL",
      value: 249936,
    },
    {
      id: "IRN",
      value: 844806,
    },
    {
      id: "IRQ",
      value: 220038,
    },
    {
      id: "ISL",
      value: 780363,
    },
    {
      id: "ISR",
      value: 24161,
    },
    {
      id: "ITA",
      value: 18688,
    },
    {
      id: "JAM",
      value: 619233,
    },
    {
      id: "JOR",
      value: 729092,
    },
    {
      id: "JPN",
      value: 876684,
    },
    {
      id: "KAZ",
      value: 876686,
    },
    {
      id: "KEN",
      value: 528216,
    },
    {
      id: "KGZ",
      value: 129077,
    },
    {
      id: "KHM",
      value: 154894,
    },
    {
      id: "OSA",
      value: 825682,
    },
    {
      id: "KWT",
      value: 54069,
    },
    {
      id: "LAO",
      value: 590396,
    },
    {
      id: "LBN",
      value: 214227,
    },
    {
      id: "LBR",
      value: 439300,
    },
    {
      id: "LBY",
      value: 5164,
    },
    {
      id: "LKA",
      value: 184840,
    },
    {
      id: "LSO",
      value: 906511,
    },
    {
      id: "LTU",
      value: 629958,
    },
    {
      id: "LUX",
      value: 675413,
    },
    {
      id: "LVA",
      value: 613253,
    },
    {
      id: "MAR",
      value: 632082,
    },
    {
      id: "MDA",
      value: 476011,
    },
    {
      id: "MDG",
      value: 249932,
    },
    {
      id: "MEX",
      value: 965040,
    },
    {
      id: "MKD",
      value: 312062,
    },
    {
      id: "MLI",
      value: 97316,
    },
    {
      id: "MMR",
      value: 955515,
    },
    {
      id: "MNE",
      value: 14952,
    },
    {
      id: "MNG",
      value: 969316,
    },
    {
      id: "MOZ",
      value: 974949,
    },
    {
      id: "MRT",
      value: 768449,
    },
    {
      id: "MWI",
      value: 224769,
    },
    {
      id: "MYS",
      value: 874489,
    },
    {
      id: "NAM",
      value: 890333,
    },
    {
      id: "NCL",
      value: 522076,
    },
    {
      id: "NER",
      value: 444289,
    },
    {
      id: "NGA",
      value: 71637,
    },
    {
      id: "NIC",
      value: 4589,
    },
    {
      id: "NLD",
      value: 15685,
    },
    {
      id: "NOR",
      value: 742890,
    },
    {
      id: "NPL",
      value: 186673,
    },
    {
      id: "NZL",
      value: 835495,
    },
    {
      id: "OMN",
      value: 454993,
    },
    {
      id: "PAK",
      value: 393509,
    },
    {
      id: "PAN",
      value: 798091,
    },
    {
      id: "PER",
      value: 734649,
    },
    {
      id: "PHL",
      value: 441916,
    },
    {
      id: "PNG",
      value: 286474,
    },
    {
      id: "POL",
      value: 936849,
    },
    {
      id: "PRI",
      value: 312937,
    },
    {
      id: "PRT",
      value: 349819,
    },
    {
      id: "PRY",
      value: 525314,
    },
    {
      id: "QAT",
      value: 493574,
    },
    {
      id: "ROU",
      value: 362323,
    },
    {
      id: "RUS",
      value: 973182,
    },
    {
      id: "RWA",
      value: 666250,
    },
    {
      id: "ESH",
      value: 266759,
    },
    {
      id: "SAU",
      value: 44998,
    },
    {
      id: "SDN",
      value: 966117,
    },
    {
      id: "SDS",
      value: 176117,
    },
    {
      id: "SEN",
      value: 97933,
    },
    {
      id: "SLB",
      value: 824814,
    },
    {
      id: "SLE",
      value: 241761,
    },
    {
      id: "SLV",
      value: 179470,
    },
    {
      id: "ABV",
      value: 803694,
    },
    {
      id: "SOM",
      value: 28353,
    },
    {
      id: "SRB",
      value: 943954,
    },
    {
      id: "SUR",
      value: 411148,
    },
    {
      id: "SVK",
      value: 92763,
    },
    {
      id: "SVN",
      value: 435239,
    },
    {
      id: "SWZ",
      value: 51826,
    },
    {
      id: "SYR",
      value: 395133,
    },
    {
      id: "TCD",
      value: 285002,
    },
    {
      id: "TGO",
      value: 217931,
    },
    {
      id: "THA",
      value: 810639,
    },
    {
      id: "TJK",
      value: 75454,
    },
    {
      id: "TKM",
      value: 717632,
    },
    {
      id: "TLS",
      value: 408503,
    },
    {
      id: "TTO",
      value: 786278,
    },
    {
      id: "TUN",
      value: 669034,
    },
    {
      id: "TUR",
      value: 374822,
    },
    {
      id: "TWN",
      value: 260125,
    },
    {
      id: "TZA",
      value: 346288,
    },
    {
      id: "UGA",
      value: 970454,
    },
    {
      id: "UKR",
      value: 685292,
    },
    {
      id: "URY",
      value: 6609,
    },
    {
      id: "USA",
      value: 69469,
    },
    {
      id: "UZB",
      value: 778330,
    },
    {
      id: "VEN",
      value: 761308,
    },
    {
      id: "VNM",
      value: 772798,
    },
    {
      id: "VUT",
      value: 585581,
    },
    {
      id: "PSE",
      value: 880123,
    },
    {
      id: "YEM",
      value: 222114,
    },
    {
      id: "ZAF",
      value: 272305,
    },
    {
      id: "ZMB",
      value: 517830,
    },
    {
      id: "ZWE",
      value: 933379,
    },
    {
      id: "KOR",
      value: 540526,
    },
  ];

  return (
    <Box p={2} sx={{ width: "70vw", height: "60vh", margin: "auto auto" }}>
      <ResponsiveChoropleth
        data={geoData}
        features={features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.45, 0.65]}
        projectionRotation={[0, 0, 0]}
        //  enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={1}
        borderColor={theme.palette.common.white}
        //  defs={[
        //    {
        //      id: "dots",
        //      type: "patternDots",
        //      background: "inherit",
        //      color: "#38bcb2",
        //      size: 4,
        //      padding: 1,
        //      stagger: true,
        //    },
        //    {
        //      id: "lines",
        //      type: "patternLines",
        //      background: "inherit",
        //      color: "#eed312",
        //      rotation: -45,
        //      lineWidth: 6,
        //      spacing: 10,
        //    },
        //    {
        //      id: "gradient",
        //      type: "linearGradient",
        //      colors: [
        //        {
        //          offset: 0,
        //          color: "#000",
        //        },
        //        {
        //          offset: 100,
        //          color: "inherit",
        //        },
        //      ],
        //    },
        //  ]}
        //  fill={[
        //    {
        //      match: {
        //        id: "CAN",
        //      },
        //      id: "dots",
        //    },
        //    {
        //      match: {
        //        id: "CHN",
        //      },
        //      id: "lines",
        //    },
        //    {
        //      match: {
        //        id: "ATA",
        //      },
        //      id: "gradient",
        //    },
        //  ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemTextColor: "tan",
            itemOpacity: 1,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default GeoPage;

import { Box, useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { features } from "../../world_countries";
