export interface Subnet {
  id: number;
  name: string;
  createdAt: string;
  owner: string;
  emission: number;
}

export interface Validator {
  name: string;
  total: number;
  owner: string;
  network: number;
}

export const subnets: Subnet[] = [
  {
    id: 1,
    name: "Time Series Prediction",
    createdAt: "2021-09-01",
    owner: "5esfr297ga124124124",
    emission: 9.24,
  },
  {
    id: 2,
    name: "Time Series Prediction",
    createdAt: "2021-08-12",
    owner: "5esfr297ga124124124",
    emission: 6.78,
  },
  {
    id: 3,
    name: "Time Series Prediction",
    createdAt: "2021-07-30",
    owner: "5esfr297ga124124124",
    emission: 2.35,
  },
  {
    id: 4,
    name: "Time Series Prediction",
    createdAt: "2021-06-15",
    owner: "5esfr297ga124124124",
    emission: 3.92,
  },
  {
    id: 5,
    name: "Time Series Prediction",
    createdAt: "2021-05-22",
    owner: "5esfr297ga124124124",
    emission: 8.61,
  },
  {
    id: 6,
    name: "Time Series Prediction",
    createdAt: "2021-04-07",
    owner: "5esfr297ga124124124",
    emission: 1.29,
  },
  {
    id: 7,
    name: "Time Series Prediction",
    createdAt: "2021-03-18",
    owner: "5esfr297ga124124124",
    emission: 5.73,
  },
  {
    id: 8,
    name: "Time Series Prediction",
    createdAt: "2021-02-10",
    owner: "5esfr297ga124124124",
    emission: 0.88,
  },
  {
    id: 9,
    name: "Time Series Prediction",
    createdAt: "2021-01-28",
    owner: "5esfr297ga124124124",
    emission: 4.17,
  },
  {
    id: 10,
    name: "Time Series Prediction",
    createdAt: "2020-12-11",
    owner: "5esfr297ga124124124",
    emission: 6.05,
  },
  {
    id: 11,
    name: "Time Series Prediction",
    createdAt: "2020-11-29",
    owner: "5esfr297ga124124124",
    emission: 3.42,
  },
  {
    id: 12,
    name: "Time Series Prediction",
    createdAt: "2020-10-15",
    owner: "5esfr297ga124124124",
    emission: 9.01,
  },
  {
    id: 13,
    name: "Time Series Prediction",
    createdAt: "2020-09-02",
    owner: "5esfr297ga124124124",
    emission: 7.56,
  },
  {
    id: 14,
    name: "Time Series Prediction",
    createdAt: "2020-08-21",
    owner: "5esfr297ga124124124",
    emission: 2.89,
  },
  {
    id: 15,
    name: "Time Series Prediction",
    createdAt: "2020-07-12",
    owner: "5esfr297ga124124124",
    emission: 5.11,
  },
  {
    id: 16,
    name: "Time Series Prediction",
    createdAt: "2020-06-27",
    owner: "5esfr297ga124124124",
    emission: 0.76,
  },
  {
    id: 17,
    name: "Time Series Prediction",
    createdAt: "2020-05-19",
    owner: "5esfr297ga124124124",
    emission: 3.98,
  },
  {
    id: 18,
    name: "Time Series Prediction",
    createdAt: "2020-04-05",
    owner: "5esfr297ga124124124",
    emission: 6.22,
  },
  {
    id: 19,
    name: "Time Series Prediction",
    createdAt: "2020-03-20",
    owner: "5esfr297ga124124124",
    emission: 1.45,
  },
  {
    id: 20,
    name: "Time Series Prediction",
    createdAt: "2020-02-09",
    owner: "5esfr297ga124124124",
    emission: 8.03,
  }
];

export const validators: Validator[] = [
  { name: "Item 1", total: 23.56, owner: "John Doe", network: 42.75 },
  { name: "Item 2", total: 45.21, owner: "Jane Smith", network: 88.33 },
  { name: "Item 3", total: 12.89, owner: "Alice Johnson", network: 65.12 },
  { name: "Item 4", total: 78.34, owner: "Bob Brown", network: 10.55 },
  { name: "Item 5", total: 56.78, owner: "Emma Davis", network: 31.44 },
  { name: "Item 6", total: 34.22, owner: "Michael Wilson", network: 92.07 },
  { name: "Item 7", total: 67.89, owner: "Sophia Lee", network: 18.99 },
  { name: "Item 8", total: 43.12, owner: "James Taylor", network: 76.33 },
  { name: "Item 9", total: 21.45, owner: "Olivia Martinez", network: 54.67 },
  { name: "Item 10", total: 87.90, owner: "William Anderson", network: 37.11 },
  { name: "Item 11", total: 33.67, owner: "Charlotte Garcia", network: 81.25 },
  { name: "Item 12", total: 62.34, owner: "Daniel Hernandez", network: 6.78 },
  { name: "Item 13", total: 18.90, owner: "Emily Lopez", network: 94.02 },
  { name: "Item 14", total: 75.43, owner: "Alexander Gonzalez", network: 23.46 },
  { name: "Item 15", total: 39.56, owner: "Mia Perez", network: 69.88 },
  { name: "Item 16", total: 52.78, owner: "Ethan Carter", network: 45.32 },
  { name: "Item 17", total: 28.90, owner: "Abigail Flores", network: 11.67 },
  { name: "Item 18", total: 81.23, owner: "Isabella Washington", network: 78.90 },
  { name: "Item 19", total: 47.56, owner: "Noah Adams", network: 57.34 },
  { name: "Item 20", total: 65.89, owner: "Ava Scott", network: 82.45 },
];
