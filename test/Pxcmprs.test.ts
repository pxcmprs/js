import Pxcmprs, { Format } from "../src/index";

test("Request", () => {
  let pxcmprs = new Pxcmprs("https://pxcmprs.lynx.agency");

  let url = pxcmprs.generateUrl({
    source: "https://unsplash.com",
    width: 200,
    height: 100,
    format: Format.WebP,
    quality: 50,
  });

  expect(url).toBe("https://pxcmprs.lynx.agency/aHR0cHM6Ly91bnNwbGFzaC5jb20.webp?width=200&height=100&quality=50");
});
