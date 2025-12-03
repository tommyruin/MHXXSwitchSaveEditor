// Auto-generated from mhgu.db
// Do not edit manually

export const PALICO_EQUIPMENT_TYPES = {
  NONE: 0,
  WEAPON: 22,
  HELMET: 23,
  BODY: 24
} as const;

export type PalicoEquipmentEntry = {
  id: number;          // Save file ID (1-indexed within category)
  dbId: number;        // Database _id
  name: string;        // Equipment name
  type: 22 | 23 | 24;  // Equipment type
  rarity: number;      // 1-10
  iconName: string;    // Icon identifier
  iconColor: number;   // Color index (0 = no special color)
};

export const PALICO_WEAPONS: PalicoEquipmentEntry[] = [
  {
    "id": 1,
    "dbId": 1048577,
    "name": "F Bone Wedge",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 2,
    "dbId": 1048578,
    "name": "F Bherna Staff",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 3,
    "dbId": 1048579,
    "name": "F Iron Sword",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 4,
    "dbId": 1048580,
    "name": "F Bone Hammer",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 5,
    "dbId": 1048581,
    "name": "F Jaggi Knife",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 6,
    "dbId": 1048582,
    "name": "F Hunting Knife",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 7,
    "dbId": 1048583,
    "name": "F Yukumo Bokken",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 8,
    "dbId": 1048584,
    "name": "F Wood Chopper",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 9,
    "dbId": 1048585,
    "name": "F Paw Punch",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 10,
    "dbId": 1048586,
    "name": "F Alta Net",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 11,
    "dbId": 1048587,
    "name": "F Rheno Hammer",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 12,
    "dbId": 1048588,
    "name": "F Bnaha Dagger",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 13,
    "dbId": 1048589,
    "name": "F Maccao Dagger",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 14,
    "dbId": 1048590,
    "name": "F Vprey Bayonet",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 15,
    "dbId": 1048591,
    "name": "F Bulldrome Tusk",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 16,
    "dbId": 1048592,
    "name": "F Arzuros Mace",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 17,
    "dbId": 1048593,
    "name": "F Genprey Bayonet",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 18,
    "dbId": 1048594,
    "name": "F Cephalos Brush",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 19,
    "dbId": 1048595,
    "name": "F Machalite Wedge",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 20,
    "dbId": 1048596,
    "name": "F Giant Acorn",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 21,
    "dbId": 1048597,
    "name": "F Stone Cat Statue",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 22,
    "dbId": 1048598,
    "name": "F Venombee Bat",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 23,
    "dbId": 1048599,
    "name": "F Gourmet Cheese",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 24,
    "dbId": 1048600,
    "name": "F Moofah Cotton",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 25,
    "dbId": 1048601,
    "name": "F Aptonoth Meat",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 26,
    "dbId": 1048602,
    "name": "F Fish Stick",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 27,
    "dbId": 1048603,
    "name": "F Grilled Hammer",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 28,
    "dbId": 1048604,
    "name": "F Ioprey Bayonet",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 29,
    "dbId": 1048605,
    "name": "F Lagombi Staff",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 30,
    "dbId": 1048606,
    "name": "F Kut-Ku Cutter",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 31,
    "dbId": 1048607,
    "name": "F Gypceros Glare",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 32,
    "dbId": 1048608,
    "name": "F Cabra Pounder",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 33,
    "dbId": 1048609,
    "name": "F Daimyo Shears",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 34,
    "dbId": 1048610,
    "name": "F Ludroth Paw",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 35,
    "dbId": 1048611,
    "name": "F Khezu Whaccine",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 36,
    "dbId": 1048612,
    "name": "F Nibel Blammer",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 37,
    "dbId": 1048613,
    "name": "F Quest Book",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 38,
    "dbId": 1048614,
    "name": "F Vprey Wedge",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 39,
    "dbId": 1048615,
    "name": "F Barrel Basher",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 40,
    "dbId": 1048616,
    "name": "F Derring Lance",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 41,
    "dbId": 1048617,
    "name": "F Edel Rod",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 42,
    "dbId": 1048618,
    "name": "F Mosgharl Broom",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 43,
    "dbId": 1048619,
    "name": "F Bushwhacker",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 44,
    "dbId": 1048620,
    "name": "F Death Stench Scythe",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 45,
    "dbId": 1048621,
    "name": "F Marauder Blade",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 46,
    "dbId": 1048622,
    "name": "F Marauder Gavel",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 47,
    "dbId": 1048623,
    "name": "F Volvi Lantern",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 48,
    "dbId": 1048624,
    "name": "F Jester Parasol",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 49,
    "dbId": 1048625,
    "name": "F Rathian Rapier",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 50,
    "dbId": 1048626,
    "name": "F Blango Spear",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 51,
    "dbId": 1048627,
    "name": "F Ceanataur Cutter",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 52,
    "dbId": 1048628,
    "name": "F Naja Pungi",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 53,
    "dbId": 1048629,
    "name": "F Narga Shuriken",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 54,
    "dbId": 1048630,
    "name": "F Kokoto Beer",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 55,
    "dbId": 1048631,
    "name": "F Pokke Mop",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 56,
    "dbId": 1048632,
    "name": "F Yukumo Fan",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 57,
    "dbId": 1048633,
    "name": "F Shroom Rod",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 58,
    "dbId": 1048634,
    "name": "F Eldora Paw",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 59,
    "dbId": 1048635,
    "name": "F Garuga Fan",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 60,
    "dbId": 1048636,
    "name": "F Uragaan Iron",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 61,
    "dbId": 1048637,
    "name": "F Rathalos Blade",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 62,
    "dbId": 1048638,
    "name": "F Lagia Anchor",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 63,
    "dbId": 1048639,
    "name": "F Astalos Spear",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 64,
    "dbId": 1048640,
    "name": "F Enormews Staff",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 65,
    "dbId": 1048641,
    "name": "F Mizutsune Parasol",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 66,
    "dbId": 1048642,
    "name": "F Guild Rapier",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 67,
    "dbId": 1048643,
    "name": "F Moofy Plush",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 68,
    "dbId": 1048644,
    "name": "F Scorching Blade",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 69,
    "dbId": 1048645,
    "name": "F Mewsurper's Peal",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 70,
    "dbId": 1048646,
    "name": "F Katzenlampe",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 71,
    "dbId": 1048647,
    "name": "F Seregios Edge",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 72,
    "dbId": 1048648,
    "name": "F Tigrex Whammer",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 73,
    "dbId": 1048649,
    "name": "F Kirin Rumblezap",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 74,
    "dbId": 1048650,
    "name": "F Brachy Punch",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 75,
    "dbId": 1048651,
    "name": "F Le C\u0153ur de Chat",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 76,
    "dbId": 1048652,
    "name": "F Kushala Wand",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 77,
    "dbId": 1048653,
    "name": "F Genie Breath",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 78,
    "dbId": 1048654,
    "name": "F Kaiser Mace",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 79,
    "dbId": 1048655,
    "name": "F White Felyne Husk",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 80,
    "dbId": 1048656,
    "name": "F Bone Wedge S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 81,
    "dbId": 1048657,
    "name": "F Bherna Staff S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 82,
    "dbId": 1048658,
    "name": "F Hunting Knife S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 83,
    "dbId": 1048659,
    "name": "F Yukumo Bonito",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 84,
    "dbId": 1048660,
    "name": "F Carbalite Wedge",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 85,
    "dbId": 1048661,
    "name": "F Giant Acorn S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 86,
    "dbId": 1048662,
    "name": "F Vprey Wedge S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 87,
    "dbId": 1048663,
    "name": "F Barrel Basher S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 88,
    "dbId": 1048664,
    "name": "F Gourmet Cheese S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 89,
    "dbId": 1048665,
    "name": "F Moofah Cotton S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 90,
    "dbId": 1048666,
    "name": "F Barbecue",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 91,
    "dbId": 1048667,
    "name": "F Fish Stick S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 92,
    "dbId": 1048668,
    "name": "F Fingerlicker",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 93,
    "dbId": 1048669,
    "name": "F Bushwhacker S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 94,
    "dbId": 1048670,
    "name": "F Paw Punch S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 95,
    "dbId": 1048671,
    "name": "F Carbalite Sword",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 96,
    "dbId": 1048672,
    "name": "F Bone Hammer S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 97,
    "dbId": 1048673,
    "name": "F Alta Net S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 98,
    "dbId": 1048674,
    "name": "F Bnaha Dagger S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 99,
    "dbId": 1048675,
    "name": "F Jaggi Knife S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 100,
    "dbId": 1048676,
    "name": "F Rheno Hammer S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 101,
    "dbId": 1048677,
    "name": "F Slagtoth Leaf",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 102,
    "dbId": 1048678,
    "name": "F Maccao Dagger S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 103,
    "dbId": 1048679,
    "name": "F Vprey Bayonet S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 104,
    "dbId": 1048680,
    "name": "F Bulldrome Tusk S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 105,
    "dbId": 1048681,
    "name": "F Arzuros Mace S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 106,
    "dbId": 1048682,
    "name": "F Genprey Bayonet S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 107,
    "dbId": 1048683,
    "name": "F Lagombi Staff S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 108,
    "dbId": 1048684,
    "name": "F Cephalos Brush S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 109,
    "dbId": 1048685,
    "name": "F Kut-Ku Cutter S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 110,
    "dbId": 1048686,
    "name": "F Gypceros Glare S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 111,
    "dbId": 1048687,
    "name": "F Cabra Pounder S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 112,
    "dbId": 1048688,
    "name": "F Daimyo Shears S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 113,
    "dbId": 1048689,
    "name": "F Ludroth Paw S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 114,
    "dbId": 1048690,
    "name": "F Kecha Harrow",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 115,
    "dbId": 1048691,
    "name": "F Bell Rod",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 116,
    "dbId": 1048692,
    "name": "F Gargouille Waltz",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 117,
    "dbId": 1048693,
    "name": "F Venombee Bat S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 118,
    "dbId": 1048694,
    "name": "F Mosgharl Broom S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 119,
    "dbId": 1048695,
    "name": "F Meowtetsuken",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 120,
    "dbId": 1048696,
    "name": "F Pounderpurr",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 121,
    "dbId": 1048697,
    "name": "F Ioprey Bayonet S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 122,
    "dbId": 1048698,
    "name": "F Volvi Lantern S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 123,
    "dbId": 1048699,
    "name": "F Khezu Whaccine S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 124,
    "dbId": 1048700,
    "name": "F Nibel Blammer S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 125,
    "dbId": 1048701,
    "name": "F Slumbering Duke",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 126,
    "dbId": 1048702,
    "name": "F Queen Rapier",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 127,
    "dbId": 1048703,
    "name": "F Blango Spear S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 128,
    "dbId": 1048704,
    "name": "F Ceanataur Cutter S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 129,
    "dbId": 1048705,
    "name": "F Naja Pungi S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 130,
    "dbId": 1048706,
    "name": "F Narga Shuriken S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 131,
    "dbId": 1048707,
    "name": "F Garuga Fan S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 132,
    "dbId": 1048708,
    "name": "F Uragaan Iron S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 133,
    "dbId": 1048709,
    "name": "F Zamtrios Paw",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 134,
    "dbId": 1048710,
    "name": "F Plesioth Board",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 135,
    "dbId": 1048711,
    "name": "F Lava Mace",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 136,
    "dbId": 1048712,
    "name": "F Edel Rod S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 137,
    "dbId": 1048713,
    "name": "F Lulling Moofy Plush",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 138,
    "dbId": 1048714,
    "name": "F Wood Chopper S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 139,
    "dbId": 1048715,
    "name": "F Kut-Ku Cackle",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 140,
    "dbId": 1048716,
    "name": "F Bulldrome Rrrush",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 141,
    "dbId": 1048717,
    "name": "F Mighty Shroom Rod",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 142,
    "dbId": 1048718,
    "name": "F D. Stench Scythe S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 143,
    "dbId": 1048719,
    "name": "F Lost Catspaw Staff",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 144,
    "dbId": 1048720,
    "name": "F Lagia Anchor S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 145,
    "dbId": 1048721,
    "name": "F Scorched Whiskers",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 146,
    "dbId": 1048722,
    "name": "F Lightning Spear",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 147,
    "dbId": 1048723,
    "name": "F Ginormews Staff",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 148,
    "dbId": 1048724,
    "name": "F Crimson Parasol",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 149,
    "dbId": 1048725,
    "name": "F Blazing Blade",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 150,
    "dbId": 1048726,
    "name": "F Mewsurper's Roar",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 151,
    "dbId": 1048727,
    "name": "F Katzenfunzel",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 152,
    "dbId": 1048728,
    "name": "F Tigrex Whammer S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 153,
    "dbId": 1048729,
    "name": "F Seltas Drill",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 154,
    "dbId": 1048730,
    "name": "F Agnaktor Lance",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 155,
    "dbId": 1048731,
    "name": "F Duram Axe",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 156,
    "dbId": 1048732,
    "name": "F Kirin Bolt",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 157,
    "dbId": 1048733,
    "name": "F Golden Gadget",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 158,
    "dbId": 1048734,
    "name": "F Vangis Mace",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 159,
    "dbId": 1048735,
    "name": "F Kut-Ku Cutter R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 160,
    "dbId": 1048736,
    "name": "F Kecha Harrow R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 161,
    "dbId": 1048737,
    "name": "F Gypceros Ankh R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 162,
    "dbId": 1048738,
    "name": "F Cabra Pounder R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 163,
    "dbId": 1048739,
    "name": "F Daimyo Shears R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 164,
    "dbId": 1048740,
    "name": "F Ludroth Paw R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 165,
    "dbId": 1048741,
    "name": "F Jester Parasol R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 166,
    "dbId": 1048742,
    "name": "F Zamtrios Paw R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 167,
    "dbId": 1048743,
    "name": "F Khezu Whaccine R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 168,
    "dbId": 1048744,
    "name": "F Rathian Rapier R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 169,
    "dbId": 1048745,
    "name": "F Nibel Blammer R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 170,
    "dbId": 1048746,
    "name": "F Plesioth Board R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 171,
    "dbId": 1048747,
    "name": "F Blango Spear R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 172,
    "dbId": 1048748,
    "name": "F Quest Book S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 173,
    "dbId": 1048749,
    "name": "F Kokoto Beer S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 174,
    "dbId": 1048750,
    "name": "F Pokke Mop S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 175,
    "dbId": 1048751,
    "name": "F Yukumo Fan S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 176,
    "dbId": 1048752,
    "name": "F Guildcalibur",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 177,
    "dbId": 1048753,
    "name": "F Dragon Evertones",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 178,
    "dbId": 1048754,
    "name": "F Barrel Mallet",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 179,
    "dbId": 1048755,
    "name": "F Dirty Blade",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 180,
    "dbId": 1048756,
    "name": "F Meowsketeer Rapier",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 181,
    "dbId": 1048757,
    "name": "F Master's Blade",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 182,
    "dbId": 1048758,
    "name": "F Derring Lance S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 183,
    "dbId": 1048759,
    "name": "F Seregios Edge S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 184,
    "dbId": 1048760,
    "name": "F Brachy Wallop",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 185,
    "dbId": 1048761,
    "name": "F Le Chatphrodite",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 186,
    "dbId": 1048762,
    "name": "F White Felyne Staff",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 187,
    "dbId": 1048763,
    "name": "F Polaris Sword",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 188,
    "dbId": 1048764,
    "name": "F Lava Mace R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 189,
    "dbId": 1048765,
    "name": "F Ceanataur Cutter R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 190,
    "dbId": 1048766,
    "name": "F Narga Shuriken R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 191,
    "dbId": 1048767,
    "name": "F Naja Pungi R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 192,
    "dbId": 1048768,
    "name": "F Garuga Fan R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 193,
    "dbId": 1048769,
    "name": "F Uragaan Iron R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 194,
    "dbId": 1048770,
    "name": "F Seltas Drill R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 195,
    "dbId": 1048771,
    "name": "F Rathalos Blade R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 196,
    "dbId": 1048772,
    "name": "F Lagia Anchor R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 197,
    "dbId": 1048773,
    "name": "F Mewsurper's Peal R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 198,
    "dbId": 1048774,
    "name": "F Kushala Wand S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 199,
    "dbId": 1048775,
    "name": "F Genie Breath S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 200,
    "dbId": 1048776,
    "name": "F Kaiser Mace S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 201,
    "dbId": 1048777,
    "name": "F Akantor Sword",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 202,
    "dbId": 1048778,
    "name": "F Ukanlos Shovel",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 203,
    "dbId": 1048779,
    "name": "F Cursed Cloud",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 204,
    "dbId": 1048780,
    "name": "F Escador Scythe",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 205,
    "dbId": 1048781,
    "name": "F Mizutsune Parasol R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 206,
    "dbId": 1048782,
    "name": "F Astalos Spear R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 207,
    "dbId": 1048783,
    "name": "F Enormews Staff R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 208,
    "dbId": 1048784,
    "name": "F Scorching Blade R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 209,
    "dbId": 1048785,
    "name": "F Agnaktor Lance R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 210,
    "dbId": 1048786,
    "name": "F Katzenlampe R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 211,
    "dbId": 1048787,
    "name": "F Seregios Edge R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 212,
    "dbId": 1048788,
    "name": "F Duram Axe R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 213,
    "dbId": 1048789,
    "name": "F Tigrex Whammer R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 214,
    "dbId": 1048790,
    "name": "F Brachy Punch R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 215,
    "dbId": 1048791,
    "name": "F Golden Gadget R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 216,
    "dbId": 1048792,
    "name": "F Deviljho Mace R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 217,
    "dbId": 1048793,
    "name": "F Strange Hammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 218,
    "dbId": 1048794,
    "name": "F Strange Hammer S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 219,
    "dbId": 1048795,
    "name": "F Redhelm Mace",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 220,
    "dbId": 1048796,
    "name": "F Redhelm Mace S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 221,
    "dbId": 1048797,
    "name": "F Snowbaron Stick",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 222,
    "dbId": 1048798,
    "name": "F Snowbaron Stick S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 223,
    "dbId": 1048799,
    "name": "F Stonefist Shears",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 224,
    "dbId": 1048800,
    "name": "F Stonefist Shears S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 225,
    "dbId": 1048801,
    "name": "F Dreadqueen Rapier",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 226,
    "dbId": 1048802,
    "name": "F Dreadqueen Rapier S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 227,
    "dbId": 1048803,
    "name": "F Drilltusk Pounder",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 228,
    "dbId": 1048804,
    "name": "F Drilltusk Pounder S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 229,
    "dbId": 1048805,
    "name": "F Silverwind Star",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 230,
    "dbId": 1048806,
    "name": "F Silverwind Star S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 231,
    "dbId": 1048807,
    "name": "F Crystalbeard Iron",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 232,
    "dbId": 1048808,
    "name": "F Crystalbeard Iron S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 233,
    "dbId": 1048809,
    "name": "F Deadeye Fan",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 234,
    "dbId": 1048810,
    "name": "F Deadeye Fan S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 235,
    "dbId": 1048811,
    "name": "F Dreadking Blade",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 236,
    "dbId": 1048812,
    "name": "F Dreadking Blade S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 237,
    "dbId": 1048813,
    "name": "F Thunderlord's Peal",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 238,
    "dbId": 1048814,
    "name": "F Thunderlord's Roar",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 239,
    "dbId": 1048815,
    "name": "F Grimclaw Whammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 240,
    "dbId": 1048816,
    "name": "F Grimclaw Whammer S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 241,
    "dbId": 1048817,
    "name": "F Blazing Ashes",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 242,
    "dbId": 1048818,
    "name": "F Ashen Whiskers",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 243,
    "dbId": 1048819,
    "name": "F Zombie-kun Gut",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 244,
    "dbId": 1048820,
    "name": "F Fairy Tail Blade",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 245,
    "dbId": 1048821,
    "name": "F Treasure Chalice J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 246,
    "dbId": 1048822,
    "name": "F Pirate Key J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 247,
    "dbId": 1048823,
    "name": "F Legendary Glass J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 248,
    "dbId": 1048824,
    "name": "F Greedy Hook J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 249,
    "dbId": 1048825,
    "name": "F Rolled-up Paper",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 250,
    "dbId": 1048826,
    "name": "F Monqlo Ball",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 253,
    "dbId": 1048829,
    "name": "F Midousuji Bike",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 254,
    "dbId": 1048830,
    "name": "F Zombie-kun Stomach",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 255,
    "dbId": 1048831,
    "name": "F Grandpaw Danger",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 256,
    "dbId": 1048832,
    "name": "F True Fairy Tail Blade",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 257,
    "dbId": 1048833,
    "name": "F Dark Meowgic Staff",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 258,
    "dbId": 1048834,
    "name": "F Booty Chalice J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 259,
    "dbId": 1048835,
    "name": "F Buccaneer Key J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 260,
    "dbId": 1048836,
    "name": "F King Scope J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 261,
    "dbId": 1048837,
    "name": "F Avaricious Hook J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 262,
    "dbId": 1048838,
    "name": "F Tightly-rolled Paper",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 263,
    "dbId": 1048839,
    "name": "F Monqlo Ball S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 269,
    "dbId": 1048845,
    "name": "F Wind Waker",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 270,
    "dbId": 1048846,
    "name": "F Blaster",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 271,
    "dbId": 1048847,
    "name": "F Invincible Hammer",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 272,
    "dbId": 1048848,
    "name": "F Sentry's Pickaxe",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 273,
    "dbId": 1048849,
    "name": "F Minder's Binder",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 274,
    "dbId": 1048850,
    "name": "F Sword of Purrity",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 275,
    "dbId": 1048851,
    "name": "F Chun Bracelets",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 276,
    "dbId": 1048852,
    "name": "F Blanka Fish",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 277,
    "dbId": 1048853,
    "name": "F Alastor",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 278,
    "dbId": 1048854,
    "name": "F Rushing Hammer",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 279,
    "dbId": 1048855,
    "name": "F Melodic Baton",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 281,
    "dbId": 1048857,
    "name": "F Fan Megaphone",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 282,
    "dbId": 1048858,
    "name": "F Tenderpaw Clog",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 283,
    "dbId": 1048859,
    "name": "F Giaprey Bayonet",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 284,
    "dbId": 1048860,
    "name": "F Conga Cymbals",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 285,
    "dbId": 1048861,
    "name": "F Barroth Mace",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 286,
    "dbId": 1048862,
    "name": "F Second Sight Lens",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 287,
    "dbId": 1048863,
    "name": "F Basarios Axe",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 288,
    "dbId": 1048864,
    "name": "F Nerscylla Wedge",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 289,
    "dbId": 1048865,
    "name": "F Barioth Knife",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 290,
    "dbId": 1048866,
    "name": "F Grav Bazooka",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 291,
    "dbId": 1048867,
    "name": "F Diablos Hammer",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 292,
    "dbId": 1048868,
    "name": "F Silverwing Sword",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 293,
    "dbId": 1048869,
    "name": "F Bone Wedge X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 294,
    "dbId": 1048870,
    "name": "F Bherna Staff X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 295,
    "dbId": 1048871,
    "name": "F Eltalite Wedge",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 296,
    "dbId": 1048872,
    "name": "F Giant Acorn X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 297,
    "dbId": 1048873,
    "name": "F Vprey Wedge X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 298,
    "dbId": 1048874,
    "name": "F Barrel Basher X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 299,
    "dbId": 1048875,
    "name": "F Gourmet Cheese X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 300,
    "dbId": 1048876,
    "name": "F Moofah Cotton X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 301,
    "dbId": 1048877,
    "name": "F Deluxe BBQ",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 302,
    "dbId": 1048878,
    "name": "F Fish Stick X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 303,
    "dbId": 1048879,
    "name": "F Smorgasbord",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 304,
    "dbId": 1048880,
    "name": "F Bushwhacker X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 305,
    "dbId": 1048881,
    "name": "F Paw Punch X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 306,
    "dbId": 1048882,
    "name": "F Eltalite Sword",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 307,
    "dbId": 1048883,
    "name": "F Bone Hammer X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 308,
    "dbId": 1048884,
    "name": "F Alta Net X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 309,
    "dbId": 1048885,
    "name": "F Bnaha Dagger X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 310,
    "dbId": 1048886,
    "name": "F Jaggi Knife X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 311,
    "dbId": 1048887,
    "name": "F Rheno Hammer X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 312,
    "dbId": 1048888,
    "name": "F Slagtoth Leaf X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 313,
    "dbId": 1048889,
    "name": "F Maccao Dagger X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 314,
    "dbId": 1048890,
    "name": "F Vprey Bayonet X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 315,
    "dbId": 1048891,
    "name": "F Bulldrome Tusk X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 316,
    "dbId": 1048892,
    "name": "F Arzuros Mace X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 317,
    "dbId": 1048893,
    "name": "F Giaprey Bayonet X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 318,
    "dbId": 1048894,
    "name": "F Genprey Bayonet X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 319,
    "dbId": 1048895,
    "name": "F Lagombi Staff X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 320,
    "dbId": 1048896,
    "name": "F Cephalos Brush X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 321,
    "dbId": 1048897,
    "name": "F Kut-Ku Cutter X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 322,
    "dbId": 1048898,
    "name": "F Gypceros Glare X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 323,
    "dbId": 1048899,
    "name": "F Cabra Pounder X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 324,
    "dbId": 1048900,
    "name": "F Daimyo Shears X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 325,
    "dbId": 1048901,
    "name": "F Ludroth Paw X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 326,
    "dbId": 1048902,
    "name": "F Kecha Harrow X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 327,
    "dbId": 1048903,
    "name": "F Kokoto Beer X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 328,
    "dbId": 1048904,
    "name": "F Yukumo Fan X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 329,
    "dbId": 1048905,
    "name": "F Bell Rod X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 330,
    "dbId": 1048906,
    "name": "F Yian Kut-Ku Cackle",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 331,
    "dbId": 1048907,
    "name": "F Bulldrome Rrrumble",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 332,
    "dbId": 1048908,
    "name": "F Sacred Titan Dance",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 333,
    "dbId": 1048909,
    "name": "F Venombee Bat X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 334,
    "dbId": 1048910,
    "name": "F Mosgharl Broom X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 335,
    "dbId": 1048911,
    "name": "F Real Catetsu Blade",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 336,
    "dbId": 1048912,
    "name": "F Marauder Warhammer",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 337,
    "dbId": 1048913,
    "name": "F Finder's Loupe",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 338,
    "dbId": 1048914,
    "name": "F Ioprey Bayonet X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 339,
    "dbId": 1048915,
    "name": "F Volvi Lantern X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 340,
    "dbId": 1048916,
    "name": "F Basarios Axe X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 341,
    "dbId": 1048917,
    "name": "F Conga Cymbals X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 342,
    "dbId": 1048918,
    "name": "F Barroth Mace X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 343,
    "dbId": 1048919,
    "name": "F Khezu Whaccine X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 344,
    "dbId": 1048920,
    "name": "F Nibel Blammer X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 345,
    "dbId": 1048921,
    "name": "F Slumbering Archduke",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 346,
    "dbId": 1048922,
    "name": "F Swiftblur Rapier",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 347,
    "dbId": 1048923,
    "name": "F Blango Spear X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 348,
    "dbId": 1048924,
    "name": "F Ceanataur Cutter X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 349,
    "dbId": 1048925,
    "name": "F Scylla Wedge X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 350,
    "dbId": 1048926,
    "name": "F Naja Pungi X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 351,
    "dbId": 1048927,
    "name": "F Narga Shuriken X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 352,
    "dbId": 1048928,
    "name": "F Zamtrios Paw X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 353,
    "dbId": 1048929,
    "name": "F Plesioth Board X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 354,
    "dbId": 1048930,
    "name": "F Kut-Ku Cutter XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 355,
    "dbId": 1048931,
    "name": "F Kecha Harrow XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 356,
    "dbId": 1048932,
    "name": "F Gypceros Glare XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 357,
    "dbId": 1048933,
    "name": "F Cabra Pounder XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 358,
    "dbId": 1048934,
    "name": "F Daimyo Shears XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 359,
    "dbId": 1048935,
    "name": "F Ludroth Paw XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 360,
    "dbId": 1048936,
    "name": "F Quest Book X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 361,
    "dbId": 1048937,
    "name": "F Derring Lance X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 362,
    "dbId": 1048938,
    "name": "F Barrel Hammer",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 363,
    "dbId": 1048939,
    "name": "F Snoozy Moofy Plush",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 364,
    "dbId": 1048940,
    "name": "F Wood Chopper X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 365,
    "dbId": 1048941,
    "name": "F Mycetic Rod",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 366,
    "dbId": 1048942,
    "name": "F DeathStench Scythe X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 367,
    "dbId": 1048943,
    "name": "F Fine Catspaw Staff",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 368,
    "dbId": 1048944,
    "name": "F Slumbral Moofy Plush",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 369,
    "dbId": 1048945,
    "name": "F Garuga Fan X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 370,
    "dbId": 1048946,
    "name": "F Uragaan Iron X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 371,
    "dbId": 1048947,
    "name": "F Lava Mace X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 372,
    "dbId": 1048948,
    "name": "F Lagia Anchor X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 373,
    "dbId": 1048949,
    "name": "F Novaslice Whiskers",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 374,
    "dbId": 1048950,
    "name": "F St. Elmo's Javelin",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 375,
    "dbId": 1048951,
    "name": "F Ginormewsest Staff",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 376,
    "dbId": 1048952,
    "name": "F Crimson Sky Parasol",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 377,
    "dbId": 1048953,
    "name": "F Barioth Knife X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 378,
    "dbId": 1048954,
    "name": "F Charring Blade",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 379,
    "dbId": 1048955,
    "name": "F Mewsurper's Yowl",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 380,
    "dbId": 1048956,
    "name": "F Grav Bazooka X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 381,
    "dbId": 1048957,
    "name": "F Katzenseele",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 382,
    "dbId": 1048958,
    "name": "F Tigrex Whammer X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 383,
    "dbId": 1048959,
    "name": "F Seltas Drill X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 384,
    "dbId": 1048960,
    "name": "F Kirin Bolt Maximus",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 385,
    "dbId": 1048961,
    "name": "F Sealed Drgn Halberd",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 386,
    "dbId": 1048962,
    "name": "F Basarios Axe XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 387,
    "dbId": 1048963,
    "name": "F Conga Cymbals XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 388,
    "dbId": 1048964,
    "name": "F Barroth Mace XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 389,
    "dbId": 1048965,
    "name": "F Khezu Whaccine XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 390,
    "dbId": 1048966,
    "name": "F Nibel Blammer XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 391,
    "dbId": 1048967,
    "name": "F Jester Parasol XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 392,
    "dbId": 1048968,
    "name": "F Rathian Rapier XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 393,
    "dbId": 1048969,
    "name": "F Blango Spear XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 394,
    "dbId": 1048970,
    "name": "F Ceanataur Cutter XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 395,
    "dbId": 1048971,
    "name": "F Scylla Wedge XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 396,
    "dbId": 1048972,
    "name": "F Naja Pungi XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 397,
    "dbId": 1048973,
    "name": "F Narga Shuriken XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 398,
    "dbId": 1048974,
    "name": "F Zamtrios Paw XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 399,
    "dbId": 1048975,
    "name": "F Plesioth Board XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 400,
    "dbId": 1048976,
    "name": "F Guildcalibur X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 401,
    "dbId": 1048977,
    "name": "F Dragon Forevertones",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 402,
    "dbId": 1048978,
    "name": "F Pro Dirty Blade",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 403,
    "dbId": 1048979,
    "name": "F Meowsketeer Espada",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 404,
    "dbId": 1048980,
    "name": "F Legend Blade",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 405,
    "dbId": 1048981,
    "name": "F Miaownifique",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 406,
    "dbId": 1048982,
    "name": "F Purrlissimo",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 407,
    "dbId": 1048983,
    "name": "F Agnaktor Lance X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 408,
    "dbId": 1048984,
    "name": "F Duram Axe X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 409,
    "dbId": 1048985,
    "name": "F Seregios Edge X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 410,
    "dbId": 1048986,
    "name": "F Diablos Hammer X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 411,
    "dbId": 1048987,
    "name": "F Brachydios Smash",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 412,
    "dbId": 1048988,
    "name": "F La Venyasss",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 413,
    "dbId": 1048989,
    "name": "F Dragon Comet",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 414,
    "dbId": 1048990,
    "name": "F Golden Gadget X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 415,
    "dbId": 1048991,
    "name": "F Vangis Mace X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 416,
    "dbId": 1048992,
    "name": "F Fischfleisch",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 417,
    "dbId": 1048993,
    "name": "F Kushala Wand X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 418,
    "dbId": 1048994,
    "name": "F Genie Breath X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 419,
    "dbId": 1048995,
    "name": "F Kaiser Mace X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 420,
    "dbId": 1048996,
    "name": "F White Felyne Scepter",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 421,
    "dbId": 1048997,
    "name": "F Polaris Clawsword",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 422,
    "dbId": 1048998,
    "name": "F Engraved Staff",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 423,
    "dbId": 1048999,
    "name": "F Garuga Fan XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 424,
    "dbId": 1049000,
    "name": "F Uragaan Iron XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 425,
    "dbId": 1049001,
    "name": "F Lava Mace XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 426,
    "dbId": 1049002,
    "name": "F Lagia Anchor XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 427,
    "dbId": 1049003,
    "name": "F Scorching Blade XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 428,
    "dbId": 1049004,
    "name": "F Astalos Spear XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 429,
    "dbId": 1049005,
    "name": "F Enormews Staff XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 430,
    "dbId": 1049006,
    "name": "F Mizutsune Parasol XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 431,
    "dbId": 1049007,
    "name": "F Barioth Knife XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 432,
    "dbId": 1049008,
    "name": "F Rathalos Blade XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 433,
    "dbId": 1049009,
    "name": "F Mewsurper's Peal XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 434,
    "dbId": 1049010,
    "name": "F Grav Bazooka XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 435,
    "dbId": 1049011,
    "name": "F Katzenlampe XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 436,
    "dbId": 1049012,
    "name": "F Tigrex Whammer XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 437,
    "dbId": 1049013,
    "name": "F Seltas Drill XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 438,
    "dbId": 1049014,
    "name": "F Hunting Knife X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 439,
    "dbId": 1049015,
    "name": "F True Yukumo Bokken",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 440,
    "dbId": 1049016,
    "name": "F Pokke Mop X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 441,
    "dbId": 1049017,
    "name": "F Edel Rod X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 442,
    "dbId": 1049018,
    "name": "F Akantor Sword X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 443,
    "dbId": 1049019,
    "name": "F Ukanlos Shovel X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 444,
    "dbId": 1049020,
    "name": "F Celestial Squall",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 445,
    "dbId": 1049021,
    "name": "F Escador Scythe X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 446,
    "dbId": 1049022,
    "name": "F Fatalis Eye",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 447,
    "dbId": 1049023,
    "name": "F Havoc Eye",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 448,
    "dbId": 1049024,
    "name": "F Fatalis Rod",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 449,
    "dbId": 1049025,
    "name": "F Agnaktor Lance XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 450,
    "dbId": 1049026,
    "name": "F Duram Axe XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 451,
    "dbId": 1049027,
    "name": "F Seregios Edge XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 452,
    "dbId": 1049028,
    "name": "F Diablos Hammer XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 453,
    "dbId": 1049029,
    "name": "F Brachy Punch XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 454,
    "dbId": 1049030,
    "name": "F Golden Gadget XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 455,
    "dbId": 1049031,
    "name": "F Vangis Mace XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 456,
    "dbId": 1049032,
    "name": "F Strange Hammer X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 457,
    "dbId": 1049033,
    "name": "F Strange Hammer XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 458,
    "dbId": 1049034,
    "name": "F Redhelm Mace X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 459,
    "dbId": 1049035,
    "name": "F Redhelm Mace XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 460,
    "dbId": 1049036,
    "name": "F Snowbaron Stick X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 461,
    "dbId": 1049037,
    "name": "F Snowbaron Stick XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 462,
    "dbId": 1049038,
    "name": "F Stonefist Shears X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 463,
    "dbId": 1049039,
    "name": "F Stonefist Shears XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 464,
    "dbId": 1049040,
    "name": "F DreadqueenRapier X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 465,
    "dbId": 1049041,
    "name": "F DreadqueenRapier XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 466,
    "dbId": 1049042,
    "name": "F Drilltusk Pounder X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 467,
    "dbId": 1049043,
    "name": "F Drilltusk Pounder XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 468,
    "dbId": 1049044,
    "name": "F Cloaked Parasol",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 469,
    "dbId": 1049045,
    "name": "F Exalted Parasol",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 470,
    "dbId": 1049046,
    "name": "F Scratching Pole",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 471,
    "dbId": 1049047,
    "name": "F Rending Pole",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 472,
    "dbId": 1049048,
    "name": "F Silverwind Star X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 473,
    "dbId": 1049049,
    "name": "F Silverwind Star XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 474,
    "dbId": 1049050,
    "name": "F Crystalbeard Iron X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 475,
    "dbId": 1049051,
    "name": "F Crystalbeard Iron XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 476,
    "dbId": 1049052,
    "name": "F Deadeye Fan X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 477,
    "dbId": 1049053,
    "name": "F Deadeye Fan XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 478,
    "dbId": 1049054,
    "name": "F Dreadking Blade X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 479,
    "dbId": 1049055,
    "name": "F Dreadking Blade XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 480,
    "dbId": 1049056,
    "name": "F Thunderlord'sRoar X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 481,
    "dbId": 1049057,
    "name": "F Thunderlord'sRoar XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 482,
    "dbId": 1049058,
    "name": "F GrimclawWhammer X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 483,
    "dbId": 1049059,
    "name": "F GrimclawWhammr XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 484,
    "dbId": 1049060,
    "name": "F Smouldering Whiskers",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 485,
    "dbId": 1049061,
    "name": "F Searing Whiskers",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 486,
    "dbId": 1049062,
    "name": "F Scarlet Virtue",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 487,
    "dbId": 1049063,
    "name": "F Incarnadine Greed",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 488,
    "dbId": 1049064,
    "name": "F Zephra Spear",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 489,
    "dbId": 1049065,
    "name": "F Zilbolt Spear",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 490,
    "dbId": 1049066,
    "name": "F Snowcap Staff",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 491,
    "dbId": 1049067,
    "name": "F The Trampler",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 492,
    "dbId": 1049068,
    "name": "F Carnage Hammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 493,
    "dbId": 1049069,
    "name": "F Bloodbath Hammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 495,
    "dbId": 1049071,
    "name": "F Cutie Moon Rod",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  }
];

