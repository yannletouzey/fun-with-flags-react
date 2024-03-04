const countries = [
  {
    name: "Afghanistan",
    slug: "Afghanistan",
    code: "AF",
    img: "./assets/img/AF.svg",
    capital: "Kaboul",
    population: "38,928,346"
  },
  {
    name: "Angola",
    slug: "Angola",
    code: "AO",
    img: "./assets/img/AO.svg",
    capital: "Luanda",
    population: "32,866,272"
  },
  {
    name: "Albanie",
    slug: "Albania",
    code: "AL",
    img: "./assets/img/AL.svg",
    capital: "Tirana",
    population: "2,877,797"
  },
  {
    name: "Émirats Arabes Unis",
    slug: "Emirats_Arabes_Unis",
    code: "AE",
    img: "./assets/img/AE.svg",
    capital: "Abou Dabi",
    population: "9,890,402"
  },
  {
    name: "Argentine",
    slug: "Argentina",
    code: "AR",
    img: "./assets/img/AR.svg",
    capital: "Buenos Aires",
    population: "45,195,774"
  },
  {
    name: "Armenie",
    slug: "Armenia",
    code: "AM",
    img: "./assets/img/AM.svg",
    capital: "Erevan",
    population: "2,963,243"
  },
  {
    name: "Australie",
    slug: "Australie",
    code: "AU",
    img: "./assets/img/AU.svg",
    capital: "Canberra",
    population: "25,499,884"
  },
  {
    name: "Autriche",
    slug: "Autriche",
    code: "AT",
    img: "./assets/img/AT.svg",
    capital: "Vienne",
    population: "9,006,398"
  },
  {
    name: "Azerbaïdjan",
    slug: "Azerbaidjan",
    code: "AZ",
    img: "./assets/img/AZ.svg",
    capital: "Bakou",
    population: "10,139,177"
  },
  {
    name: "Burundi",
    slug: "Burundi",
    code: "BI",
    img: "./assets/img/BI.svg",
    capital: "Gitega",
    population: "11,890,784"
  },
  {
    name: "Belgique",
    slug: "Belgique",
    code: "BE",
    img: "./assets/img/BE.svg",
    capital: "Bruxelles",
    population: "11,589,623"
  },
  {
    name: "Bénin",
    slug: "Benin",
    code: "BJ",
    img: "./assets/img/BJ.svg",
    capital: "Porto-Novo",
    population: "11,801,151"
  },
  {
    name: "Burkina Faso",
    slug: "burkina_faso",
    code: "BF",
    img: "./assets/img/BF.svg",
    capital: "Ouagadougou",
    population: "20,903,273"
  },
  {
    name: "Bangladesh",
    slug: "Bangladesh",
    code: "BD",
    img: "./assets/img/BD.svg",
    capital: "Dacca",
    population: "164,689,383"
  },
  {
    name: "Bulgarie",
    slug: "Bulgarie",
    code: "BG",
    img: "./assets/img/BG.svg",
    capital: "Sofia",
    population: "6,948,445"
  },
  {
    name: "Bosnie-Herzegovine",
    slug: "Bosnie-Herzegovine",
    code: "BA",
    img: "./assets/img/BA.svg",
    capital: "Sarajevo",
    population: "3,280,819"
  },
  {
    name: "Bielorussie",
    slug: "Bielorussie",
    code: "BY",
    img: "./assets/img/BY.svg",
    capital: "Minsk",
    population: "9,449,323"
  },
  {
    name: "Belize",
    slug: "Belize",
    code: "BZ",
    img: "./assets/img/BZ.svg",
    capital: "Belmopan",
    population: "397,628"
  },
  {
    name: "Bolivie",
    slug: "Bolivie",
    code: "BO",
    img: "./assets/img/BO.svg",
    capital: "La Paz",
    population: "11,673,021"
  },
  {
    name: "Brésil",
    slug: "Bresil",
    code: "BR",
    img: "./assets/img/BR.svg",
    capital: "Brasilia",
    population: "212,559,417"
  },
  {
    name: "Brunei Darussalam",
    slug: "Brunei_Darussalam",
    code: "BN",
    img: "./assets/img/BN.svg",
    capital: "Bandar Seri Begawan",
    population: "437,479"
  },
  {
    name: "Bhoutan",
    slug: "Bhoutan",
    code: "BT",
    img: "./assets/img/BT.svg",
    capital: "Thimphou",
    population: "771,608"
  },
  {
    name: "Botswana",
    slug: "Botswana",
    code: "BW",
    img: "./assets/img/BW.svg",
    capital: "Gaborone",
    population: "2,351,627"
  },
  {
    name: "République Centrafricaine",
    slug: "Republique_centrafricaine",
    code: "CF",
    img: "./assets/img/CF.svg",
    capital: "Bangui",
    population: "4,829,767"
  },
  {
    name: "Canada",
    slug: "Canada",
    code: "CA",
    img: "./assets/img/CA.svg",
    capital: "Ottawa",
    population: "37,794,369"
  },
  {
    name: "Suisse",
    slug: "Suisse",
    code: "CH",
    img: "./assets/img/CH.svg",
    capital: "Berne",
    population: "8,711,022"
  },
  {
    name: "Chine",
    slug: "Chine",
    code: "CN",
    img: "./assets/img/CN.svg",
    capital: "Pékin",
    population: "1,444,216,107"
  },
  {
    name: "Côte d'Ivoire",
    slug: "Côte_d_Ivoire",
    code: "CI",
    img: "./assets/img/CI.svg",
    capital: "Yamoussoukro",
    population: "26,378,274"
  },
  {
    name: "Cameroun",
    slug: "Cameroun",
    code: "CM",
    img: "./assets/img/CM.svg",
    capital: "Yaoundé",
    population: "27,223,077"
  },
  {
    name: "République démocratique du Congo",
    slug: "Republique_democratique_du_Congo",
    code: "CD",
    img: "./assets/img/CD.svg",
    capital: "Kinshasa",
    population: "101,780,263"
  },
  {
    name: "République du Congo",
    slug: "Republique_du_Congo",
    code: "CG",
    img: "./assets/img/CG.svg",
    capital: "Brazzaville",
    population: "5,380,508"
  },
  {
    name: "Colombie",
    slug: "Colombie",
    code: "CO",
    img: "./assets/img/CO.svg",
    capital: "Bogota",
    population: "51,049,498"
  },
  {
    name: "Costa Rica",
    slug: "Costa_Rica",
    code: "CR",
    img: "./assets/img/CR.svg",
    capital: "San José",
    population: "5,139,052"
  },
  {
    name: "Cuba",
    slug: "Cuba",
    code: "CU",
    img: "./assets/img/CU.svg",
    capital: "La Havane",
    population: "11,317,505"
  },
  {
    name: "République Tcheque",
    slug: "Republique_tcheque",
    code: "CZ",
    img: "./assets/img/CZ.svg",
    capital: "Prague",
    population: "10,707,839"
  },
  {
    name: "Allemagne",
    slug: "Allemagne",
    code: "DE",
    img: "./assets/img/DE.svg",
    capital: "Berlin",
    population: "83,190,556"
  },
  {
    name: "Djibouti",
    slug: "Djibouti",
    code: "DJ",
    img: "./assets/img/DJ.svg",
    capital: "Djibouti",
    population: "1,002,184"
  },
  {
    name: "Danemark",
    slug: "Danemark",
    code: "DK",
    img: "./assets/img/DK.svg",
    capital: "Copenhague",
    population: "5,813,298"
  },
  {
    name: "République Dominicaine",
    slug: "Republique_dominicaine",
    code: "DO",
    img: "./assets/img/DO.svg",
    capital: "Saint-Domingue",
    population: "10,847,910"
  },
  {
    name: "Algerie",
    slug: "Algerie",
    code: "DZ",
    img: "./assets/img/DZ.svg",
    capital: "Alger",
    population: "44,616,624"
  },
  {
    name: "Équateur",
    slug: "Equateur",
    code: "EC",
    img: "./assets/img/EC.svg",
    capital: "Quito",
    population: "17,643,054"
  },
  {
    name: "Egypte",
    slug: "Egypte",
    code: "EG",
    img: "./assets/img/EG.svg",
    capital: "Le Caire",
    population: "104,258,327"
  },
  {
    name: "Érythrée",
    slug: "Erythree",
    code: "ER",
    img: "./assets/img/ER.svg",
    capital: "Asmara",
    population: "3,546,421"
  },
  {
    name: "Estonie",
    slug: "Estonie",
    code: "EE",
    img: "./assets/img/EE.svg",
    capital: "Tallinn",
    population: "1,326,535"
  },
  {
    name: "Éthiopie",
    slug: "Ethiopie",
    code: "ET",
    img: "./assets/img/ET.svg",
    capital: "Addis-Abeba",
    population: "117,876,227"
  },
  {
    name: "Finland",
    slug: "Finland",
    code: "FI",
    img: "./assets/img/FI.svg",
    capital: "Helsinki",
    population: "5,545,596"
  },
  {
    name: "Gabon",
    slug: "Gabon",
    code: "GA",
    img: "./assets/img/GA.svg",
    capital: "Libreville",
    population: "2,278,825"
  },
  {
    name: "Royaume-Uni",
    slug: "Royaume-Uni",
    code: "GB",
    img: "./assets/img/GB.svg",
    capital: "Londres",
    population: "68,207,116"
  },
  {
    name: "Georgie",
    slug: "Georgie",
    code: "GE",
    img: "./assets/img/GE.svg",
    capital: "Tbilissi",
    population: "3,989,167"
  },
  {
    name: "Ghana",
    slug: "Ghana",
    code: "GH",
    img: "./assets/img/GH.svg",
    capital: "Accra",
    population: "31,072,940"
  },
  {
    name: "Guinée",
    slug: "Guinee",
    code: "GN",
    img: "./assets/img/GN.svg",
    capital: "Conakry",
    population: "13,228,943"
  },
  {
    name: "Gambie",
    slug: "Gambie",
    code: "GM",
    img: "./assets/img/GM.svg",
    capital: "Banjul",
    population: "2,416,668"
  },
  {
    name: "Guinee-Bissau",
    slug: "Guinee-Bissau",
    code: "GW",
    img: "./assets/img/GW.svg",
    capital: "Bissau",
    population: "2,015,494"
  },
  {
    name: "Guinée Équatoriale",
    slug: "Guinee_equatoriale",
    code: "GQ",
    img: "./assets/img/GQ.svg",
    capital: "Malabo",
    population: "1,454,789"
  },
  {
    name: "Grèce",
    slug: "Grece",
    code: "GR",
    img: "./assets/img/GR.svg",
    capital: "Athènes",
    population: "10,423,054"
  },
  {
    name: "Groenland",
    slug: "Groenland",
    code: "GL",
    img: "./assets/img/GL.svg",
    capital: "Nuuk",
    population: "56,770"
  },
  {
    name: "Guatemala",
    slug: "Guatemala",
    code: "GT",
    img: "./assets/img/GT.svg",
    capital: "Guatemala",
    population: "17,915,568"
  },
  {
    name: "Guyane",
    slug: "Guyane",
    code: "GY",
    img: "./assets/img/GY.svg",
    capital: "Cayenne",
    population: "782,766"
  },
  {
    name: "Honduras",
    slug: "Honduras",
    code: "HN",
    img: "./assets/img/HN.svg",
    capital: "Tegucigalpa",
    population: "10,166,864"
  },
  {
    name: "Croatie",
    slug: "Croatie",
    code: "HR",
    img: "./assets/img/HR.svg",
    capital: "Zagreb",
    population: "4,067,500"
  },
  {
    name: "HaÏti",
    slug: "Haiti",
    code: "HT",
    img: "./assets/img/HT.svg",
    capital: "Port-au-Prince",
    population: "11,402,528"
  },
  {
    name: "Hongrie",
    slug: "Hongrie",
    code: "HU",
    img: "./assets/img/HU.svg",
    capital: "Budapest",
    population: "9,660,351"
  },
  {
    name: "Indonésie",
    slug: "Indonesie",
    code: "code",
    img: "co./assets/img/de.svg",
    capital: "Jakarta",
    population: "273,523,615"
  },
  {
    name: "Inde",
    slug: "Inde",
    code: "IN",
    img: "./assets/img/IN.svg",
    capital: "New Delhi",
    population: "1,366,417,754"
  },
  {
    name: "Ireland",
    slug: "Ireland",
    code: "IE",
    img: "./assets/img/IE.svg",
    capital: "Dublin",
    population: "4,937,786"
  },
  {
    name: "Iran",
    slug: "Iran",
    code: "IR",
    img: "./assets/img/IR.svg",
    capital: "Téhéran",
    population: "83,992,949"
  },
  {
    name: "Iraq",
    slug: "Iraq",
    code: "IQ",
    img: "./assets/img/IQ.svg",
    capital: "Bagdad",
    population: "40,222,493"
  },
  {
    name: "Islande",
    slug: "Islande",
    code: "IS",
    img: "./assets/img/IS.svg",
    capital: "Reykjavik",
    population: "341,243"
  },
  {
    name: "Israël",
    slug: "Israel",
    code: "IL",
    img: "./assets/img/IL.svg",
    capital: "Jérusalem",
    population: "8,655,535"
  },
  {
    name: "Italie",
    slug: "Italie",
    code: "IT",
    img: "./assets/img/IT.svg",
    capital: "Rome",
    population: "60,461,826"
  },
  {
    name: "Jamaïque",
    slug: "Jamaique",
    code: "JM",
    img: "./assets/img/JM.svg",
    capital: "Kingston",
    population: "2,961,167"
  },
  {
    name: "Jordanie",
    slug: "Jordanie",
    code: "JO",
    img: "./assets/img/JO.svg",
    capital: "Amman",
    population: "10,203,134"
  },
  {
    name: "Japon",
    slug: "Japon",
    code: "JP",
    img: "./assets/img/JP.svg",
    capital: "Tokyo",
    population: "126,476,461"
  },
  {
    name: "Kazakhstan",
    slug: "Kazakhstan",
    code: "KZ",
    img: "./assets/img/KZ.svg",
    capital: "Noursoultan",
    population: "18,776,707"
  },
  {
    name: "Kenya",
    slug: "Kenya",
    code: "KE",
    img: "./assets/img/KE.svg",
    capital: "Nairobi",
    population: "53,771,296"
  },
  {
    name: "Kirghizistan",
    slug: "Kirghizistan",
    code: "KG",
    img: "./assets/img/KG.svg",
    capital: "Bichkek",
    population: "6,524,195"
  },
  {
    name: "Cambodge",
    slug: "Cambodge",
    code: "KH",
    img: "./assets/img/KH.svg",
    capital: "Phnom Penh",
    population: "16,718,965"
  },
  {
    name: "Corée du Sud",
    slug: "Coree_du_Sud",
    code: "KR",
    img: "./assets/img/KR.svg",
    capital: "Séoul",
    population: "51,269,185"
  },
  {
    name: "Koweït",
    slug: "Koweit",
    code: "KW",
    img: "./assets/img/KW.svg",
    capital: "Koweït",
    population: "4,270,571"
  },
  {
    name: "Laos",
    slug: "Laos",
    code: "LA",
    img: "./assets/img/LA.svg",
    capital: "Vientiane",
    population: "7,275,560"
  },
  {
    name: "Liban",
    slug: "Liban",
    code: "LB",
    img: "./assets/img/LB.svg",
    capital: "Beyrouth",
    population: "6,825,445"
  },
  {
    name: "Libéria",
    slug: "Liberia",
    code: "LR",
    img: "./assets/img/LR.svg",
    capital: "Monrovia",
    population: "5,057,681"
  },
  {
    name: "Libye",
    slug: "Libye",
    code: "LY",
    img: "./assets/img/LY.svg",
    capital: "Tripoli",
    population: "6,871,292"
  },
  {
    name: "Sri Lanka",
    slug: "Sri_Lanka",
    code: "LK",
    img: "./assets/img/LK.svg",
    capital: "Sri Jayawardenapura Kotte",
    population: "21,413,249"
  },
  {
    name: "Lesotho",
    slug: "Lesotho",
    code: "LS",
    img: "./assets/img/LS.svg",
    capital: "Maseru",
    population: "2,142,249"
  },
  {
    name: "Lithuanie",
    slug: "Lithuanie",
    code: "LT",
    img: "./assets/img/LT.svg",
    capital: "Vilnius",
    population: "2,722,289"
  },
  {
    name: "Luxembourg",
    slug: "Luxembourg",
    code: "LU",
    img: "./assets/img/LU.svg",
    capital: "Luxembourg",
    population: "625,978"
  },
  {
    name: "Lettonie",
    slug: "Lettonie",
    code: "LV",
    img: "./assets/img/LV.svg",
    capital: "Riga",
    population: "1,886,198"
  },
  {
    name: "Maroc",
    slug: "Maroc",
    code: "MA",
    img: "./assets/img/MA.svg",
    capital: "Rabat",
    population: "36,910,560"
  },
  {
    name: "Moldavie",
    slug: "Moldavie",
    code: "MD",
    img: "./assets/img/MD.svg",
    capital: "Chisinau",
    population: "4,033,963"
  },
  {
    name: "Madagascar",
    slug: "Madagascar",
    code: "MG",
    img: "./assets/img/MG.svg",
    capital: "Antananarivo",
    population: "27,691,018"
  },
  {
    name: "Mexique",
    slug: "Mexique",
    code: "MX",
    img: "./assets/img/MX.svg",
    capital: "Mexico",
    population: "128,932,753"
  },
  {
    name: "Macedoine",
    slug: "Macedoine",
    code: "MK",
    img: "./assets/img/MK.svg",
    capital: "Skopje",
    population: "2,083,374"
  },
  {
    name: "Mali",
    slug: "Mali",
    code: "ML",
    img: "./assets/img/ML.svg",
    capital: "Bamako",
    population: "20,250,833"
  },
  {
    name: "Myanmar",
    slug: "Myanmar",
    code: "MM",
    img: "./assets/img/MM.svg",
    capital: "Naypyidaw",
    population: "54,409,800"
  },
  {
    name: "Monténégro",
    slug: "Montenegro",
    code: "ME",
    img: "./assets/img/ME.svg",
    capital: "Podgorica",
    population: "628,066"
  },
  {
    name: "Mongolie",
    slug: "Mongolie",
    code: "MN",
    img: "./assets/img/MN.svg",
    capital: "Oulan-Bator",
    population: "3,278,290"
  },
  {
    name: "Mozambique",
    slug: "Mozambique",
    code: "MZ",
    img: "./assets/img/MZ.svg",
    capital: "Maputo",
    population: "31,255,435"
  },
  {
    name: "Mauritanie",
    slug: "Mauritanie",
    code: "MR",
    img: "./assets/img/MR.svg",
    capital: "Nouakchott",
    population: "4,649,658"
  },
  {
    name: "Malawi",
    slug: "Malawi",
    code: "MW",
    img: "./assets/img/MW.svg",
    capital: "Lilongwe",
    population: "19,129,952"
  },
  {
    name: "Malaysie",
    slug: "Malaysie",
    code: "MY",
    img: "./assets/img/MY.svg",
    capital: "Kuala Lumpur",
    population: "32,365,999"
  },
  {
    name: "Namibie",
    slug: "Namibie",
    code: "NA",
    img: "./assets/img/NA.svg",
    capital: "Windhoek",
    population: "2,540,905"
  },
  {
    name: "Niger",
    slug: "Niger",
    code: "NE",
    img: "./assets/img/NE.svg",
    capital: "Niamey",
    population: "24,206,644"
  },
  {
    name: "Nigeria",
    slug: "Nigeria",
    code: "NG",
    img: "./assets/img/NG.svg",
    capital: "Abuja",
    population: "206,139,587"
  },
  {
    name: "Nicaragua",
    slug: "Nicaragua",
    code: "NI",
    img: "./assets/img/NI.svg",
    capital: "Managua",
    population: "6,624,554"
  },
  {
    name: "Norvège",
    slug: "Norvege",
    code: "NO",
    img: "./assets/img/NO.svg",
    capital: "Oslo",
    population: "5,467,439"
  },
  {
    name: "Nepal",
    slug: "Nepal",
    code: "NP",
    img: "./assets/img/NP.svg",
    capital: "Katmandou",
    population: "29,136,808"
  },
  {
    name: "Oman",
    slug: "Oman",
    code: "OM",
    img: "./assets/img/OM.svg",
    capital: "Mascate",
    population: "5,106,626"
  },
  {
    name: "Pakistan",
    slug: "Pakistan",
    code: "PK",
    img: "./assets/img/PK.svg",
    capital: "Islamabad",
    population: "220,892,331"
  },
  {
    name: "Panama",
    slug: "Panama",
    code: "PA",
    img: "./assets/img/PA.svg",
    capital: "Panama",
    population: "4,314,767"
  },
  {
    name: "Pérou",
    slug: "Perou",
    code: "PE",
    img: "./assets/img/PE.svg",
    capital: "Lima",
    population: "32,971,854"
  },
  {
    name: "Philippines",
    slug: "Philippines",
    code: "PH",
    img: "./assets/img/PH.svg",
    capital: "Manille",
    population: "109,581,078"
  },
  {
    name: "Papouasie-Nouvelle-Guinée",
    slug: "Papouasie-Nouvelle-Guinee",
    code: "PG",
    img: "./assets/img/PG.svg",
    capital: "Port Moresby",
    population: "8,947,024"
  },
  {
    name: "Pologne",
    slug: "Pologne",
    code: "PL",
    img: "./assets/img/PL.svg",
    capital: "Varsovie",
    population: "37,846,611"
  },
  {
    name: "Corée du Nord",
    slug: "Coree_du_Nord",
    code: "KP",
    img: "./assets/img/KP.svg",
    capital: "Pyongyang",
    population: "25,778,816"
  },
  {
    name: "Paraguay",
    slug: "Paraguay",
    code: "PY",
    img: "./assets/img/PY.svg",
    capital: "Asunción",
    population: "7,132,538"
  },
  {
    name: "Palestine",
    slug: "Palestine",
    code: "PS",
    img: "./assets/img/PS.svg",
    capital: "Jérusalem",
    population: "5,101,414"
  },
  {
    name: "Qatar",
    slug: "Qatar",
    code: "QA",
    img: "./assets/img/QA.svg",
    capital: "Doha",
    population: "2,881,053"
  },
  {
    name: "Roumanie",
    slug: "Roumanie",
    code: "RO",
    img: "./assets/img/RO.svg",
    capital: "Bucarest",
    population: "19,196,191"
  },
  {
    name: "Rwanda",
    slug: "Rwanda",
    code: "RW",
    img: "./assets/img/RW.svg",
    capital: "Kigali",
    population: "12,952,218"
  },
  {
    name: "Sahara occidental",
    slug: "Sahara_occidental",
    code: "EH",
    img: "./assets/img/EH.svg",
    capital: "Laayoune",
    population: "597,339"
  },
  {
    name: "Arabie saoudite",
    slug: "Arabie_Saoudite",
    code: "SA",
    img: "./assets/img/SA.svg",
    capital: "Riyad",
    population: "34,813,871"
  },
  {
    name: "Soudan",
    slug: "Soudan",
    code: "SD",
    img: "./assets/img/SD.svg",
    capital: "Khartoum",
    population: "44,909,353"
  },
  {
    name: "Sud-Soudan",
    slug: "Sud-Soudan",
    code: "SS",
    img: "./assets/img/SS.svg",
    capital: "Djouba",
    population: "11,193,725"
  },
  {
    name: "Sénégal",
    slug: "Senegal",
    code: "SN",
    img: "./assets/img/SN.svg",
    capital: "Dakar",
    population: "16,743,927"
  },
  {
    name: "Sierra Leone",
    slug: "Sierra_Leone",
    code: "SL",
    img: "./assets/img/SL.svg",
    capital: "Freetown",
    population: "8,141,343"
  },
  {
    name: "Salvador",
    slug: "Salvador",
    code: "SV",
    img: "./assets/img/SV.svg",
    capital: "San Salvador",
    population: "6,486,205"
  },
  {
    name: "Serbie",
    slug: "Serbie",
    code: "RS",
    img: "./assets/img/RS.svg",
    capital: "Belgrade",
    population: "8,737,371"
  },
  {
    name: "Suriname",
    slug: "Suriname",
    code: "SR",
    img: "./assets/img/SR.svg",
    capital: "Paramaribo",
    population: "586,632"
  },
  {
    name: "Slovaquie",
    slug: "Slovaquie",
    code: "SK",
    img: "./assets/img/SK.svg",
    capital: "Bratislava",
    population: "5,459,642"
  },
  {
    name: "Slovénie",
    slug: "Slovenie",
    code: "SI",
    img: "./assets/img/SI.svg",
    capital: "Ljubljana",
    population: "2,078,654"
  },
  {
    name: "Suède",
    slug: "Suede",
    code: "SE",
    img: "./assets/img/SE.svg",
    capital: "Stockholm",
    population: "10,427,076"
  },
  {
    name: "Eswatini",
    slug: "Eswatini",
    code: "SZ",
    img: "./assets/img/SZ.svg",
    capital: "Mbabane",
    population: "1,160,164"
  },
  {
    name: "Syrie",
    slug: "Syrie",
    code: "SY",
    img: "./assets/img/SY.svg",
    capital: "Damas",
    population: "17,500,658"
  },
  {
    name: "Tchad",
    slug: "Tchad",
    code: "TD",
    img: "./assets/img/TD.svg",
    capital: "N'Djaména",
    population: "16,425,864"
  },
  {
    name: "Togo",
    slug: "Togo",
    code: "TG",
    img: "./assets/img/TG.svg",
    capital: "Lomé",
    population: "8,278,724"
  },
  {
    name: "Thaïlande",
    slug: "Thailande",
    code: "TH",
    img: "./assets/img/TH.svg",
    capital: "Bangkok",
    population: "69,799,978"
  },
  {
    name: "Tadjikistan",
    slug: "Tajikistan",
    code: "TJ",
    img: "./assets/img/TJ.svg",
    capital: "Douchanbé",
    population: "9,537,645"
  },
  {
    name: "Turkménistan",
    slug: "Turkmenistan",
    code: "TM",
    img: "./assets/img/TM.svg",
    capital: "Achgabat",
    population: "6,031,200"
  },
  {
    name: "Timor oriental",
    slug: "Timor-Leste",
    code: "TL",
    img: "./assets/img/TL.svg",
    capital: "Dili",
    population: "1,318,445"
  },
  {
    name: "Tunisie",
    slug: "Tunisie",
    code: "TN",
    img: "./assets/img/TN.svg",
    capital: "Tunis",
    population: "11,818,619"
  },
  {
    name: "Turquie",
    slug: "Turquie",
    code: "TR",
    img: "./assets/img/TR.svg",
    capital: "Ankara",
    population: "84,339,067"
  },
  {
    name: "Taiwan",
    slug: "Taiwan",
    code: "TW",
    img: "./assets/img/TW.svg",
    capital: "Taipei",
    population: "23,816,775"
  },
  {
    name: "Tanzanie",
    slug: "Tanzanie",
    code: "TZ",
    img: "./assets/img/TZ.svg",
    capital: "Dodoma",
    population: "61,498,437"
  },
  {
    name: "Ouganda",
    slug: "Ouganda",
    code: "UG",
    img: "./assets/img/UG.svg",
    capital: "Kampala",
    population: "47,129,856"
  },
  {
    name: "Ukraine",
    slug: "Ukraine",
    code: "UA",
    img: "./assets/img/UA.svg",
    capital: "Kiev",
    population: "41,553,244"
  },
  {
    name: "Uruguay",
    slug: "Uruguay",
    code: "UY",
    img: "./assets/img/UY.svg",
    capital: "Montevideo",
    population: "3,474,182"
  },
  {
    name: "Ouzbékistan",
    slug: "Ouzbekistan",
    code: "UZ",
    img: "./assets/img/UZ.svg",
    capital: "Tachkent",
    population: "33,469,203"
  },
  {
    name: "Venezuela",
    slug: "Venezuela",
    code: "VE",
    img: "./assets/img/VE.svg",
    capital: "Caracas",
    population: "28,435,940"
  },
  {
    name: "Viêt Nam",
    slug: "Viet_Nam",
    code: "VN",
    img: "./assets/img/VN.svg",
    capital: "Hanoï",
    population: "98,385,392"
  },
  {
    name: "Yémen",
    slug: "Yemen",
    code: "YE",
    img: "./assets/img/YE.svg",
    capital: "Sanaa",
    population: "30,491,000"
  },
  {
    name: "Zambie",
    slug: "Zambie",
    code: "ZM",
    img: "./assets/img/ZM.svg",
    capital: "Lusaka",
    population: "18,383,955"
  },
  {
    name: "Zimbabwe",
    slug: "Zimbabwe",
    code: "ZW",
    img: "./assets/img/ZW.svg",
    capital: "Harare",
    population: "15,092,171"
  },
  {
    name: "Somalie",
    slug: "Somalie",
    code: "SO",
    img: "./assets/img/SO.svg",
    capital: "Mogadiscio",
    population: "15,893,222"
  },
  {
    name: "Kosovo",
    slug: "Kosovo",
    code: "XK",
    img: "./assets/img/XK.svg",
    capital: "Pristina",
    population: "1,795,666"
  },
  {
    name: "Afrique du Sud",
    slug: "Afrique_du_Sud",
    code: "ZA",
    img: "./assets/img/ZA.svg",
    capital: "Pretoria",
    population: "60,937,802"
  },
  {
    name: "Nouvelle-Zélande",
    slug: "Nouvelle-Zelande",
    code: "NZ",
    img: "./assets/img/NZ.svg",
    capital: "Wellington",
    population: "4,988,840"
  },
  {
    name: "Chili",
    slug: "Chili",
    code: "CL",
    img: "./assets/img/CL.svg",
    capital: "Santiago",
    population: "19,107,216"
  },
  {
    name: "Pays-Bas",
    slug: "Pays-Bas",
    code: "NL",
    img: "./assets/img/NL.svg",
    capital: "Amsterdam",
    population: "17,134,872"
  },
  {
    name: "Portugal",
    slug: "Portugal",
    code: "PT",
    img: "./assets/img/PT.svg",
    capital: "Lisbonne",
    population: "10,196,709"
  },
  {
    name: "Russie",
    slug: "Russie",
    code: "RU",
    img: "./assets/img/RU.svg",
    capital: "Moscou",
    population: "144,104,080"
  },
  {
    name: "Espagne",
    slug: "Espagne",
    code: "ES",
    img: "./assets/img/ES.svg",
    capital: "Madrid",
    population: "46,733,038"
  },
  {
    name: "France",
    slug: "France",
    code: "FR",
    img: "./assets/img/FR.svg",
    capital: "Paris",
    population: "65,273,511"
  },
  {
    name: "États-Unis",
    slug: "Etats-Unis",
    code: "US",
    img: "./assets/img/US.svg",
    capital: "Washington, D.C.",
    population: "332,915,073"
  },
  {
    name: "Guyane française",
    slug: "Guyane_francaise",
    code: "GF",
    img: "./assets/img/GF.svg",
    capital: "Cayenne",
    population: "306,071"
  },
  {
    name: "Aruba",
    slug: "Aruba",
    code: "AW",
    img: "./assets/img/AW.svg",
    capital: "Oranjestad",
    population: "107,195"
  },
  {
    name: "Anguilla",
    slug: "Anguilla",
    code: "AI",
    img: "./assets/img/AI.svg",
    capital: "The Valley",
    population: "15,094"
  },
  {
    name: "Samoa américaines",
    slug: "Samoa_americaines",
    code: "AS",
    img: "./assets/img/AS.svg",
    capital: "Pago Pago",
    population: "55,191"
  },
  {
    name: "Antigua-et-Barbuda",
    slug: "Antigua-et-Barbuda",
    code: "AG",
    img: "./assets/img/AG.svg",
    capital: "Saint John's",
    population: "98,069"
  },
  {
    name: "Bahreïn",
    slug: "Bahrein",
    code: "BH",
    img: "./assets/img/BH.svg",
    capital: "Manama",
    population: "1,740,799"
  },
  {
    name: "Bahamas",
    slug: "Bahamas",
    code: "BS",
    img: "./assets/img/BS.svg",
    capital: "Nassau",
    population: "399,285"
  },
  {
    name: "Saint-Barthélemy",
    slug: "Saint-Barthelemy",
    code: "BL",
    img: "./assets/img/BL.svg",
    capital: "Gustavia",
    population: "9,858"
  },
  {
    name: "Bermudes",
    slug: "Bermudes",
    code: "BM",
    img: "./assets/img/BM.svg",
    capital: "Hamilton",
    population: "62,273"
  },
  {
    name: "Barbade",
    slug: "Barbade",
    code: "BB",
    img: "./assets/img/BB.svg",
    capital: "Bridgetown",
    population: "287,375"
  },
  {
    name: "Comores",
    slug: "Comores",
    code: "KM",
    img: "./assets/img/KM.svg",
    capital: "Moroni",
    population: "869,601"
  },
  {
    name: "Cap-Vert",
    slug: "Cap-Vert",
    code: "CV",
    img: "./assets/img/CV.svg",
    capital: "Praia",
    population: "555,987"
  },
  {
    name: "Curaçao",
    slug: "Curacao",
    code: "CW",
    img: "./assets/img/CW.svg",
    capital: "Willemstad",
    population: "164,093"
  },
  {
    name: "Îles Caïmans",
    slug: "Iles_Cayman",
    code: "KY",
    img: "./assets/img/KY.svg",
    capital: "George Town",
    population: "68,487"
  },
  {
    name: "Chypre",
    slug: "Chypre",
    code: "CY",
    img: "./assets/img/CY.svg",
    capital: "Nicosie",
    population: "1,219,891"
  },
  {
    name: "Dominique",
    slug: "Dominique",
    code: "DM",
    img: "./assets/img/DM.svg",
    capital: "Roseau",
    population: "72,294"
  },
  {
    name: "Îles Falkland",
    slug: "Iles_Falkland",
    code: "FK",
    img: "./assets/img/FK.svg",
    capital: "Stanley",
    population: "3,497"
  },
  {
    name: "Îles Féroé",
    slug: "Iles_Feroe",
    code: "FO",
    img: "./assets/img/FO.svg",
    capital: "Tórshavn",
    population: "53,883"
  },
  {
    name: "Micronésie",
    slug: "Micronesie",
    code: "FM",
    img: "./assets/img/FM.svg",
    capital: "Palikir",
    population: "116,254"
  },
  {
    name: "Grenade",
    slug: "Grenade",
    code: "GD",
    img: "./assets/img/GD.svg",
    capital: "Saint George's",
    population: "112,003"
  },
  {
    name: "Guam",
    slug: "Guam",
    code: "GU",
    img: "./assets/img/GU.svg",
    capital: "Hagåtña",
    population: "170,179"
  },
  {
    name: "Saint-Christophe-et-Niévès",
    slug: "Saint-Kitts-et-Nevis",
    code: "KN",
    img: "./assets/img/KN.svg",
    capital: "Basseterre",
    population: "53,273"
  },
  {
    name: "Sainte-Lucie",
    slug: "Sainte-Lucie",
    code: "LC",
    img: "./assets/img/LC.svg",
    capital: "Castries",
    population: "184,401"
  },
  {
    name: "Saint-Martin (partie française)",
    slug: "Saint-Martin_(partie_française)",
    code: "MF",
    img: "./assets/img/MF.svg",
    capital: "Marigot",
    population: "38,749"
  },
  {
    name: "Maldives",
    slug: "Maldives",
    code: "MV",
    img: "./assets/img/MV.svg",
    capital: "Malé",
    population: "540,542"
  },
  {
    name: "Îles Marshall",
    slug: "Iles_Marshall",
    code: "MH",
    img: "./assets/img/MH.svg",
    capital: "Majuro",
    population: "58,791"
  },
  {
    name: "Malte",
    slug: "Malte",
    code: "MT",
    img: "./assets/img/MT.svg",
    capital: "La Valette",
    population: "442,784"
  },
  {
    name: "Îles Mariannes du Nord",
    slug: "Iles_Mariannes_du_Nord",
    code: "MP",
    img: "./assets/img/MP.svg",
    capital: "Saipan",
    population: "57,559"
  },
  {
    name: "Montserrat",
    slug: "Montserrat",
    code: "MS",
    img: "./assets/img/MS.svg",
    capital: "Plymouth",
    population: "4,992"
  },
  {
    name: "Maurice",
    slug: "Maurice",
    code: "MU",
    img: "./assets/img/MU.svg",
    capital: "Port-Louis",
    population: "1,262,879"
  },
  {
    name: "Nouvelle Calédonie",
    slug: "Nouvelle-Caledonie",
    code: "NC",
    img: "./assets/img/NC.svg",
    capital: "Nouméa",
    population: "289,000"
  },
  {
    name: "Nauru",
    slug: "Nauru",
    code: "NR",
    img: "./assets/img/NR.svg",
    capital: "Yaren",
    population: "10,824"
  },
  {
    name: "Palau",
    slug: "Palau",
    code: "PW",
    img: "./assets/img/PW.svg",
    capital: "Ngerulmud",
    population: "18,092"
  },
  {
    name: "Puerto Rico",
    slug: "Puerto_Rico",
    code: "PR",
    img: "./assets/img/PR.svg",
    capital: "San Juan",
    population: "2,933,408"
  },
  {
    name: "Polynésie française",
    slug: "Polynesie_française",
    code: "PF",
    img: "./assets/img/PF.svg",
    capital: "Papeete",
    population: "280,908"
  },
  {
    name: "Îles Salomon",
    slug: "Iles_Salomon",
    code: "sb",
    img: "./assets/img/sb.svg",
    capital: "Honiara",
    population: "715,818"
  },
  {
    name: "Sao Tomé-et-Principe",
    slug: "Sao_Tome-et-Principe",
    code: "ST",
    img: "./assets/img/ST.svg",
    capital: "São Tomé",
    population: "222,314"
  },
  {
    name: "Saint-Martin (partie neerlandaise)",
    slug: "Saint-Martin_(partie_neerlandaise)",
    code: "SX",
    img: "./assets/img/SX.svg",
    capital: "Philipsburg",
    population: "40,979"
  },
  {
    name: "Seychelles",
    slug: "Seychelles",
    code: "SC",
    img: "./assets/img/SC.svg",
    capital: "Victoria",
    population: "98,347"
  },
  {
    name: "Îles Turques-et-Caïques",
    slug: "Iles_Turques-et-Caiques",
    code: "TC",
    img: "./assets/img/TC.svg",
    capital: "Cockburn Town",
    population: "38,191"
  },
  {
    name: "Tonga",
    slug: "Tonga",
    code: "TO",
    img: "./assets/img/TO.svg",
    capital: "Nuku'alofa",
    population: "105,695"
  },
  {
    name: "Trinité-et-Tobago",
    slug: "Trinite-et-Tobago",
    code: "TT",
    img: "./assets/img/TT.svg",
    capital: "Port of Spain",
    population: "1,404,035"
  },
  {
    name: "Tuvalu",
    slug: "Tuvalu",
    code: "TV",
    img: "./assets/img/TV.svg",
    capital: "Funafuti",
    population: "11,646"
  },
  {
    name: "Saint-Vincent-et-les-Grenadines",
    slug: "Saint-Vincent-et-les-Grenadines",
    code: "VC",
    img: "./assets/img/VC.svg",
    capital: "Kingstown",
    population: "110,488"
  },
  {
    name: "British Virgin Islands",
    slug: "British_Virgin_Islands",
    code: "VG",
    img: "./assets/img/VG.svg",
    capital: "Road Town",
    population: "30,030"
  },
  {
    name: "Îles Vierges américaines",
    slug: "Iles_Vierges_americaines",
    code: "VI",
    img: "./assets/img/VI.svg",
    capital: "Charlotte Amalie",
    population: "106,631"
  },
  {
    name: "Vanuatu",
    slug: "Vanuatu",
    code: "VU",
    img: "./assets/img/VU.svg",
    capital: "Port Vila",
    population: "314,464"
  },
  {
    name: "Samoa",
    slug: "Samoa",
    code: "WS",
    img: "./assets/img/WS.svg",
    capital: "Apia",
    population: "198,414"
  },
  {
    name: "Pays-Bas",
    slug: "Pays-Bas",
    code: "NL",
    img: "./assets/img/NL.svg",
    capital: "Amsterdam",
    population: "17,141,544"
  },
  {
    name: "Martinique",
    slug: "Martinique",
    code: "MQ",
    img: "./assets/img/MQ.svg",
    capital: "Fort-de-France",
    population: "375,554"
  },
  {
    name: "Îles Canaries",
    slug: "Iles_Canaries",
    code: "ES",
    img: "./assets/img/ES.svg",
    capital: "Las Palmas",
    population: "2,184,649"
  },
  {
    name: "Mayotte",
    slug: "Mayotte",
    code: "YT",
    img: "./assets/img/YT.svg",
    capital: "Mamoudzou",
    population: "287,321"
  },
  {
    name: "Réunion",
    slug: "Reunion",
    code: "RE",
    img: "./assets/img/RE.svg",
    capital: "Saint-Denis",
    population: "903,207"
  },
  {
    name: "Guadeloupe",
    slug: "Guadeloupe",
    code: "GP",
    img: "./assets/img/GP.svg",
    capital: "Basse-Terre",
    population: "395,700"
  },
  {
    name: "Fidji",
    slug: "Fidji",
    code: "FJ",
    img: "./assets/img/FJ.svg",
    capital: "Suva",
    population: "896,445"
  }
];
export default countries