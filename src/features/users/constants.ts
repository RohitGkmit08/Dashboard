export interface AssignedGame {
  gameName: string;
}

export interface UserRow {
  name: string;
  email: string;
  phone: string;
  assignedGames: AssignedGame[];
}

export const users: UserRow[] = [
  {
    name: "Ninja",
    email: "ninja@gmail.com",
    phone: "9765432109",
    assignedGames: [
      { gameName: "Call of Duty"},
      { gameName: "FIFA 24"},
    ],
  },
  {
    name: "Spartan",
    email: "spartan@gmail.com",
    phone: "9876543210",
    assignedGames: [
      { gameName: "Valorant"},
      { gameName: "GTA V"}
    ],
  },
  {
    name: "Sumo",
    email: "sumo@gmail.com",
    phone: "9123456780",
    assignedGames: [
      { gameName: "PUBG Mobile"},
      { gameName: "Asphalt 9"},
    ],
  },
  {
    name: "Ghost",
    email: "ghost@gmail.com",
    phone: "9988776655",
    assignedGames: [
      { gameName: "Minecraft"},
      { gameName: "FIFA 24"},
    ],
  },
  {
    name: "Bravo",
    email: "bravo@gmail.com",
    phone: "9090909090",
    assignedGames: [
      { gameName: "Clash Royale"},
      { gameName: "Among Us"},
    ],
  },
];