export const PALICO_HELMETS: PalicoEquipmentEntry[] = [
  {
    "id": 1,
    "dbId": 1114113,
    "name": "F Acorn Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 2,
    "dbId": 1114114,
    "name": "F Bherna Hood",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 3,
    "dbId": 1114115,
    "name": "F Alloy Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 4,
    "dbId": 1114116,
    "name": "F Bone Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 5,
    "dbId": 1114117,
    "name": "F Jaggi Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 6,
    "dbId": 1114118,
    "name": "F Hunting Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 7,
    "dbId": 1114119,
    "name": "F Mafumofu Hood",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 8,
    "dbId": 1114120,
    "name": "F Yukumo Kasa",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 9,
    "dbId": 1114121,
    "name": "F Alta Hat",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 10,
    "dbId": 1114122,
    "name": "F Rheno Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 11,
    "dbId": 1114123,
    "name": "F Bnaha Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 12,
    "dbId": 1114124,
    "name": "F Maccao Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 13,
    "dbId": 1114125,
    "name": "F Velociprey Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 14,
    "dbId": 1114126,
    "name": "F Bulldrome Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 15,
    "dbId": 1114127,
    "name": "F Arzuros Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 16,
    "dbId": 1114128,
    "name": "F Genprey Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 17,
    "dbId": 1114129,
    "name": "F Cephalos Hat",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 18,
    "dbId": 1114130,
    "name": "F Stone Head",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 19,
    "dbId": 1114131,
    "name": "F Venombee Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 20,
    "dbId": 1114132,
    "name": "F Gourmet Toque",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 21,
    "dbId": 1114133,
    "name": "F Moofy Head",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 22,
    "dbId": 1114134,
    "name": "F Aptonoth Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 23,
    "dbId": 1114135,
    "name": "F Popo Head",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 24,
    "dbId": 1114136,
    "name": "F Gargwa Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 25,
    "dbId": 1114137,
    "name": "F Ioprey Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 26,
    "dbId": 1114138,
    "name": "F Lagombi Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 27,
    "dbId": 1114139,
    "name": "F Kut-Ku Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 28,
    "dbId": 1114140,
    "name": "F Gypceros Crest",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 29,
    "dbId": 1114141,
    "name": "F Cabra Horn",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 30,
    "dbId": 1114142,
    "name": "F Daimyo Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 31,
    "dbId": 1114143,
    "name": "F Ludroth Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 32,
    "dbId": 1114144,
    "name": "F Khezu Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 33,
    "dbId": 1114145,
    "name": "F Nibel Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 34,
    "dbId": 1114146,
    "name": "F Scholarly Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 35,
    "dbId": 1114147,
    "name": "F Derring Galea",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 36,
    "dbId": 1114148,
    "name": "F Edel Pigtails",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 37,
    "dbId": 1114149,
    "name": "F Kittendant Hood",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 38,
    "dbId": 1114150,
    "name": "F Mosgharl Hat",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 39,
    "dbId": 1114151,
    "name": "F Larinoth Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 40,
    "dbId": 1114152,
    "name": "F Death Stench Hood",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 41,
    "dbId": 1114153,
    "name": "F Marauder Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 42,
    "dbId": 1114154,
    "name": "F Volvi Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 43,
    "dbId": 1114155,
    "name": "F Malfestio Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 44,
    "dbId": 1114156,
    "name": "F Rathian Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 45,
    "dbId": 1114157,
    "name": "F Blango Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 46,
    "dbId": 1114158,
    "name": "F Ceanataur Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 47,
    "dbId": 1114159,
    "name": "F Naja Turban",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 48,
    "dbId": 1114160,
    "name": "F Narga Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 49,
    "dbId": 1114161,
    "name": "F Maiden Hood",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 50,
    "dbId": 1114162,
    "name": "F Helper Hood",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 51,
    "dbId": 1114163,
    "name": "F Pretty Toque",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 52,
    "dbId": 1114164,
    "name": "F Chaos Bulbs",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 53,
    "dbId": 1114165,
    "name": "F El Dora Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 54,
    "dbId": 1114166,
    "name": "F Artian Core",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 55,
    "dbId": 1114167,
    "name": "F Garuga Hood",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 56,
    "dbId": 1114168,
    "name": "F Uragaan Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 57,
    "dbId": 1114169,
    "name": "F Rathalos Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 58,
    "dbId": 1114170,
    "name": "F Lagia Tricorne",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 59,
    "dbId": 1114171,
    "name": "F Astalos Mask",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 60,
    "dbId": 1114172,
    "name": "F Gammoth Collar",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 61,
    "dbId": 1114173,
    "name": "F Mizutsune Kasa",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 62,
    "dbId": 1114174,
    "name": "F Guild Headgear",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 63,
    "dbId": 1114175,
    "name": "F Glavenus Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 64,
    "dbId": 1114176,
    "name": "F Zinogre Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 65,
    "dbId": 1114177,
    "name": "F Gore Horror",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 66,
    "dbId": 1114178,
    "name": "F Seregios Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 67,
    "dbId": 1114179,
    "name": "F Tigrex Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 68,
    "dbId": 1114180,
    "name": "F Kirin Horn",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 69,
    "dbId": 1114181,
    "name": "F Brachy Headgear",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 70,
    "dbId": 1114182,
    "name": "F Angel Halo",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 71,
    "dbId": 1114183,
    "name": "F Kushala Glare",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 72,
    "dbId": 1114184,
    "name": "F Genie Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 73,
    "dbId": 1114185,
    "name": "F Kaiser Periwig",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 74,
    "dbId": 1114186,
    "name": "F Husk Mask",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 75,
    "dbId": 1114187,
    "name": "F Acorn Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 76,
    "dbId": 1114188,
    "name": "F Bherna Hood S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 77,
    "dbId": 1114189,
    "name": "F Hunting Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 78,
    "dbId": 1114190,
    "name": "F Mafumofu Hood S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 79,
    "dbId": 1114191,
    "name": "F Yukumo Kasa S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 80,
    "dbId": 1114192,
    "name": "F Gourmet Toque S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 81,
    "dbId": 1114193,
    "name": "F Moofy Head S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 82,
    "dbId": 1114194,
    "name": "F Aptonoth Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 83,
    "dbId": 1114195,
    "name": "F Popo Head S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 84,
    "dbId": 1114196,
    "name": "F Gargwa Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 85,
    "dbId": 1114197,
    "name": "F Larinoth Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 86,
    "dbId": 1114198,
    "name": "F Alloy Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 87,
    "dbId": 1114199,
    "name": "F Bone Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 88,
    "dbId": 1114200,
    "name": "F Alta Hat S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 89,
    "dbId": 1114201,
    "name": "F Bnaha Cap S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 90,
    "dbId": 1114202,
    "name": "F Jaggi Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 91,
    "dbId": 1114203,
    "name": "F Rheno Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 92,
    "dbId": 1114204,
    "name": "F Slagtoth Hood",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 93,
    "dbId": 1114205,
    "name": "F Maccao Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 94,
    "dbId": 1114206,
    "name": "F Velociprey Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 95,
    "dbId": 1114207,
    "name": "F Bulldrome Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 96,
    "dbId": 1114208,
    "name": "F Arzuros Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 97,
    "dbId": 1114209,
    "name": "F Genprey Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 98,
    "dbId": 1114210,
    "name": "F Lagombi Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 99,
    "dbId": 1114211,
    "name": "F Cephalos Hat S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 100,
    "dbId": 1114212,
    "name": "F Kut-Ku Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 101,
    "dbId": 1114213,
    "name": "F Gypceros Crest S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 102,
    "dbId": 1114214,
    "name": "F Cabra Horn S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 103,
    "dbId": 1114215,
    "name": "F Daimyo Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 104,
    "dbId": 1114216,
    "name": "F Ludroth Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 105,
    "dbId": 1114217,
    "name": "F Kecha Cap",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 106,
    "dbId": 1114218,
    "name": "F Ladybug Cap",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 107,
    "dbId": 1114219,
    "name": "F Lecturer's Hood",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 108,
    "dbId": 1114220,
    "name": "F Guide's Hood",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 109,
    "dbId": 1114221,
    "name": "F Sailor Hat",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 110,
    "dbId": 1114222,
    "name": "F Stone King Head",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 111,
    "dbId": 1114223,
    "name": "F Venombee Cap S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 112,
    "dbId": 1114224,
    "name": "F Mosgharl Hat S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 113,
    "dbId": 1114225,
    "name": "F Marauder Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 114,
    "dbId": 1114226,
    "name": "F Ioprey Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 115,
    "dbId": 1114227,
    "name": "F Volvi Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 116,
    "dbId": 1114228,
    "name": "F Khezu Catnurse S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 117,
    "dbId": 1114229,
    "name": "F Nibel Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 118,
    "dbId": 1114230,
    "name": "F Malfestio Mask S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 119,
    "dbId": 1114231,
    "name": "F Rathian Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 120,
    "dbId": 1114232,
    "name": "F Blango Mask S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 121,
    "dbId": 1114233,
    "name": "F Ceanataur Mask S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 122,
    "dbId": 1114234,
    "name": "F Naja Turban S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 123,
    "dbId": 1114235,
    "name": "F Narga Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 124,
    "dbId": 1114236,
    "name": "F Garuga Hood S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 125,
    "dbId": 1114237,
    "name": "F Uragaan Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 126,
    "dbId": 1114238,
    "name": "F Zamtrios Helmet",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 127,
    "dbId": 1114239,
    "name": "F Plesioth Cap",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 128,
    "dbId": 1114240,
    "name": "F Lava Helm",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 129,
    "dbId": 1114241,
    "name": "F Edel Pigtails S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 130,
    "dbId": 1114242,
    "name": "F Kittendant Hood S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 131,
    "dbId": 1114243,
    "name": "F Acorn Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 132,
    "dbId": 1114244,
    "name": "F Pincer Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 133,
    "dbId": 1114245,
    "name": "F Chaos Bulbs+",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 134,
    "dbId": 1114246,
    "name": "F Death Stench Hood S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 135,
    "dbId": 1114247,
    "name": "F El Dora Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 136,
    "dbId": 1114248,
    "name": "F Artian Core S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 137,
    "dbId": 1114249,
    "name": "F Lagia Triad S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 138,
    "dbId": 1114250,
    "name": "F Glavenus Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 139,
    "dbId": 1114251,
    "name": "F Astalos Mask S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 140,
    "dbId": 1114252,
    "name": "F Gammoth Collar S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 141,
    "dbId": 1114253,
    "name": "F Mizutsune Kasa S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 142,
    "dbId": 1114254,
    "name": "F Rathalos Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 143,
    "dbId": 1114255,
    "name": "F Zinogre Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 144,
    "dbId": 1114256,
    "name": "F Gore Horror S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 145,
    "dbId": 1114257,
    "name": "F Tigrex Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 146,
    "dbId": 1114258,
    "name": "F Seltas Head",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 147,
    "dbId": 1114259,
    "name": "F Agnaktor Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 148,
    "dbId": 1114260,
    "name": "F Duram Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 149,
    "dbId": 1114261,
    "name": "F Kirin Horn S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 150,
    "dbId": 1114262,
    "name": "F Puppeteer Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 151,
    "dbId": 1114263,
    "name": "F Vangis Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 152,
    "dbId": 1114264,
    "name": "F Kut-Ku Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 153,
    "dbId": 1114265,
    "name": "F Kecha Cap R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 154,
    "dbId": 1114266,
    "name": "F Gypceros Crest R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 155,
    "dbId": 1114267,
    "name": "F Cabra Horn R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 156,
    "dbId": 1114268,
    "name": "F Daimyo Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 157,
    "dbId": 1114269,
    "name": "F Ludroth Helm R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 158,
    "dbId": 1114270,
    "name": "F Malfestio Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 159,
    "dbId": 1114271,
    "name": "F Zamtrios Helmet R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 160,
    "dbId": 1114272,
    "name": "F Khezu Cap R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 161,
    "dbId": 1114273,
    "name": "F Rathian Helm R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 162,
    "dbId": 1114274,
    "name": "F Nibel Helm R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 163,
    "dbId": 1114275,
    "name": "F Plesioth Cap R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 164,
    "dbId": 1114276,
    "name": "F Blango Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 165,
    "dbId": 1114277,
    "name": "F Scholarly Cap S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 166,
    "dbId": 1114278,
    "name": "F Maiden Hood S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 167,
    "dbId": 1114279,
    "name": "F Helper Hood S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 168,
    "dbId": 1114280,
    "name": "F Beautiful Toque",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 169,
    "dbId": 1114281,
    "name": "F Ultimate Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 170,
    "dbId": 1114282,
    "name": "F Guild Headgear S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 171,
    "dbId": 1114283,
    "name": "F Soul Hairpiece",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 172,
    "dbId": 1114284,
    "name": "F Transpurrter Kasa",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 173,
    "dbId": 1114285,
    "name": "F Dirty Locks",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 174,
    "dbId": 1114286,
    "name": "F D'Artanyan's Hat",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 175,
    "dbId": 1114287,
    "name": "F Master's Helm",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 176,
    "dbId": 1114288,
    "name": "F Derring Galea S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 177,
    "dbId": 1114289,
    "name": "F Seregios Helm S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 178,
    "dbId": 1114290,
    "name": "F Brachy Noggin S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 179,
    "dbId": 1114291,
    "name": "F Angel Aura S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 180,
    "dbId": 1114292,
    "name": "F Husk Mask S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 181,
    "dbId": 1114293,
    "name": "F Nakarkos Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 182,
    "dbId": 1114294,
    "name": "F Lava Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 183,
    "dbId": 1114295,
    "name": "F Ceanataur Mask R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 184,
    "dbId": 1114296,
    "name": "F Narga Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 185,
    "dbId": 1114297,
    "name": "F Naja Turban R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 186,
    "dbId": 1114298,
    "name": "F Garuga Hood R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 187,
    "dbId": 1114299,
    "name": "F Uragaan Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 188,
    "dbId": 1114300,
    "name": "F Seltas Head R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 189,
    "dbId": 1114301,
    "name": "F Rathalos Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 190,
    "dbId": 1114302,
    "name": "F Lagia Triad R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 191,
    "dbId": 1114303,
    "name": "F Zinogre Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 193,
    "dbId": 1114305,
    "name": "F Kushala Glower S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 194,
    "dbId": 1114306,
    "name": "F Genie Helm S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 195,
    "dbId": 1114307,
    "name": "F Kaiser Crown",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 196,
    "dbId": 1114308,
    "name": "F Akantor Visage",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 197,
    "dbId": 1114309,
    "name": "F Ukanlos Visage",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 198,
    "dbId": 1114310,
    "name": "F Majestic Crown",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 199,
    "dbId": 1114311,
    "name": "F Escador Wisdom",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 200,
    "dbId": 1114312,
    "name": "F Mizutsune Kasa R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 201,
    "dbId": 1114313,
    "name": "F Astalos Mask R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 202,
    "dbId": 1114314,
    "name": "F Gammoth Collar R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 203,
    "dbId": 1114315,
    "name": "F Glavenus Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 204,
    "dbId": 1114316,
    "name": "F Agnaktor Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 205,
    "dbId": 1114317,
    "name": "F Gore Horror R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 206,
    "dbId": 1114318,
    "name": "F Seregios Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 207,
    "dbId": 1114319,
    "name": "F Duram Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 208,
    "dbId": 1114320,
    "name": "F Tigrex Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 209,
    "dbId": 1114321,
    "name": "F Brachy Head R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 210,
    "dbId": 1114322,
    "name": "F Puppeteer Mask R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 211,
    "dbId": 1114323,
    "name": "F Vangis Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 212,
    "dbId": 1114324,
    "name": "F Strange Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 213,
    "dbId": 1114325,
    "name": "F Strange Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 214,
    "dbId": 1114326,
    "name": "F Redhelm Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 215,
    "dbId": 1114327,
    "name": "F Redhelm Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 216,
    "dbId": 1114328,
    "name": "F Snowbaron Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 217,
    "dbId": 1114329,
    "name": "F Snowbaron Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 218,
    "dbId": 1114330,
    "name": "F Stonefist Mask",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 219,
    "dbId": 1114331,
    "name": "F Stonefist Mask S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 220,
    "dbId": 1114332,
    "name": "F Dreadqueen Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 221,
    "dbId": 1114333,
    "name": "F Dreadqueen Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 222,
    "dbId": 1114334,
    "name": "F Drilltusk Horn",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 223,
    "dbId": 1114335,
    "name": "F Drilltusk Horn S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 224,
    "dbId": 1114336,
    "name": "F Silverwind Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 225,
    "dbId": 1114337,
    "name": "F Silverwind Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 226,
    "dbId": 1114338,
    "name": "F Crystalbeard Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 227,
    "dbId": 1114339,
    "name": "F Crystalbeard Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 228,
    "dbId": 1114340,
    "name": "F Deadeye Hood",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 229,
    "dbId": 1114341,
    "name": "F Deadeye Hood S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 230,
    "dbId": 1114342,
    "name": "F Dreadking Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 231,
    "dbId": 1114343,
    "name": "F Dreadking Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 232,
    "dbId": 1114344,
    "name": "F Thunderlord Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 233,
    "dbId": 1114345,
    "name": "F Thunderlord Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 234,
    "dbId": 1114346,
    "name": "F Grimclaw Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 235,
    "dbId": 1114347,
    "name": "F Grimclaw Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 236,
    "dbId": 1114348,
    "name": "F Hellblade Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 237,
    "dbId": 1114349,
    "name": "F Hellblade Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 240,
    "dbId": 1114352,
    "name": "F Treasure Crown J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 241,
    "dbId": 1114353,
    "name": "F Pirate Bandanna J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 242,
    "dbId": 1114354,
    "name": "F Legendary Helm J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 243,
    "dbId": 1114355,
    "name": "F Greedy Skull J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 245,
    "dbId": 1114357,
    "name": "F Monqlo Cap",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 247,
    "dbId": 1114359,
    "name": "F Baby Tiga Hat",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 249,
    "dbId": 1114361,
    "name": "F Postman Beret",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 250,
    "dbId": 1114362,
    "name": "F Booyah Pompadour",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 251,
    "dbId": 1114363,
    "name": "F Sohoku Helmet",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 255,
    "dbId": 1114367,
    "name": "F Dark Meowgic Hood",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 256,
    "dbId": 1114368,
    "name": "F Booty Crown J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 257,
    "dbId": 1114369,
    "name": "F Buccaneer Bandanna J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 258,
    "dbId": 1114370,
    "name": "F King Helm J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 259,
    "dbId": 1114371,
    "name": "F Avaricious Skull J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 261,
    "dbId": 1114373,
    "name": "F Monqlo Cap S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 267,
    "dbId": 1114379,
    "name": "F Link Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 268,
    "dbId": 1114380,
    "name": "F Fox Mic",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 269,
    "dbId": 1114381,
    "name": "F Mario Cap",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 270,
    "dbId": 1114382,
    "name": "F Luigi Cap",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 273,
    "dbId": 1114385,
    "name": "F Helm of Purrity",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 274,
    "dbId": 1114386,
    "name": "F Chun Chignon",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 276,
    "dbId": 1114388,
    "name": "F Dante Wig",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 277,
    "dbId": 1114389,
    "name": "F Mega Helmet",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 278,
    "dbId": 1114390,
    "name": "F Melodic Curls",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 279,
    "dbId": 1114391,
    "name": "F Baby Tiga Hat S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 280,
    "dbId": 1114392,
    "name": "F Sunsnug Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 282,
    "dbId": 1114394,
    "name": "F Meowniac's Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 283,
    "dbId": 1114395,
    "name": "F Pep Squad Cap",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 284,
    "dbId": 1114396,
    "name": "F Giaprey Helm",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 285,
    "dbId": 1114397,
    "name": "F Conga Steeple",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 286,
    "dbId": 1114398,
    "name": "F Barroth Helm",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 287,
    "dbId": 1114399,
    "name": "F Pleasant Ribbons",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 288,
    "dbId": 1114400,
    "name": "F Wisdom Hat",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 289,
    "dbId": 1114401,
    "name": "F Basarios Helm",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 290,
    "dbId": 1114402,
    "name": "F Scylla Mask",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 291,
    "dbId": 1114403,
    "name": "F Cheerful Cap",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 292,
    "dbId": 1114404,
    "name": "F Mariner Hood",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 293,
    "dbId": 1114405,
    "name": "F Barioth Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 294,
    "dbId": 1114406,
    "name": "F Grav Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 295,
    "dbId": 1114407,
    "name": "F Diablos Helm",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 296,
    "dbId": 1114408,
    "name": "F Valstrax Helm",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 297,
    "dbId": 1114409,
    "name": "F Acorn Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 298,
    "dbId": 1114410,
    "name": "F Bherna Hood X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 299,
    "dbId": 1114411,
    "name": "F Gourmet Toque X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 300,
    "dbId": 1114412,
    "name": "F Moofy Head X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 301,
    "dbId": 1114413,
    "name": "F Aptonoth Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 302,
    "dbId": 1114414,
    "name": "F Popo Head X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 303,
    "dbId": 1114415,
    "name": "F Gargwa Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 304,
    "dbId": 1114416,
    "name": "F Larinoth Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 306,
    "dbId": 1114418,
    "name": "F Alloy Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 307,
    "dbId": 1114419,
    "name": "F Bone Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 308,
    "dbId": 1114420,
    "name": "F Alta Hat X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 309,
    "dbId": 1114421,
    "name": "F Bnaha Cap X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 310,
    "dbId": 1114422,
    "name": "F Jaggi Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 311,
    "dbId": 1114423,
    "name": "F Rheno Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 312,
    "dbId": 1114424,
    "name": "F Slagtoth Hood X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 313,
    "dbId": 1114425,
    "name": "F Maccao Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 314,
    "dbId": 1114426,
    "name": "F Velociprey Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 315,
    "dbId": 1114427,
    "name": "F Bulldrome Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 316,
    "dbId": 1114428,
    "name": "F Arzuros Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 317,
    "dbId": 1114429,
    "name": "F Giaprey Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 318,
    "dbId": 1114430,
    "name": "F Genprey Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 319,
    "dbId": 1114431,
    "name": "F Lagombi Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 320,
    "dbId": 1114432,
    "name": "F Cephalos Hat X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 321,
    "dbId": 1114433,
    "name": "F Kut-Ku Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 322,
    "dbId": 1114434,
    "name": "F Gypceros Crest X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 323,
    "dbId": 1114435,
    "name": "F Cabra Horn X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 324,
    "dbId": 1114436,
    "name": "F Daimyo Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 325,
    "dbId": 1114437,
    "name": "F Ludroth Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 326,
    "dbId": 1114438,
    "name": "F Kecha Cap X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 327,
    "dbId": 1114439,
    "name": "F Maiden Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 328,
    "dbId": 1114440,
    "name": "F Exquisite Toque",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 329,
    "dbId": 1114441,
    "name": "F Ladybug Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 330,
    "dbId": 1114442,
    "name": "F Odd Acorn Mask",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 331,
    "dbId": 1114443,
    "name": "F Odd Pincer Mask",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 332,
    "dbId": 1114444,
    "name": "F Lecturer's Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 333,
    "dbId": 1114445,
    "name": "F Stone God Head",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 334,
    "dbId": 1114446,
    "name": "F Venombee Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 335,
    "dbId": 1114447,
    "name": "F Mosgharl Hat X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 336,
    "dbId": 1114448,
    "name": "F Marauder Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 337,
    "dbId": 1114449,
    "name": "F Pleasant Ribbons X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 338,
    "dbId": 1114450,
    "name": "F Wisdom Hat X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 339,
    "dbId": 1114451,
    "name": "F Postman Beret X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 340,
    "dbId": 1114452,
    "name": "F Ioprey Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 341,
    "dbId": 1114453,
    "name": "F Volvi Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 342,
    "dbId": 1114454,
    "name": "F Basarios Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 343,
    "dbId": 1114455,
    "name": "F Conga Steeple X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 344,
    "dbId": 1114456,
    "name": "F Barroth Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 345,
    "dbId": 1114457,
    "name": "F Khezu Catnurse X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 346,
    "dbId": 1114458,
    "name": "F Nibel Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 347,
    "dbId": 1114459,
    "name": "F Malfestio Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 348,
    "dbId": 1114460,
    "name": "F Rathian Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 349,
    "dbId": 1114461,
    "name": "F Blango Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 350,
    "dbId": 1114462,
    "name": "F Ceanataur Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 351,
    "dbId": 1114463,
    "name": "F Scylla Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 352,
    "dbId": 1114464,
    "name": "F Naja Turban X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 353,
    "dbId": 1114465,
    "name": "F Narga Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 354,
    "dbId": 1114466,
    "name": "F Zamtrios Helmet X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 355,
    "dbId": 1114467,
    "name": "F Plesioth Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 356,
    "dbId": 1114468,
    "name": "F Kut-Ku Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 357,
    "dbId": 1114469,
    "name": "F Kecha Cap XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 358,
    "dbId": 1114470,
    "name": "F Gypceros Crest XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 359,
    "dbId": 1114471,
    "name": "F Cabra Horn XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 360,
    "dbId": 1114472,
    "name": "F Daimyo Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 361,
    "dbId": 1114473,
    "name": "F Ludroth Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 362,
    "dbId": 1114474,
    "name": "F Scholarly Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 363,
    "dbId": 1114475,
    "name": "F Kittendant Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 364,
    "dbId": 1114476,
    "name": "F Derring Galea X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 365,
    "dbId": 1114477,
    "name": "F Transpurrrrter Kasa",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 366,
    "dbId": 1114478,
    "name": "F Ultimate Mask+",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 367,
    "dbId": 1114479,
    "name": "F Guide's Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 368,
    "dbId": 1114480,
    "name": "F Sailor Hat X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 369,
    "dbId": 1114481,
    "name": "F Grand Chaos Bulbs",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 370,
    "dbId": 1114482,
    "name": "F Death Stench Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 371,
    "dbId": 1114483,
    "name": "F El Dora Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 372,
    "dbId": 1114484,
    "name": "F Artian Core X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 373,
    "dbId": 1114485,
    "name": "F Cheerful Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 374,
    "dbId": 1114486,
    "name": "F Mariner Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 375,
    "dbId": 1114487,
    "name": "F Cute Ribbon",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 376,
    "dbId": 1114488,
    "name": "F Garuga Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 377,
    "dbId": 1114489,
    "name": "F Uragaan Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 378,
    "dbId": 1114490,
    "name": "F Lava Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 379,
    "dbId": 1114491,
    "name": "F Lagia Triad X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 380,
    "dbId": 1114492,
    "name": "F Glavenus Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 381,
    "dbId": 1114493,
    "name": "F Astalos Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 382,
    "dbId": 1114494,
    "name": "F Gammoth Collar X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 383,
    "dbId": 1114495,
    "name": "F Mizutsune Kasa X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 384,
    "dbId": 1114496,
    "name": "F Barioth Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 385,
    "dbId": 1114497,
    "name": "F Rathalos Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 386,
    "dbId": 1114498,
    "name": "F Zinogre Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 387,
    "dbId": 1114499,
    "name": "F Grav Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 388,
    "dbId": 1114500,
    "name": "F Gore Horror X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 389,
    "dbId": 1114501,
    "name": "F Tigrex Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 390,
    "dbId": 1114502,
    "name": "F Seltas Head X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 391,
    "dbId": 1114503,
    "name": "F Kirin Horn X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 392,
    "dbId": 1114504,
    "name": "F Borealis Crown",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 393,
    "dbId": 1114505,
    "name": "F Basarios Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 394,
    "dbId": 1114506,
    "name": "F Conga Steeple XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 395,
    "dbId": 1114507,
    "name": "F Barroth Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 396,
    "dbId": 1114508,
    "name": "F Khezu Cap XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 397,
    "dbId": 1114509,
    "name": "F Nibel Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 398,
    "dbId": 1114510,
    "name": "F Malfestio Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 399,
    "dbId": 1114511,
    "name": "F Rathian Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 400,
    "dbId": 1114512,
    "name": "F Blango Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 401,
    "dbId": 1114513,
    "name": "F Ceanataur Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 402,
    "dbId": 1114514,
    "name": "F Scylla Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 403,
    "dbId": 1114515,
    "name": "F Naja Turban XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 404,
    "dbId": 1114516,
    "name": "F Narga Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 405,
    "dbId": 1114517,
    "name": "F Zamtrios Helmet XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 406,
    "dbId": 1114518,
    "name": "F Plesioth Cap XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 407,
    "dbId": 1114519,
    "name": "F Guild Headgear X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 408,
    "dbId": 1114520,
    "name": "F Spirit Hairpiece",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 409,
    "dbId": 1114521,
    "name": "F Pro Dirty Locks",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 410,
    "dbId": 1114522,
    "name": "F D'Artanyan Hero Hat",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 411,
    "dbId": 1114523,
    "name": "F Master's Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 412,
    "dbId": 1114524,
    "name": "F Barmaid's Cap",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 413,
    "dbId": 1114525,
    "name": "F Barman's Shades",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 414,
    "dbId": 1114526,
    "name": "F Agnaktor Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 415,
    "dbId": 1114527,
    "name": "F Duram Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 416,
    "dbId": 1114528,
    "name": "F Seregios Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 417,
    "dbId": 1114529,
    "name": "F Diablos Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 418,
    "dbId": 1114530,
    "name": "F Brachy Noggin X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 419,
    "dbId": 1114531,
    "name": "F Angel Aura X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 420,
    "dbId": 1114532,
    "name": "F Valstrax Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 421,
    "dbId": 1114533,
    "name": "F Puppeteer Mask+",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 422,
    "dbId": 1114534,
    "name": "F Vangis Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 423,
    "dbId": 1114535,
    "name": "F Chaos Hood",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 424,
    "dbId": 1114536,
    "name": "F Kushala Snarl X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  }
];

export const PALICO_BODY_ARMOR: PalicoEquipmentEntry[] = [
  {
    "id": 1,
    "dbId": 1179649,
    "name": "F Acorn Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 2,
    "dbId": 1179650,
    "name": "F Bherna Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 3,
    "dbId": 1179651,
    "name": "F Alloy Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 4,
    "dbId": 1179652,
    "name": "F Bone Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 5,
    "dbId": 1179653,
    "name": "F Jaggi Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 6,
    "dbId": 1179654,
    "name": "F Hunting Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 7,
    "dbId": 1179655,
    "name": "F Mafumofu Vest",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 8,
    "dbId": 1179656,
    "name": "F Yukumo Dogi",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 9,
    "dbId": 1179657,
    "name": "F Alta Shirt",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 10,
    "dbId": 1179658,
    "name": "F Rheno Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 11,
    "dbId": 1179659,
    "name": "F Bnaha Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 12,
    "dbId": 1179660,
    "name": "F Maccao Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 13,
    "dbId": 1179661,
    "name": "F Velociprey Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 14,
    "dbId": 1179662,
    "name": "F Bulldrome Vest",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 15,
    "dbId": 1179663,
    "name": "F Arzuros Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 16,
    "dbId": 1179664,
    "name": "F Genprey Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 17,
    "dbId": 1179665,
    "name": "F Cephalos Dress",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 18,
    "dbId": 1179666,
    "name": "F Stone Body",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 19,
    "dbId": 1179667,
    "name": "F Venombee Wings",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 20,
    "dbId": 1179668,
    "name": "F Gourmet Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 21,
    "dbId": 1179669,
    "name": "F Moofy Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 22,
    "dbId": 1179670,
    "name": "F Aptonoth Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 23,
    "dbId": 1179671,
    "name": "F Popo Wear",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 24,
    "dbId": 1179672,
    "name": "F Gargwa Vest",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 25,
    "dbId": 1179673,
    "name": "F Ioprey Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 26,
    "dbId": 1179674,
    "name": "F Lagombi Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 27,
    "dbId": 1179675,
    "name": "F Kut-Ku Wear",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 28,
    "dbId": 1179676,
    "name": "F Gypceros Cloth",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 29,
    "dbId": 1179677,
    "name": "F Cabra Wrap",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 30,
    "dbId": 1179678,
    "name": "F Daimyo Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 31,
    "dbId": 1179679,
    "name": "F Ludroth Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 32,
    "dbId": 1179680,
    "name": "F Khezu Apron",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 33,
    "dbId": 1179681,
    "name": "F Nibel Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 34,
    "dbId": 1179682,
    "name": "F Scholarly Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 35,
    "dbId": 1179683,
    "name": "F Derring Lorica",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 36,
    "dbId": 1179684,
    "name": "F Edel Frills",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 37,
    "dbId": 1179685,
    "name": "F Kittendant Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 38,
    "dbId": 1179686,
    "name": "F Mosgharl Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 39,
    "dbId": 1179687,
    "name": "F Larinoth Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 40,
    "dbId": 1179688,
    "name": "F Death Stench Coat",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 41,
    "dbId": 1179689,
    "name": "F Marauder Armor",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 42,
    "dbId": 1179690,
    "name": "F Volvi Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 43,
    "dbId": 1179691,
    "name": "F Malfestio Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 44,
    "dbId": 1179692,
    "name": "F Rathian Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 45,
    "dbId": 1179693,
    "name": "F Blango Garb",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 46,
    "dbId": 1179694,
    "name": "F Ceanataur Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 47,
    "dbId": 1179695,
    "name": "F Naja Sirwal",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 48,
    "dbId": 1179696,
    "name": "F Narga Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 49,
    "dbId": 1179697,
    "name": "F Maiden Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 50,
    "dbId": 1179698,
    "name": "F Helper Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 51,
    "dbId": 1179699,
    "name": "F Pretty Robe",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 52,
    "dbId": 1179700,
    "name": "F Chaos Skirt",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 53,
    "dbId": 1179701,
    "name": "F El Dora Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 54,
    "dbId": 1179702,
    "name": "F Artian Gear",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 55,
    "dbId": 1179703,
    "name": "F Garuga Robe",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 56,
    "dbId": 1179704,
    "name": "F Uragaan Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 57,
    "dbId": 1179705,
    "name": "F Rathalos Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 58,
    "dbId": 1179706,
    "name": "F Lagia Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 59,
    "dbId": 1179707,
    "name": "F Astalos Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 60,
    "dbId": 1179708,
    "name": "F Gammoth Coat",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 61,
    "dbId": 1179709,
    "name": "F Mizutsune Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 62,
    "dbId": 1179710,
    "name": "F Guild Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 63,
    "dbId": 1179711,
    "name": "F Glavenus Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 64,
    "dbId": 1179712,
    "name": "F Zinogre Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 65,
    "dbId": 1179713,
    "name": "F Gore Ghost",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 66,
    "dbId": 1179714,
    "name": "F Seregios Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 67,
    "dbId": 1179715,
    "name": "F Tigrex Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 68,
    "dbId": 1179716,
    "name": "F Kirin Vest",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 69,
    "dbId": 1179717,
    "name": "F Brachy Gloves",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 70,
    "dbId": 1179718,
    "name": "F Angel Feathers",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 71,
    "dbId": 1179719,
    "name": "F Kushala Cista",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 72,
    "dbId": 1179720,
    "name": "F Genie Carpet",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 73,
    "dbId": 1179721,
    "name": "F Kaiser Robe",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 74,
    "dbId": 1179722,
    "name": "F Husk Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 75,
    "dbId": 1179723,
    "name": "F Acorn Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 76,
    "dbId": 1179724,
    "name": "F Bherna Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 77,
    "dbId": 1179725,
    "name": "F Hunting Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 78,
    "dbId": 1179726,
    "name": "F Mafumofu Vest S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 79,
    "dbId": 1179727,
    "name": "F Yukumo Dogi S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 80,
    "dbId": 1179728,
    "name": "F Gourmet Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 81,
    "dbId": 1179729,
    "name": "F Moofy Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 82,
    "dbId": 1179730,
    "name": "F Aptonoth Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 83,
    "dbId": 1179731,
    "name": "F Popo Wear S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 84,
    "dbId": 1179732,
    "name": "F Gargwa Vest S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 85,
    "dbId": 1179733,
    "name": "F Larinoth Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 86,
    "dbId": 1179734,
    "name": "F Alloy Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 87,
    "dbId": 1179735,
    "name": "F Bone Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 88,
    "dbId": 1179736,
    "name": "F Alta Shirt S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 89,
    "dbId": 1179737,
    "name": "F Bnaha Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 90,
    "dbId": 1179738,
    "name": "F Jaggi Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 91,
    "dbId": 1179739,
    "name": "F Rheno Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 92,
    "dbId": 1179740,
    "name": "F Slagtoth Cape",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 93,
    "dbId": 1179741,
    "name": "F Maccao Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 94,
    "dbId": 1179742,
    "name": "F Velociprey Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 95,
    "dbId": 1179743,
    "name": "F Bulldrome Vest S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 96,
    "dbId": 1179744,
    "name": "F Arzuros Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 97,
    "dbId": 1179745,
    "name": "F Genprey Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 98,
    "dbId": 1179746,
    "name": "F Lagombi Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 99,
    "dbId": 1179747,
    "name": "F Cephalos Dress S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 100,
    "dbId": 1179748,
    "name": "F Kut-Ku Wear S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 101,
    "dbId": 1179749,
    "name": "F Gypceros Cloth S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 102,
    "dbId": 1179750,
    "name": "F Cabra Wrap S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 103,
    "dbId": 1179751,
    "name": "F Daimyo Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 104,
    "dbId": 1179752,
    "name": "F Ludroth Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 105,
    "dbId": 1179753,
    "name": "F Kecha Coat",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 106,
    "dbId": 1179754,
    "name": "F Ladybug Wings",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 107,
    "dbId": 1179755,
    "name": "F Lecturer's Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 108,
    "dbId": 1179756,
    "name": "F Guide's Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 109,
    "dbId": 1179757,
    "name": "F Sailor Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 110,
    "dbId": 1179758,
    "name": "F Stone King Body",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 111,
    "dbId": 1179759,
    "name": "F Venombee Wings S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 112,
    "dbId": 1179760,
    "name": "F Mosgharl Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 113,
    "dbId": 1179761,
    "name": "F Marauder Armor S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 114,
    "dbId": 1179762,
    "name": "F Ioprey Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 115,
    "dbId": 1179763,
    "name": "F Volvi Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 116,
    "dbId": 1179764,
    "name": "F Khezu Smock S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 117,
    "dbId": 1179765,
    "name": "F Nibel Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 118,
    "dbId": 1179766,
    "name": "F Malfestio Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 119,
    "dbId": 1179767,
    "name": "F Rathian Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 120,
    "dbId": 1179768,
    "name": "F Blango Garb S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 121,
    "dbId": 1179769,
    "name": "F Ceanataur Suit S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 122,
    "dbId": 1179770,
    "name": "F Naja Sirwal S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 123,
    "dbId": 1179771,
    "name": "F Narga Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 124,
    "dbId": 1179772,
    "name": "F Garuga Robe S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 125,
    "dbId": 1179773,
    "name": "F Uragaan Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 126,
    "dbId": 1179774,
    "name": "F Zamtrios Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 127,
    "dbId": 1179775,
    "name": "F Plesioth Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 128,
    "dbId": 1179776,
    "name": "F Lava Mail",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 129,
    "dbId": 1179777,
    "name": "F Edel Frills S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 130,
    "dbId": 1179778,
    "name": "F Kittendant Suit S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 131,
    "dbId": 1179779,
    "name": "F Shakalaka Duds",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 132,
    "dbId": 1179780,
    "name": "F Straw Raincoat",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 133,
    "dbId": 1179781,
    "name": "F Chaos Skirt+",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 134,
    "dbId": 1179782,
    "name": "F Death Stench Coat S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 135,
    "dbId": 1179783,
    "name": "F El Dora Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 136,
    "dbId": 1179784,
    "name": "F Artian Gear S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 137,
    "dbId": 1179785,
    "name": "F Lagia Pirate S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 138,
    "dbId": 1179786,
    "name": "F Glavenus Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 139,
    "dbId": 1179787,
    "name": "F Astalos Suit S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 140,
    "dbId": 1179788,
    "name": "F Gammoth Coat S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 141,
    "dbId": 1179789,
    "name": "F Mizutsune Suit S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 142,
    "dbId": 1179790,
    "name": "F Rathalos Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 143,
    "dbId": 1179791,
    "name": "F Zinogre Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 144,
    "dbId": 1179792,
    "name": "F Gore Ghost S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 145,
    "dbId": 1179793,
    "name": "F Tigrex Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 146,
    "dbId": 1179794,
    "name": "F Seltas Body",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 147,
    "dbId": 1179795,
    "name": "F Agnaktor Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 148,
    "dbId": 1179796,
    "name": "F Duram Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 149,
    "dbId": 1179797,
    "name": "F Kirin Vest S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 150,
    "dbId": 1179798,
    "name": "F Puppeteer Garb",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 151,
    "dbId": 1179799,
    "name": "F Vangis Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 152,
    "dbId": 1179800,
    "name": "F Kut-Ku Wear R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 153,
    "dbId": 1179801,
    "name": "F Kecha Coat R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 154,
    "dbId": 1179802,
    "name": "F Gypceros Cloth R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 155,
    "dbId": 1179803,
    "name": "F Cabra Wrap R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 156,
    "dbId": 1179804,
    "name": "F Daimyo Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 157,
    "dbId": 1179805,
    "name": "F Ludroth Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 158,
    "dbId": 1179806,
    "name": "F Malfestio Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 159,
    "dbId": 1179807,
    "name": "F Zamtrios Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 160,
    "dbId": 1179808,
    "name": "F Khezu Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 161,
    "dbId": 1179809,
    "name": "F Rathian Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 162,
    "dbId": 1179810,
    "name": "F Nibel Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 163,
    "dbId": 1179811,
    "name": "F Plesioth Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 164,
    "dbId": 1179812,
    "name": "F Blango Garb R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 165,
    "dbId": 1179813,
    "name": "F Scholarly Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 166,
    "dbId": 1179814,
    "name": "F Maiden Mail S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 167,
    "dbId": 1179815,
    "name": "F Helper Mail S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 168,
    "dbId": 1179816,
    "name": "F Beautiful Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 170,
    "dbId": 1179818,
    "name": "F Guild Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 171,
    "dbId": 1179819,
    "name": "F Arcadia Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 172,
    "dbId": 1179820,
    "name": "F Transpurrter Cape",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 173,
    "dbId": 1179821,
    "name": "F Dirty Hakama",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 174,
    "dbId": 1179822,
    "name": "F D'Artanyan's Cape",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 175,
    "dbId": 1179823,
    "name": "F Master's Mail",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 176,
    "dbId": 1179824,
    "name": "F Derring Lorica S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 177,
    "dbId": 1179825,
    "name": "F Seregios Mail S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 178,
    "dbId": 1179826,
    "name": "F Brachy Fist S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 179,
    "dbId": 1179827,
    "name": "F Angel Down S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 180,
    "dbId": 1179828,
    "name": "F Husk Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 181,
    "dbId": 1179829,
    "name": "F Nakarkos Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 182,
    "dbId": 1179830,
    "name": "F Lava Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 183,
    "dbId": 1179831,
    "name": "F Ceanataur Suit R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 184,
    "dbId": 1179832,
    "name": "F Narga Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 185,
    "dbId": 1179833,
    "name": "F Naja Sirwal R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 186,
    "dbId": 1179834,
    "name": "F Garuga Robe R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 187,
    "dbId": 1179835,
    "name": "F Uragaan Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 188,
    "dbId": 1179836,
    "name": "F Seltas Body R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 189,
    "dbId": 1179837,
    "name": "F Rathalos Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 190,
    "dbId": 1179838,
    "name": "F Lagia Pirate R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 191,
    "dbId": 1179839,
    "name": "F Zinogre Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 192,
    "dbId": 1179840,
    "name": "F Felcote's Coat",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 193,
    "dbId": 1179841,
    "name": "F Kushala Cormi S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 194,
    "dbId": 1179842,
    "name": "F Genie Carpet S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 195,
    "dbId": 1179843,
    "name": "F Kaiser Panoply",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 196,
    "dbId": 1179844,
    "name": "F Akantor Facade",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 197,
    "dbId": 1179845,
    "name": "F Ukanlos Facade",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 198,
    "dbId": 1179846,
    "name": "F Majestic Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 199,
    "dbId": 1179847,
    "name": "F Escador Soul",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 200,
    "dbId": 1179848,
    "name": "F Mizutsune Suit R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 201,
    "dbId": 1179849,
    "name": "F Astalos Suit R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 202,
    "dbId": 1179850,
    "name": "F Gammoth Coat R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 203,
    "dbId": 1179851,
    "name": "F Glavenus Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 204,
    "dbId": 1179852,
    "name": "F Agnaktor Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 205,
    "dbId": 1179853,
    "name": "F Gore Ghost R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 206,
    "dbId": 1179854,
    "name": "F Seregios Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 207,
    "dbId": 1179855,
    "name": "F Duram Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 208,
    "dbId": 1179856,
    "name": "F Tigrex Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 209,
    "dbId": 1179857,
    "name": "F Brachy Gloves R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 210,
    "dbId": 1179858,
    "name": "F Puppeteer Garb R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 211,
    "dbId": 1179859,
    "name": "F Vangis Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 212,
    "dbId": 1179860,
    "name": "F Strange Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 213,
    "dbId": 1179861,
    "name": "F Strange Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 214,
    "dbId": 1179862,
    "name": "F Redhelm Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 215,
    "dbId": 1179863,
    "name": "F Redhelm Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 216,
    "dbId": 1179864,
    "name": "F Snowbaron Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 217,
    "dbId": 1179865,
    "name": "F Snowbaron Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 218,
    "dbId": 1179866,
    "name": "F Stonefist Suit",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 219,
    "dbId": 1179867,
    "name": "F Stonefist Suit S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 220,
    "dbId": 1179868,
    "name": "F Dreadqueen Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 221,
    "dbId": 1179869,
    "name": "F Dreadqueen Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 222,
    "dbId": 1179870,
    "name": "F Drilltusk Wrap",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 223,
    "dbId": 1179871,
    "name": "F Drilltusk Wrap S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 224,
    "dbId": 1179872,
    "name": "F Silverwind Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 225,
    "dbId": 1179873,
    "name": "F Silverwind Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 226,
    "dbId": 1179874,
    "name": "F Crystalbeard Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 227,
    "dbId": 1179875,
    "name": "F Crystalbeard Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 228,
    "dbId": 1179876,
    "name": "F Deadeye Robe",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 229,
    "dbId": 1179877,
    "name": "F Deadeye Robe S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 230,
    "dbId": 1179878,
    "name": "F Dreadking Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 231,
    "dbId": 1179879,
    "name": "F Dreadking Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 232,
    "dbId": 1179880,
    "name": "F Thunderlord Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 233,
    "dbId": 1179881,
    "name": "F Thunderlord Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 234,
    "dbId": 1179882,
    "name": "F Grimclaw Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 235,
    "dbId": 1179883,
    "name": "F Grimclaw Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 236,
    "dbId": 1179884,
    "name": "F Hellblade Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 237,
    "dbId": 1179885,
    "name": "F Hellblade Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 238,
    "dbId": 1179886,
    "name": "F Zombie-kun Costume",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 239,
    "dbId": 1179887,
    "name": "F Happy Outfit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 240,
    "dbId": 1179888,
    "name": "F Treasure Chest J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 241,
    "dbId": 1179889,
    "name": "F Pirate Vest J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 242,
    "dbId": 1179890,
    "name": "F Legendary Suit J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 243,
    "dbId": 1179891,
    "name": "F Greedy Bones J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 244,
    "dbId": 1179892,
    "name": "F Catboard",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 245,
    "dbId": 1179893,
    "name": "F Monqlo Shirt",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 247,
    "dbId": 1179895,
    "name": "F Baby Tiga Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 249,
    "dbId": 1179897,
    "name": "F Postman Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 250,
    "dbId": 1179898,
    "name": "F Booyah Jacket",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 251,
    "dbId": 1179899,
    "name": "F Sohoku Jersey",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 252,
    "dbId": 1179900,
    "name": "F Zombie-kun Wear",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 253,
    "dbId": 1179901,
    "name": "F Grandpaw D Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 254,
    "dbId": 1179902,
    "name": "F Happy Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 255,
    "dbId": 1179903,
    "name": "F Dark Meowgic Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 256,
    "dbId": 1179904,
    "name": "F Booty Chest J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 257,
    "dbId": 1179905,
    "name": "F Buccaneer Vest J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 258,
    "dbId": 1179906,
    "name": "F King Suit J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 259,
    "dbId": 1179907,
    "name": "F Avaricious Bones J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 260,
    "dbId": 1179908,
    "name": "F Super Catboard",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 261,
    "dbId": 1179909,
    "name": "F Monqlo Shirt S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 267,
    "dbId": 1179915,
    "name": "F Link Tunic",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 268,
    "dbId": 1179916,
    "name": "F Fox Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 269,
    "dbId": 1179917,
    "name": "F Mario Overalls",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 270,
    "dbId": 1179918,
    "name": "F Luigi Overalls",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 271,
    "dbId": 1179919,
    "name": "F Resetti Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 272,
    "dbId": 1179920,
    "name": "F Isabelle Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 273,
    "dbId": 1179921,
    "name": "F Armor of Purrity",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 274,
    "dbId": 1179922,
    "name": "F Chun Attire",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 275,
    "dbId": 1179923,
    "name": "F Fancy Blanka Wear",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 276,
    "dbId": 1179924,
    "name": "F Dante Jacket",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 277,
    "dbId": 1179925,
    "name": "F Mega Armor",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 278,
    "dbId": 1179926,
    "name": "F Melodic Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 279,
    "dbId": 1179927,
    "name": "F Baby Tiga Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 280,
    "dbId": 1179928,
    "name": "F Sunsnug Vest",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 282,
    "dbId": 1179930,
    "name": "F Fan Top",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 283,
    "dbId": 1179931,
    "name": "F Pep Squad Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 284,
    "dbId": 1179932,
    "name": "F Giaprey Mail",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 285,
    "dbId": 1179933,
    "name": "F Conga Fete",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 286,
    "dbId": 1179934,
    "name": "F Barroth Mail",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 287,
    "dbId": 1179935,
    "name": "F Pleasant Dress",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 288,
    "dbId": 1179936,
    "name": "F Wisdom Cloak",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 289,
    "dbId": 1179937,
    "name": "F Basarios Mail",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 290,
    "dbId": 1179938,
    "name": "F Scylla Mail",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 291,
    "dbId": 1179939,
    "name": "F Cheerful Suit",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 292,
    "dbId": 1179940,
    "name": "F Mariner Suit",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 293,
    "dbId": 1179941,
    "name": "F Barioth Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 294,
    "dbId": 1179942,
    "name": "F Grav Armor",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 295,
    "dbId": 1179943,
    "name": "F Diablos Mail",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 296,
    "dbId": 1179944,
    "name": "F Valstrax Mail",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 297,
    "dbId": 1179945,
    "name": "F Acorn Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 298,
    "dbId": 1179946,
    "name": "F Bherna Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 299,
    "dbId": 1179947,
    "name": "F Gourmet Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 300,
    "dbId": 1179948,
    "name": "F Moofy Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 301,
    "dbId": 1179949,
    "name": "F Aptonoth Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 302,
    "dbId": 1179950,
    "name": "F Popo Wear X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 303,
    "dbId": 1179951,
    "name": "F Gargwa Vest X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 304,
    "dbId": 1179952,
    "name": "F Larinoth Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 305,
    "dbId": 1179953,
    "name": "F Barrel Body",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 306,
    "dbId": 1179954,
    "name": "F Alloy Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 307,
    "dbId": 1179955,
    "name": "F Bone Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 308,
    "dbId": 1179956,
    "name": "F Alta Shirt X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 309,
    "dbId": 1179957,
    "name": "F Bnaha Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 310,
    "dbId": 1179958,
    "name": "F Jaggi Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 311,
    "dbId": 1179959,
    "name": "F Rheno Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 312,
    "dbId": 1179960,
    "name": "F Slagtoth Cape X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 313,
    "dbId": 1179961,
    "name": "F Maccao Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 314,
    "dbId": 1179962,
    "name": "F Velociprey Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 315,
    "dbId": 1179963,
    "name": "F Bulldrome Vest X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 316,
    "dbId": 1179964,
    "name": "F Arzuros Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 317,
    "dbId": 1179965,
    "name": "F Giaprey Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 318,
    "dbId": 1179966,
    "name": "F Genprey Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 319,
    "dbId": 1179967,
    "name": "F Lagombi Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 320,
    "dbId": 1179968,
    "name": "F Cephalos Dress X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 321,
    "dbId": 1179969,
    "name": "F Kut-Ku Wear X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 322,
    "dbId": 1179970,
    "name": "F Gypceros Cloth X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 323,
    "dbId": 1179971,
    "name": "F Cabra Wrap X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 324,
    "dbId": 1179972,
    "name": "F Daimyo Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 325,
    "dbId": 1179973,
    "name": "F Ludroth Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 326,
    "dbId": 1179974,
    "name": "F Kecha Coat X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 327,
    "dbId": 1179975,
    "name": "F Maiden Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 328,
    "dbId": 1179976,
    "name": "F Exquisite Robe",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 329,
    "dbId": 1179977,
    "name": "F Ladybug Wings X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 330,
    "dbId": 1179978,
    "name": "F Hot Shakalaka Duds",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 331,
    "dbId": 1179979,
    "name": "F Large Straw Raincoat",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 332,
    "dbId": 1179980,
    "name": "F Lecturer's Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 333,
    "dbId": 1179981,
    "name": "F Stone God Body",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 334,
    "dbId": 1179982,
    "name": "F Venombee Wings X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 335,
    "dbId": 1179983,
    "name": "F Mosgharl Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 336,
    "dbId": 1179984,
    "name": "F Marauder Armor X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 337,
    "dbId": 1179985,
    "name": "F Pleasant Dress X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 338,
    "dbId": 1179986,
    "name": "F Wisdom Cloak X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 339,
    "dbId": 1179987,
    "name": "F Postman Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 340,
    "dbId": 1179988,
    "name": "F Ioprey Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 341,
    "dbId": 1179989,
    "name": "F Volvi Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 342,
    "dbId": 1179990,
    "name": "F Basarios Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 343,
    "dbId": 1179991,
    "name": "F Conga Fete X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 344,
    "dbId": 1179992,
    "name": "F Barroth Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 345,
    "dbId": 1179993,
    "name": "F Khezu Smock X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 346,
    "dbId": 1179994,
    "name": "F Nibel Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 347,
    "dbId": 1179995,
    "name": "F Malfestio Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 348,
    "dbId": 1179996,
    "name": "F Rathian Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 349,
    "dbId": 1179997,
    "name": "F Blango Garb X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 350,
    "dbId": 1179998,
    "name": "F Ceanataur Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 351,
    "dbId": 1179999,
    "name": "F Scylla Armor X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 352,
    "dbId": 1180000,
    "name": "F Naja Sirwal X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 353,
    "dbId": 1180001,
    "name": "F Narga Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 354,
    "dbId": 1180002,
    "name": "F Zamtrios Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 355,
    "dbId": 1180003,
    "name": "F Plesioth Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 356,
    "dbId": 1180004,
    "name": "F Kut-Ku Wear XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 357,
    "dbId": 1180005,
    "name": "F Kecha Coat XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 358,
    "dbId": 1180006,
    "name": "F Gypceros Cloth XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 359,
    "dbId": 1180007,
    "name": "F Cabra Wrap XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 360,
    "dbId": 1180008,
    "name": "F Daimyo Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 361,
    "dbId": 1180009,
    "name": "F Ludroth Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 362,
    "dbId": 1180010,
    "name": "F Scholarly Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 363,
    "dbId": 1180011,
    "name": "F Kittendant Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 364,
    "dbId": 1180012,
    "name": "F Derring Lorica X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 365,
    "dbId": 1180013,
    "name": "F Transpurrrrter Cape",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 367,
    "dbId": 1180015,
    "name": "F Guide's Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 368,
    "dbId": 1180016,
    "name": "F Sailor Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 369,
    "dbId": 1180017,
    "name": "F Grand Chaos Skirt",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 370,
    "dbId": 1180018,
    "name": "F Death Stench Coat X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 371,
    "dbId": 1180019,
    "name": "F El Dora Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 372,
    "dbId": 1180020,
    "name": "F Artian Gear X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 373,
    "dbId": 1180021,
    "name": "F Cheerful Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 374,
    "dbId": 1180022,
    "name": "F Mariner Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 375,
    "dbId": 1180023,
    "name": "F Cute Dress",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 376,
    "dbId": 1180024,
    "name": "F Garuga Robe X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 377,
    "dbId": 1180025,
    "name": "F Uragaan Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 378,
    "dbId": 1180026,
    "name": "F Lava Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 379,
    "dbId": 1180027,
    "name": "F Lagia Pirate X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 380,
    "dbId": 1180028,
    "name": "F Glavenus Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 381,
    "dbId": 1180029,
    "name": "F Astalos Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 382,
    "dbId": 1180030,
    "name": "F Gammoth Coat X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 383,
    "dbId": 1180031,
    "name": "F Mizutsune Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 384,
    "dbId": 1180032,
    "name": "F Barioth Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 385,
    "dbId": 1180033,
    "name": "F Rathalos Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 386,
    "dbId": 1180034,
    "name": "F Zinogre Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 387,
    "dbId": 1180035,
    "name": "F Grav Armor X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 388,
    "dbId": 1180036,
    "name": "F Gore Ghost X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 389,
    "dbId": 1180037,
    "name": "F Tigrex Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 390,
    "dbId": 1180038,
    "name": "F Seltas Body X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 391,
    "dbId": 1180039,
    "name": "F Kirin Vest X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 392,
    "dbId": 1180040,
    "name": "F Borealis Mail",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 393,
    "dbId": 1180041,
    "name": "F Basarios Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 394,
    "dbId": 1180042,
    "name": "F Conga Fete XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 395,
    "dbId": 1180043,
    "name": "F Barroth Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 396,
    "dbId": 1180044,
    "name": "F Khezu Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 397,
    "dbId": 1180045,
    "name": "F Nibel Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 398,
    "dbId": 1180046,
    "name": "F Malfestio Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 399,
    "dbId": 1180047,
    "name": "F Rathian Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 400,
    "dbId": 1180048,
    "name": "F Blango Garb XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 401,
    "dbId": 1180049,
    "name": "F Ceanataur Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 402,
    "dbId": 1180050,
    "name": "F Scylla Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 403,
    "dbId": 1180051,
    "name": "F Naja Sirwal XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 404,
    "dbId": 1180052,
    "name": "F Narga Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 405,
    "dbId": 1180053,
    "name": "F Zamtrios Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 406,
    "dbId": 1180054,
    "name": "F Plesioth Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 407,
    "dbId": 1180055,
    "name": "F Guild Suit X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 408,
    "dbId": 1180056,
    "name": "F Ultra Arcadia Robe",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 409,
    "dbId": 1180057,
    "name": "F Pro Dirty Hakama",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 410,
    "dbId": 1180058,
    "name": "F D'Artanyan Hero Cape",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 411,
    "dbId": 1180059,
    "name": "F Master's Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 412,
    "dbId": 1180060,
    "name": "F Barmaid's Uniform",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 413,
    "dbId": 1180061,
    "name": "F Barman's Suit",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 414,
    "dbId": 1180062,
    "name": "F Agnaktor Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 415,
    "dbId": 1180063,
    "name": "F Duram Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 416,
    "dbId": 1180064,
    "name": "F Seregios Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 417,
    "dbId": 1180065,
    "name": "F Diablos Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 418,
    "dbId": 1180066,
    "name": "F Brachy Fists X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 419,
    "dbId": 1180067,
    "name": "F Angel Down X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 420,
    "dbId": 1180068,
    "name": "F Valstrax Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 421,
    "dbId": 1180069,
    "name": "F Puppeteer Garb+",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 422,
    "dbId": 1180070,
    "name": "F Vangis Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 423,
    "dbId": 1180071,
    "name": "F Chaos Cloak",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 424,
    "dbId": 1180072,
    "name": "F Kushala Vise X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  }
];

export const PALICO_EQUIPMENT_CATALOG: PalicoEquipmentEntry[] = [
  {
    "id": 1,
    "dbId": 1048577,
    "name": "F Bone Wedge",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 2,
    "dbId": 1048578,
    "name": "F Bherna Staff",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 3,
    "dbId": 1048579,
    "name": "F Iron Sword",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 4,
    "dbId": 1048580,
    "name": "F Bone Hammer",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 5,
    "dbId": 1048581,
    "name": "F Jaggi Knife",
    "type": 22,
    "rarity": 1,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 6,
    "dbId": 1048582,
    "name": "F Hunting Knife",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 7,
    "dbId": 1048583,
    "name": "F Yukumo Bokken",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 8,
    "dbId": 1048584,
    "name": "F Wood Chopper",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 9,
    "dbId": 1048585,
    "name": "F Paw Punch",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 10,
    "dbId": 1048586,
    "name": "F Alta Net",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 11,
    "dbId": 1048587,
    "name": "F Rheno Hammer",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 12,
    "dbId": 1048588,
    "name": "F Bnaha Dagger",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 13,
    "dbId": 1048589,
    "name": "F Maccao Dagger",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 14,
    "dbId": 1048590,
    "name": "F Vprey Bayonet",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 15,
    "dbId": 1048591,
    "name": "F Bulldrome Tusk",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 16,
    "dbId": 1048592,
    "name": "F Arzuros Mace",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 17,
    "dbId": 1048593,
    "name": "F Genprey Bayonet",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 18,
    "dbId": 1048594,
    "name": "F Cephalos Brush",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 19,
    "dbId": 1048595,
    "name": "F Machalite Wedge",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 20,
    "dbId": 1048596,
    "name": "F Giant Acorn",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 21,
    "dbId": 1048597,
    "name": "F Stone Cat Statue",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 22,
    "dbId": 1048598,
    "name": "F Venombee Bat",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 23,
    "dbId": 1048599,
    "name": "F Gourmet Cheese",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 24,
    "dbId": 1048600,
    "name": "F Moofah Cotton",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 25,
    "dbId": 1048601,
    "name": "F Aptonoth Meat",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 26,
    "dbId": 1048602,
    "name": "F Fish Stick",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 27,
    "dbId": 1048603,
    "name": "F Grilled Hammer",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 28,
    "dbId": 1048604,
    "name": "F Ioprey Bayonet",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 29,
    "dbId": 1048605,
    "name": "F Lagombi Staff",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 30,
    "dbId": 1048606,
    "name": "F Kut-Ku Cutter",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 31,
    "dbId": 1048607,
    "name": "F Gypceros Glare",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 32,
    "dbId": 1048608,
    "name": "F Cabra Pounder",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 33,
    "dbId": 1048609,
    "name": "F Daimyo Shears",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 34,
    "dbId": 1048610,
    "name": "F Ludroth Paw",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 35,
    "dbId": 1048611,
    "name": "F Khezu Whaccine",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 36,
    "dbId": 1048612,
    "name": "F Nibel Blammer",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 37,
    "dbId": 1048613,
    "name": "F Quest Book",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 38,
    "dbId": 1048614,
    "name": "F Vprey Wedge",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 39,
    "dbId": 1048615,
    "name": "F Barrel Basher",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 40,
    "dbId": 1048616,
    "name": "F Derring Lance",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 41,
    "dbId": 1048617,
    "name": "F Edel Rod",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 42,
    "dbId": 1048618,
    "name": "F Mosgharl Broom",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 43,
    "dbId": 1048619,
    "name": "F Bushwhacker",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 44,
    "dbId": 1048620,
    "name": "F Death Stench Scythe",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 45,
    "dbId": 1048621,
    "name": "F Marauder Blade",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 46,
    "dbId": 1048622,
    "name": "F Marauder Gavel",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 47,
    "dbId": 1048623,
    "name": "F Volvi Lantern",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 48,
    "dbId": 1048624,
    "name": "F Jester Parasol",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 49,
    "dbId": 1048625,
    "name": "F Rathian Rapier",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 50,
    "dbId": 1048626,
    "name": "F Blango Spear",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 51,
    "dbId": 1048627,
    "name": "F Ceanataur Cutter",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 52,
    "dbId": 1048628,
    "name": "F Naja Pungi",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 53,
    "dbId": 1048629,
    "name": "F Narga Shuriken",
    "type": 22,
    "rarity": 2,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 54,
    "dbId": 1048630,
    "name": "F Kokoto Beer",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 55,
    "dbId": 1048631,
    "name": "F Pokke Mop",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 56,
    "dbId": 1048632,
    "name": "F Yukumo Fan",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 57,
    "dbId": 1048633,
    "name": "F Shroom Rod",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 58,
    "dbId": 1048634,
    "name": "F Eldora Paw",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 59,
    "dbId": 1048635,
    "name": "F Garuga Fan",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 60,
    "dbId": 1048636,
    "name": "F Uragaan Iron",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 61,
    "dbId": 1048637,
    "name": "F Rathalos Blade",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 62,
    "dbId": 1048638,
    "name": "F Lagia Anchor",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 63,
    "dbId": 1048639,
    "name": "F Astalos Spear",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 64,
    "dbId": 1048640,
    "name": "F Enormews Staff",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 65,
    "dbId": 1048641,
    "name": "F Mizutsune Parasol",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 66,
    "dbId": 1048642,
    "name": "F Guild Rapier",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 67,
    "dbId": 1048643,
    "name": "F Moofy Plush",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 68,
    "dbId": 1048644,
    "name": "F Scorching Blade",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 69,
    "dbId": 1048645,
    "name": "F Mewsurper's Peal",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 70,
    "dbId": 1048646,
    "name": "F Katzenlampe",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 71,
    "dbId": 1048647,
    "name": "F Seregios Edge",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 72,
    "dbId": 1048648,
    "name": "F Tigrex Whammer",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 73,
    "dbId": 1048649,
    "name": "F Kirin Rumblezap",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 74,
    "dbId": 1048650,
    "name": "F Brachy Punch",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 75,
    "dbId": 1048651,
    "name": "F Le C\u0153ur de Chat",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 76,
    "dbId": 1048652,
    "name": "F Kushala Wand",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 77,
    "dbId": 1048653,
    "name": "F Genie Breath",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 78,
    "dbId": 1048654,
    "name": "F Kaiser Mace",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 79,
    "dbId": 1048655,
    "name": "F White Felyne Husk",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 80,
    "dbId": 1048656,
    "name": "F Bone Wedge S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 81,
    "dbId": 1048657,
    "name": "F Bherna Staff S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 82,
    "dbId": 1048658,
    "name": "F Hunting Knife S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 83,
    "dbId": 1048659,
    "name": "F Yukumo Bonito",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 84,
    "dbId": 1048660,
    "name": "F Carbalite Wedge",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 85,
    "dbId": 1048661,
    "name": "F Giant Acorn S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 86,
    "dbId": 1048662,
    "name": "F Vprey Wedge S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 87,
    "dbId": 1048663,
    "name": "F Barrel Basher S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 88,
    "dbId": 1048664,
    "name": "F Gourmet Cheese S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 89,
    "dbId": 1048665,
    "name": "F Moofah Cotton S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 90,
    "dbId": 1048666,
    "name": "F Barbecue",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 91,
    "dbId": 1048667,
    "name": "F Fish Stick S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 92,
    "dbId": 1048668,
    "name": "F Fingerlicker",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 93,
    "dbId": 1048669,
    "name": "F Bushwhacker S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 94,
    "dbId": 1048670,
    "name": "F Paw Punch S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 95,
    "dbId": 1048671,
    "name": "F Carbalite Sword",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 96,
    "dbId": 1048672,
    "name": "F Bone Hammer S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 97,
    "dbId": 1048673,
    "name": "F Alta Net S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 98,
    "dbId": 1048674,
    "name": "F Bnaha Dagger S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 99,
    "dbId": 1048675,
    "name": "F Jaggi Knife S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 100,
    "dbId": 1048676,
    "name": "F Rheno Hammer S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 101,
    "dbId": 1048677,
    "name": "F Slagtoth Leaf",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 102,
    "dbId": 1048678,
    "name": "F Maccao Dagger S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 103,
    "dbId": 1048679,
    "name": "F Vprey Bayonet S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 104,
    "dbId": 1048680,
    "name": "F Bulldrome Tusk S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 105,
    "dbId": 1048681,
    "name": "F Arzuros Mace S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 106,
    "dbId": 1048682,
    "name": "F Genprey Bayonet S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 107,
    "dbId": 1048683,
    "name": "F Lagombi Staff S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 108,
    "dbId": 1048684,
    "name": "F Cephalos Brush S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 109,
    "dbId": 1048685,
    "name": "F Kut-Ku Cutter S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 110,
    "dbId": 1048686,
    "name": "F Gypceros Glare S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 111,
    "dbId": 1048687,
    "name": "F Cabra Pounder S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 112,
    "dbId": 1048688,
    "name": "F Daimyo Shears S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 113,
    "dbId": 1048689,
    "name": "F Ludroth Paw S",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 114,
    "dbId": 1048690,
    "name": "F Kecha Harrow",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 115,
    "dbId": 1048691,
    "name": "F Bell Rod",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 116,
    "dbId": 1048692,
    "name": "F Gargouille Waltz",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 117,
    "dbId": 1048693,
    "name": "F Venombee Bat S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 118,
    "dbId": 1048694,
    "name": "F Mosgharl Broom S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 119,
    "dbId": 1048695,
    "name": "F Meowtetsuken",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 120,
    "dbId": 1048696,
    "name": "F Pounderpurr",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 121,
    "dbId": 1048697,
    "name": "F Ioprey Bayonet S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 122,
    "dbId": 1048698,
    "name": "F Volvi Lantern S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 123,
    "dbId": 1048699,
    "name": "F Khezu Whaccine S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 124,
    "dbId": 1048700,
    "name": "F Nibel Blammer S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 125,
    "dbId": 1048701,
    "name": "F Slumbering Duke",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 126,
    "dbId": 1048702,
    "name": "F Queen Rapier",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 127,
    "dbId": 1048703,
    "name": "F Blango Spear S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 128,
    "dbId": 1048704,
    "name": "F Ceanataur Cutter S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 129,
    "dbId": 1048705,
    "name": "F Naja Pungi S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 130,
    "dbId": 1048706,
    "name": "F Narga Shuriken S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 131,
    "dbId": 1048707,
    "name": "F Garuga Fan S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 132,
    "dbId": 1048708,
    "name": "F Uragaan Iron S",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 133,
    "dbId": 1048709,
    "name": "F Zamtrios Paw",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 134,
    "dbId": 1048710,
    "name": "F Plesioth Board",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 135,
    "dbId": 1048711,
    "name": "F Lava Mace",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 136,
    "dbId": 1048712,
    "name": "F Edel Rod S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 137,
    "dbId": 1048713,
    "name": "F Lulling Moofy Plush",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 138,
    "dbId": 1048714,
    "name": "F Wood Chopper S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 139,
    "dbId": 1048715,
    "name": "F Kut-Ku Cackle",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 140,
    "dbId": 1048716,
    "name": "F Bulldrome Rrrush",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 141,
    "dbId": 1048717,
    "name": "F Mighty Shroom Rod",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 142,
    "dbId": 1048718,
    "name": "F D. Stench Scythe S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 143,
    "dbId": 1048719,
    "name": "F Lost Catspaw Staff",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 144,
    "dbId": 1048720,
    "name": "F Lagia Anchor S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 145,
    "dbId": 1048721,
    "name": "F Scorched Whiskers",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 146,
    "dbId": 1048722,
    "name": "F Lightning Spear",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 147,
    "dbId": 1048723,
    "name": "F Ginormews Staff",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 148,
    "dbId": 1048724,
    "name": "F Crimson Parasol",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 149,
    "dbId": 1048725,
    "name": "F Blazing Blade",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 150,
    "dbId": 1048726,
    "name": "F Mewsurper's Roar",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 151,
    "dbId": 1048727,
    "name": "F Katzenfunzel",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 152,
    "dbId": 1048728,
    "name": "F Tigrex Whammer S",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 153,
    "dbId": 1048729,
    "name": "F Seltas Drill",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 154,
    "dbId": 1048730,
    "name": "F Agnaktor Lance",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 155,
    "dbId": 1048731,
    "name": "F Duram Axe",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 156,
    "dbId": 1048732,
    "name": "F Kirin Bolt",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 157,
    "dbId": 1048733,
    "name": "F Golden Gadget",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 158,
    "dbId": 1048734,
    "name": "F Vangis Mace",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 159,
    "dbId": 1048735,
    "name": "F Kut-Ku Cutter R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 160,
    "dbId": 1048736,
    "name": "F Kecha Harrow R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 161,
    "dbId": 1048737,
    "name": "F Gypceros Ankh R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 162,
    "dbId": 1048738,
    "name": "F Cabra Pounder R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 163,
    "dbId": 1048739,
    "name": "F Daimyo Shears R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 164,
    "dbId": 1048740,
    "name": "F Ludroth Paw R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 165,
    "dbId": 1048741,
    "name": "F Jester Parasol R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 166,
    "dbId": 1048742,
    "name": "F Zamtrios Paw R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 167,
    "dbId": 1048743,
    "name": "F Khezu Whaccine R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 168,
    "dbId": 1048744,
    "name": "F Rathian Rapier R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 169,
    "dbId": 1048745,
    "name": "F Nibel Blammer R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 170,
    "dbId": 1048746,
    "name": "F Plesioth Board R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 171,
    "dbId": 1048747,
    "name": "F Blango Spear R",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 172,
    "dbId": 1048748,
    "name": "F Quest Book S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 173,
    "dbId": 1048749,
    "name": "F Kokoto Beer S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 174,
    "dbId": 1048750,
    "name": "F Pokke Mop S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 175,
    "dbId": 1048751,
    "name": "F Yukumo Fan S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 176,
    "dbId": 1048752,
    "name": "F Guildcalibur",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 177,
    "dbId": 1048753,
    "name": "F Dragon Evertones",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 178,
    "dbId": 1048754,
    "name": "F Barrel Mallet",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 179,
    "dbId": 1048755,
    "name": "F Dirty Blade",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 180,
    "dbId": 1048756,
    "name": "F Meowsketeer Rapier",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 181,
    "dbId": 1048757,
    "name": "F Master's Blade",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 182,
    "dbId": 1048758,
    "name": "F Derring Lance S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 183,
    "dbId": 1048759,
    "name": "F Seregios Edge S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 184,
    "dbId": 1048760,
    "name": "F Brachy Wallop",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 185,
    "dbId": 1048761,
    "name": "F Le Chatphrodite",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 186,
    "dbId": 1048762,
    "name": "F White Felyne Staff",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 187,
    "dbId": 1048763,
    "name": "F Polaris Sword",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 188,
    "dbId": 1048764,
    "name": "F Lava Mace R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 189,
    "dbId": 1048765,
    "name": "F Ceanataur Cutter R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 190,
    "dbId": 1048766,
    "name": "F Narga Shuriken R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 191,
    "dbId": 1048767,
    "name": "F Naja Pungi R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 192,
    "dbId": 1048768,
    "name": "F Garuga Fan R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 193,
    "dbId": 1048769,
    "name": "F Uragaan Iron R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 194,
    "dbId": 1048770,
    "name": "F Seltas Drill R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 195,
    "dbId": 1048771,
    "name": "F Rathalos Blade R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 196,
    "dbId": 1048772,
    "name": "F Lagia Anchor R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 197,
    "dbId": 1048773,
    "name": "F Mewsurper's Peal R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 198,
    "dbId": 1048774,
    "name": "F Kushala Wand S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 199,
    "dbId": 1048775,
    "name": "F Genie Breath S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 200,
    "dbId": 1048776,
    "name": "F Kaiser Mace S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 201,
    "dbId": 1048777,
    "name": "F Akantor Sword",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 202,
    "dbId": 1048778,
    "name": "F Ukanlos Shovel",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 203,
    "dbId": 1048779,
    "name": "F Cursed Cloud",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 204,
    "dbId": 1048780,
    "name": "F Escador Scythe",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 205,
    "dbId": 1048781,
    "name": "F Mizutsune Parasol R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 206,
    "dbId": 1048782,
    "name": "F Astalos Spear R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 207,
    "dbId": 1048783,
    "name": "F Enormews Staff R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 208,
    "dbId": 1048784,
    "name": "F Scorching Blade R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 209,
    "dbId": 1048785,
    "name": "F Agnaktor Lance R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 210,
    "dbId": 1048786,
    "name": "F Katzenlampe R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 211,
    "dbId": 1048787,
    "name": "F Seregios Edge R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 212,
    "dbId": 1048788,
    "name": "F Duram Axe R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 213,
    "dbId": 1048789,
    "name": "F Tigrex Whammer R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 214,
    "dbId": 1048790,
    "name": "F Brachy Punch R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 215,
    "dbId": 1048791,
    "name": "F Golden Gadget R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 216,
    "dbId": 1048792,
    "name": "F Deviljho Mace R",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 217,
    "dbId": 1048793,
    "name": "F Strange Hammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 218,
    "dbId": 1048794,
    "name": "F Strange Hammer S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 219,
    "dbId": 1048795,
    "name": "F Redhelm Mace",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 220,
    "dbId": 1048796,
    "name": "F Redhelm Mace S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 221,
    "dbId": 1048797,
    "name": "F Snowbaron Stick",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 222,
    "dbId": 1048798,
    "name": "F Snowbaron Stick S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 223,
    "dbId": 1048799,
    "name": "F Stonefist Shears",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 224,
    "dbId": 1048800,
    "name": "F Stonefist Shears S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 225,
    "dbId": 1048801,
    "name": "F Dreadqueen Rapier",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 226,
    "dbId": 1048802,
    "name": "F Dreadqueen Rapier S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 227,
    "dbId": 1048803,
    "name": "F Drilltusk Pounder",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 228,
    "dbId": 1048804,
    "name": "F Drilltusk Pounder S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 229,
    "dbId": 1048805,
    "name": "F Silverwind Star",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 230,
    "dbId": 1048806,
    "name": "F Silverwind Star S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 231,
    "dbId": 1048807,
    "name": "F Crystalbeard Iron",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 232,
    "dbId": 1048808,
    "name": "F Crystalbeard Iron S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 233,
    "dbId": 1048809,
    "name": "F Deadeye Fan",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 234,
    "dbId": 1048810,
    "name": "F Deadeye Fan S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 235,
    "dbId": 1048811,
    "name": "F Dreadking Blade",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 236,
    "dbId": 1048812,
    "name": "F Dreadking Blade S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 237,
    "dbId": 1048813,
    "name": "F Thunderlord's Peal",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 238,
    "dbId": 1048814,
    "name": "F Thunderlord's Roar",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 239,
    "dbId": 1048815,
    "name": "F Grimclaw Whammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 240,
    "dbId": 1048816,
    "name": "F Grimclaw Whammer S",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 241,
    "dbId": 1048817,
    "name": "F Blazing Ashes",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 242,
    "dbId": 1048818,
    "name": "F Ashen Whiskers",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 243,
    "dbId": 1048819,
    "name": "F Zombie-kun Gut",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 244,
    "dbId": 1048820,
    "name": "F Fairy Tail Blade",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 245,
    "dbId": 1048821,
    "name": "F Treasure Chalice J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 246,
    "dbId": 1048822,
    "name": "F Pirate Key J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 247,
    "dbId": 1048823,
    "name": "F Legendary Glass J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 248,
    "dbId": 1048824,
    "name": "F Greedy Hook J",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 249,
    "dbId": 1048825,
    "name": "F Rolled-up Paper",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 250,
    "dbId": 1048826,
    "name": "F Monqlo Ball",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 253,
    "dbId": 1048829,
    "name": "F Midousuji Bike",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 254,
    "dbId": 1048830,
    "name": "F Zombie-kun Stomach",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 255,
    "dbId": 1048831,
    "name": "F Grandpaw Danger",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 256,
    "dbId": 1048832,
    "name": "F True Fairy Tail Blade",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 257,
    "dbId": 1048833,
    "name": "F Dark Meowgic Staff",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 258,
    "dbId": 1048834,
    "name": "F Booty Chalice J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 259,
    "dbId": 1048835,
    "name": "F Buccaneer Key J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 260,
    "dbId": 1048836,
    "name": "F King Scope J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 261,
    "dbId": 1048837,
    "name": "F Avaricious Hook J",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 262,
    "dbId": 1048838,
    "name": "F Tightly-rolled Paper",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 263,
    "dbId": 1048839,
    "name": "F Monqlo Ball S",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 269,
    "dbId": 1048845,
    "name": "F Wind Waker",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 270,
    "dbId": 1048846,
    "name": "F Blaster",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 271,
    "dbId": 1048847,
    "name": "F Invincible Hammer",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 272,
    "dbId": 1048848,
    "name": "F Sentry's Pickaxe",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 273,
    "dbId": 1048849,
    "name": "F Minder's Binder",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 274,
    "dbId": 1048850,
    "name": "F Sword of Purrity",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 275,
    "dbId": 1048851,
    "name": "F Chun Bracelets",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 276,
    "dbId": 1048852,
    "name": "F Blanka Fish",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 277,
    "dbId": 1048853,
    "name": "F Alastor",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 278,
    "dbId": 1048854,
    "name": "F Rushing Hammer",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 279,
    "dbId": 1048855,
    "name": "F Melodic Baton",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 281,
    "dbId": 1048857,
    "name": "F Fan Megaphone",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 282,
    "dbId": 1048858,
    "name": "F Tenderpaw Clog",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 283,
    "dbId": 1048859,
    "name": "F Giaprey Bayonet",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 284,
    "dbId": 1048860,
    "name": "F Conga Cymbals",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 285,
    "dbId": 1048861,
    "name": "F Barroth Mace",
    "type": 22,
    "rarity": 4,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 286,
    "dbId": 1048862,
    "name": "F Second Sight Lens",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 287,
    "dbId": 1048863,
    "name": "F Basarios Axe",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 288,
    "dbId": 1048864,
    "name": "F Nerscylla Wedge",
    "type": 22,
    "rarity": 5,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 289,
    "dbId": 1048865,
    "name": "F Barioth Knife",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 290,
    "dbId": 1048866,
    "name": "F Grav Bazooka",
    "type": 22,
    "rarity": 6,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 291,
    "dbId": 1048867,
    "name": "F Diablos Hammer",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 292,
    "dbId": 1048868,
    "name": "F Silverwing Sword",
    "type": 22,
    "rarity": 7,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 293,
    "dbId": 1048869,
    "name": "F Bone Wedge X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 294,
    "dbId": 1048870,
    "name": "F Bherna Staff X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 295,
    "dbId": 1048871,
    "name": "F Eltalite Wedge",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 296,
    "dbId": 1048872,
    "name": "F Giant Acorn X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 297,
    "dbId": 1048873,
    "name": "F Vprey Wedge X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 298,
    "dbId": 1048874,
    "name": "F Barrel Basher X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 299,
    "dbId": 1048875,
    "name": "F Gourmet Cheese X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 300,
    "dbId": 1048876,
    "name": "F Moofah Cotton X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 301,
    "dbId": 1048877,
    "name": "F Deluxe BBQ",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 302,
    "dbId": 1048878,
    "name": "F Fish Stick X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 303,
    "dbId": 1048879,
    "name": "F Smorgasbord",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 304,
    "dbId": 1048880,
    "name": "F Bushwhacker X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 305,
    "dbId": 1048881,
    "name": "F Paw Punch X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 306,
    "dbId": 1048882,
    "name": "F Eltalite Sword",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 307,
    "dbId": 1048883,
    "name": "F Bone Hammer X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 308,
    "dbId": 1048884,
    "name": "F Alta Net X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 309,
    "dbId": 1048885,
    "name": "F Bnaha Dagger X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 310,
    "dbId": 1048886,
    "name": "F Jaggi Knife X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 311,
    "dbId": 1048887,
    "name": "F Rheno Hammer X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 312,
    "dbId": 1048888,
    "name": "F Slagtoth Leaf X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 313,
    "dbId": 1048889,
    "name": "F Maccao Dagger X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 314,
    "dbId": 1048890,
    "name": "F Vprey Bayonet X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 315,
    "dbId": 1048891,
    "name": "F Bulldrome Tusk X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 316,
    "dbId": 1048892,
    "name": "F Arzuros Mace X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 317,
    "dbId": 1048893,
    "name": "F Giaprey Bayonet X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 318,
    "dbId": 1048894,
    "name": "F Genprey Bayonet X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 319,
    "dbId": 1048895,
    "name": "F Lagombi Staff X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 320,
    "dbId": 1048896,
    "name": "F Cephalos Brush X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 321,
    "dbId": 1048897,
    "name": "F Kut-Ku Cutter X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 322,
    "dbId": 1048898,
    "name": "F Gypceros Glare X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 323,
    "dbId": 1048899,
    "name": "F Cabra Pounder X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 324,
    "dbId": 1048900,
    "name": "F Daimyo Shears X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 325,
    "dbId": 1048901,
    "name": "F Ludroth Paw X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 326,
    "dbId": 1048902,
    "name": "F Kecha Harrow X",
    "type": 22,
    "rarity": 8,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 327,
    "dbId": 1048903,
    "name": "F Kokoto Beer X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 328,
    "dbId": 1048904,
    "name": "F Yukumo Fan X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 329,
    "dbId": 1048905,
    "name": "F Bell Rod X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 330,
    "dbId": 1048906,
    "name": "F Yian Kut-Ku Cackle",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 331,
    "dbId": 1048907,
    "name": "F Bulldrome Rrrumble",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 332,
    "dbId": 1048908,
    "name": "F Sacred Titan Dance",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 333,
    "dbId": 1048909,
    "name": "F Venombee Bat X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 334,
    "dbId": 1048910,
    "name": "F Mosgharl Broom X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 335,
    "dbId": 1048911,
    "name": "F Real Catetsu Blade",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 336,
    "dbId": 1048912,
    "name": "F Marauder Warhammer",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 337,
    "dbId": 1048913,
    "name": "F Finder's Loupe",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 338,
    "dbId": 1048914,
    "name": "F Ioprey Bayonet X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 339,
    "dbId": 1048915,
    "name": "F Volvi Lantern X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 340,
    "dbId": 1048916,
    "name": "F Basarios Axe X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 341,
    "dbId": 1048917,
    "name": "F Conga Cymbals X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 342,
    "dbId": 1048918,
    "name": "F Barroth Mace X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 343,
    "dbId": 1048919,
    "name": "F Khezu Whaccine X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 344,
    "dbId": 1048920,
    "name": "F Nibel Blammer X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 345,
    "dbId": 1048921,
    "name": "F Slumbering Archduke",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 346,
    "dbId": 1048922,
    "name": "F Swiftblur Rapier",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 347,
    "dbId": 1048923,
    "name": "F Blango Spear X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 348,
    "dbId": 1048924,
    "name": "F Ceanataur Cutter X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 349,
    "dbId": 1048925,
    "name": "F Scylla Wedge X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 350,
    "dbId": 1048926,
    "name": "F Naja Pungi X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 351,
    "dbId": 1048927,
    "name": "F Narga Shuriken X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 352,
    "dbId": 1048928,
    "name": "F Zamtrios Paw X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 353,
    "dbId": 1048929,
    "name": "F Plesioth Board X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 354,
    "dbId": 1048930,
    "name": "F Kut-Ku Cutter XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 355,
    "dbId": 1048931,
    "name": "F Kecha Harrow XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 356,
    "dbId": 1048932,
    "name": "F Gypceros Glare XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 357,
    "dbId": 1048933,
    "name": "F Cabra Pounder XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 358,
    "dbId": 1048934,
    "name": "F Daimyo Shears XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 359,
    "dbId": 1048935,
    "name": "F Ludroth Paw XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 360,
    "dbId": 1048936,
    "name": "F Quest Book X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 361,
    "dbId": 1048937,
    "name": "F Derring Lance X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 362,
    "dbId": 1048938,
    "name": "F Barrel Hammer",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 363,
    "dbId": 1048939,
    "name": "F Snoozy Moofy Plush",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 364,
    "dbId": 1048940,
    "name": "F Wood Chopper X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 365,
    "dbId": 1048941,
    "name": "F Mycetic Rod",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 366,
    "dbId": 1048942,
    "name": "F DeathStench Scythe X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 367,
    "dbId": 1048943,
    "name": "F Fine Catspaw Staff",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 368,
    "dbId": 1048944,
    "name": "F Slumbral Moofy Plush",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 369,
    "dbId": 1048945,
    "name": "F Garuga Fan X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 370,
    "dbId": 1048946,
    "name": "F Uragaan Iron X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 371,
    "dbId": 1048947,
    "name": "F Lava Mace X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 372,
    "dbId": 1048948,
    "name": "F Lagia Anchor X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 373,
    "dbId": 1048949,
    "name": "F Novaslice Whiskers",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 374,
    "dbId": 1048950,
    "name": "F St. Elmo's Javelin",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 375,
    "dbId": 1048951,
    "name": "F Ginormewsest Staff",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 376,
    "dbId": 1048952,
    "name": "F Crimson Sky Parasol",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 377,
    "dbId": 1048953,
    "name": "F Barioth Knife X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 378,
    "dbId": 1048954,
    "name": "F Charring Blade",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 379,
    "dbId": 1048955,
    "name": "F Mewsurper's Yowl",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 380,
    "dbId": 1048956,
    "name": "F Grav Bazooka X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 381,
    "dbId": 1048957,
    "name": "F Katzenseele",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 382,
    "dbId": 1048958,
    "name": "F Tigrex Whammer X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 383,
    "dbId": 1048959,
    "name": "F Seltas Drill X",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 384,
    "dbId": 1048960,
    "name": "F Kirin Bolt Maximus",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 385,
    "dbId": 1048961,
    "name": "F Sealed Drgn Halberd",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 386,
    "dbId": 1048962,
    "name": "F Basarios Axe XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 387,
    "dbId": 1048963,
    "name": "F Conga Cymbals XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 388,
    "dbId": 1048964,
    "name": "F Barroth Mace XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 389,
    "dbId": 1048965,
    "name": "F Khezu Whaccine XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 390,
    "dbId": 1048966,
    "name": "F Nibel Blammer XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 391,
    "dbId": 1048967,
    "name": "F Jester Parasol XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 392,
    "dbId": 1048968,
    "name": "F Rathian Rapier XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 393,
    "dbId": 1048969,
    "name": "F Blango Spear XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 394,
    "dbId": 1048970,
    "name": "F Ceanataur Cutter XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 395,
    "dbId": 1048971,
    "name": "F Scylla Wedge XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 396,
    "dbId": 1048972,
    "name": "F Naja Pungi XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 397,
    "dbId": 1048973,
    "name": "F Narga Shuriken XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 398,
    "dbId": 1048974,
    "name": "F Zamtrios Paw XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 399,
    "dbId": 1048975,
    "name": "F Plesioth Board XR",
    "type": 22,
    "rarity": 9,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 400,
    "dbId": 1048976,
    "name": "F Guildcalibur X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 401,
    "dbId": 1048977,
    "name": "F Dragon Forevertones",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 402,
    "dbId": 1048978,
    "name": "F Pro Dirty Blade",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 403,
    "dbId": 1048979,
    "name": "F Meowsketeer Espada",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 404,
    "dbId": 1048980,
    "name": "F Legend Blade",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 405,
    "dbId": 1048981,
    "name": "F Miaownifique",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 406,
    "dbId": 1048982,
    "name": "F Purrlissimo",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 407,
    "dbId": 1048983,
    "name": "F Agnaktor Lance X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 408,
    "dbId": 1048984,
    "name": "F Duram Axe X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 409,
    "dbId": 1048985,
    "name": "F Seregios Edge X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 410,
    "dbId": 1048986,
    "name": "F Diablos Hammer X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 411,
    "dbId": 1048987,
    "name": "F Brachydios Smash",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 412,
    "dbId": 1048988,
    "name": "F La Venyasss",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 413,
    "dbId": 1048989,
    "name": "F Dragon Comet",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 414,
    "dbId": 1048990,
    "name": "F Golden Gadget X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 415,
    "dbId": 1048991,
    "name": "F Vangis Mace X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 416,
    "dbId": 1048992,
    "name": "F Fischfleisch",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 417,
    "dbId": 1048993,
    "name": "F Kushala Wand X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 418,
    "dbId": 1048994,
    "name": "F Genie Breath X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 419,
    "dbId": 1048995,
    "name": "F Kaiser Mace X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 420,
    "dbId": 1048996,
    "name": "F White Felyne Scepter",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 421,
    "dbId": 1048997,
    "name": "F Polaris Clawsword",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 422,
    "dbId": 1048998,
    "name": "F Engraved Staff",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 423,
    "dbId": 1048999,
    "name": "F Garuga Fan XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 424,
    "dbId": 1049000,
    "name": "F Uragaan Iron XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 425,
    "dbId": 1049001,
    "name": "F Lava Mace XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 426,
    "dbId": 1049002,
    "name": "F Lagia Anchor XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 427,
    "dbId": 1049003,
    "name": "F Scorching Blade XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 428,
    "dbId": 1049004,
    "name": "F Astalos Spear XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 429,
    "dbId": 1049005,
    "name": "F Enormews Staff XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 430,
    "dbId": 1049006,
    "name": "F Mizutsune Parasol XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 431,
    "dbId": 1049007,
    "name": "F Barioth Knife XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 432,
    "dbId": 1049008,
    "name": "F Rathalos Blade XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 433,
    "dbId": 1049009,
    "name": "F Mewsurper's Peal XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 434,
    "dbId": 1049010,
    "name": "F Grav Bazooka XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 435,
    "dbId": 1049011,
    "name": "F Katzenlampe XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 436,
    "dbId": 1049012,
    "name": "F Tigrex Whammer XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 437,
    "dbId": 1049013,
    "name": "F Seltas Drill XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 438,
    "dbId": 1049014,
    "name": "F Hunting Knife X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 439,
    "dbId": 1049015,
    "name": "F True Yukumo Bokken",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 440,
    "dbId": 1049016,
    "name": "F Pokke Mop X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 441,
    "dbId": 1049017,
    "name": "F Edel Rod X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 442,
    "dbId": 1049018,
    "name": "F Akantor Sword X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 443,
    "dbId": 1049019,
    "name": "F Ukanlos Shovel X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 444,
    "dbId": 1049020,
    "name": "F Celestial Squall",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 445,
    "dbId": 1049021,
    "name": "F Escador Scythe X",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 446,
    "dbId": 1049022,
    "name": "F Fatalis Eye",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 447,
    "dbId": 1049023,
    "name": "F Havoc Eye",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 448,
    "dbId": 1049024,
    "name": "F Fatalis Rod",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 449,
    "dbId": 1049025,
    "name": "F Agnaktor Lance XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 450,
    "dbId": 1049026,
    "name": "F Duram Axe XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 451,
    "dbId": 1049027,
    "name": "F Seregios Edge XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 452,
    "dbId": 1049028,
    "name": "F Diablos Hammer XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 453,
    "dbId": 1049029,
    "name": "F Brachy Punch XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 454,
    "dbId": 1049030,
    "name": "F Golden Gadget XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 455,
    "dbId": 1049031,
    "name": "F Vangis Mace XR",
    "type": 22,
    "rarity": 10,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 456,
    "dbId": 1049032,
    "name": "F Strange Hammer X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 457,
    "dbId": 1049033,
    "name": "F Strange Hammer XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 458,
    "dbId": 1049034,
    "name": "F Redhelm Mace X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 459,
    "dbId": 1049035,
    "name": "F Redhelm Mace XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 460,
    "dbId": 1049036,
    "name": "F Snowbaron Stick X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 461,
    "dbId": 1049037,
    "name": "F Snowbaron Stick XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 462,
    "dbId": 1049038,
    "name": "F Stonefist Shears X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 463,
    "dbId": 1049039,
    "name": "F Stonefist Shears XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 464,
    "dbId": 1049040,
    "name": "F DreadqueenRapier X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 465,
    "dbId": 1049041,
    "name": "F DreadqueenRapier XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 466,
    "dbId": 1049042,
    "name": "F Drilltusk Pounder X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 467,
    "dbId": 1049043,
    "name": "F Drilltusk Pounder XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 468,
    "dbId": 1049044,
    "name": "F Cloaked Parasol",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 469,
    "dbId": 1049045,
    "name": "F Exalted Parasol",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 470,
    "dbId": 1049046,
    "name": "F Scratching Pole",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 471,
    "dbId": 1049047,
    "name": "F Rending Pole",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 472,
    "dbId": 1049048,
    "name": "F Silverwind Star X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 473,
    "dbId": 1049049,
    "name": "F Silverwind Star XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 474,
    "dbId": 1049050,
    "name": "F Crystalbeard Iron X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 475,
    "dbId": 1049051,
    "name": "F Crystalbeard Iron XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 476,
    "dbId": 1049052,
    "name": "F Deadeye Fan X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 477,
    "dbId": 1049053,
    "name": "F Deadeye Fan XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 478,
    "dbId": 1049054,
    "name": "F Dreadking Blade X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 479,
    "dbId": 1049055,
    "name": "F Dreadking Blade XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 480,
    "dbId": 1049056,
    "name": "F Thunderlord'sRoar X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 481,
    "dbId": 1049057,
    "name": "F Thunderlord'sRoar XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 482,
    "dbId": 1049058,
    "name": "F GrimclawWhammer X",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 483,
    "dbId": 1049059,
    "name": "F GrimclawWhammr XX",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 484,
    "dbId": 1049060,
    "name": "F Smouldering Whiskers",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 485,
    "dbId": 1049061,
    "name": "F Searing Whiskers",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 486,
    "dbId": 1049062,
    "name": "F Scarlet Virtue",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 487,
    "dbId": 1049063,
    "name": "F Incarnadine Greed",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 488,
    "dbId": 1049064,
    "name": "F Zephra Spear",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 489,
    "dbId": 1049065,
    "name": "F Zilbolt Spear",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 490,
    "dbId": 1049066,
    "name": "F Snowcap Staff",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 491,
    "dbId": 1049067,
    "name": "F The Trampler",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_cutting",
    "iconColor": 0
  },
  {
    "id": 492,
    "dbId": 1049068,
    "name": "F Carnage Hammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 493,
    "dbId": 1049069,
    "name": "F Bloodbath Hammer",
    "type": 22,
    "rarity": 11,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 495,
    "dbId": 1049071,
    "name": "F Cutie Moon Rod",
    "type": 22,
    "rarity": 3,
    "iconName": "icon_blunt",
    "iconColor": 0
  },
  {
    "id": 1,
    "dbId": 1114113,
    "name": "F Acorn Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 2,
    "dbId": 1114114,
    "name": "F Bherna Hood",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 3,
    "dbId": 1114115,
    "name": "F Alloy Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 4,
    "dbId": 1114116,
    "name": "F Bone Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 5,
    "dbId": 1114117,
    "name": "F Jaggi Helm",
    "type": 23,
    "rarity": 1,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 6,
    "dbId": 1114118,
    "name": "F Hunting Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 7,
    "dbId": 1114119,
    "name": "F Mafumofu Hood",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 8,
    "dbId": 1114120,
    "name": "F Yukumo Kasa",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 9,
    "dbId": 1114121,
    "name": "F Alta Hat",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 10,
    "dbId": 1114122,
    "name": "F Rheno Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 11,
    "dbId": 1114123,
    "name": "F Bnaha Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 12,
    "dbId": 1114124,
    "name": "F Maccao Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 13,
    "dbId": 1114125,
    "name": "F Velociprey Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 14,
    "dbId": 1114126,
    "name": "F Bulldrome Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 15,
    "dbId": 1114127,
    "name": "F Arzuros Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 16,
    "dbId": 1114128,
    "name": "F Genprey Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 17,
    "dbId": 1114129,
    "name": "F Cephalos Hat",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 18,
    "dbId": 1114130,
    "name": "F Stone Head",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 19,
    "dbId": 1114131,
    "name": "F Venombee Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 20,
    "dbId": 1114132,
    "name": "F Gourmet Toque",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 21,
    "dbId": 1114133,
    "name": "F Moofy Head",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 22,
    "dbId": 1114134,
    "name": "F Aptonoth Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 23,
    "dbId": 1114135,
    "name": "F Popo Head",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 24,
    "dbId": 1114136,
    "name": "F Gargwa Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 25,
    "dbId": 1114137,
    "name": "F Ioprey Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 26,
    "dbId": 1114138,
    "name": "F Lagombi Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 27,
    "dbId": 1114139,
    "name": "F Kut-Ku Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 28,
    "dbId": 1114140,
    "name": "F Gypceros Crest",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 29,
    "dbId": 1114141,
    "name": "F Cabra Horn",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 30,
    "dbId": 1114142,
    "name": "F Daimyo Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 31,
    "dbId": 1114143,
    "name": "F Ludroth Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 32,
    "dbId": 1114144,
    "name": "F Khezu Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 33,
    "dbId": 1114145,
    "name": "F Nibel Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 34,
    "dbId": 1114146,
    "name": "F Scholarly Cap",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 35,
    "dbId": 1114147,
    "name": "F Derring Galea",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 36,
    "dbId": 1114148,
    "name": "F Edel Pigtails",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 37,
    "dbId": 1114149,
    "name": "F Kittendant Hood",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 38,
    "dbId": 1114150,
    "name": "F Mosgharl Hat",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 39,
    "dbId": 1114151,
    "name": "F Larinoth Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 40,
    "dbId": 1114152,
    "name": "F Death Stench Hood",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 41,
    "dbId": 1114153,
    "name": "F Marauder Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 42,
    "dbId": 1114154,
    "name": "F Volvi Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 43,
    "dbId": 1114155,
    "name": "F Malfestio Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 44,
    "dbId": 1114156,
    "name": "F Rathian Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 45,
    "dbId": 1114157,
    "name": "F Blango Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 46,
    "dbId": 1114158,
    "name": "F Ceanataur Mask",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 47,
    "dbId": 1114159,
    "name": "F Naja Turban",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 48,
    "dbId": 1114160,
    "name": "F Narga Helm",
    "type": 23,
    "rarity": 2,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 49,
    "dbId": 1114161,
    "name": "F Maiden Hood",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 50,
    "dbId": 1114162,
    "name": "F Helper Hood",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 51,
    "dbId": 1114163,
    "name": "F Pretty Toque",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 52,
    "dbId": 1114164,
    "name": "F Chaos Bulbs",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 53,
    "dbId": 1114165,
    "name": "F El Dora Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 54,
    "dbId": 1114166,
    "name": "F Artian Core",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 55,
    "dbId": 1114167,
    "name": "F Garuga Hood",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 56,
    "dbId": 1114168,
    "name": "F Uragaan Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 57,
    "dbId": 1114169,
    "name": "F Rathalos Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 58,
    "dbId": 1114170,
    "name": "F Lagia Tricorne",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 59,
    "dbId": 1114171,
    "name": "F Astalos Mask",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 60,
    "dbId": 1114172,
    "name": "F Gammoth Collar",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 61,
    "dbId": 1114173,
    "name": "F Mizutsune Kasa",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 62,
    "dbId": 1114174,
    "name": "F Guild Headgear",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 63,
    "dbId": 1114175,
    "name": "F Glavenus Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 64,
    "dbId": 1114176,
    "name": "F Zinogre Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 65,
    "dbId": 1114177,
    "name": "F Gore Horror",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 66,
    "dbId": 1114178,
    "name": "F Seregios Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 67,
    "dbId": 1114179,
    "name": "F Tigrex Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 68,
    "dbId": 1114180,
    "name": "F Kirin Horn",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 69,
    "dbId": 1114181,
    "name": "F Brachy Headgear",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 70,
    "dbId": 1114182,
    "name": "F Angel Halo",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 71,
    "dbId": 1114183,
    "name": "F Kushala Glare",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 72,
    "dbId": 1114184,
    "name": "F Genie Helm",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 73,
    "dbId": 1114185,
    "name": "F Kaiser Periwig",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 74,
    "dbId": 1114186,
    "name": "F Husk Mask",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 75,
    "dbId": 1114187,
    "name": "F Acorn Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 76,
    "dbId": 1114188,
    "name": "F Bherna Hood S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 77,
    "dbId": 1114189,
    "name": "F Hunting Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 78,
    "dbId": 1114190,
    "name": "F Mafumofu Hood S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 79,
    "dbId": 1114191,
    "name": "F Yukumo Kasa S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 80,
    "dbId": 1114192,
    "name": "F Gourmet Toque S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 81,
    "dbId": 1114193,
    "name": "F Moofy Head S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 82,
    "dbId": 1114194,
    "name": "F Aptonoth Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 83,
    "dbId": 1114195,
    "name": "F Popo Head S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 84,
    "dbId": 1114196,
    "name": "F Gargwa Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 85,
    "dbId": 1114197,
    "name": "F Larinoth Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 86,
    "dbId": 1114198,
    "name": "F Alloy Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 87,
    "dbId": 1114199,
    "name": "F Bone Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 88,
    "dbId": 1114200,
    "name": "F Alta Hat S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 89,
    "dbId": 1114201,
    "name": "F Bnaha Cap S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 90,
    "dbId": 1114202,
    "name": "F Jaggi Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 91,
    "dbId": 1114203,
    "name": "F Rheno Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 92,
    "dbId": 1114204,
    "name": "F Slagtoth Hood",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 93,
    "dbId": 1114205,
    "name": "F Maccao Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 94,
    "dbId": 1114206,
    "name": "F Velociprey Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 95,
    "dbId": 1114207,
    "name": "F Bulldrome Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 96,
    "dbId": 1114208,
    "name": "F Arzuros Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 97,
    "dbId": 1114209,
    "name": "F Genprey Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 98,
    "dbId": 1114210,
    "name": "F Lagombi Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 99,
    "dbId": 1114211,
    "name": "F Cephalos Hat S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 100,
    "dbId": 1114212,
    "name": "F Kut-Ku Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 101,
    "dbId": 1114213,
    "name": "F Gypceros Crest S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 102,
    "dbId": 1114214,
    "name": "F Cabra Horn S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 103,
    "dbId": 1114215,
    "name": "F Daimyo Mask S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 104,
    "dbId": 1114216,
    "name": "F Ludroth Helm S",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 105,
    "dbId": 1114217,
    "name": "F Kecha Cap",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 106,
    "dbId": 1114218,
    "name": "F Ladybug Cap",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 107,
    "dbId": 1114219,
    "name": "F Lecturer's Hood",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 108,
    "dbId": 1114220,
    "name": "F Guide's Hood",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 109,
    "dbId": 1114221,
    "name": "F Sailor Hat",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 110,
    "dbId": 1114222,
    "name": "F Stone King Head",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 111,
    "dbId": 1114223,
    "name": "F Venombee Cap S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 112,
    "dbId": 1114224,
    "name": "F Mosgharl Hat S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 113,
    "dbId": 1114225,
    "name": "F Marauder Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 114,
    "dbId": 1114226,
    "name": "F Ioprey Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 115,
    "dbId": 1114227,
    "name": "F Volvi Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 116,
    "dbId": 1114228,
    "name": "F Khezu Catnurse S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 117,
    "dbId": 1114229,
    "name": "F Nibel Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 118,
    "dbId": 1114230,
    "name": "F Malfestio Mask S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 119,
    "dbId": 1114231,
    "name": "F Rathian Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 120,
    "dbId": 1114232,
    "name": "F Blango Mask S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 121,
    "dbId": 1114233,
    "name": "F Ceanataur Mask S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 122,
    "dbId": 1114234,
    "name": "F Naja Turban S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 123,
    "dbId": 1114235,
    "name": "F Narga Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 124,
    "dbId": 1114236,
    "name": "F Garuga Hood S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 125,
    "dbId": 1114237,
    "name": "F Uragaan Helm S",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 126,
    "dbId": 1114238,
    "name": "F Zamtrios Helmet",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 127,
    "dbId": 1114239,
    "name": "F Plesioth Cap",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 128,
    "dbId": 1114240,
    "name": "F Lava Helm",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 129,
    "dbId": 1114241,
    "name": "F Edel Pigtails S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 130,
    "dbId": 1114242,
    "name": "F Kittendant Hood S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 131,
    "dbId": 1114243,
    "name": "F Acorn Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 132,
    "dbId": 1114244,
    "name": "F Pincer Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 133,
    "dbId": 1114245,
    "name": "F Chaos Bulbs+",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 134,
    "dbId": 1114246,
    "name": "F Death Stench Hood S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 135,
    "dbId": 1114247,
    "name": "F El Dora Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 136,
    "dbId": 1114248,
    "name": "F Artian Core S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 137,
    "dbId": 1114249,
    "name": "F Lagia Triad S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 138,
    "dbId": 1114250,
    "name": "F Glavenus Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 139,
    "dbId": 1114251,
    "name": "F Astalos Mask S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 140,
    "dbId": 1114252,
    "name": "F Gammoth Collar S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 141,
    "dbId": 1114253,
    "name": "F Mizutsune Kasa S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 142,
    "dbId": 1114254,
    "name": "F Rathalos Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 143,
    "dbId": 1114255,
    "name": "F Zinogre Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 144,
    "dbId": 1114256,
    "name": "F Gore Horror S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 145,
    "dbId": 1114257,
    "name": "F Tigrex Helm S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 146,
    "dbId": 1114258,
    "name": "F Seltas Head",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 147,
    "dbId": 1114259,
    "name": "F Agnaktor Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 148,
    "dbId": 1114260,
    "name": "F Duram Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 149,
    "dbId": 1114261,
    "name": "F Kirin Horn S",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 150,
    "dbId": 1114262,
    "name": "F Puppeteer Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 151,
    "dbId": 1114263,
    "name": "F Vangis Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 152,
    "dbId": 1114264,
    "name": "F Kut-Ku Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 153,
    "dbId": 1114265,
    "name": "F Kecha Cap R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 154,
    "dbId": 1114266,
    "name": "F Gypceros Crest R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 155,
    "dbId": 1114267,
    "name": "F Cabra Horn R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 156,
    "dbId": 1114268,
    "name": "F Daimyo Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 157,
    "dbId": 1114269,
    "name": "F Ludroth Helm R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 158,
    "dbId": 1114270,
    "name": "F Malfestio Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 159,
    "dbId": 1114271,
    "name": "F Zamtrios Helmet R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 160,
    "dbId": 1114272,
    "name": "F Khezu Cap R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 161,
    "dbId": 1114273,
    "name": "F Rathian Helm R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 162,
    "dbId": 1114274,
    "name": "F Nibel Helm R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 163,
    "dbId": 1114275,
    "name": "F Plesioth Cap R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 164,
    "dbId": 1114276,
    "name": "F Blango Mask R",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 165,
    "dbId": 1114277,
    "name": "F Scholarly Cap S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 166,
    "dbId": 1114278,
    "name": "F Maiden Hood S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 167,
    "dbId": 1114279,
    "name": "F Helper Hood S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 168,
    "dbId": 1114280,
    "name": "F Beautiful Toque",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 169,
    "dbId": 1114281,
    "name": "F Ultimate Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 170,
    "dbId": 1114282,
    "name": "F Guild Headgear S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 171,
    "dbId": 1114283,
    "name": "F Soul Hairpiece",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 172,
    "dbId": 1114284,
    "name": "F Transpurrter Kasa",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 173,
    "dbId": 1114285,
    "name": "F Dirty Locks",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 174,
    "dbId": 1114286,
    "name": "F D'Artanyan's Hat",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 175,
    "dbId": 1114287,
    "name": "F Master's Helm",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 176,
    "dbId": 1114288,
    "name": "F Derring Galea S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 177,
    "dbId": 1114289,
    "name": "F Seregios Helm S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 178,
    "dbId": 1114290,
    "name": "F Brachy Noggin S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 179,
    "dbId": 1114291,
    "name": "F Angel Aura S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 180,
    "dbId": 1114292,
    "name": "F Husk Mask S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 181,
    "dbId": 1114293,
    "name": "F Nakarkos Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 182,
    "dbId": 1114294,
    "name": "F Lava Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 183,
    "dbId": 1114295,
    "name": "F Ceanataur Mask R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 184,
    "dbId": 1114296,
    "name": "F Narga Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 185,
    "dbId": 1114297,
    "name": "F Naja Turban R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 186,
    "dbId": 1114298,
    "name": "F Garuga Hood R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 187,
    "dbId": 1114299,
    "name": "F Uragaan Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 188,
    "dbId": 1114300,
    "name": "F Seltas Head R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 189,
    "dbId": 1114301,
    "name": "F Rathalos Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 190,
    "dbId": 1114302,
    "name": "F Lagia Triad R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 191,
    "dbId": 1114303,
    "name": "F Zinogre Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 193,
    "dbId": 1114305,
    "name": "F Kushala Glower S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 194,
    "dbId": 1114306,
    "name": "F Genie Helm S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 195,
    "dbId": 1114307,
    "name": "F Kaiser Crown",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 196,
    "dbId": 1114308,
    "name": "F Akantor Visage",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 197,
    "dbId": 1114309,
    "name": "F Ukanlos Visage",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 198,
    "dbId": 1114310,
    "name": "F Majestic Crown",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 199,
    "dbId": 1114311,
    "name": "F Escador Wisdom",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 200,
    "dbId": 1114312,
    "name": "F Mizutsune Kasa R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 201,
    "dbId": 1114313,
    "name": "F Astalos Mask R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 202,
    "dbId": 1114314,
    "name": "F Gammoth Collar R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 203,
    "dbId": 1114315,
    "name": "F Glavenus Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 204,
    "dbId": 1114316,
    "name": "F Agnaktor Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 205,
    "dbId": 1114317,
    "name": "F Gore Horror R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 206,
    "dbId": 1114318,
    "name": "F Seregios Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 207,
    "dbId": 1114319,
    "name": "F Duram Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 208,
    "dbId": 1114320,
    "name": "F Tigrex Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 209,
    "dbId": 1114321,
    "name": "F Brachy Head R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 210,
    "dbId": 1114322,
    "name": "F Puppeteer Mask R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 211,
    "dbId": 1114323,
    "name": "F Vangis Helm R",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 212,
    "dbId": 1114324,
    "name": "F Strange Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 213,
    "dbId": 1114325,
    "name": "F Strange Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 214,
    "dbId": 1114326,
    "name": "F Redhelm Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 215,
    "dbId": 1114327,
    "name": "F Redhelm Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 216,
    "dbId": 1114328,
    "name": "F Snowbaron Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 217,
    "dbId": 1114329,
    "name": "F Snowbaron Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 218,
    "dbId": 1114330,
    "name": "F Stonefist Mask",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 219,
    "dbId": 1114331,
    "name": "F Stonefist Mask S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 220,
    "dbId": 1114332,
    "name": "F Dreadqueen Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 221,
    "dbId": 1114333,
    "name": "F Dreadqueen Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 222,
    "dbId": 1114334,
    "name": "F Drilltusk Horn",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 223,
    "dbId": 1114335,
    "name": "F Drilltusk Horn S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 224,
    "dbId": 1114336,
    "name": "F Silverwind Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 225,
    "dbId": 1114337,
    "name": "F Silverwind Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 226,
    "dbId": 1114338,
    "name": "F Crystalbeard Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 227,
    "dbId": 1114339,
    "name": "F Crystalbeard Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 228,
    "dbId": 1114340,
    "name": "F Deadeye Hood",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 229,
    "dbId": 1114341,
    "name": "F Deadeye Hood S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 230,
    "dbId": 1114342,
    "name": "F Dreadking Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 231,
    "dbId": 1114343,
    "name": "F Dreadking Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 232,
    "dbId": 1114344,
    "name": "F Thunderlord Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 233,
    "dbId": 1114345,
    "name": "F Thunderlord Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 234,
    "dbId": 1114346,
    "name": "F Grimclaw Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 235,
    "dbId": 1114347,
    "name": "F Grimclaw Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 236,
    "dbId": 1114348,
    "name": "F Hellblade Helm",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 237,
    "dbId": 1114349,
    "name": "F Hellblade Helm S",
    "type": 23,
    "rarity": 11,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 240,
    "dbId": 1114352,
    "name": "F Treasure Crown J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 241,
    "dbId": 1114353,
    "name": "F Pirate Bandanna J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 242,
    "dbId": 1114354,
    "name": "F Legendary Helm J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 243,
    "dbId": 1114355,
    "name": "F Greedy Skull J",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 245,
    "dbId": 1114357,
    "name": "F Monqlo Cap",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 247,
    "dbId": 1114359,
    "name": "F Baby Tiga Hat",
    "type": 23,
    "rarity": 3,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 249,
    "dbId": 1114361,
    "name": "F Postman Beret",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 250,
    "dbId": 1114362,
    "name": "F Booyah Pompadour",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 251,
    "dbId": 1114363,
    "name": "F Sohoku Helmet",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 255,
    "dbId": 1114367,
    "name": "F Dark Meowgic Hood",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 256,
    "dbId": 1114368,
    "name": "F Booty Crown J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 257,
    "dbId": 1114369,
    "name": "F Buccaneer Bandanna J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 258,
    "dbId": 1114370,
    "name": "F King Helm J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 259,
    "dbId": 1114371,
    "name": "F Avaricious Skull J",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 261,
    "dbId": 1114373,
    "name": "F Monqlo Cap S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 267,
    "dbId": 1114379,
    "name": "F Link Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 268,
    "dbId": 1114380,
    "name": "F Fox Mic",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 269,
    "dbId": 1114381,
    "name": "F Mario Cap",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 270,
    "dbId": 1114382,
    "name": "F Luigi Cap",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 273,
    "dbId": 1114385,
    "name": "F Helm of Purrity",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 274,
    "dbId": 1114386,
    "name": "F Chun Chignon",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 276,
    "dbId": 1114388,
    "name": "F Dante Wig",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 277,
    "dbId": 1114389,
    "name": "F Mega Helmet",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 278,
    "dbId": 1114390,
    "name": "F Melodic Curls",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 279,
    "dbId": 1114391,
    "name": "F Baby Tiga Hat S",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 280,
    "dbId": 1114392,
    "name": "F Sunsnug Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 282,
    "dbId": 1114394,
    "name": "F Meowniac's Mask",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 283,
    "dbId": 1114395,
    "name": "F Pep Squad Cap",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 284,
    "dbId": 1114396,
    "name": "F Giaprey Helm",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 285,
    "dbId": 1114397,
    "name": "F Conga Steeple",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 286,
    "dbId": 1114398,
    "name": "F Barroth Helm",
    "type": 23,
    "rarity": 4,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 287,
    "dbId": 1114399,
    "name": "F Pleasant Ribbons",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 288,
    "dbId": 1114400,
    "name": "F Wisdom Hat",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 289,
    "dbId": 1114401,
    "name": "F Basarios Helm",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 290,
    "dbId": 1114402,
    "name": "F Scylla Mask",
    "type": 23,
    "rarity": 5,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 291,
    "dbId": 1114403,
    "name": "F Cheerful Cap",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 292,
    "dbId": 1114404,
    "name": "F Mariner Hood",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 293,
    "dbId": 1114405,
    "name": "F Barioth Helm",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 294,
    "dbId": 1114406,
    "name": "F Grav Mask",
    "type": 23,
    "rarity": 6,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 295,
    "dbId": 1114407,
    "name": "F Diablos Helm",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 296,
    "dbId": 1114408,
    "name": "F Valstrax Helm",
    "type": 23,
    "rarity": 7,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 297,
    "dbId": 1114409,
    "name": "F Acorn Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 298,
    "dbId": 1114410,
    "name": "F Bherna Hood X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 299,
    "dbId": 1114411,
    "name": "F Gourmet Toque X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 300,
    "dbId": 1114412,
    "name": "F Moofy Head X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 301,
    "dbId": 1114413,
    "name": "F Aptonoth Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 302,
    "dbId": 1114414,
    "name": "F Popo Head X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 303,
    "dbId": 1114415,
    "name": "F Gargwa Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 304,
    "dbId": 1114416,
    "name": "F Larinoth Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 306,
    "dbId": 1114418,
    "name": "F Alloy Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 307,
    "dbId": 1114419,
    "name": "F Bone Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 308,
    "dbId": 1114420,
    "name": "F Alta Hat X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 309,
    "dbId": 1114421,
    "name": "F Bnaha Cap X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 310,
    "dbId": 1114422,
    "name": "F Jaggi Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 311,
    "dbId": 1114423,
    "name": "F Rheno Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 312,
    "dbId": 1114424,
    "name": "F Slagtoth Hood X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 313,
    "dbId": 1114425,
    "name": "F Maccao Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 314,
    "dbId": 1114426,
    "name": "F Velociprey Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 315,
    "dbId": 1114427,
    "name": "F Bulldrome Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 316,
    "dbId": 1114428,
    "name": "F Arzuros Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 317,
    "dbId": 1114429,
    "name": "F Giaprey Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 318,
    "dbId": 1114430,
    "name": "F Genprey Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 319,
    "dbId": 1114431,
    "name": "F Lagombi Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 320,
    "dbId": 1114432,
    "name": "F Cephalos Hat X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 321,
    "dbId": 1114433,
    "name": "F Kut-Ku Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 322,
    "dbId": 1114434,
    "name": "F Gypceros Crest X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 323,
    "dbId": 1114435,
    "name": "F Cabra Horn X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 324,
    "dbId": 1114436,
    "name": "F Daimyo Mask X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 325,
    "dbId": 1114437,
    "name": "F Ludroth Helm X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 326,
    "dbId": 1114438,
    "name": "F Kecha Cap X",
    "type": 23,
    "rarity": 8,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 327,
    "dbId": 1114439,
    "name": "F Maiden Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 328,
    "dbId": 1114440,
    "name": "F Exquisite Toque",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 329,
    "dbId": 1114441,
    "name": "F Ladybug Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 330,
    "dbId": 1114442,
    "name": "F Odd Acorn Mask",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 331,
    "dbId": 1114443,
    "name": "F Odd Pincer Mask",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 332,
    "dbId": 1114444,
    "name": "F Lecturer's Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 333,
    "dbId": 1114445,
    "name": "F Stone God Head",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 334,
    "dbId": 1114446,
    "name": "F Venombee Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 335,
    "dbId": 1114447,
    "name": "F Mosgharl Hat X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 336,
    "dbId": 1114448,
    "name": "F Marauder Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 337,
    "dbId": 1114449,
    "name": "F Pleasant Ribbons X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 338,
    "dbId": 1114450,
    "name": "F Wisdom Hat X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 339,
    "dbId": 1114451,
    "name": "F Postman Beret X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 340,
    "dbId": 1114452,
    "name": "F Ioprey Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 341,
    "dbId": 1114453,
    "name": "F Volvi Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 342,
    "dbId": 1114454,
    "name": "F Basarios Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 343,
    "dbId": 1114455,
    "name": "F Conga Steeple X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 344,
    "dbId": 1114456,
    "name": "F Barroth Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 345,
    "dbId": 1114457,
    "name": "F Khezu Catnurse X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 346,
    "dbId": 1114458,
    "name": "F Nibel Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 347,
    "dbId": 1114459,
    "name": "F Malfestio Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 348,
    "dbId": 1114460,
    "name": "F Rathian Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 349,
    "dbId": 1114461,
    "name": "F Blango Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 350,
    "dbId": 1114462,
    "name": "F Ceanataur Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 351,
    "dbId": 1114463,
    "name": "F Scylla Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 352,
    "dbId": 1114464,
    "name": "F Naja Turban X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 353,
    "dbId": 1114465,
    "name": "F Narga Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 354,
    "dbId": 1114466,
    "name": "F Zamtrios Helmet X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 355,
    "dbId": 1114467,
    "name": "F Plesioth Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 356,
    "dbId": 1114468,
    "name": "F Kut-Ku Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 357,
    "dbId": 1114469,
    "name": "F Kecha Cap XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 358,
    "dbId": 1114470,
    "name": "F Gypceros Crest XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 359,
    "dbId": 1114471,
    "name": "F Cabra Horn XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 360,
    "dbId": 1114472,
    "name": "F Daimyo Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 361,
    "dbId": 1114473,
    "name": "F Ludroth Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 362,
    "dbId": 1114474,
    "name": "F Scholarly Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 363,
    "dbId": 1114475,
    "name": "F Kittendant Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 364,
    "dbId": 1114476,
    "name": "F Derring Galea X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 365,
    "dbId": 1114477,
    "name": "F Transpurrrrter Kasa",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 366,
    "dbId": 1114478,
    "name": "F Ultimate Mask+",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 367,
    "dbId": 1114479,
    "name": "F Guide's Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 368,
    "dbId": 1114480,
    "name": "F Sailor Hat X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 369,
    "dbId": 1114481,
    "name": "F Grand Chaos Bulbs",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 370,
    "dbId": 1114482,
    "name": "F Death Stench Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 371,
    "dbId": 1114483,
    "name": "F El Dora Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 372,
    "dbId": 1114484,
    "name": "F Artian Core X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 373,
    "dbId": 1114485,
    "name": "F Cheerful Cap X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 374,
    "dbId": 1114486,
    "name": "F Mariner Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 375,
    "dbId": 1114487,
    "name": "F Cute Ribbon",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 376,
    "dbId": 1114488,
    "name": "F Garuga Hood X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 377,
    "dbId": 1114489,
    "name": "F Uragaan Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 378,
    "dbId": 1114490,
    "name": "F Lava Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 379,
    "dbId": 1114491,
    "name": "F Lagia Triad X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 380,
    "dbId": 1114492,
    "name": "F Glavenus Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 381,
    "dbId": 1114493,
    "name": "F Astalos Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 382,
    "dbId": 1114494,
    "name": "F Gammoth Collar X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 383,
    "dbId": 1114495,
    "name": "F Mizutsune Kasa X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 384,
    "dbId": 1114496,
    "name": "F Barioth Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 385,
    "dbId": 1114497,
    "name": "F Rathalos Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 386,
    "dbId": 1114498,
    "name": "F Zinogre Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 387,
    "dbId": 1114499,
    "name": "F Grav Mask X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 388,
    "dbId": 1114500,
    "name": "F Gore Horror X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 389,
    "dbId": 1114501,
    "name": "F Tigrex Helm X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 390,
    "dbId": 1114502,
    "name": "F Seltas Head X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 391,
    "dbId": 1114503,
    "name": "F Kirin Horn X",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 392,
    "dbId": 1114504,
    "name": "F Borealis Crown",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 393,
    "dbId": 1114505,
    "name": "F Basarios Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 394,
    "dbId": 1114506,
    "name": "F Conga Steeple XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 395,
    "dbId": 1114507,
    "name": "F Barroth Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 396,
    "dbId": 1114508,
    "name": "F Khezu Cap XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 397,
    "dbId": 1114509,
    "name": "F Nibel Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 398,
    "dbId": 1114510,
    "name": "F Malfestio Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 399,
    "dbId": 1114511,
    "name": "F Rathian Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 400,
    "dbId": 1114512,
    "name": "F Blango Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 401,
    "dbId": 1114513,
    "name": "F Ceanataur Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 402,
    "dbId": 1114514,
    "name": "F Scylla Mask XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 403,
    "dbId": 1114515,
    "name": "F Naja Turban XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 404,
    "dbId": 1114516,
    "name": "F Narga Helm XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 405,
    "dbId": 1114517,
    "name": "F Zamtrios Helmet XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 406,
    "dbId": 1114518,
    "name": "F Plesioth Cap XR",
    "type": 23,
    "rarity": 9,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 407,
    "dbId": 1114519,
    "name": "F Guild Headgear X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 408,
    "dbId": 1114520,
    "name": "F Spirit Hairpiece",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 409,
    "dbId": 1114521,
    "name": "F Pro Dirty Locks",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 410,
    "dbId": 1114522,
    "name": "F D'Artanyan Hero Hat",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 411,
    "dbId": 1114523,
    "name": "F Master's Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 412,
    "dbId": 1114524,
    "name": "F Barmaid's Cap",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 413,
    "dbId": 1114525,
    "name": "F Barman's Shades",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 414,
    "dbId": 1114526,
    "name": "F Agnaktor Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 415,
    "dbId": 1114527,
    "name": "F Duram Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 416,
    "dbId": 1114528,
    "name": "F Seregios Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 417,
    "dbId": 1114529,
    "name": "F Diablos Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 418,
    "dbId": 1114530,
    "name": "F Brachy Noggin X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 419,
    "dbId": 1114531,
    "name": "F Angel Aura X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 420,
    "dbId": 1114532,
    "name": "F Valstrax Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 421,
    "dbId": 1114533,
    "name": "F Puppeteer Mask+",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 422,
    "dbId": 1114534,
    "name": "F Vangis Helm X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 423,
    "dbId": 1114535,
    "name": "F Chaos Hood",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 424,
    "dbId": 1114536,
    "name": "F Kushala Snarl X",
    "type": 23,
    "rarity": 10,
    "iconName": "icon_palico_head",
    "iconColor": 0
  },
  {
    "id": 1,
    "dbId": 1179649,
    "name": "F Acorn Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 2,
    "dbId": 1179650,
    "name": "F Bherna Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 3,
    "dbId": 1179651,
    "name": "F Alloy Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 4,
    "dbId": 1179652,
    "name": "F Bone Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 5,
    "dbId": 1179653,
    "name": "F Jaggi Mail",
    "type": 24,
    "rarity": 1,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 6,
    "dbId": 1179654,
    "name": "F Hunting Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 7,
    "dbId": 1179655,
    "name": "F Mafumofu Vest",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 8,
    "dbId": 1179656,
    "name": "F Yukumo Dogi",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 9,
    "dbId": 1179657,
    "name": "F Alta Shirt",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 10,
    "dbId": 1179658,
    "name": "F Rheno Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 11,
    "dbId": 1179659,
    "name": "F Bnaha Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 12,
    "dbId": 1179660,
    "name": "F Maccao Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 13,
    "dbId": 1179661,
    "name": "F Velociprey Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 14,
    "dbId": 1179662,
    "name": "F Bulldrome Vest",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 15,
    "dbId": 1179663,
    "name": "F Arzuros Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 16,
    "dbId": 1179664,
    "name": "F Genprey Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 17,
    "dbId": 1179665,
    "name": "F Cephalos Dress",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 18,
    "dbId": 1179666,
    "name": "F Stone Body",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 19,
    "dbId": 1179667,
    "name": "F Venombee Wings",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 20,
    "dbId": 1179668,
    "name": "F Gourmet Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 21,
    "dbId": 1179669,
    "name": "F Moofy Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 22,
    "dbId": 1179670,
    "name": "F Aptonoth Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 23,
    "dbId": 1179671,
    "name": "F Popo Wear",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 24,
    "dbId": 1179672,
    "name": "F Gargwa Vest",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 25,
    "dbId": 1179673,
    "name": "F Ioprey Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 26,
    "dbId": 1179674,
    "name": "F Lagombi Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 27,
    "dbId": 1179675,
    "name": "F Kut-Ku Wear",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 28,
    "dbId": 1179676,
    "name": "F Gypceros Cloth",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 29,
    "dbId": 1179677,
    "name": "F Cabra Wrap",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 30,
    "dbId": 1179678,
    "name": "F Daimyo Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 31,
    "dbId": 1179679,
    "name": "F Ludroth Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 32,
    "dbId": 1179680,
    "name": "F Khezu Apron",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 33,
    "dbId": 1179681,
    "name": "F Nibel Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 34,
    "dbId": 1179682,
    "name": "F Scholarly Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 35,
    "dbId": 1179683,
    "name": "F Derring Lorica",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 36,
    "dbId": 1179684,
    "name": "F Edel Frills",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 37,
    "dbId": 1179685,
    "name": "F Kittendant Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 38,
    "dbId": 1179686,
    "name": "F Mosgharl Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 39,
    "dbId": 1179687,
    "name": "F Larinoth Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 40,
    "dbId": 1179688,
    "name": "F Death Stench Coat",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 41,
    "dbId": 1179689,
    "name": "F Marauder Armor",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 42,
    "dbId": 1179690,
    "name": "F Volvi Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 43,
    "dbId": 1179691,
    "name": "F Malfestio Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 44,
    "dbId": 1179692,
    "name": "F Rathian Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 45,
    "dbId": 1179693,
    "name": "F Blango Garb",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 46,
    "dbId": 1179694,
    "name": "F Ceanataur Suit",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 47,
    "dbId": 1179695,
    "name": "F Naja Sirwal",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 48,
    "dbId": 1179696,
    "name": "F Narga Mail",
    "type": 24,
    "rarity": 2,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 49,
    "dbId": 1179697,
    "name": "F Maiden Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 50,
    "dbId": 1179698,
    "name": "F Helper Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 51,
    "dbId": 1179699,
    "name": "F Pretty Robe",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 52,
    "dbId": 1179700,
    "name": "F Chaos Skirt",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 53,
    "dbId": 1179701,
    "name": "F El Dora Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 54,
    "dbId": 1179702,
    "name": "F Artian Gear",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 55,
    "dbId": 1179703,
    "name": "F Garuga Robe",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 56,
    "dbId": 1179704,
    "name": "F Uragaan Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 57,
    "dbId": 1179705,
    "name": "F Rathalos Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 58,
    "dbId": 1179706,
    "name": "F Lagia Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 59,
    "dbId": 1179707,
    "name": "F Astalos Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 60,
    "dbId": 1179708,
    "name": "F Gammoth Coat",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 61,
    "dbId": 1179709,
    "name": "F Mizutsune Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 62,
    "dbId": 1179710,
    "name": "F Guild Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 63,
    "dbId": 1179711,
    "name": "F Glavenus Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 64,
    "dbId": 1179712,
    "name": "F Zinogre Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 65,
    "dbId": 1179713,
    "name": "F Gore Ghost",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 66,
    "dbId": 1179714,
    "name": "F Seregios Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 67,
    "dbId": 1179715,
    "name": "F Tigrex Mail",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 68,
    "dbId": 1179716,
    "name": "F Kirin Vest",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 69,
    "dbId": 1179717,
    "name": "F Brachy Gloves",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 70,
    "dbId": 1179718,
    "name": "F Angel Feathers",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 71,
    "dbId": 1179719,
    "name": "F Kushala Cista",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 72,
    "dbId": 1179720,
    "name": "F Genie Carpet",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 73,
    "dbId": 1179721,
    "name": "F Kaiser Robe",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 74,
    "dbId": 1179722,
    "name": "F Husk Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 75,
    "dbId": 1179723,
    "name": "F Acorn Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 76,
    "dbId": 1179724,
    "name": "F Bherna Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 77,
    "dbId": 1179725,
    "name": "F Hunting Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 78,
    "dbId": 1179726,
    "name": "F Mafumofu Vest S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 79,
    "dbId": 1179727,
    "name": "F Yukumo Dogi S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 80,
    "dbId": 1179728,
    "name": "F Gourmet Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 81,
    "dbId": 1179729,
    "name": "F Moofy Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 82,
    "dbId": 1179730,
    "name": "F Aptonoth Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 83,
    "dbId": 1179731,
    "name": "F Popo Wear S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 84,
    "dbId": 1179732,
    "name": "F Gargwa Vest S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 85,
    "dbId": 1179733,
    "name": "F Larinoth Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 86,
    "dbId": 1179734,
    "name": "F Alloy Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 87,
    "dbId": 1179735,
    "name": "F Bone Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 88,
    "dbId": 1179736,
    "name": "F Alta Shirt S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 89,
    "dbId": 1179737,
    "name": "F Bnaha Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 90,
    "dbId": 1179738,
    "name": "F Jaggi Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 91,
    "dbId": 1179739,
    "name": "F Rheno Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 92,
    "dbId": 1179740,
    "name": "F Slagtoth Cape",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 93,
    "dbId": 1179741,
    "name": "F Maccao Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 94,
    "dbId": 1179742,
    "name": "F Velociprey Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 95,
    "dbId": 1179743,
    "name": "F Bulldrome Vest S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 96,
    "dbId": 1179744,
    "name": "F Arzuros Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 97,
    "dbId": 1179745,
    "name": "F Genprey Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 98,
    "dbId": 1179746,
    "name": "F Lagombi Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 99,
    "dbId": 1179747,
    "name": "F Cephalos Dress S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 100,
    "dbId": 1179748,
    "name": "F Kut-Ku Wear S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 101,
    "dbId": 1179749,
    "name": "F Gypceros Cloth S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 102,
    "dbId": 1179750,
    "name": "F Cabra Wrap S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 103,
    "dbId": 1179751,
    "name": "F Daimyo Suit S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 104,
    "dbId": 1179752,
    "name": "F Ludroth Mail S",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 105,
    "dbId": 1179753,
    "name": "F Kecha Coat",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 106,
    "dbId": 1179754,
    "name": "F Ladybug Wings",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 107,
    "dbId": 1179755,
    "name": "F Lecturer's Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 108,
    "dbId": 1179756,
    "name": "F Guide's Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 109,
    "dbId": 1179757,
    "name": "F Sailor Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 110,
    "dbId": 1179758,
    "name": "F Stone King Body",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 111,
    "dbId": 1179759,
    "name": "F Venombee Wings S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 112,
    "dbId": 1179760,
    "name": "F Mosgharl Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 113,
    "dbId": 1179761,
    "name": "F Marauder Armor S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 114,
    "dbId": 1179762,
    "name": "F Ioprey Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 115,
    "dbId": 1179763,
    "name": "F Volvi Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 116,
    "dbId": 1179764,
    "name": "F Khezu Smock S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 117,
    "dbId": 1179765,
    "name": "F Nibel Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 118,
    "dbId": 1179766,
    "name": "F Malfestio Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 119,
    "dbId": 1179767,
    "name": "F Rathian Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 120,
    "dbId": 1179768,
    "name": "F Blango Garb S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 121,
    "dbId": 1179769,
    "name": "F Ceanataur Suit S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 122,
    "dbId": 1179770,
    "name": "F Naja Sirwal S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 123,
    "dbId": 1179771,
    "name": "F Narga Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 124,
    "dbId": 1179772,
    "name": "F Garuga Robe S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 125,
    "dbId": 1179773,
    "name": "F Uragaan Mail S",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 126,
    "dbId": 1179774,
    "name": "F Zamtrios Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 127,
    "dbId": 1179775,
    "name": "F Plesioth Suit",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 128,
    "dbId": 1179776,
    "name": "F Lava Mail",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 129,
    "dbId": 1179777,
    "name": "F Edel Frills S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 130,
    "dbId": 1179778,
    "name": "F Kittendant Suit S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 131,
    "dbId": 1179779,
    "name": "F Shakalaka Duds",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 132,
    "dbId": 1179780,
    "name": "F Straw Raincoat",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 133,
    "dbId": 1179781,
    "name": "F Chaos Skirt+",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 134,
    "dbId": 1179782,
    "name": "F Death Stench Coat S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 135,
    "dbId": 1179783,
    "name": "F El Dora Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 136,
    "dbId": 1179784,
    "name": "F Artian Gear S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 137,
    "dbId": 1179785,
    "name": "F Lagia Pirate S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 138,
    "dbId": 1179786,
    "name": "F Glavenus Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 139,
    "dbId": 1179787,
    "name": "F Astalos Suit S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 140,
    "dbId": 1179788,
    "name": "F Gammoth Coat S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 141,
    "dbId": 1179789,
    "name": "F Mizutsune Suit S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 142,
    "dbId": 1179790,
    "name": "F Rathalos Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 143,
    "dbId": 1179791,
    "name": "F Zinogre Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 144,
    "dbId": 1179792,
    "name": "F Gore Ghost S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 145,
    "dbId": 1179793,
    "name": "F Tigrex Mail S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 146,
    "dbId": 1179794,
    "name": "F Seltas Body",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 147,
    "dbId": 1179795,
    "name": "F Agnaktor Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 148,
    "dbId": 1179796,
    "name": "F Duram Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 149,
    "dbId": 1179797,
    "name": "F Kirin Vest S",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 150,
    "dbId": 1179798,
    "name": "F Puppeteer Garb",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 151,
    "dbId": 1179799,
    "name": "F Vangis Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 152,
    "dbId": 1179800,
    "name": "F Kut-Ku Wear R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 153,
    "dbId": 1179801,
    "name": "F Kecha Coat R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 154,
    "dbId": 1179802,
    "name": "F Gypceros Cloth R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 155,
    "dbId": 1179803,
    "name": "F Cabra Wrap R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 156,
    "dbId": 1179804,
    "name": "F Daimyo Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 157,
    "dbId": 1179805,
    "name": "F Ludroth Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 158,
    "dbId": 1179806,
    "name": "F Malfestio Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 159,
    "dbId": 1179807,
    "name": "F Zamtrios Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 160,
    "dbId": 1179808,
    "name": "F Khezu Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 161,
    "dbId": 1179809,
    "name": "F Rathian Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 162,
    "dbId": 1179810,
    "name": "F Nibel Mail R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 163,
    "dbId": 1179811,
    "name": "F Plesioth Suit R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 164,
    "dbId": 1179812,
    "name": "F Blango Garb R",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 165,
    "dbId": 1179813,
    "name": "F Scholarly Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 166,
    "dbId": 1179814,
    "name": "F Maiden Mail S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 167,
    "dbId": 1179815,
    "name": "F Helper Mail S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 168,
    "dbId": 1179816,
    "name": "F Beautiful Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 170,
    "dbId": 1179818,
    "name": "F Guild Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 171,
    "dbId": 1179819,
    "name": "F Arcadia Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 172,
    "dbId": 1179820,
    "name": "F Transpurrter Cape",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 173,
    "dbId": 1179821,
    "name": "F Dirty Hakama",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 174,
    "dbId": 1179822,
    "name": "F D'Artanyan's Cape",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 175,
    "dbId": 1179823,
    "name": "F Master's Mail",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 176,
    "dbId": 1179824,
    "name": "F Derring Lorica S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 177,
    "dbId": 1179825,
    "name": "F Seregios Mail S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 178,
    "dbId": 1179826,
    "name": "F Brachy Fist S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 179,
    "dbId": 1179827,
    "name": "F Angel Down S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 180,
    "dbId": 1179828,
    "name": "F Husk Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 181,
    "dbId": 1179829,
    "name": "F Nakarkos Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 182,
    "dbId": 1179830,
    "name": "F Lava Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 183,
    "dbId": 1179831,
    "name": "F Ceanataur Suit R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 184,
    "dbId": 1179832,
    "name": "F Narga Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 185,
    "dbId": 1179833,
    "name": "F Naja Sirwal R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 186,
    "dbId": 1179834,
    "name": "F Garuga Robe R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 187,
    "dbId": 1179835,
    "name": "F Uragaan Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 188,
    "dbId": 1179836,
    "name": "F Seltas Body R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 189,
    "dbId": 1179837,
    "name": "F Rathalos Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 190,
    "dbId": 1179838,
    "name": "F Lagia Pirate R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 191,
    "dbId": 1179839,
    "name": "F Zinogre Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 192,
    "dbId": 1179840,
    "name": "F Felcote's Coat",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 193,
    "dbId": 1179841,
    "name": "F Kushala Cormi S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 194,
    "dbId": 1179842,
    "name": "F Genie Carpet S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 195,
    "dbId": 1179843,
    "name": "F Kaiser Panoply",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 196,
    "dbId": 1179844,
    "name": "F Akantor Facade",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 197,
    "dbId": 1179845,
    "name": "F Ukanlos Facade",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 198,
    "dbId": 1179846,
    "name": "F Majestic Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 199,
    "dbId": 1179847,
    "name": "F Escador Soul",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 200,
    "dbId": 1179848,
    "name": "F Mizutsune Suit R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 201,
    "dbId": 1179849,
    "name": "F Astalos Suit R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 202,
    "dbId": 1179850,
    "name": "F Gammoth Coat R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 203,
    "dbId": 1179851,
    "name": "F Glavenus Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 204,
    "dbId": 1179852,
    "name": "F Agnaktor Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 205,
    "dbId": 1179853,
    "name": "F Gore Ghost R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 206,
    "dbId": 1179854,
    "name": "F Seregios Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 207,
    "dbId": 1179855,
    "name": "F Duram Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 208,
    "dbId": 1179856,
    "name": "F Tigrex Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 209,
    "dbId": 1179857,
    "name": "F Brachy Gloves R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 210,
    "dbId": 1179858,
    "name": "F Puppeteer Garb R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 211,
    "dbId": 1179859,
    "name": "F Vangis Mail R",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 212,
    "dbId": 1179860,
    "name": "F Strange Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 213,
    "dbId": 1179861,
    "name": "F Strange Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 214,
    "dbId": 1179862,
    "name": "F Redhelm Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 215,
    "dbId": 1179863,
    "name": "F Redhelm Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 216,
    "dbId": 1179864,
    "name": "F Snowbaron Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 217,
    "dbId": 1179865,
    "name": "F Snowbaron Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 218,
    "dbId": 1179866,
    "name": "F Stonefist Suit",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 219,
    "dbId": 1179867,
    "name": "F Stonefist Suit S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 220,
    "dbId": 1179868,
    "name": "F Dreadqueen Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 221,
    "dbId": 1179869,
    "name": "F Dreadqueen Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 222,
    "dbId": 1179870,
    "name": "F Drilltusk Wrap",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 223,
    "dbId": 1179871,
    "name": "F Drilltusk Wrap S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 224,
    "dbId": 1179872,
    "name": "F Silverwind Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 225,
    "dbId": 1179873,
    "name": "F Silverwind Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 226,
    "dbId": 1179874,
    "name": "F Crystalbeard Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 227,
    "dbId": 1179875,
    "name": "F Crystalbeard Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 228,
    "dbId": 1179876,
    "name": "F Deadeye Robe",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 229,
    "dbId": 1179877,
    "name": "F Deadeye Robe S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 230,
    "dbId": 1179878,
    "name": "F Dreadking Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 231,
    "dbId": 1179879,
    "name": "F Dreadking Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 232,
    "dbId": 1179880,
    "name": "F Thunderlord Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 233,
    "dbId": 1179881,
    "name": "F Thunderlord Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 234,
    "dbId": 1179882,
    "name": "F Grimclaw Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 235,
    "dbId": 1179883,
    "name": "F Grimclaw Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 236,
    "dbId": 1179884,
    "name": "F Hellblade Mail",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 237,
    "dbId": 1179885,
    "name": "F Hellblade Mail S",
    "type": 24,
    "rarity": 11,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 238,
    "dbId": 1179886,
    "name": "F Zombie-kun Costume",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 239,
    "dbId": 1179887,
    "name": "F Happy Outfit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 240,
    "dbId": 1179888,
    "name": "F Treasure Chest J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 241,
    "dbId": 1179889,
    "name": "F Pirate Vest J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 242,
    "dbId": 1179890,
    "name": "F Legendary Suit J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 243,
    "dbId": 1179891,
    "name": "F Greedy Bones J",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 244,
    "dbId": 1179892,
    "name": "F Catboard",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 245,
    "dbId": 1179893,
    "name": "F Monqlo Shirt",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 247,
    "dbId": 1179895,
    "name": "F Baby Tiga Suit",
    "type": 24,
    "rarity": 3,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 249,
    "dbId": 1179897,
    "name": "F Postman Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 250,
    "dbId": 1179898,
    "name": "F Booyah Jacket",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 251,
    "dbId": 1179899,
    "name": "F Sohoku Jersey",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 252,
    "dbId": 1179900,
    "name": "F Zombie-kun Wear",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 253,
    "dbId": 1179901,
    "name": "F Grandpaw D Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 254,
    "dbId": 1179902,
    "name": "F Happy Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 255,
    "dbId": 1179903,
    "name": "F Dark Meowgic Robe",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 256,
    "dbId": 1179904,
    "name": "F Booty Chest J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 257,
    "dbId": 1179905,
    "name": "F Buccaneer Vest J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 258,
    "dbId": 1179906,
    "name": "F King Suit J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 259,
    "dbId": 1179907,
    "name": "F Avaricious Bones J",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 260,
    "dbId": 1179908,
    "name": "F Super Catboard",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 261,
    "dbId": 1179909,
    "name": "F Monqlo Shirt S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 267,
    "dbId": 1179915,
    "name": "F Link Tunic",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 268,
    "dbId": 1179916,
    "name": "F Fox Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 269,
    "dbId": 1179917,
    "name": "F Mario Overalls",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 270,
    "dbId": 1179918,
    "name": "F Luigi Overalls",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 271,
    "dbId": 1179919,
    "name": "F Resetti Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 272,
    "dbId": 1179920,
    "name": "F Isabelle Guise",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 273,
    "dbId": 1179921,
    "name": "F Armor of Purrity",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 274,
    "dbId": 1179922,
    "name": "F Chun Attire",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 275,
    "dbId": 1179923,
    "name": "F Fancy Blanka Wear",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 276,
    "dbId": 1179924,
    "name": "F Dante Jacket",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 277,
    "dbId": 1179925,
    "name": "F Mega Armor",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 278,
    "dbId": 1179926,
    "name": "F Melodic Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 279,
    "dbId": 1179927,
    "name": "F Baby Tiga Suit S",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 280,
    "dbId": 1179928,
    "name": "F Sunsnug Vest",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 282,
    "dbId": 1179930,
    "name": "F Fan Top",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 283,
    "dbId": 1179931,
    "name": "F Pep Squad Suit",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 284,
    "dbId": 1179932,
    "name": "F Giaprey Mail",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 285,
    "dbId": 1179933,
    "name": "F Conga Fete",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 286,
    "dbId": 1179934,
    "name": "F Barroth Mail",
    "type": 24,
    "rarity": 4,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 287,
    "dbId": 1179935,
    "name": "F Pleasant Dress",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 288,
    "dbId": 1179936,
    "name": "F Wisdom Cloak",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 289,
    "dbId": 1179937,
    "name": "F Basarios Mail",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 290,
    "dbId": 1179938,
    "name": "F Scylla Mail",
    "type": 24,
    "rarity": 5,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 291,
    "dbId": 1179939,
    "name": "F Cheerful Suit",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 292,
    "dbId": 1179940,
    "name": "F Mariner Suit",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 293,
    "dbId": 1179941,
    "name": "F Barioth Mail",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 294,
    "dbId": 1179942,
    "name": "F Grav Armor",
    "type": 24,
    "rarity": 6,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 295,
    "dbId": 1179943,
    "name": "F Diablos Mail",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 296,
    "dbId": 1179944,
    "name": "F Valstrax Mail",
    "type": 24,
    "rarity": 7,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 297,
    "dbId": 1179945,
    "name": "F Acorn Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 298,
    "dbId": 1179946,
    "name": "F Bherna Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 299,
    "dbId": 1179947,
    "name": "F Gourmet Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 300,
    "dbId": 1179948,
    "name": "F Moofy Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 301,
    "dbId": 1179949,
    "name": "F Aptonoth Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 302,
    "dbId": 1179950,
    "name": "F Popo Wear X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 303,
    "dbId": 1179951,
    "name": "F Gargwa Vest X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 304,
    "dbId": 1179952,
    "name": "F Larinoth Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 305,
    "dbId": 1179953,
    "name": "F Barrel Body",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 306,
    "dbId": 1179954,
    "name": "F Alloy Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 307,
    "dbId": 1179955,
    "name": "F Bone Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 308,
    "dbId": 1179956,
    "name": "F Alta Shirt X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 309,
    "dbId": 1179957,
    "name": "F Bnaha Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 310,
    "dbId": 1179958,
    "name": "F Jaggi Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 311,
    "dbId": 1179959,
    "name": "F Rheno Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 312,
    "dbId": 1179960,
    "name": "F Slagtoth Cape X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 313,
    "dbId": 1179961,
    "name": "F Maccao Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 314,
    "dbId": 1179962,
    "name": "F Velociprey Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 315,
    "dbId": 1179963,
    "name": "F Bulldrome Vest X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 316,
    "dbId": 1179964,
    "name": "F Arzuros Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 317,
    "dbId": 1179965,
    "name": "F Giaprey Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 318,
    "dbId": 1179966,
    "name": "F Genprey Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 319,
    "dbId": 1179967,
    "name": "F Lagombi Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 320,
    "dbId": 1179968,
    "name": "F Cephalos Dress X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 321,
    "dbId": 1179969,
    "name": "F Kut-Ku Wear X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 322,
    "dbId": 1179970,
    "name": "F Gypceros Cloth X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 323,
    "dbId": 1179971,
    "name": "F Cabra Wrap X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 324,
    "dbId": 1179972,
    "name": "F Daimyo Suit X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 325,
    "dbId": 1179973,
    "name": "F Ludroth Mail X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 326,
    "dbId": 1179974,
    "name": "F Kecha Coat X",
    "type": 24,
    "rarity": 8,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 327,
    "dbId": 1179975,
    "name": "F Maiden Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 328,
    "dbId": 1179976,
    "name": "F Exquisite Robe",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 329,
    "dbId": 1179977,
    "name": "F Ladybug Wings X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 330,
    "dbId": 1179978,
    "name": "F Hot Shakalaka Duds",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 331,
    "dbId": 1179979,
    "name": "F Large Straw Raincoat",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 332,
    "dbId": 1179980,
    "name": "F Lecturer's Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 333,
    "dbId": 1179981,
    "name": "F Stone God Body",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 334,
    "dbId": 1179982,
    "name": "F Venombee Wings X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 335,
    "dbId": 1179983,
    "name": "F Mosgharl Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 336,
    "dbId": 1179984,
    "name": "F Marauder Armor X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 337,
    "dbId": 1179985,
    "name": "F Pleasant Dress X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 338,
    "dbId": 1179986,
    "name": "F Wisdom Cloak X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 339,
    "dbId": 1179987,
    "name": "F Postman Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 340,
    "dbId": 1179988,
    "name": "F Ioprey Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 341,
    "dbId": 1179989,
    "name": "F Volvi Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 342,
    "dbId": 1179990,
    "name": "F Basarios Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 343,
    "dbId": 1179991,
    "name": "F Conga Fete X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 344,
    "dbId": 1179992,
    "name": "F Barroth Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 345,
    "dbId": 1179993,
    "name": "F Khezu Smock X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 346,
    "dbId": 1179994,
    "name": "F Nibel Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 347,
    "dbId": 1179995,
    "name": "F Malfestio Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 348,
    "dbId": 1179996,
    "name": "F Rathian Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 349,
    "dbId": 1179997,
    "name": "F Blango Garb X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 350,
    "dbId": 1179998,
    "name": "F Ceanataur Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 351,
    "dbId": 1179999,
    "name": "F Scylla Armor X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 352,
    "dbId": 1180000,
    "name": "F Naja Sirwal X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 353,
    "dbId": 1180001,
    "name": "F Narga Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 354,
    "dbId": 1180002,
    "name": "F Zamtrios Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 355,
    "dbId": 1180003,
    "name": "F Plesioth Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 356,
    "dbId": 1180004,
    "name": "F Kut-Ku Wear XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 357,
    "dbId": 1180005,
    "name": "F Kecha Coat XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 358,
    "dbId": 1180006,
    "name": "F Gypceros Cloth XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 359,
    "dbId": 1180007,
    "name": "F Cabra Wrap XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 360,
    "dbId": 1180008,
    "name": "F Daimyo Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 361,
    "dbId": 1180009,
    "name": "F Ludroth Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 362,
    "dbId": 1180010,
    "name": "F Scholarly Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 363,
    "dbId": 1180011,
    "name": "F Kittendant Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 364,
    "dbId": 1180012,
    "name": "F Derring Lorica X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 365,
    "dbId": 1180013,
    "name": "F Transpurrrrter Cape",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 367,
    "dbId": 1180015,
    "name": "F Guide's Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 368,
    "dbId": 1180016,
    "name": "F Sailor Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 369,
    "dbId": 1180017,
    "name": "F Grand Chaos Skirt",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 370,
    "dbId": 1180018,
    "name": "F Death Stench Coat X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 371,
    "dbId": 1180019,
    "name": "F El Dora Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 372,
    "dbId": 1180020,
    "name": "F Artian Gear X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 373,
    "dbId": 1180021,
    "name": "F Cheerful Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 374,
    "dbId": 1180022,
    "name": "F Mariner Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 375,
    "dbId": 1180023,
    "name": "F Cute Dress",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 376,
    "dbId": 1180024,
    "name": "F Garuga Robe X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 377,
    "dbId": 1180025,
    "name": "F Uragaan Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 378,
    "dbId": 1180026,
    "name": "F Lava Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 379,
    "dbId": 1180027,
    "name": "F Lagia Pirate X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 380,
    "dbId": 1180028,
    "name": "F Glavenus Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 381,
    "dbId": 1180029,
    "name": "F Astalos Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 382,
    "dbId": 1180030,
    "name": "F Gammoth Coat X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 383,
    "dbId": 1180031,
    "name": "F Mizutsune Suit X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 384,
    "dbId": 1180032,
    "name": "F Barioth Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 385,
    "dbId": 1180033,
    "name": "F Rathalos Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 386,
    "dbId": 1180034,
    "name": "F Zinogre Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 387,
    "dbId": 1180035,
    "name": "F Grav Armor X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 388,
    "dbId": 1180036,
    "name": "F Gore Ghost X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 389,
    "dbId": 1180037,
    "name": "F Tigrex Mail X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 390,
    "dbId": 1180038,
    "name": "F Seltas Body X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 391,
    "dbId": 1180039,
    "name": "F Kirin Vest X",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 392,
    "dbId": 1180040,
    "name": "F Borealis Mail",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 393,
    "dbId": 1180041,
    "name": "F Basarios Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 394,
    "dbId": 1180042,
    "name": "F Conga Fete XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 395,
    "dbId": 1180043,
    "name": "F Barroth Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 396,
    "dbId": 1180044,
    "name": "F Khezu Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 397,
    "dbId": 1180045,
    "name": "F Nibel Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 398,
    "dbId": 1180046,
    "name": "F Malfestio Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 399,
    "dbId": 1180047,
    "name": "F Rathian Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 400,
    "dbId": 1180048,
    "name": "F Blango Garb XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 401,
    "dbId": 1180049,
    "name": "F Ceanataur Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 402,
    "dbId": 1180050,
    "name": "F Scylla Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 403,
    "dbId": 1180051,
    "name": "F Naja Sirwal XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 404,
    "dbId": 1180052,
    "name": "F Narga Mail XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 405,
    "dbId": 1180053,
    "name": "F Zamtrios Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 406,
    "dbId": 1180054,
    "name": "F Plesioth Suit XR",
    "type": 24,
    "rarity": 9,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 407,
    "dbId": 1180055,
    "name": "F Guild Suit X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 408,
    "dbId": 1180056,
    "name": "F Ultra Arcadia Robe",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 409,
    "dbId": 1180057,
    "name": "F Pro Dirty Hakama",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 410,
    "dbId": 1180058,
    "name": "F D'Artanyan Hero Cape",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 411,
    "dbId": 1180059,
    "name": "F Master's Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 412,
    "dbId": 1180060,
    "name": "F Barmaid's Uniform",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 413,
    "dbId": 1180061,
    "name": "F Barman's Suit",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 414,
    "dbId": 1180062,
    "name": "F Agnaktor Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 415,
    "dbId": 1180063,
    "name": "F Duram Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 416,
    "dbId": 1180064,
    "name": "F Seregios Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 417,
    "dbId": 1180065,
    "name": "F Diablos Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 418,
    "dbId": 1180066,
    "name": "F Brachy Fists X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 419,
    "dbId": 1180067,
    "name": "F Angel Down X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 420,
    "dbId": 1180068,
    "name": "F Valstrax Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 421,
    "dbId": 1180069,
    "name": "F Puppeteer Garb+",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 422,
    "dbId": 1180070,
    "name": "F Vangis Mail X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 423,
    "dbId": 1180071,
    "name": "F Chaos Cloak",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  },
  {
    "id": 424,
    "dbId": 1180072,
    "name": "F Kushala Vise X",
    "type": 24,
    "rarity": 10,
    "iconName": "icon_palico_body",
    "iconColor": 0
  }
];

// Helper to get equipment by save file ID and type
export const getPalicoEquipmentById = (type: number, id: number): PalicoEquipmentEntry | undefined => {
  switch (type) {
    case PALICO_EQUIPMENT_TYPES.WEAPON:
      return PALICO_WEAPONS.find(e => e.id === id);
    case PALICO_EQUIPMENT_TYPES.HELMET:
      return PALICO_HELMETS.find(e => e.id === id);
    case PALICO_EQUIPMENT_TYPES.BODY:
      return PALICO_BODY_ARMOR.find(e => e.id === id);
    default:
      return undefined;
  }
};
