import harryPixel from "../assets/harry_pixel.png";

let cachedSpritePromise = null;

/**
 * Loads harry_pixel.png once, removes the connected dark background via flood fill,
 * crops transparent margins, and returns a data URL with its tight aspect ratio.
 */
export function loadHarrySprite() {
  if (cachedSpritePromise) return cachedSpritePromise;

  cachedSpritePromise = new Promise((resolve) => {
    const img = new Image();
    img.src = harryPixel;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        resolve({ src: harryPixel, ratio: 1 });
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { width, height, data } = imageData;
      const getIndex = (x, y) => (y * width + x) * 4;

      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];

      const isDark = (x, y) => {
        const i = getIndex(x, y);
        return (
          Math.abs(data[i] - bgR) < 10 &&
          Math.abs(data[i + 1] - bgG) < 10 &&
          Math.abs(data[i + 2] - bgB) < 10 &&
          data[i + 3] > 0
        );
      };

      const queue = [];
      const corners = [
        [0, 0],
        [width - 1, 0],
        [0, height - 1],
        [width - 1, height - 1],
      ];

      corners.forEach(([cx, cy]) => {
        if (isDark(cx, cy)) {
          queue.push([cx, cy]);
          data[getIndex(cx, cy) + 3] = 0;
        }
      });

      let head = 0;
      const dirs = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
      ];

      while (head < queue.length) {
        const [x, y] = queue[head++];
        for (const [dx, dy] of dirs) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= 0 && nx < width && ny >= 0 && ny < height && isDark(nx, ny)) {
            data[getIndex(nx, ny) + 3] = 0;
            queue.push([nx, ny]);
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      let minX = width;
      let minY = height;
      let maxX = -1;
      let maxY = -1;
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (data[getIndex(x, y) + 3] > 0) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (maxX >= minX && maxY >= minY) {
        const cropW = maxX - minX + 1;
        const cropH = maxY - minY + 1;
        const cropCanvas = document.createElement("canvas");
        cropCanvas.width = cropW;
        cropCanvas.height = cropH;
        const cropCtx = cropCanvas.getContext("2d");

        if (cropCtx) {
          cropCtx.drawImage(canvas, minX, minY, cropW, cropH, 0, 0, cropW, cropH);
          resolve({
            src: cropCanvas.toDataURL(),
            ratio: cropW / cropH,
          });
          return;
        }
      }

      resolve({
        src: canvas.toDataURL(),
        ratio: 1,
      });
    };

    img.onerror = () => {
      resolve({ src: harryPixel, ratio: 1 });
    };
  });

  return cachedSpritePromise;
}

