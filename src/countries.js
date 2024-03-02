const countries = [
  {
    name: "Afghanistan",
    code: "AF",
    img: "./assets/img/AF.svg"
  },
  {
    name: "Angola",
    code: "AO",
    img: "./assets/img/AO.svg"
  },
  {
    name: "Albania",
    code: "AL",
    img: "./assets/img/AL.svg"
  },
  {
    name: "emirats_Arabes Unis",
    code: "AE",
    img: "./assets/img/AE.svg"
  },
  {
    name: "Argentina",
    code: "AR",
    img: "./assets/img/AR.svg"
  },
  {
    name: "Armenia",
    code: "AM",
    img: "./assets/img/AM.svg"
  },
  {
    name: "Australie",
    code: "AU",
    img: "./assets/img/AU.svg"
  },
  {
    name: "Autriche",
    code: "AT",
    img: "./assets/img/AT.svg"
  },
  {
    name: "Azerbaïdjan",
    code: "AZ",
    img: "./assets/img/AZ.svg"
  },
  {
    name: "Burundi",
    code: "BI",
    img: "./assets/img/BI.svg"
  },
  {
    name: "Belgique",
    code: "BE",
    img: "./assets/img/BE.svg"
  },
  {
    name: "Benin",
    code: "BJ",
    img: "./assets/img/BJ.svg"
  },
  {
    name: "Burkina Faso",
    code: "BF",
    img: "./assets/img/BF.svg"
  },
  {
    name: "Bangladesh",
    code: "BD",
    img: "./assets/img/BD.svg"
  },
  {
    name: "Bulgarie",
    code: "BG",
    img: "./assets/img/BG.svg"
  },
  {
    name: "Bosnie-Herzegovine",
    code: "BA",
    img: "./assets/img/BA.svg"
  },
  {
    name: "Bielorussie",
    code: "BY",
    img: "./assets/img/BY.svg"
  },
  {
    name: "Belize",
    code: "BZ",
    img: "./assets/img/BZ.svg"
  },
  {
    name: "Bolivie",
    code: "BO",
    img: "./assets/img/BO.svg"
  },
  {
    name: "Bresil",
    code: "BR",
    img: "./assets/img/BR.svg"
  },
  {
    name: "Brunei_Darussalam",
    code: "BN",
    img: "./assets/img/BN.svg"
  },
  {
    name: "Bhoutan",
    code: "BT",
    img: "./assets/img/BT.svg"
  },
  {
    name: "Botswana",
    code: "BW",
    img: "./assets/img/BW.svg"
  },
  {
    name: "Republique_centrafricaine",
    code: "CF",
    img: "./assets/img/CF.svg"
  },
  {
    name: "Canada",
    code: "CA",
    img: "./assets/img/CA.svg"
  },
  {
    name: "Suisse",
    code: "CH",
    img: "./assets/img/CH.svg"
  },
  {
    name: "Chine",
    code: "CN",
    img: "./assets/img/CN.svg"
  },
  {
    name: "Côte_d_Ivoire",
    code: "CI",
    img: "./assets/img/CI.svg"
  },
  {
    name: "Cameroun",
    code: "CM",
    img: "./assets/img/CM.svg"
  },
  {
    name: "Republique_democratique du Congo",
    code: "CD",
    img: "./assets/img/CD.svg"
  },
  {
    name: "Republique_du_Congo",
    code: "CG",
    img: "./assets/img/CG.svg"
  },
  {
    name: "Colombie",
    code: "CO",
    img: "./assets/img/CO.svg"
  },
  {
    name: "Costa_Rica",
    code: "CR",
    img: "./assets/img/CR.svg"
  },
  {
    name: "Cuba",
    code: "CU",
    img: "./assets/img/CU.svg"
  },
  {
    name: "Republique_tcheque",
    code: "CZ",
    img: "./assets/img/CZ.svg"
  },
  {
    name: "Allemagne",
    code: "DE",
    img: "./assets/img/DE.svg"
  },
  {
    name: "Djibouti",
    code: "DJ",
    img: "./assets/img/DJ.svg"
  },
  {
    name: "Danemark",
    code: "DK",
    img: "./assets/img/DK.svg"
  },
  {
    name: "Republique_dominicaine",
    code: "DO",
    img: "./assets/img/DO.svg"
  },
  {
    name: "Algerie",
    code: "DZ",
    img: "./assets/img/DZ.svg"
  },
  {
    name: "equateur",
    code: "EC",
    img: "./assets/img/EC.svg"
  },
  {
    name: "egypte",
    code: "EG",
    img: "./assets/img/EG.svg"
  },
  {
    name: "erythree",
    code: "ER",
    img: "./assets/img/ER.svg"
  },
  {
    name: "Estonie",
    code: "EE",
    img: "./assets/img/EE.svg"
  },
  {
    name: "Ethiopie",
    code: "ET",
    img: "./assets/img/ET.svg"
  },
  {
    name: "Finland",
    code: "FI",
    img: "./assets/img/FI.svg"
  },
  {
    name: "gabon",
    code: "GA",
    img: "./assets/img/GA.svg"
  },
  {
    name: "Royaume-Uni",
    code: "GB",
    img: "./assets/img/GB.svg"
  },
  {
    name: "Georgie",
    code: "GE",
    img: "./assets/img/GE.svg"
  },
  {
    name: "Ghana",
    code: "GH",
    img: "./assets/img/GH.svg"
  },
  {
    name: "Guinee",
    code: "GN",
    img: "./assets/img/GN.svg"
  },
  {
    name: "Gambie",
    code: "GM",
    img: "./assets/img/GM.svg"
  },
  {
    name: "Guinee-Bissau",
    code: "GW",
    img: "./assets/img/GW.svg"
  },
  {
    name: "Guinee_equatoriale",
    code: "GQ",
    img: "./assets/img/GQ.svg"
  },
  {
    name: "Grece",
    code: "GR",
    img: "./assets/img/GR.svg"
  },
  {
    name: "Groenland",
    code: "GL",
    img: "./assets/img/GL.svg"
  },
  {
    name: "Guatemala",
    code: "GT",
    img: "./assets/img/GT.svg"
  },
  {
    name: "Guyane",
    code: "GY",
    img: "./assets/img/GY.svg"
  },
  {
    name: "Honduras",
    code: "HN",
    img: "./assets/img/HN.svg"
  },
  {
    name: "Croatie",
    code: "HR",
    img: "./assets/img/HR.svg"
  },
  {
    name: "Haiti",
    code: "HT",
    img: "./assets/img/HT.svg"
  },
  {
    name: "Hongrie",
    code: "HU",
    img: "./assets/img/HU.svg"
  },
  {
    name: "Indonesie",
    code: "code",
    img: "co./assets/img/de.svg"
  },
  {
    name: "Inde",
    code: "IN",
    img: "./assets/img/IN.svg"
  },
  {
    name: "Ireland",
    code: "IE",
    img: "./assets/img/IE.svg"
  },
  {
    name: "Iran",
    code: "IR",
    img: "./assets/img/IR.svg"
  },
  {
    name: "Iraq",
    code: "IQ",
    img: "./assets/img/IQ.svg"
  },
  {
    name: "Islande",
    code: "IS",
    img: "./assets/img/IS.svg"
  },
  {
    name: "Israel",
    code: "IL",
    img: "./assets/img/IL.svg"
  },
  {
    name: "Italie",
    code: "IT",
    img: "./assets/img/IT.svg"
  },
  {
    name: "Jamaïque",
    code: "JM",
    img: "./assets/img/JM.svg"
  },
  {
    name: "Jordanie",
    code: "JO",
    img: "./assets/img/JO.svg"
  },
  {
    name: "Japon",
    code: "JP",
    img: "./assets/img/JP.svg"
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    img: "./assets/img/KZ.svg"
  },
  {
    name: "Kenya",
    code: "KE",
    img: "./assets/img/KE.svg"
  },
  {
    name: "Kirghizistan",
    code: "KG",
    img: "./assets/img/KG.svg"
  },
  {
    name: "Cambodge",
    code: "KH",
    img: "./assets/img/KH.svg"
  },
  {
    name: "Coree_du_Sud",
    code: "KR",
    img: "./assets/img/KR.svg"
  },
  {
    name: "Koweït",
    code: "KW",
    img: "./assets/img/KW.svg"
  },
  {
    name: "Laos",
    code: "LA",
    img: "./assets/img/LA.svg"
  },
  {
    name: "Liban",
    code: "LB",
    img: "./assets/img/LB.svg"
  },
  {
    name: "Liberia",
    code: "LR",
    img: "./assets/img/LR.svg"
  },
  {
    name: "Libye",
    code: "LY",
    img: "./assets/img/LY.svg"
  },
  {
    name: "Sri Lanka",
    code: "LK",
    img: "./assets/img/LK.svg"
  },
  {
    name: "Lesotho",
    code: "LS",
    img: "./assets/img/LS.svg"
  },
  {
    name: "Lithuanie",
    code: "LT",
    img: "./assets/img/LT.svg"
  },
  {
    name: "Luxembourg",
    code: "LU",
    img: "./assets/img/LU.svg"
  },
  {
    name: "Lettonie",
    code: "LV",
    img: "./assets/img/LV.svg"
  },
  {
    name: "Maroc",
    code: "MA",
    img: "./assets/img/MA.svg"
  },
  {
    name: "Moldavie",
    code: "MD",
    img: "./assets/img/MD.svg"
  },
  {
    name: "Madagascar",
    code: "MG",
    img: "./assets/img/MG.svg"
  },
  {
    name: "Mexique",
    code: "MX",
    img: "./assets/img/MX.svg"
  },
  {
    name: "Macedoine",
    code: "MK",
    img: "./assets/img/MK.svg"
  },
  {
    name: "Mali",
    code: "ML",
    img: "./assets/img/ML.svg"
  },
  {
    name: "Myanmar",
    code: "MM",
    img: "./assets/img/MM.svg"
  },
  {
    name: "Montenegro",
    code: "ME",
    img: "./assets/img/ME.svg"
  },
  {
    name: "Mongolie",
    code: "MN",
    img: "./assets/img/MN.svg"
  },
  {
    name: "Mozambique",
    code: "MZ",
    img: "./assets/img/MZ.svg"
  },
  {
    name: "Mauritanie",
    code: "MR",
    img: "./assets/img/MR.svg"
  },
  {
    name: "Malawi",
    code: "MW",
    img: "./assets/img/MW.svg"
  },
  {
    name: "Malaysie",
    code: "MY",
    img: "./assets/img/MY.svg"
  },
  {
    name: "Namibie",
    code: "NA",
    img: "./assets/img/NA.svg"
  },
  {
    name: "Niger",
    code: "NE",
    img: "./assets/img/NE.svg"
  },
  {
    name: "Nigeria",
    code: "NG",
    img: "./assets/img/NG.svg"
  },
  {
    name: "Nicaragua",
    code: "NI",
    img: "./assets/img/NI.svg"
  },
  {
    name: "Norvege",
    code: "NO",
    img: "./assets/img/NO.svg"
  },
  {
    name: "Nepal",
    code: "NP",
    img: "./assets/img/NP.svg"
  },
  {
    name: "Oman",
    code: "OM",
    img: "./assets/img/OM.svg"
  },
  {
    name: "Pakistan",
    code: "PK",
    img: "./assets/img/PK.svg"
  },
  {
    name: "Panama",
    code: "PA",
    img: "./assets/img/PA.svg"
  },
  {
    name: "Perou",
    code: "PE",
    img: "./assets/img/PE.svg"
  },
  {
    name: "Philippines",
    code: "PH",
    img: "./assets/img/PH.svg"
  },
  {
    name: "Papouasie-Nouvelle-Guinee",
    code: "PG",
    img: "./assets/img/PG.svg"
  },
  {
    name: "Pologne",
    code: "PL",
    img: "./assets/img/PL.svg"
  },
  {
    name: "Coree_du_Nord",
    code: "KP",
    img: "./assets/img/KP.svg"
  },
  {
    name: "Paraguay",
    code: "PY",
    img: "./assets/img/PY.svg"
  },
  {
    name: "Palestine",
    code: "PS",
    img: "./assets/img/PS.svg"
  },
  {
    name: "Qatar",
    code: "QA",
    img: "./assets/img/QA.svg"
  },
  {
    name: "Romanie",
    code: "RO",
    img: "./assets/img/RO.svg"
  },
  {
    name: "Rwanda",
    code: "RW",
    img: "./assets/img/RW.svg"
  },
  {
    name: "Sahara occcodeental",
    code: "EH",
    img: "./assets/img/EH.svg"
  },
  {
    name: "Arabie_Saoudite",
    code: "SA",
    img: "./assets/img/SA.svg"
  },
  {
    name: "Soudan",
    code: "SD",
    img: "./assets/img/SD.svg"
  },
  {
    name: "Sud-Soudan",
    code: "SS",
    img: "./assets/img/SS.svg"
  },
  {
    name: "Senegal",
    code: "SN",
    img: "./assets/img/SN.svg"
  },
  {
    name: "Sierra_Leone",
    code: "SL",
    img: "./assets/img/SL.svg"
  },
  {
    name: "Salvador",
    code: "SV",
    img: "./assets/img/SV.svg"
  },
  {
    name: "Serbie",
    code: "RS",
    img: "./assets/img/RS.svg"
  },
  {
    name: "Suriname",
    code: "SR",
    img: "./assets/img/SR.svg"
  },
  {
    name: "Slovaquie",
    code: "SK",
    img: "./assets/img/SK.svg"
  },
  {
    name: "Slovenie",
    code: "SI",
    img: "./assets/img/SI.svg"
  },
  {
    name: "Suede",
    code: "SE",
    img: "./assets/img/SE.svg"
  },
  {
    name: "Eswatini",
    code: "SZ",
    img: "./assets/img/SZ.svg"
  },
  {
    name: "Syrie",
    code: "SY",
    img: "./assets/img/SY.svg"
  },
  {
    name: "Tchad",
    code: "TD",
    img: "./assets/img/TD.svg"
  },
  {
    name: "Togo",
    code: "TG",
    img: "./assets/img/TG.svg"
  },
  {
    name: "Thailande",
    code: "TH",
    img: "./assets/img/TH.svg"
  },
  {
    name: "Tajikistan",
    code: "TJ",
    img: "./assets/img/TJ.svg"
  },
  {
    name: "Turkmenistan",
    code: "TM",
    img: "./assets/img/TM.svg"
  },
  {
    name: "Timor-Leste",
    code: "TL",
    img: "./assets/img/TL.svg"
  },
  {
    name: "Tunisie",
    code: "TN",
    img: "./assets/img/TN.svg"
  },
  {
    name: "Turquie",
    code: "TR",
    img: "./assets/img/TR.svg"
  },
  {
    name: "Taiwan",
    code: "TW",
    img: "./assets/img/TW.svg"
  },
  {
    name: "Tanzanie",
    code: "TZ",
    img: "./assets/img/TZ.svg"
  },
  {
    name: "Ouganda",
    code: "UG",
    img: "./assets/img/UG.svg"
  },
  {
    name: "Ukraine",
    code: "UA",
    img: "./assets/img/UA.svg"
  },
  {
    name: "Uruguay",
    code: "UY",
    img: "./assets/img/UY.svg"
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    img: "./assets/img/UZ.svg"
  },
  {
    name: "Venezuela",
    code: "VE",
    img: "./assets/img/VE.svg"
  },
  {
    name: "Viet_Nam",
    code: "VN",
    img: "./assets/img/VN.svg"
  },
  {
    name: "Yemen",
    code: "YE",
    img: "./assets/img/YE.svg"
  },
  {
    name: "Zambie",
    code: "ZM",
    img: "./assets/img/ZM.svg"
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    img: "./assets/img/ZW.svg"
  },
  {
    name: "Somalie",
    code: "SO",
    img: "./assets/img/SO.svg"
  },
  {
    name: "Kosovo",
    code: "XK",
    img: "./assets/img/XK.svg"
  },
  {
    name: "Afrique_du_Sud",
    code: "ZA",
    img: "./assets/img/ZA.svg"
  },
  {
    name: "Nouvelle-Zelande",
    code: "NZ",
    img: "./assets/img/NZ.svg"
  },
  {
    name: "Chili",
    code: "CL",
    img: "./assets/img/CL.svg"
  },
  {
    name: "Pays-Bas",
    code: "NL",
    img: "./assets/img/NL.svg"
  },
  {
    name: "Portugal",
    code: "PT",
    img: "./assets/img/PT.svg"
  },
  {
    name: "Russie",
    code: "RU",
    img: "./assets/img/RU.svg"
  },
  {
    name: "Espagne",
    code: "ES",
    img: "./assets/img/ES.svg"
  },
  {
    name: "France",
    code: "FR",
    img: "./assets/img/FR.svg"
  },
  {
    name: "etats-Unis",
    code: "US",
    img: "./assets/img/US.svg"
  },
  {
    name: "Guyane_française",
    code: "GF",
    img: "./assets/img/GF.svg"
  },
  {
    name: "Aruba",
    code: "AW",
    img: "./assets/img/AW.svg"
  },
  {
    name: "Anguilla",
    code: "AI",
    img: "./assets/img/AI.svg"
  },
  {
    name: "Samoa_americaines",
    code: "AS",
    img: "./assets/img/AS.svg"
  },
  {
    name: "Antigua-et-Barbuda",
    code: "AG",
    img: "./assets/img/AG.svg"
  },
  {
    name: "Bahreïn",
    code: "BH",
    img: "./assets/img/BH.svg"
  },
  {
    name: "Bahamas",
    code: "BS",
    img: "./assets/img/BS.svg"
  },
  {
    name: "Saint-Barthelemy",
    code: "BL",
    img: "./assets/img/BL.svg"
  },
  {
    name: "Bermudes",
    code: "BM",
    img: "./assets/img/BM.svg"
  },
  {
    name: "Barbade",
    code: "BB",
    img: "./assets/img/BB.svg"
  },
  {
    name: "Comores",
    code: "KM",
    img: "./assets/img/KM.svg"
  },
  {
    name: "Cap-Vert",
    code: "CV",
    img: "./assets/img/CV.svg"
  },
  {
    name: "Curaçao",
    code: "CW",
    img: "./assets/img/CW.svg"
  },
  {
    name: "Iles_Cayman",
    code: "KY",
    img: "./assets/img/KY.svg"
  },
  {
    name: "Chypre",
    code: "CY",
    img: "./assets/img/CY.svg"
  },
  {
    name: "Dominique",
    code: "DM",
    img: "./assets/img/DM.svg"
  },
  {
    name: "Iles_Falkland",
    code: "FK",
    img: "./assets/img/FK.svg"
  },
  {
    name: "Iles_Feroe",
    code: "FO",
    img: "./assets/img/FO.svg"
  },
  {
    name: "Micronesie",
    code: "FM",
    img: "./assets/img/FM.svg"
  },
  {
    name: "Grenade",
    code: "GD",
    img: "./assets/img/GD.svg"
  },
  {
    name: "Guam",
    code: "GU",
    img: "./assets/img/GU.svg"
  },
  {
    name: "Saint-Kitts-et-Nevis",
    code: "KN",
    img: "./assets/img/KN.svg"
  },
  {
    name: "Sainte-Lucie",
    code: "LC",
    img: "./assets/img/LC.svg"
  },
  {
    name: "Saint-Martin_(partie_française)",
    code: "MF",
    img: "./assets/img/MF.svg"
  },
  {
    name: "Maldives",
    code: "MV",
    img: "./assets/img/MV.svg"
  },
  {
    name: "Iles_Marshall",
    code: "MH",
    img: "./assets/img/MH.svg"
  },
  {
    name: "Malte",
    code: "MT",
    img: "./assets/img/MT.svg"
  },
  {
    name: "Iles_Mariannes_du_Nord",
    code: "MP",
    img: "./assets/img/MP.svg"
  },
  {
    name: "Montserrat",
    code: "MS",
    img: "./assets/img/MS.svg"
  },
  {
    name: "Maurice",
    code: "MU",
    img: "./assets/img/MU.svg"
  },
  {
    name: "Nouvelle-Caledonie",
    code: "NC",
    img: "./assets/img/NC.svg"
  },
  {
    name: "Nauru",
    code: "NR",
    img: "./assets/img/NR.svg"
  },
  {
    name: "Palau",
    code: "PW",
    img: "./assets/img/PW.svg"
  },
  {
    name: "Puerto Rico",
    code: "PR",
    img: "./assets/img/PR.svg"
  },
  {
    name: "Polynesie française",
    code: "PF",
    img: "./assets/img/PF.svg"
  },
  {
    name: "Iles_Salomon",
    code: "sb",
    img: "./assets/img/sb.svg"
  },
  {
    name: "Sao_Tome-et-Principe",
    code: "ST",
    img: "./assets/img/ST.svg"
  },
  {
    name: "Saint-Martin_(partie_neerlandaise)",
    code: "SX",
    img: "./assets/img/SX.svg"
  },
  {
    name: "Seychelles",
    code: "SC",
    img: "./assets/img/SC.svg"
  },
  {
    name: "Iles_Turques-et-Caïques",
    code: "TC",
    img: "./assets/img/TC.svg"
  },
  {
    name: "Tonga",
    code: "TO",
    img: "./assets/img/TO.svg"
  },
  {
    name: "Trinite-et-Tobago",
    code: "TT",
    img: "./assets/img/TT.svg"
  },
  {
    name: "Tuvalu",
    code: "TV",
    img: "./assets/img/TV.svg"
  },
  {
    name: "Saint-Vincent-et-les-Grenadines",
    code: "VC",
    img: "./assets/img/VC.svg"
  },
  {
    name: "British_Virgin_Islands",
    code: "VG",
    img: "./assets/img/VG.svg"
  },
  {
    name: "Iles_Vierges_americaines",
    code: "VI",
    img: "./assets/img/VI.svg"
  },
  {
    name: "Vanuatu",
    code: "VU",
    img: "./assets/img/VU.svg"
  },
  {
    name: "Samoa",
    code: "WS",
    img: "./assets/img/WS.svg"
  },
  {
    name: "Pays-Bas",
    code: "NL",
    img: "./assets/img/NL.svg"
  },
  {
    name: "Martinique",
    code: "MQ",
    img: "./assets/img/MQ.svg"
  },
  {
    name: "Iles Canaries",
    code: "ES",
    img: "./assets/img/ES.svg"
  },
  {
    name: "Mayotte",
    code: "YT",
    img: "./assets/img/YT.svg"
  },
  {
    name: "Reunion",
    code: "RE",
    img: "./assets/img/RE.svg"
  },
  {
    name: "Guadeloupe",
    code: "GP",
    img: "./assets/img/GP.svg"
  },
  {
    name: "Fcodeji",
    code: "FJ",
    img: "./assets/img/FJ.svg"
  }
];
export default countries