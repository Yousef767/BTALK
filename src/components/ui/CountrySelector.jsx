"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Input2 from "../pages/login/Input2";
const countriesData = [
  {
    value: "ad",
    label: "Andorra",
    prefix: "+376",
    flag: "🇦🇩",
  },
  {
    value: "ae",
    label: "United Arab Emirates",
    prefix: "+971",
    flag: "🇦🇪",
  },
  {
    value: "af",
    label: "Afghanistan",
    prefix: "+93",
    flag: "🇦🇫",
  },
  {
    value: "ag",
    label: "Antigua and Barbuda",
    prefix: "+1268",
    flag: "🇦🇬",
  },
  {
    value: "ai",
    label: "Anguilla",
    prefix: "+1264",
    flag: "🇦🇮",
  },
  {
    value: "al",
    label: "Albania",
    prefix: "+355",
    flag: "🇦🇱",
  },
  {
    value: "am",
    label: "Armenia",
    prefix: "+374",
    flag: "🇦🇲",
  },
  {
    value: "ao",
    label: "Angola",
    prefix: "+244",
    flag: "🇦🇴",
  },
  {
    value: "aq",
    label: "Antarctica",
    prefix: "+672",
    flag: "🇦🇶",
  },
  {
    value: "ar",
    label: "Argentina",
    prefix: "+54",
    flag: "🇦🇷",
  },
  {
    value: "as",
    label: "American Samoa",
    prefix: "+1684",
    flag: "🇦🇸",
  },
  {
    value: "at",
    label: "Austria",
    prefix: "+43",
    flag: "🇦🇹",
  },
  {
    value: "au",
    label: "Australia",
    prefix: "+61",
    flag: "🇦🇺",
  },
  {
    value: "aw",
    label: "Aruba",
    prefix: "+297",
    flag: "🇦🇼",
  },
  {
    value: "az",
    label: "Azerbaijan",
    prefix: "+994",
    flag: "🇦🇿",
  },
  {
    value: "ba",
    label: "Bosnia and Herzegovina",
    prefix: "+387",
    flag: "🇧🇦",
  },
  {
    value: "bb",
    label: "Barbados",
    prefix: "+1246",
    flag: "🇧🇧",
  },
  {
    value: "bd",
    label: "Bangladesh",
    prefix: "+880",
    flag: "🇧🇩",
  },
  {
    value: "be",
    label: "Belgium",
    prefix: "+32",
    flag: "🇧🇪",
  },
  {
    value: "bf",
    label: "Burkina Faso",
    prefix: "+226",
    flag: "🇧🇫",
  },
  {
    value: "bg",
    label: "Bulgaria",
    prefix: "+359",
    flag: "🇧🇬",
  },
  {
    value: "bh",
    label: "Bahrain",
    prefix: "+973",
    flag: "🇧🇭",
  },
  {
    value: "bi",
    label: "Burundi",
    prefix: "+257",
    flag: "🇧🇮",
  },
  {
    value: "bj",
    label: "Benin",
    prefix: "+229",
    flag: "🇧🇯",
  },

  {
    value: "bm",
    label: "Bermuda",
    prefix: "+1441",
    flag: "🇧🇲",
  },
  {
    value: "bn",
    label: "Brunei",
    prefix: "+673",
    flag: "🇧🇳",
  },
  {
    value: "bo",
    label: "Bolivia",
    prefix: "+591",
    flag: "🇧🇴",
  },

  {
    value: "br",
    label: "Brazil",
    prefix: "+55",
    flag: "🇧🇷",
  },
  {
    value: "bs",
    label: "Bahamas",
    prefix: "+1242",
    flag: "🇧🇸",
  },
  {
    value: "bt",
    label: "Bhutan",
    prefix: "+975",
    flag: "🇧🇹",
  },
  {
    value: "bv",
    label: "Bouvet Island",
    prefix: "+47",
    flag: "🇧🇻",
  },
  {
    value: "bw",
    label: "Botswana",
    prefix: "+267",
    flag: "🇧🇼",
  },
  {
    value: "by",
    label: "Belarus",
    prefix: "+375",
    flag: "🇧🇾",
  },
  {
    value: "bz",
    label: "Belize",
    prefix: "+501",
    flag: "🇧🇿",
  },
  {
    value: "ca",
    label: "Canada",
    prefix: "+1",
    flag: "🇨🇦",
  },
  {
    value: "cc",
    label: "Cocos (Keeling) Islands",
    prefix: "+61",
    flag: "🇨🇨",
  },

  {
    value: "cf",
    label: "Central African Republic",
    prefix: "+236",
    flag: "🇨🇫",
  },
  {
    value: "cg",
    label: "Republic of the Congo",
    prefix: "+242",
    flag: "🇨🇬",
  },
  {
    value: "ch",
    label: "Switzerland",
    prefix: "+41",
    flag: "🇨🇭",
  },

  {
    value: "ck",
    label: "Cook Islands",
    prefix: "+682",
    flag: "🇨🇰",
  },
  {
    value: "cl",
    label: "Chile",
    prefix: "+56",
    flag: "🇨🇱",
  },
  {
    value: "cm",
    label: "Cameroon",
    prefix: "+237",
    flag: "🇨🇲",
  },
  {
    value: "cn",
    label: "China",
    prefix: "+86",
    flag: "🇨🇳",
  },
  {
    value: "co",
    label: "Colombia",
    prefix: "+57",
    flag: "🇨🇴",
  },
  {
    value: "cr",
    label: "Costa Rica",
    prefix: "+506",
    flag: "🇨🇷",
  },
  {
    value: "cu",
    label: "Cuba",
    prefix: "+53",
    flag: "🇨🇺",
  },
  {
    value: "cv",
    label: "Cape Verde",
    prefix: "+238",
    flag: "🇨🇻",
  },

  {
    value: "cx",
    label: "Christmas Island",
    prefix: "+61",
    flag: "🇨🇽",
  },
  {
    value: "cy",
    label: "Cyprus",
    prefix: "+357",
    flag: "🇨🇾",
  },

  {
    value: "de",
    label: "Germany",
    prefix: "+49",
    flag: "🇩🇪",
  },
  {
    value: "dj",
    label: "Djibouti",
    prefix: "+253",
    flag: "🇩🇯",
  },
  {
    value: "dk",
    label: "Denmark",
    prefix: "+45",
    flag: "🇩🇰",
  },
  {
    value: "dm",
    label: "Dominica",
    prefix: "+1767",
    flag: "🇩🇲",
  },
  {
    value: "do",
    label: "Dominican Republic",
    prefix: "+1809",
    flag: "🇩🇴",
  },
  {
    value: "dz",
    label: "Algeria",
    prefix: "+213",
    flag: "🇩🇿",
  },
  {
    value: "ec",
    label: "Ecuador",
    prefix: "+593",
    flag: "🇪🇨",
  },
  {
    value: "ee",
    label: "Estonia",
    prefix: "+372",
    flag: "🇪🇪",
  },
  {
    value: "eg",
    label: "Egypt",
    prefix: "+20",
    flag: "🇪🇬",
  },
  {
    value: "eh",
    label: "Western Sahara",
    prefix: "+212",
    flag: "🇪🇭",
  },
  {
    value: "er",
    label: "Eritrea",
    prefix: "+291",
    flag: "🇪🇷",
  },
  {
    value: "es",
    label: "Spain",
    prefix: "+34",
    flag: "🇪🇸",
  },
  {
    value: "et",
    label: "Ethiopia",
    prefix: "+251",
    flag: "🇪🇹",
  },
  {
    value: "fi",
    label: "Finland",
    prefix: "+358",
    flag: "🇫🇮",
  },
  {
    value: "fj",
    label: "Fiji",
    prefix: "+679",
    flag: "🇫🇯",
  },
  {
    value: "fk",
    label: "Falkland Islands",
    prefix: "+500",
    flag: "🇫🇰",
  },
  {
    value: "fm",
    label: "Micronesia",
    prefix: "+691",
    flag: "🇫🇲",
  },
  {
    value: "fo",
    label: "Faroe Islands",
    prefix: "+298",
    flag: "🇫🇴",
  },
  {
    value: "fr",
    label: "France",
    prefix: "+33",
    flag: "🇫🇷",
  },
  {
    value: "ga",
    label: "Gabon",
    prefix: "+241",
    flag: "🇬🇦",
  },
  {
    value: "gb",
    label: "United Kingdom",
    prefix: "+44",
    flag: "🇬🇧",
  },
  {
    value: "gd",
    label: "Grenada",
    prefix: "+1473",
    flag: "🇬🇩",
  },
  {
    value: "ge",
    label: "Georgia",
    prefix: "+995",
    flag: "🇬🇪",
  },
  {
    value: "gf",
    label: "French Guiana",
    prefix: "+594",
    flag: "🇬🇫",
  },
  {
    value: "gg",
    label: "Guernsey",
    prefix: "+44",
    flag: "🇬🇬",
  },
  {
    value: "gh",
    label: "Ghana",
    prefix: "+233",
    flag: "🇬🇭",
  },
  {
    value: "gi",
    label: "Gibraltar",
    prefix: "+350",
    flag: "🇬🇮",
  },
  {
    value: "gl",
    label: "Greenland",
    prefix: "+299",
    flag: "🇬🇱",
  },
  {
    value: "gm",
    label: "Gambia",
    prefix: "+220",
    flag: "🇬🇲",
  },
  {
    value: "gn",
    label: "Guinea",
    prefix: "+224",
    flag: "🇬🇳",
  },
  {
    value: "gp",
    label: "Guadeloupe",
    prefix: "+590",
    flag: "🇬🇵",
  },
  {
    value: "gq",
    label: "Equatorial Guinea",
    prefix: "+240",
    flag: "🇬🇶",
  },
  {
    value: "gr",
    label: "Greece",
    prefix: "+30",
    flag: "🇬🇷",
  },

  {
    value: "gt",
    label: "Guatemala",
    prefix: "+502",
    flag: "🇬🇹",
  },
  {
    value: "gu",
    label: "Guam",
    prefix: "+1671",
    flag: "🇬🇺",
  },
  {
    value: "gw",
    label: "Guinea-Bissau",
    prefix: "+245",
    flag: "🇬🇼",
  },
  {
    value: "gy",
    label: "Guyana",
    prefix: "+592",
    flag: "🇬🇾",
  },
  {
    value: "hk",
    label: "Hong Kong",
    prefix: "+852",
    flag: "🇭🇰",
  },

  {
    value: "hn",
    label: "Honduras",
    prefix: "+504",
    flag: "🇭🇳",
  },
  {
    value: "hr",
    label: "Croatia",
    prefix: "+385",
    flag: "🇭🇷",
  },
  {
    value: "ht",
    label: "Haiti",
    prefix: "+509",
    flag: "🇭🇹",
  },
  {
    value: "hu",
    label: "Hungary",
    prefix: "+36",
    flag: "🇭🇺",
  },
  {
    value: "id",
    label: "Indonesia",
    prefix: "+62",
    flag: "🇮🇩",
  },
  {
    value: "ie",
    label: "Ireland",
    prefix: "+353",
    flag: "🇮🇪",
  },

  {
    value: "im",
    label: "Isle of Man",
    prefix: "+44",
    flag: "🇮🇲",
  },
  {
    value: "in",
    label: "India",
    prefix: "+91",
    flag: "🇮🇳",
  },

  {
    value: "iq",
    label: "Iraq",
    prefix: "+964",
    flag: "🇮🇶",
  },
  {
    value: "ir",
    label: "Iran",
    prefix: "+98",
    flag: "🇮🇷",
  },
  {
    value: "is",
    label: "Iceland",
    prefix: "+354",
    flag: "🇮🇸",
  },
  {
    value: "it",
    label: "Italy",
    prefix: "+39",
    flag: "🇮🇹",
  },
  {
    value: "je",
    label: "Jersey",
    prefix: "+44",
    flag: "🇯🇪",
  },
  {
    value: "jm",
    label: "Jamaica",
    prefix: "+1876",
    flag: "🇯🇲",
  },
  {
    value: "jo",
    label: "Jordan",
    prefix: "+962",
    flag: "🇯🇴",
  },
  {
    value: "jp",
    label: "Japan",
    prefix: "+81",
    flag: "🇯🇵",
  },
  {
    value: "ke",
    label: "Kenya",
    prefix: "+254",
    flag: "🇰🇪",
  },
  {
    value: "kg",
    label: "Kyrgyzstan",
    prefix: "+996",
    flag: "🇰🇬",
  },
  {
    value: "kh",
    label: "Cambodia",
    prefix: "+855",
    flag: "🇰🇭",
  },
  {
    value: "ki",
    label: "Kiribati",
    prefix: "+686",
    flag: "🇰🇮",
  },
  {
    value: "km",
    label: "Comoros",
    prefix: "+269",
    flag: "🇰🇲",
  },
  {
    value: "kn",
    label: "Saint Kitts and Nevis",
    prefix: "+1869",
    flag: "🇰🇳",
  },
  {
    value: "kp",
    label: "North Korea",
    prefix: "+850",
    flag: "🇰🇵",
  },
  {
    value: "kr",
    label: "South Korea",
    prefix: "+82",
    flag: "🇰🇷",
  },
  {
    value: "kw",
    label: "Kuwait",
    prefix: "+965",
    flag: "🇰🇼",
  },
  {
    value: "ky",
    label: "Cayman Islands",
    prefix: "+1345",
    flag: "🇰🇾",
  },
  {
    value: "kz",
    label: "Kazakhstan",
    prefix: "+7",
    flag: "🇰🇿",
  },
  {
    value: "la",
    label: "Laos",
    prefix: "+856",
    flag: "🇱🇦",
  },
  {
    value: "lb",
    label: "Lebanon",
    prefix: "+961",
    flag: "🇱🇧",
  },
  {
    value: "lc",
    label: "Saint Lucia",
    prefix: "+1758",
    flag: "🇱🇨",
  },
  {
    value: "li",
    label: "Liechtenstein",
    prefix: "+423",
    flag: "🇱🇮",
  },
  {
    value: "lk",
    label: "Sri Lanka",
    prefix: "+94",
    flag: "🇱🇰",
  },
  {
    value: "lr",
    label: "Liberia",
    prefix: "+231",
    flag: "🇱🇷",
  },
  {
    value: "ls",
    label: "Lesotho",
    prefix: "+266",
    flag: "🇱🇸",
  },
  {
    value: "lt",
    label: "Lithuania",
    prefix: "+370",
    flag: "🇱🇹",
  },
  {
    value: "lu",
    label: "Luxembourg",
    prefix: "+352",
    flag: "🇱🇺",
  },
  {
    value: "lv",
    label: "Latvia",
    prefix: "+371",
    flag: "🇱🇻",
  },
  {
    value: "ly",
    label: "Libya",
    prefix: "+218",
    flag: "🇱🇾",
  },
  {
    value: "ma",
    label: "Morocco",
    prefix: "+212",
    flag: "🇲🇦",
  },
  {
    value: "mc",
    label: "Monaco",
    prefix: "+377",
    flag: "🇲🇨",
  },
  {
    value: "md",
    label: "Moldova",
    prefix: "+373",
    flag: "🇲🇩",
  },
  {
    value: "me",
    label: "Montenegro",
    prefix: "+382",
    flag: "🇲🇪",
  },
  {
    value: "mf",
    label: "Saint Martin",
    prefix: "+590",
    flag: "🇲🇫",
  },
  {
    value: "mg",
    label: "Madagascar",
    prefix: "+261",
    flag: "🇲🇬",
  },
  {
    value: "mh",
    label: "Marshall Islands",
    prefix: "+692",
    flag: "🇲🇭",
  },
  {
    value: "mk",
    label: "North Macedonia",
    prefix: "+389",
    flag: "🇲🇰",
  },
  {
    value: "ml",
    label: "Mali",
    prefix: "+223",
    flag: "🇲🇱",
  },
  {
    value: "mm",
    label: "Myanmar (Burma)",
    prefix: "+95",
    flag: "🇲🇲",
  },
  {
    value: "mn",
    label: "Mongolia",
    prefix: "+976",
    flag: "🇲🇳",
  },
  {
    value: "mo",
    label: "Macao",
    prefix: "+853",
    flag: "🇲🇴",
  },
  {
    value: "mp",
    label: "Northern Mariana Islands",
    prefix: "+1670",
    flag: "🇲🇵",
  },
  {
    value: "mq",
    label: "Martinique",
    prefix: "+596",
    flag: "🇲🇶",
  },
  {
    value: "mr",
    label: "Mauritania",
    prefix: "+222",
    flag: "🇲🇷",
  },
  {
    value: "ms",
    label: "Montserrat",
    prefix: "+1664",
    flag: "🇲🇸",
  },
  {
    value: "mt",
    label: "Malta",
    prefix: "+356",
    flag: "🇲🇹",
  },
  {
    value: "mu",
    label: "Mauritius",
    prefix: "+230",
    flag: "🇲🇺",
  },
  {
    value: "mv",
    label: "Maldives",
    prefix: "+960",
    flag: "🇲🇻",
  },
  {
    value: "mw",
    label: "Malawi",
    prefix: "+265",
    flag: "🇲🇼",
  },
  {
    value: "mx",
    label: "Mexico",
    prefix: "+52",
    flag: "🇲🇽",
  },
  {
    value: "my",
    label: "Malaysia",
    prefix: "+60",
    flag: "🇲🇾",
  },
  {
    value: "mz",
    label: "Mozambique",
    prefix: "+258",
    flag: "🇲🇿",
  },
  {
    value: "na",
    label: "Namibia",
    prefix: "+264",
    flag: "🇳🇦",
  },
  {
    value: "nc",
    label: "New Caledonia",
    prefix: "+687",
    flag: "🇳🇨",
  },
  {
    value: "ne",
    label: "Niger",
    prefix: "+227",
    flag: "🇳🇪",
  },
  {
    value: "nf",
    label: "Norfolk Island",
    prefix: "+672",
    flag: "🇳🇫",
  },
  {
    value: "ng",
    label: "Nigeria",
    prefix: "+234",
    flag: "🇳🇬",
  },
  {
    value: "ni",
    label: "Nicaragua",
    prefix: "+505",
    flag: "🇳🇮",
  },
  {
    value: "nl",
    label: "Netherlands",
    prefix: "+31",
    flag: "🇳🇱",
  },
  {
    value: "no",
    label: "Norway",
    prefix: "+47",
    flag: "🇳🇴",
  },
  {
    value: "np",
    label: "Nepal",
    prefix: "+977",
    flag: "🇳🇵",
  },
  {
    value: "nr",
    label: "Nauru",
    prefix: "+674",
    flag: "🇳🇷",
  },
  {
    value: "nu",
    label: "Niue",
    prefix: "+683",
    flag: "🇳🇺",
  },
  {
    value: "nz",
    label: "New Zealand",
    prefix: "+64",
    flag: "🇳🇿",
  },
  {
    value: "om",
    label: "Oman",
    prefix: "+968",
    flag: "🇴🇲",
  },
  {
    value: "pa",
    label: "Panama",
    prefix: "+507",
    flag: "🇵🇦",
  },
  {
    value: "pe",
    label: "Peru",
    prefix: "+51",
    flag: "🇵🇪",
  },
  {
    value: "pf",
    label: "French Polynesia",
    prefix: "+689",
    flag: "🇵🇫",
  },
  {
    value: "pg",
    label: "Papua New Guinea",
    prefix: "+675",
    flag: "🇵🇬",
  },
  {
    value: "ph",
    label: "Philippines",
    prefix: "+63",
    flag: "🇵🇭",
  },
  {
    value: "pk",
    label: "Pakistan",
    prefix: "+92",
    flag: "🇵🇰",
  },
  {
    value: "pl",
    label: "Poland",
    prefix: "+48",
    flag: "🇵🇱",
  },
  {
    value: "pm",
    label: "Saint Pierre and Miquelon",
    prefix: "+508",
    flag: "🇵🇲",
  },
  {
    value: "pn",
    label: "Pitcairn Islands",
    prefix: "+64",
    flag: "🇵🇳",
  },
  {
    value: "pr",
    label: "Puerto Rico",
    prefix: "+1787,1939",
    flag: "🇵🇷",
  },
  {
    value: "ps",
    label: "Palestine",
    prefix: "+970",
    flag: "🇵🇸",
  },
  {
    value: "pt",
    label: "Portugal",
    prefix: "+351",
    flag: "🇵🇹",
  },
  {
    value: "pw",
    label: "Palau",
    prefix: "+680",
    flag: "🇵🇼",
  },
  {
    value: "py",
    label: "Paraguay",
    prefix: "+595",
    flag: "🇵🇾",
  },
  {
    value: "qa",
    label: "Qatar",
    prefix: "+974",
    flag: "🇶🇦",
  },
  {
    value: "re",
    label: "Reunion",
    prefix: "+262",
    flag: "🇷🇪",
  },
  {
    value: "ro",
    label: "Romania",
    prefix: "+40",
    flag: "🇷🇴",
  },
  {
    value: "rs",
    label: "Serbia",
    prefix: "+381",
    flag: "🇷🇸",
  },
  {
    value: "ru",
    label: "Russia",
    prefix: "+7",
    flag: "🇷🇺",
  },
  {
    value: "rw",
    label: "Rwanda",
    prefix: "+250",
    flag: "🇷🇼",
  },
  {
    value: "sa",
    label: "Saudi Arabia",
    prefix: "+966",
    flag: "🇸🇦",
  },
  {
    value: "sb",
    label: "Solomon Islands",
    prefix: "+677",
    flag: "🇸🇧",
  },
  {
    value: "sc",
    label: "Seychelles",
    prefix: "+248",
    flag: "🇸🇨",
  },
  {
    value: "sd",
    label: "Sudan",
    prefix: "+249",
    flag: "🇸🇩",
  },
  {
    value: "se",
    label: "Sweden",
    prefix: "+46",
    flag: "🇸🇪",
  },
  {
    value: "sg",
    label: "Singapore",
    prefix: "+65",
    flag: "🇸🇬",
  },
  {
    value: "sh",
    label: "Saint Helena",
    prefix: "+290",
    flag: "🇸🇭",
  },
  {
    value: "si",
    label: "Slovenia",
    prefix: "+386",
    flag: "🇸🇮",
  },
  {
    value: "sj",
    label: "Svalbard and Jan Mayen",
    prefix: "+4779",
    flag: "🇸🇯",
  },
  {
    value: "sk",
    label: "Slovakia",
    prefix: "+421",
    flag: "🇸🇰",
  },
  {
    value: "sl",
    label: "Sierra Leone",
    prefix: "+232",
    flag: "🇸🇱",
  },
  {
    value: "sm",
    label: "San Marino",
    prefix: "+378",
    flag: "🇸🇲",
  },
  {
    value: "sn",
    label: "Senegal",
    prefix: "+221",
    flag: "🇸🇳",
  },
  {
    value: "so",
    label: "Somalia",
    prefix: "+252",
    flag: "🇸🇴",
  },
  {
    value: "sr",
    label: "Suriname",
    prefix: "+597",
    flag: "🇸🇷",
  },
  {
    value: "ss",
    label: "South Sudan",
    prefix: "+211",
    flag: "🇸🇸",
  },

  {
    value: "sv",
    label: "El Salvador",
    prefix: "+503",
    flag: "🇸🇻",
  },
  {
    value: "sx",
    label: "Sint Maarten",
    prefix: "+1721",
    flag: "🇸🇽",
  },
  {
    value: "sy",
    label: "Syria",
    prefix: "+963",
    flag: "🇸🇾",
  },
  {
    value: "sz",
    label: "Eswatini",
    prefix: "+268",
    flag: "🇸🇿",
  },
  {
    value: "tc",
    label: "Turks and Caicos Islands",
    prefix: "+1649",
    flag: "🇹🇨",
  },
  {
    value: "td",
    label: "Chad",
    prefix: "+235",
    flag: "🇹🇩",
  },
  {
    value: "tf",
    label: "French Southern Territories",
    prefix: "+262",
    flag: "🇹🇫",
  },
  {
    value: "tg",
    label: "Togo",
    prefix: "+228",
    flag: "🇹🇬",
  },
  {
    value: "th",
    label: "Thailand",
    prefix: "+66",
    flag: "🇹🇭",
  },
  {
    value: "tj",
    label: "Tajikistan",
    prefix: "+992",
    flag: "🇹🇯",
  },
  {
    value: "tk",
    label: "Tokelau",
    prefix: "+690",
    flag: "🇹🇰",
  },
  {
    value: "tl",
    label: "East Timor",
    prefix: "+670",
    flag: "🇹🇱",
  },
  {
    value: "tm",
    label: "Turkmenistan",
    prefix: "+993",
    flag: "🇹🇲",
  },
  {
    value: "tn",
    label: "Tunisia",
    prefix: "+216",
    flag: "🇹🇳",
  },
  {
    value: "to",
    label: "Tonga",
    prefix: "+676",
    flag: "🇹🇴",
  },
  {
    value: "tr",
    label: "Turkey",
    prefix: "+90",
    flag: "🇹🇷",
  },
  {
    value: "tt",
    label: "Trinidad and Tobago",
    prefix: "+1868",
    flag: "🇹🇹",
  },
  {
    value: "tv",
    label: "Tuvalu",
    prefix: "+688",
    flag: "🇹🇻",
  },
  {
    value: "tw",
    label: "Taiwan",
    prefix: "+886",
    flag: "🇹🇼",
  },
  {
    value: "tz",
    label: "Tanzania",
    prefix: "+255",
    flag: "🇹🇿",
  },
  {
    value: "ua",
    label: "Ukraine",
    prefix: "+380",
    flag: "🇺🇦",
  },
  {
    value: "ug",
    label: "Uganda",
    prefix: "+256",
    flag: "🇺🇬",
  },

  {
    value: "us",
    label: "United States",
    prefix: "+1",
    flag: "🇺🇸",
  },
  {
    value: "uy",
    label: "Uruguay",
    prefix: "+598",
    flag: "🇺🇾",
  },
  {
    value: "uz",
    label: "Uzbekistan",
    prefix: "+998",
    flag: "🇺🇿",
  },
  {
    value: "va",
    label: "Vatican City",
    prefix: "+379",
    flag: "🇻🇦",
  },
  {
    value: "vc",
    label: "Saint Vincent and the Grenadines",
    prefix: "+1784",
    flag: "🇻🇨",
  },
  {
    value: "ve",
    label: "Venezuela",
    prefix: "+58",
    flag: "🇻🇪",
  },
  {
    value: "vg",
    label: "British Virgin Islands",
    prefix: "+1284",
    flag: "🇻🇬",
  },
  {
    value: "vi",
    label: "U.S. Virgin Islands",
    prefix: "+1340",
    flag: "🇻🇮",
  },
  {
    value: "vn",
    label: "Vietnam",
    prefix: "+84",
    flag: "🇻🇳",
  },
  {
    value: "vu",
    label: "Vanuatu",
    prefix: "+678",
    flag: "🇻🇺",
  },
  {
    value: "wf",
    label: "Wallis and Futuna",
    prefix: "+681",
    flag: "🇼🇫",
  },
  {
    value: "ws",
    label: "Samoa",
    prefix: "+685",
    flag: "🇼🇸",
  },
  {
    value: "xk",
    label: "Kosovo",
    prefix: "+377,381,383,386",
    flag: "🇽🇰",
  },
  {
    value: "ye",
    label: "Yemen",
    prefix: "+967",
    flag: "🇾🇪",
  },
  {
    value: "yt",
    label: "Mayotte",
    prefix: "+262",
    flag: "🇾🇹",
  },
  {
    value: "za",
    label: "South Africa",
    prefix: "+27",
    flag: "🇿🇦",
  },
  {
    value: "zm",
    label: "Zambia",
    prefix: "+260",
    flag: "🇿🇲",
  },
  {
    value: "zw",
    label: "Zimbabwe",
    prefix: "+263",
    flag: "🇿🇼",
  },
];

