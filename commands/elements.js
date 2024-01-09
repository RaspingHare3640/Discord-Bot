// 8/30/2020 -- 

module.exports = {
    name: "elements",
    description: "periodic table",
    execute(message, args) {

        const Discord = require("discord.js");

        // Akarsh fill pout
        // alakaline earth metals
        //ok
        //i made a new channel for bot progression
        // Akrah i made template for hydrogen 
        // i see

        // do the family an period for famiy 1 and 2

        // template for family
        // "family": {
        //     "name": "",
        //     "number": "",
        //     "color":""
        // }

        // "orbitals": {
        //     "notation": "",
        //     "block:""
        // }

        // "spect": {
        //     "image": ""
        // }




        // Periodic Table
        const elements = ["{}", {
            "name": "Hydrogen",
            "AS": "H",
            "AN": 1,
            "AM": 1.01,
             "P": 1 ,
            "family": {
                "name": "adsjf",
                "number": 1,
                "color":""
            }, },
                {
            "name": "Helium",
            "AS": "He",
            "AN": 2,
            "AM": 4.00,
            "P": 1,
            "family": {
                "name": "Noble Gas",
                "number": 8,
                "color":"#edded8"
                }   
            },
            {
            "name": "Lithium",
            "AS": "Li",
            "AN": 3,
            "AM": 6.94,
            "P": 2,
            "family": {
                "name": "Alkali Metal",
                "number": 1,
                "color":"#ff4d00"
            } },
             {
            "name": "Beryillium",
            "AS": "Be",
            "AN": 4,
            "AM": 9.01,
            "P": 2,
            "family": {
                "name": "Alkaline Earth Metal",
                "number": 2,
                "color":"#ffa44f"
            } },
            {
            "name": "Boron",
            "AS": "B",
            "AN": 5,
            "AM": 10.81,
            "family": {
                "name": "Metalloid",
                "number": 3,
                "color":""
            }   },
            {
            "name": "Carbon",
            "AS": "C",
            "AN": 6,
            "AM": 12.01,
            "family": {
                "name": "Non Metal",
                "number": 4,
                "color":""
            }   },
            {
            "name": "Nitrogen",
            "AS": "N",
            "AN": 7,
            "AM": 14.01,
            "family": {
                "name": "Non Metal",
                "number": 5,
                "color":""
            }   },
            {
            "name": "Oxygen",
            "AS": "O",
            "AN": 8,
            "AM": 16.00,
            "family": {
                "name": "Non Metal",
                "number": 6,
                "color":""
            }   },
            {
            "name": "Flourine",
            "AS": "F",
            "AN": 9,
            "AM": 19.00,
            "family": {
                "name": "Halogen",
                "number": 7,
                "color":"#fa0000"
            }   },
            {
            "name": "Neon",
            "AS": "Ne",
            "AN": 10,
            "AM": 20.18,
            "family": {
                "name": "Noble Gas",
                "number": 8,
                "color":"#edded8"
            }   },
            {
            "name": "Sodium",
            "AS": "Na",
            "AN": 11,
            "AM": 22.99,
            "P": 3,
            "family": {
                "name": "Alkali Metal",
                "number": 1,
                "color":"#ff4d00"
            }  },   
            {
            "name": "Magnesium",
            "AS": "Mg",
            "AN": 12,
            "AM": 24.31,
            "P": 3,
            "family": {
                "name": "Alkaline Earth Metals",
                "number": 2,
                "color":"#ffa44f"
            } },
            {
            "name": "Aluminium",
            "AS": "AL",
            "AN": 13,
            "AM": 26.98,
            "family": {
                "name": "Metal",
                "number": 3,
                "color":"#293bff"
            }   },
            {
            "name": "Silicon",
            "AS": "Si",
            "AN": 14,
            "AM": 28.09, 
            "family": {
                "name": "Non Metal",
                "number": "4",
                "color":""
            } },
            {
            "name": "Phosphorous",
            "AS": "P",
            "AN": 15,
            "AM": 30.97,
            "family": {
                "name": "Non Metal",
                "number": 5,
                "color":""
            }   },
            {
            "name": "Sulfur",
            "AS": "S",
            "AN": 16,
            "AM": 32.07,
            "family": {
                "name": "Non metal",
                "number": 6,
                "color":""
            }   },
            {
            "name": "Chlorine",
            "AS": "Cl",
            "AN": 17,
            "AM": 35.45,
            "family": {
                "name": "Halogen",
                "number": 7,
                "color":"#fa0000"
            }   },
            {
            "name": "Argon",
            "AS": "Ar",
            "AN": 18,
            "AM": 39.95,
            "family": {
                "name": "Noble Gas",
                "number": 8,
                "color":"#edded8"
            } 
            },
            {
            "name": "Potassium",
            "AS": "K",
            "AN": 19,
            "AM": 39.10,
            "P": 4,
            "family": {
                "name": "Alkali Metal",
                "number": 1,
                "color":"#ff4d00"
            }  },
            {
            "name": "Calcium",
            "AS": "Ca",
            "AN": 20,
            "AM": 40.08,
            "P": 4,
            "family": {
                "name": "Alkaline Earth Metal",
                "number": 2,
                "color":"#ffa44f"
            } },
            {
            "name": "Scandium",
            "AS": "Sc",
            "AN": 21,
            "AM": 44.96,
            "P": 4,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            } },
            {
            "name": "Titanium",
            "AS": "Ti",
            "AN": 22,
            "AM": 47.87,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Vanadium",
            "AS": "V",
            "AN": 23,
            "AM": 50.94,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Chromium",
            "AS": "Cr",
            "AN": 24,
            "AM": 52.00,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Manganese",
            "AS": "Mn",
            "AN": 25,
            "AM": 54.95,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Iron",
            "AS": "Fe",
            "AN": 26,
            "AM": 55.85,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }  },
            {
            "name": "Cobalt",
            "AS": "Co",
            "AN": 27,
            "AM": 58.93,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Nickel",
            "AS": "Ni",
            "AN": 28,
            "AM": 58.69,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Copper",
            "AS": "Cu",
            "AN": 29,
            "AM": 63.55,
            "family": {
                "name": "Transition Metal",
                "number": "",
                "color":"#293bff"
            }   },
            {
            "name": "Zinc",
            "AS": "Zn",
            "AN": 30,
            "AM": 65.39,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Gallium",
            "AS": "Ga",
            "AN": 31,
            "AM": 69.72,
            "family": {
                "name": "Other Metal",
                "number": 3,
                "color":""
            }   },
            {
            "name": "Germanium",
            "AS": "Ge",
            "AN": 32,
            "AM": 72.61,
            "family": {
                "name": "Metalloid",
                "number": 4,
                "color":""
            }   },
            {
            "name": "Arsenic",
            "AS": "As",
            "AN": 33,
            "AM": 74.92,
            "family": {
                "name": "Metalloid",
                "number": 5,
                "color":""
            }   },
            {
            "name": "Selenium",
            "AS": "Se",
            "AN": 34,
            "AM": 78.96,
            "family": {
                "name": "Non Metal",
                "number": 6,
                "color":""
            }   },
            {
            "name": "Bromine",
            "AS": "Br",
            "AN": 35,
            "AM": 79.90,
            "family": {
                "name": "Halogen",
                "number": 7,
                "color":"#fa0000"
            }   },
            {
            "name": "Krypton",
            "AS": "Kr",
            "AN": 36,
            "AM": 83.80,
            "family": {
                "name": "Noble Gas",
                "number": 8,
                "color":"#edded8"
            }   },
            {
            "name": "Rubidium",
            "AS": "Rb",
            "AN": 37,
            "AM": 85.47, 
            "P": 5,
            "family": {
                "name": "Alkali Metal",
                "number": 1,
                "color":"#ff4d00"
            }  },
            {
            "name": "Strontium",
            "AS": "Sr",
            "AN": 38,
            "AM": 87.62,
            "P": 5,
            "family": {
                "name": "Alkaline Earth Metal",
                "number": 2,
                "color":"#ffa44f"
            } },
            {
            "name": "Yttrium",
            "AS": "Y",
            "AN": 39,
            "AM": 88.91,
            "family": {
                "name": "Transition Metal",
                "number": 0 ,
                "color":"#293bff"
            }  },
            {
            "name": "Zirconium",
            "AS": "Zr",
            "AN": 40,
            "AM": 91.22,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Niobium",
            "AS": "Nb",
            "AN": 41,
            "AM": 92.91,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Molybdenum",
            "AS": "Mo",
            "AN": 42,
            "AM": 95.94,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Technetium",
            "AS": "Tc",
            "AN": 43,
            "AM": 98,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Ruthenium",
            "AS": "Ru",
            "AN": 44,
            "AM": 101.07,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Rhodium",
            "AS": "Rh",
            "AN": 45,
            "AM": 102.91,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Palladium",
            "AS": "Pd",
            "AN": 46,
            "AM": 106.42,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Silver",
            "AS": "Ag",
            "AN": 47,
            "AM": 107.87,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Cadmium",
            "AS": "Cd",
            "AN": 48,
            "AM": 112.41,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Indium",
            "AS": "In",
            "AN": 49,
            "AM": 114.82,
            "family": {
                "name": "Other Metal",
                "number": 3,
                "color":""
            }  },
            {
            "name": "Tin",
            "AS": "Sn",
            "AN": 50,
            "AM": 118.71,
            "family": {
                "name": "Other Metal",
                "number": 4,
                "color":""
            }  },
            {
            "name": "Antimony",
            "AS": "Sb",
            "AN": 51,
            "AM": 121.76,
            "family": {
                "name": "Metalloid",
                "number": 5,
                "color":""
            }  },
            {
            "name": "Tellurium",
            "AS": "Te",
            "AN": 52,
            "AM": 127.6,
            "family": {
                "name": "Metalloid",
                "number": 6,
                "color":""
            }  },
            {
            "name": "Iodine",
            "AS": "I",
            "AN": 53,
            "AM": 126.90,
            "family": {
                "name": "Halogen",
                "number": 7,
                "color":"#fa0000"
            }  },
            {
            "name": "Xenon",
            "AS": "Xe",
            "AN": 54,
            "AM": 131.29,
            "family": {
                "name": "Noble Gas",
                "number": 8,
                "color":"#edded8"
            }  },
            {
            "name": "Cesium",
            "AS": "Cs",
            "AN": 55,
            "AM": 132.91,
            "P": 6,
            "family": {
                "name": "Alkali Metal",
                "number": 1,
                "color":"#ff4d00"
            }  },  
            {
            "name": "Barium",
            "AS": "Ba",
            "AN": 56,
            "AM": 137.33,
            "P": 6,
            "family": {
                "name": "Alkaline Earth Metal",
                "number": 2,
                "color":"#ffa44f"
            } },

            //Lanthanides

            {
            "name": "Lanthanum",
            "AS": "La",
            "AN": 57,
            "AM": 138.91,
            "P": 6,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }  },
            {    
            "name": "Cerium",
            "AS": "Ce",
            "AN": 58,
            "AM": 140.12,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Praseodymium",
            "AS": "Pr",
            "AN": 59,
            "AM": 140.91,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Neodymium",
            "AS": "Nd",
            "AN": 60,
            "AM": 144.24,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Promethium",
            "AS": "Pm",
            "AN": 61,
            "AM": 145,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Samarium",
            "AS": "Sm",
            "AN": 62,
            "AM": 140.91,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Europium",
            "AS": "Eu",
            "AN": 63,
            "AM": 151.96,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Gadolinium",
            "AS": "Gd",
            "AN": 64,
            "AM": 157.25,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Terbium",
            "AS": "Tb",
            "AN": 65,
            "AM": 140.91,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Dysprosium",
            "AS": "Dy",
            "AN": 66,
            "AM": 162.50,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Holmium",
            "AS": "Ho",
            "AN": 67,
            "AM": 164.93,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Erbium",
            "AS": "Er",
            "AN": 68,
            "AM": 167.26,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Thulium",
            "AS": "Tm",
            "AN": 69,
            "AM": 168.93,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Ytterbium",
            "AS": "Yb",
            "AN": 70,
            "AM": 173.04,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Lutetium",
            "AS": "Lu",
            "AN": 71,
            "AM": 174.97,
            "family": {
                "name": "Lanthanide",
                "number": 0,
                "color":"#adaada"
            }   },
            {
            "name": "Hafnium",
            "AS": "Hf",
            "AN": 72,
            "AM": 178.49, 
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            } },
            {
            "name": "Tantalum",
            "AS": "Ta",
            "AN": 73,
            "AM": 180.95,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Tungsten",
            "AS": "W",
            "AN": 74,
            "AM": 183.84,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Rhenium",
            "AS": "Re",
            "AN": 75,
            "AM": 118.711,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },  
            {
            "name": "Osmium",
            "AS": "Os",
            "AN": 76,
            "AM": 190.23,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Iridium",
            "AS": "Ir",
            "AN": 77,
            "AM": 192.22,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Platinum",
            "AS": "Pt",
            "AN": 78,
            "AM": 195.10,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Gold",
            "AS": "Au",
            "AN": 79,
            "AM": 196.97,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Mercury",
            "AS": "Hg",
            "AN": 80,
            "AM": 200.59,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }  },
            {
            "name": "Thallium",
            "AS": "Tl",
            "AN": 81,
            "AM": 204.38,
            "family": {
                "name": "Transition Metal",
                "number": 3,
                "color":"#293bff"
            }  },
            {
            "name": "Lead",
            "AS": "Pb",
            "AN": 82,
            "AM": 207.2,
            "family": {
                "name": "Transition Metal",
                "number": 4,
                "color":"#293bff"
            }   },
            {
            "name": "Bismuth",
            "AS": "Bi",
            "AN": 83,
            "AM": 208.98,
            "family": {
                "name": "Transition Metal",
                "number": 5,
                "color":"#293bff"
            }  },
            {
            "name": "Polonium",
            "AS": "Po",
            "AN": 84,
            "AM": 209,
            "family": {
                "name": "Transition Metal",
                "number": 6,
                "color":"#293bff"
            }   },
            {
            "name": "Astatine",
            "AS": "At",
            "AN": 85,
            "AM": 201,
            "family": {
                "name": "Halogen",
                "number": 7,
                "color":"#fa0000"
            }   },
            {
            "name": "Radon",
            "AS": "Rn",
            "AN": 86,
            "AM": 222,
            "family": {
                "name": "Noble Gas",
                "number": 8,
                "color":"#edded8"
            }  },
            {
            "name": "Francium",
            "AS": "Fr",
            "AN": 87,
            "AM": 223,
            "P": 7,
            "family": {
                "name": "Alkali Metal",
                "number": 1,
                "color":"#ff4d00"
            }    },
            {
            "name": "Radium",
            "AS": "Ra",
            "AN": 88,
            "AM": 226,
            "P": 7,
            "family": {
                "name": "Alkaline Earth Metal",
                "number": 2,
                "color":"#ffa44f"
            }},
            {
            "name": "Actinium",
            "AS": "Ac",
            "AN": 89,
            "AM": 227  ,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            } },
            /// Actinides
            {
            "name": "Thorium",
            "AS": "Th",
            "AN": 90,
            "AM": 232.04,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Protactnium",
            "AS": "Pa",
            "AN": 91,
            "AM": 231.04,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Uranium",
            "AS": "U",
            "AN": 92,
            "AM": 238.03,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Neptunium",
            "AS": "Np",
            "AN": 93,
            "AM": 237,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Plutonium",
            "AS": "Pu",
            "AN": 94,
            "AM": 244,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Americium",
            "AS": "Am",
            "AN": 95,
            "AM": 243,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Curium",
            "AS": "Cm",
            "AN": 96,
            "AM": 247,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Berkelium",
            "AS": "Bk",
            "AN": 97,
            "AM": 247,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Californium",
            "AS": "Cf",
            "AN": 98,
            "AM": 251,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Einsteinium",
            "AS": "Es",
            "AN": 99,
            "AM": 252,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Fermium",
            "AS": "Fm",
            "AN":  100,
            "AM": 257,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Mendelevium",
            "AS": "Md",
            "AN": 101,
            "AM": 259,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Nobelium",
            "AS": "No",
            "AN": 102,
            "AM": 259,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Lawrencium",
            "AS": "Lr",
            "AN": 103,
            "AM": 262,
            "family": {
                "name": "Actinide",
                "number": 0,
                "color":"#9d00ff"
            }   },
            {
            "name": "Rutherfordium",
            "AS": "Rf",
            "AN": 104,
            "AM": 261,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Dubnium",
            "AS": "Db",
            "AN": 105,
            "AM": 262,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Seaborgium",
            "AS": "Sg",
            "AN": 106,
            "AM": 266,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Bhorium",
            "AS": "Bh",
            "AN": 107,
            "AM": 264,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Hassium",
            "AS": "Hs",
            "AN": 108,
            "AM": 269,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            {
            "name": "Meitnerium",
            "AS": "Mt",
            "AN": 109,
            "AM": 268,
            "family": {
                "name": "Transition Metal",
                "number": 0,
                "color":"#293bff"
            }   },
            
         ]
         let filteredElements = []
