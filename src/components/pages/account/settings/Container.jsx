"use client";
import React, { useEffect, useState } from "react";

import BottomActionsContaienr from "@/components/ui/BottomActionsContaienr";
import ChangeProfileImage from "@/components/ui/ChangeProfileImage";
import Confirm from "../Confirm";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import CountrySelector from "@/components/ui/CountrySelector";
import Tostify from "@/components/ui/Tostify";
import { useLocale, useTranslations } from "next-intl";
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

const actionsStyle =
  "h-[56px] p-[8px] flex justify-center items-center rounded-[16px] bg-secondary6 font-[700] leading-[150%]";
const initialProfileData = {
  image:
    "https://res.cloudinary.com/freelancer3223/image/upload/v1710686795/thebtalk_images/7a18e779d4e9d91553759a443127e422_zkq1gx.jpg",
  name: "لمياء الأنبعي",
  mobile: {
    prefix: "+965",
    number: "24345555",
  },
};

const Container = () => {
  const [confirm, setConfirm] = useState(false);
  const [initData, setInitData] = useState(initialProfileData);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [selectedImage, setSelectedImage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [saveChanges, setSaveChanges] = useState(false);
  const [activeNotify, setActiveNotify] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const t = useTranslations("acc-details");
  const lang = useLocale();

  // update name and mobile functionality  //////////////
  const handleChangeName = (e) => {
    setProfileData((prev) => {
      return { ...prev, name: e.target.value };
    });
    setError(false);
  };
  const handleChangeCountry = (e) => {
    setProfileData((prev) => {
      return { ...prev, mobile: { ...prev.mobile, prefix: e.prefix } };
    });
  };

  const handleChangePhoneNumber = (e) => {
    setProfileData((prev) => {
      return { ...prev, mobile: { ...prev.mobile, number: e.target.value } };
    });
    setError(false);
  };
  useEffect(() => {
    const select = countriesData.find(
      (el) => el.prefix == profileData.mobile.prefix
    );

    setSelectedCountry(select);
  }, [profileData]);

  // end of update name and mobile functionality  //////////////
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    setProfileData((prev) => {
      return { ...prev, image: imageFile };
    });
  };

  const deleteAccountHandler = () => {
    setConfirm(false);
    //delete here
    router.push(`/${lang}/login`);
  };

  //checking if user data changed to update database
  useEffect(() => {
    if (
      initData.name != profileData.name ||
      initData.mobile.number != profileData.mobile.number ||
      initData.mobile.prefix != profileData.mobile.prefix ||
      initData.image != profileData.image
    ) {
      setSaveChanges(true);
    } else {
      setSaveChanges(false);
    }
  }, [profileData]);

  const saveChangesHandler = () => {
    if (profileData.name.length <= 0 || profileData.mobile.number.length <= 0) {
      setError(true);
    } else {
      setError(false);
      setInitData(profileData);
      //send new data to database
      let data = {};
      if (profileData.image == undefined) {
        data = {
          ...profileData,
          image:
            "https://res.cloudinary.com/freelancer3223/image/upload/v1711145283/thebtalk_images/Rectangle_1729_cbs8vc.svg",
        };
      } else {
        data = profileData;
      }
      //sending...
      //
      setSaveChanges(false);
      setActiveNotify(true);
    }
  };

  return (
    <>
      <div className="mt-[16px]">
        <div className="flex w-[192px] mx-auto">
          <ChangeProfileImage
            profileImage={profileData.image}
            selectedImage={selectedImage}
            handleImageChange={handleImageChange}
            style={true}
          />
        </div>

        <div className="flex flex-col gap-[48px] mx-[24px] mt-[40px]">
          <div className="flex flex-col gap-[16px]">
            <div className="relative">
              <Image
                src={
                  "https://res.cloudinary.com/freelancer3223/image/upload/v1711331655/thebtalk_images/user_dowenw.svg"
                }
                width={24}
                height={24}
                priority
                alt="username"
                className={`absolute bottom-[18px] ${
                  lang == "en" ? " left-[18px]" : " right-[18px]"
                } `}
              />
              <Image
                src={
                  "https://res.cloudinary.com/freelancer3223/image/upload/v1711331623/thebtalk_images/edit-2_hquawt.svg"
                }
                width={24}
                height={24}
                priority
                alt="username"
                className={`absolute bottom-[18px] pointer-events-none ${
                  lang == "en" ? " right-[16px]" : " left-[16px]"
                }`}
              />
              <input
                name="name"
                type="text"
                value={profileData.name}
                onChange={handleChangeName}
                className={`px-[16px] pt-[4px] pr-[50px] h-[56px] pl-[48px] text-primary1  rounded-[16px] bg-white outline-none border-[2px] border-secondary7 border-solid w-full font-[500]  flex items-center text-[16px]  focus:border-primary3  transition-all duration-300  `}
              />
              <label
                className={`text-secondary4 text-[14px] font-[400] absolute  top-[-15%]  px-[8px] pointer-events-none bg-white ${
                  lang == "en" ? "left-[18px]" : "right-[18px]"
                }`}
                htmlFor={"name"}
              >
                {t("name")}
              </label>
            </div>

            <CountrySelector
              selectedCountry={selectedCountry}
              mobileNumber={profileData.mobile.number}
              onChangeCountry={handleChangeCountry}
              onChangePhoneNumber={handleChangePhoneNumber}
              // error={mobileError}
              withLabel={true}
            />
            {error && (
              <p className="text-center text-[14px] text-red1">
                {t("required")}
              </p>
            )}
          </div>
          <button
            className="flex items-center justify-center gap-[8px] h-[56px] rounded-[16px] bg-red2"
            onClick={() => setConfirm(true)}
          >
            <Image
              src={
                "https://res.cloudinary.com/freelancer3223/image/upload/v1711330982/thebtalk_images/trash_gebg7b.svg"
              }
              width={24}
              height={24}
              priority
              alt="delete"
            />
            <span className="pt-[4px] text-[#f46c6c] font-[700] leading-[150%]">
              {t("delete-account")}
            </span>
          </button>
        </div>

        <BottomActionsContaienr>
          <div className="grid grid-cols-2 gap-[24px]">
            <button
              className={`${actionsStyle} text-secondary1 `}
              onClick={() => router.back()}
            >
              {t("cancel")}
            </button>
            <button
              className={`${actionsStyle} disabled:text-secondary4`}
              disabled={!saveChanges}
              onClick={saveChangesHandler}
            >
              {t("save-changes")}
            </button>
          </div>
        </BottomActionsContaienr>
      </div>

      <AnimatePresence mode="wait">
        {confirm && (
          <Confirm
            title={t("delete-confirm")}
            accept={deleteAccountHandler}
            isDelete={true}
            reject={() => setConfirm(false)}
            btnsStyle="grid-cols-[2fr_1.05fr]"
            deleteT={t}
          />
        )}
      </AnimatePresence>

      {/* //notifications  */}
      <Tostify
        type={"success"}
        message={t("updated")}
        active={activeNotify}
        setClose={() => setActiveNotify(false)}
      />
    </>
  );
};

export default Container;