const CountrySelector = ({
  selectedCountry,
  onChangeCountry,
  mobileNumber,
  onChangePhoneNumber,
  error,
  withLabel,
  style,
  t,
}) => {
  const [open, setOpen] = useState(false);
  const [divWidth, setDivWidth] = useState("");
  const divRef = useRef(null);

  // useEffect hook to log the height of the div
  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.clientWidth;
      setDivWidth(divWidth);
    }
  }, [divRef, selectedCountry]);

  return (
    <div className="">
      <div className="relative">
        <div
          className={`flex items-center gap-[4px] absolute top-[2px] left-[2px] z-10 h-[52px]  rounded-l-[16px] pl-[16px] pr-[8px] border-r-[2px]  border-solid min-w-[28%] ${
            withLabel
              ? "bg-white border-secondary7"
              : "bg-secondary7 border-white"
          }`}
          ref={divRef}
          style={{ direction: "ltr" }}
          onClick={() => setOpen(true)}
        >
          <span className="text-[24px] pt-[8px]">{selectedCountry?.flag}</span>
          <span className="text-[14px] font-[400] text-primary1 pt-[5px]">
            {selectedCountry?.prefix}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask id="path-1-inside-1_1383_4492" fill="white">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.95312 5.67462C2.99588 5.62474 3.04804 5.58377 3.10663 5.55406C3.16522 5.52435 3.2291 5.50647 3.2946 5.50146C3.3601 5.49644 3.42595 5.50439 3.48839 5.52483C3.55082 5.54528 3.60861 5.57783 3.65846 5.62062L7.99979 9.34129L12.3411 5.62062C12.4423 5.53938 12.5712 5.50067 12.7004 5.51269C12.8297 5.52471 12.9492 5.58652 13.0336 5.68504C13.1181 5.78356 13.161 5.91108 13.1532 6.04063C13.1454 6.17019 13.0875 6.29163 12.9918 6.37929L8.32512 10.3793C8.23451 10.4569 8.11912 10.4996 7.99979 10.4996C7.88046 10.4996 7.76507 10.4569 7.67446 10.3793L3.00779 6.37929C2.90725 6.29297 2.84508 6.17026 2.83496 6.03813C2.82483 5.906 2.86757 5.77526 2.95379 5.67462H2.95312Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.95312 5.67462C2.99588 5.62474 3.04804 5.58377 3.10663 5.55406C3.16522 5.52435 3.2291 5.50647 3.2946 5.50146C3.3601 5.49644 3.42595 5.50439 3.48839 5.52483C3.55082 5.54528 3.60861 5.57783 3.65846 5.62062L7.99979 9.34129L12.3411 5.62062C12.4423 5.53938 12.5712 5.50067 12.7004 5.51269C12.8297 5.52471 12.9492 5.58652 13.0336 5.68504C13.1181 5.78356 13.161 5.91108 13.1532 6.04063C13.1454 6.17019 13.0875 6.29163 12.9918 6.37929L8.32512 10.3793C8.23451 10.4569 8.11912 10.4996 7.99979 10.4996C7.88046 10.4996 7.76507 10.4569 7.67446 10.3793L3.00779 6.37929C2.90725 6.29297 2.84508 6.17026 2.83496 6.03813C2.82483 5.906 2.86757 5.77526 2.95379 5.67462H2.95312Z"
                fill="#222325"
              />
              <path
                d="M2.95312 5.67462L2.19384 5.02387L0.779046 6.67462H2.95312V5.67462ZM3.65846 5.62062L3.00708 6.37938L3.00771 6.37992L3.65846 5.62062ZM7.99979 9.34129L7.34905 10.1006L7.99979 10.6583L8.65053 10.1006L7.99979 9.34129ZM12.3411 5.62062L11.7151 4.84078L11.7026 4.85086L11.6904 4.86133L12.3411 5.62062ZM12.9918 6.37929L13.6426 7.13855L13.655 7.12787L13.6671 7.11678L12.9918 6.37929ZM8.32512 10.3793L8.97579 11.1387L8.97592 11.1385L8.32512 10.3793ZM7.67446 10.3793L7.02367 11.1385L7.02379 11.1387L7.67446 10.3793ZM3.00779 6.37929L2.35638 7.13801L2.357 7.13855L3.00779 6.37929ZM2.95379 5.67462L3.7132 6.32523L5.12733 4.67462H2.95379V5.67462ZM3.71241 6.32538C3.66966 6.37526 3.6175 6.41623 3.55891 6.44594L2.65436 4.66218C2.47858 4.75132 2.32209 4.87422 2.19384 5.02387L3.71241 6.32538ZM3.55891 6.44594C3.50032 6.47565 3.43644 6.49353 3.37094 6.49854L3.21826 4.50438C3.02175 4.51942 2.83013 4.57305 2.65436 4.66218L3.55891 6.44594ZM3.37094 6.49854C3.30543 6.50356 3.23958 6.49561 3.17715 6.47517L3.79962 4.5745C3.61233 4.51316 3.41478 4.48933 3.21826 4.50438L3.37094 6.49854ZM3.17715 6.47517C3.11472 6.45472 3.05693 6.42217 3.00708 6.37938L4.30984 4.86187C4.16029 4.73349 3.98692 4.63584 3.79962 4.5745L3.17715 6.47517ZM3.00771 6.37992L7.34905 10.1006L8.65053 8.58199L4.3092 4.86133L3.00771 6.37992ZM8.65053 10.1006L12.9919 6.37992L11.6904 4.86133L7.34905 8.58199L8.65053 10.1006ZM12.9671 6.40046C12.8659 6.48171 12.737 6.52041 12.6078 6.50839L12.793 4.51699C12.4053 4.48093 12.0188 4.59704 11.7151 4.84078L12.9671 6.40046ZM12.6078 6.50839C12.4786 6.49637 12.3591 6.43457 12.2746 6.33605L13.7927 5.03403C13.5392 4.73846 13.1807 4.55305 12.793 4.51699L12.6078 6.50839ZM12.2746 6.33605C12.1901 6.23753 12.1472 6.11001 12.155 5.98045L14.1514 6.10082C14.1748 5.71214 14.0462 5.32959 13.7927 5.03403L12.2746 6.33605ZM12.155 5.98045C12.1628 5.8509 12.2207 5.72945 12.3164 5.6418L13.6671 7.11678C13.9543 6.85381 14.128 6.48949 14.1514 6.10082L12.155 5.98045ZM12.341 5.62003L7.67433 9.62003L8.97592 11.1385L13.6426 7.13855L12.341 5.62003ZM7.67446 9.61993C7.76507 9.54228 7.88046 9.49961 7.99979 9.49961V11.4996C8.35777 11.4996 8.70395 11.3716 8.97579 11.1387L7.67446 9.61993ZM7.99979 9.49961C8.11912 9.49961 8.23451 9.54228 8.32512 9.61993L7.02379 11.1387C7.29563 11.3716 7.64181 11.4996 7.99979 11.4996V9.49961ZM8.32525 9.62003L3.65858 5.62003L2.357 7.13855L7.02367 11.1385L8.32525 9.62003ZM3.6592 5.62057C3.75975 5.70689 3.82191 5.82959 3.83204 5.96172L1.83788 6.11454C1.86826 6.51093 2.05475 6.87905 2.35638 7.13801L3.6592 5.62057ZM3.83204 5.96172C3.84216 6.09385 3.79942 6.2246 3.7132 6.32523L2.19438 5.02401C1.93573 5.32592 1.80751 5.71815 1.83788 6.11454L3.83204 5.96172ZM2.95379 4.67462H2.95312V6.67462H2.95379V4.67462Z"
                fill="#222325"
                mask="url(#path-1-inside-1_1383_4492)"
              />
            </svg>
          </span>
        </div>
        <Input2
          placeholder={!withLabel && t("phone-number")}
          name="mobile"
          value={mobileNumber}
          onChange={onChangePhoneNumber}
          valid={mobileNumber?.length > 0}
          fildInfoHandler={false}
          type="tel"
          className={`${Number(divWidth) + 10}`}
          phoneError={error}

          // error={errors.orderNum}
        />
      </div>
      {error && (
        <>
          <p className="mt-[8px] text-[14px] px-[8px] font-[400] text-red1 ">
            {t("required-field")}
          </p>
        </>
      )}
      {open && (
        <div
          className={`absolute top-0 left-0 w-full h-full  z-10 pt-[40%] px-[24px] ${style}`}
          style={{ direction: "ltr" }}
          onClick={() => setOpen(false)}
        >
          <motion.ul
            initial={{ y: -6 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg max-h-[280px] overflow-y-auto rounded-[10px] overflow-x-hidden"
          >
            {countriesData.map((el, i) => (
              <li
                className=" border-b-[1px] border-solid border-[#eee] py-[10px] px-[16px] flex gap-3 items-center"
                key={i}
                onClick={() => {
                  onChangeCountry(el);
                  //   setOpen(false);
                }}
              >
                <span className="text-[24px] pt-[8px]">{el.flag}</span>
                <span className="text-[18px] pt-[4px]">{el.label}</span>
                <span className="text-[14px] font-[600] text-secondary4 tracking-wide pt-[5px]">
                  {el.prefix}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
