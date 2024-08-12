import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
  }
}