/// logical functiosn

function filterElements (a, b="", c="") {

    let elName;

    if (b == undefined && c == undefined) {
        elName = a.toLowerCase()
    }

    else if (c == undefined) {
        elName = a.toLowerCase() + " " + b.toLowerCase()
    }
    else {
        elName = a.toLowerCase() + " " + b.toLowerCase()  + " " + c.toLowerCase()
    }

    for (let i=1; i < elements.length; i++ ) {
        let en = elements[i].family.name.toLowerCase()
        if (elName.trim() == elements[i].family.name.toLowerCase()) {
            filteredElements.push(elements[i])
        }
    }

    for (let i = 0; i< filteredElements.length; i++) {
        message.channel.send(`${filteredElements[i].AS} ${filteredElements[i].name}`)
    }

}




         // Logic

        
        let input = require("../index.js")
        
        let el = input[1]
        let el2 = input[2]
        let el3 = input[3]

        try {filterElements(el,el2,el3)}
        catch(err) {console.log("Nothing to filter")}
        

        
    
        // let type = input[2].toLowerCase()

        // if (type == "alkali metals" || type == "ame" || type == "alkali" ) {
        //     let elementNames = []
        //     let elementSymbols = []
        //     for(let i = 1; i < elements.length-1; i++) {
        //         console.log(elements[i].family.name.toLowerCase())
        //         console.log(elements[i].AS)
        //         if (elements[i].family.name.toLowerCase() == "alkali metal") {
        //             elementNames.push(elements[i].name)
        //             elementSymbols.push(elements[i].AS)
        //             console.log(elements[i].AS)
        //         }

        //        // console.log(elementNames)

        //     }

        //     console.log(elementNames)
        //     message.channel.send("Alkali Metals:")
        //     for (let i =0 ; i<= elementSymbols.length-1; i++) {
        //         message.channel.send(`${elementSymbols[i]} - ${elementNames[i]}`)
        //     }

        //     // for (let i =0 ; i<= elementNames.length-1; i++) {
        //     //         message.channel.send(elementNames[i])
        //     //     }
        //     ///console.log("")

            
        // }
        

        if (el == "" || el == null || el == " " || el == undefined ) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ffge62")
            .setTitle("Periodic Table")
            .attachFiles(["../pictures/periodicTable.png"])
            .setImage("attachment://periodicTable.png")

            message.channel.send(embed)
        }


        

        if (el == "et" ) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ffge62")
            .setTitle("Electronegativity Table")
            .attachFiles(["../pictures/electronegativityTable.png"])
            .setImage("attachment://electronegativityTable.png")

            message.channel.send(embed)
        }

        

        if (el == "st" ) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ffge62")
            .setTitle("Solubility Table")
            .attachFiles(["../pictures/solubilityTable.png"])
            .setImage("attachment://solubilityTable.png")

            message.channel.send(embed)
        }

        if (el == "rl" ) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ffge62")
            .setTitle("Rate Law Cheat Sheet")
            .attachFiles(["../Discord/pictures/RateLaw.jpg"])
            .setImage("attachment://RateLaw.jpg")

            message.channel.send(embed)
        }
    
        if (el == "ka" ) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ffge62")
            .setTitle("List of Ka")
            .attachFiles(["../pictures/acid.png"])
            .setImage("attachment://RateLaw.jpg")

            message.channel.send(embed)
        }

        if (el == "rp" ) {
            let embed = new Discord.MessageEmbed()
            .setColor("#ffge62")
            .setTitle("Reduction Potentials")
            .attachFiles(["../pictures/RP.png"])
            .setImage("attachment://RP.jpg")

            message.channel.send(embed)
        }


    

        
        else {

                    // stores Stomic Numbers
                    let checks = []

                    // Stores Atomic Names

                    let names = []

                    // Stores Atomic Symbols

                    let symbols = []

                    

                    // Loops through and decides on which type of data it is (AS,AN, or name)
                    for (let i = 1; i < elements.length; i++) {
                        if (isNaN(el) != true) {
                        checks.push(elements[i].AN)
                        }
                        else if (isNaN(el) != false)
                        symbols.push(elements[i].AS.toLowerCase())
                        names.push(elements[i].name.toLowerCase())
                    // console.log(checks)
                    }

                    // index
                    let index;

                    // iterator
                    // These act as checks
                    let iterator;


                    if (checks.length == names.length == symbols.length) {
                        console.log("OPAAAAA")
                    }


                    // Loops through ANs
                    try {
                    for(  iterator = 0; iterator <= checks.length; iterator++) {
                        //console.log(i)
                        if (el == iterator) {
                            index = iterator
                            break
                        }
                    }
                } catch(err){console.log("It is not a number")}

                    
                    // Loops though ASs and Names
                    try {
                    for(iterator = 0; iterator <= symbols.length; iterator++) {
                        //console.log("This is Symbols iterator: " + iterator)
                        if (el.toLowerCase() == symbols[iterator]) {
                            index = iterator + 1
                            break
                        }

                        else if (el.toLowerCase() == names[iterator]) {
                            index = iterator + 1
                            break
                        }
                    }
                } catch(err){console.log("It is a number")}

                    

                // console.log(symbols)
                    //console.log(names)
                    //console.log(elements[index].name)

                // Creates Embed  
            try {
                let elEmbed
                console.log(`el: ${el}\n it: ${iterator}`)
                console.log(`index: ${index}`)
                console.log(`color ${elements[index].family.color}`)
                console.log(`${elements[0].AN}`)
            if (el == index || iterator + 1 == index) {  // Checks Index and iterator (To distinct from ANs and AS , Names)
                elEmbed = new Discord.MessageEmbed() 
                //#ffge62
                .setColor(`${elements[index].family.color}`)
                .addFields(
                    {name: "Atomic number", value: `**${elements[index].AN}**`},
                    {name: "Atomic Symbol", value: `**${elements[index].AS}**`},
                    {name: "Name", value: `${elements[index].name}`},
                    {name: "Atomic Mass", value: `${elements[index].AM}`},
                    {name: "Family name", value: `${elements[index].family.name}`}
                    /* {name: "Family number", value: `${elements[index]["family-number"]}`},*/)

                    message.channel.send(elEmbed)
            }

            else {
                message.channel.send("please try again")
            }
        } catch (err) {console.log("oops")}

    
   

        
        

        

        }
    }
}

