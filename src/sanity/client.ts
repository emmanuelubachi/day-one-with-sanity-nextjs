import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "eqx4xn7g",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});
