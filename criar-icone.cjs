const sharp = require("sharp");
const path = require("path");

const input = path.join(process.env.USERPROFILE, "Downloads", "redondo.png");
const output = path.join(process.cwd(), "app", "icon.png");

async function main() {
  const { data, info } = await sharp(input)
    .resize(512, 512, { fit: "cover" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const mask = Buffer.from(
    '<svg width="512" height="512"><circle cx="256" cy="256" r="250" fill="white"/></svg>'
  );

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toFile(output + ".novo.png");

  require("fs").renameSync(output + ".novo.png", output);
  console.log("Ícone circular criado!");
}

main().catch(console.error);
