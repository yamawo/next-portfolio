import { createCanvas, loadImage, registerFont } from "canvas";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const createOgp = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // OGP の推奨サイズ
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);

  const ctx = canvas.getContext("2d");
  const backgroundImage = await loadImage(path.resolve("./public/assets/pngs/ogp_background_image.png"));
  ctx.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve("./public/fonts/NotoSansJP-Light.otf"), {
    family: "NotoSansJP-Light",
  });

  ctx.fillStyle = "#FFF";
  ctx.font = "60px ipagp";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("わしはOGP画像を生成したい！！！！！", 600, 300);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};

export default createOgp;
