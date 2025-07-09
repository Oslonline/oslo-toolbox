// Dithering utility for Oslo Toolbox
// Ported from steinberg-image PatternDrawer and main dithering logic

export const patternOptions = [
  // Error diffusion (most popular first)
  { value: 1, label: "Floyd-Steinberg (classic)" },
  { value: 3, label: "Atkinson" },
  { value: 4, label: "Burkes" },
  { value: 5, label: "Stucki" },
  { value: 6, label: "Sierra" },
  { value: 12, label: "Sierra Lite" },
  { value: 13, label: "Two-Row Sierra" },
  { value: 14, label: "Stevenson-Arce" },
  { value: 7, label: "Jarvis-Judice-Ninke" },
  // Ordered dithering
  { value: 2, label: "Bayer 4x4 (ordered)" },
  { value: 8, label: "Bayer 8x8 (ordered)" },
  // Simple threshold
  { value: 15, label: "Threshold (binary)" },
  // Experimental/other
  { value: 9, label: "Halftone (experimental)" },
  { value: 10, label: "Random threshold (experimental)" },
  { value: 11, label: "Dot diffusion (simple, experimental)" },
];

export const isErrorDiffusion = (p) => [1, 3, 4, 5, 6, 7, 12, 13, 14].includes(p);

// Main dithering function
export function ditherImage({ imageData, width, height, pattern = 1, threshold = 128, invert = false, serpentine = true }) {
  // Always copy input data to avoid mutation bugs
  const dataCopy = new Uint8ClampedArray(imageData);
  if (pattern === 1) {
    const data = new Uint8ClampedArray(dataCopy);
    for (let y = 0; y < height; y++) {
      const leftToRight = !serpentine || y % 2 === 0;
      for (let x = leftToRight ? 0 : width - 1; leftToRight ? x < width : x >= 0; leftToRight ? x++ : x--) {
        const pxIndex = (y * width + x) * 4;
        const brightness = (data[pxIndex] + data[pxIndex + 1] + data[pxIndex + 2]) / 3;
        let newColor = brightness < threshold ? 0 : 255;
        if (invert) newColor = 255 - newColor;
        const error = brightness - (invert ? 255 - newColor : newColor);
        data[pxIndex] = data[pxIndex + 1] = data[pxIndex + 2] = newColor;
        // Floyd-Steinberg error diffusion
        if (leftToRight) {
          if (x < width - 1) data[pxIndex + 4] += (error * 7) / 16;
          if (y < height - 1) {
            if (x > 0) data[pxIndex + width * 4 - 4] += (error * 3) / 16;
            data[pxIndex + width * 4] += (error * 5) / 16;
            if (x < width - 1) data[pxIndex + width * 4 + 4] += (error * 1) / 16;
          }
        } else {
          if (x > 0) data[pxIndex - 4] += (error * 7) / 16;
          if (y < height - 1) {
            if (x < width - 1) data[pxIndex + width * 4 + 4] += (error * 3) / 16;
            data[pxIndex + width * 4] += (error * 5) / 16;
            if (x > 0) data[pxIndex + width * 4 - 4] += (error * 1) / 16;
          }
        }
      }
    }
    return new ImageData(data, width, height);
  }
  // All other patterns
  return patternDrawer(dataCopy, width, height, pattern, threshold, { invert, serpentine });
}

function patternDrawer(data, width, height, pattern, threshold = 128, options = {}) {
  // Error diffusion helper
  const errorDiffusion = (matrix, divisor, serpentineDefault = false) => {
    const out = new Uint8ClampedArray(data);
    const useSerpentine = options.serpentine ?? serpentineDefault;
    for (let y = 0; y < height; y++) {
      const yOffset = y * width * 4;
      const leftToRight = !useSerpentine || y % 2 === 0;
      for (let x = leftToRight ? 0 : width - 1; leftToRight ? x < width : x >= 0; leftToRight ? x++ : x--) {
        const pxIndex = yOffset + x * 4;
        const oldPixel = out[pxIndex];
        const newPixel = oldPixel < threshold ? 0 : 255;
        const error = oldPixel - newPixel;
        out[pxIndex] = out[pxIndex + 1] = out[pxIndex + 2] = newPixel;
        // Distribute error
        for (let j = 0; j < matrix.length; j++) {
          for (let i = 0; i < matrix[j].length; i++) {
            const dx = i - Math.floor(matrix[j].length / 2);
            const dy = j;
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = ny * width * 4 + nx * 4;
              out[nIdx] += (error * matrix[j][i]) / divisor;
            }
          }
        }
      }
    }
    if (options.invert) {
      for (let i = 0; i < out.length; i += 4) {
        out[i] = 255 - out[i];
        out[i + 1] = 255 - out[i + 1];
        out[i + 2] = 255 - out[i + 2];
      }
    }
    return new ImageData(out, width, height);
  };

  // Bayer 4x4 ordered dithering
  if (pattern === 2) {
    const bayerMatrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ];
    const matrixSize = bayerMatrix.length;
    const scaleFactor = 16;
    const out = new Uint8ClampedArray(data);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pxIndex = (y * width + x) * 4;
        const brightness = out[pxIndex];
        const t = (bayerMatrix[y % matrixSize][x % matrixSize] / scaleFactor) * 255;
        const value = brightness < t ? 0 : 255;
        out[pxIndex] = out[pxIndex + 1] = out[pxIndex + 2] = value;
        out[pxIndex + 3] = 255;
      }
    }
    if (options.invert) {
      for (let i = 0; i < out.length; i += 4) {
        out[i] = 255 - out[i];
        out[i + 1] = 255 - out[i + 1];
        out[i + 2] = 255 - out[i + 2];
      }
    }
    return new ImageData(out, width, height);
  }

  // Atkinson
  if (pattern === 3) {
    const out = new Uint8ClampedArray(data);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pxIndex = (y * width + x) * 4;
        const oldPixel = out[pxIndex];
        const newPixel = oldPixel < threshold ? 0 : 255;
        const error = (oldPixel - newPixel) / 8;
        out[pxIndex] = out[pxIndex + 1] = out[pxIndex + 2] = newPixel;
        const coords = [
          [x + 1, y],
          [x + 2, y],
          [x - 1, y + 1],
          [x, y + 1],
          [x + 1, y + 1],
          [x, y + 2],
        ];
        for (const [nx, ny] of coords) {
          if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
            const nIdx = (ny * width + nx) * 4;
            out[nIdx] += error;
            out[nIdx + 1] += error;
            out[nIdx + 2] += error;
          }
        }
      }
    }
    return new ImageData(out, width, height);
  }

  // Burkes
  if (pattern === 4) {
    const matrix = [
      [0, 0, 0, 8, 4],
      [2, 4, 8, 4, 2],
    ];
    return errorDiffusion(matrix, 32, true);
  }

  // Stucki
  if (pattern === 5) {
    const matrix = [
      [0, 0, 0, 8, 4],
      [2, 4, 8, 4, 2],
      [1, 2, 4, 2, 1],
    ];
    return errorDiffusion(matrix, 42, true);
  }

  // Sierra
  if (pattern === 6) {
    const matrix = [
      [0, 0, 0, 5, 3],
      [2, 4, 5, 4, 2],
      [0, 2, 3, 2, 0],
    ];
    return errorDiffusion(matrix, 32, true);
  }

  // Jarvis-Judice-Ninke
  if (pattern === 7) {
    const matrix = [
      [0, 0, 0, 7, 5],
      [3, 5, 7, 5, 3],
      [1, 3, 5, 3, 1],
    ];
    return errorDiffusion(matrix, 48, true);
  }

  // Bayer 8x8 ordered dithering
  if (pattern === 8) {
    const bayer8x8 = [
      [0, 48, 12, 60, 3, 51, 15, 63],
      [32, 16, 44, 28, 35, 19, 47, 31],
      [8, 56, 4, 52, 11, 59, 7, 55],
      [40, 24, 36, 20, 43, 27, 39, 23],
      [2, 50, 14, 62, 1, 49, 13, 61],
      [34, 18, 46, 30, 33, 17, 45, 29],
      [10, 58, 6, 54, 9, 57, 5, 53],
      [42, 26, 38, 22, 41, 25, 37, 21],
    ];
    const matrixSize = 8;
    const scaleFactor = 64;
    const out = new Uint8ClampedArray(data);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pxIndex = (y * width + x) * 4;
        const brightness = out[pxIndex];
        const t = (bayer8x8[y % matrixSize][x % matrixSize] / scaleFactor) * 255;
        const value = brightness < t ? 0 : 255;
        out[pxIndex] = out[pxIndex + 1] = out[pxIndex + 2] = value;
        out[pxIndex + 3] = 255;
      }
    }
    if (options.invert) {
      for (let i = 0; i < out.length; i += 4) {
        out[i] = 255 - out[i];
        out[i + 1] = 255 - out[i + 1];
        out[i + 2] = 255 - out[i + 2];
      }
    }
    return new ImageData(out, width, height);
  }

  // Halftone (experimental, simple circular threshold)
  if (pattern === 9) {
    const out = new Uint8ClampedArray(data);
    const dotSize = 6;
    for (let y = 0; y < height; y += dotSize) {
      for (let x = 0; x < width; x += dotSize) {
        let sum = 0;
        let count = 0;
        for (let dy = 0; dy < dotSize; dy++) {
          for (let dx = 0; dx < dotSize; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < width && ny < height) {
              const idx = (ny * width + nx) * 4;
              sum += out[idx];
              count++;
            }
          }
        }
        const avg = sum / count;
        const isDot = avg < threshold;
        for (let dy = 0; dy < dotSize; dy++) {
          for (let dx = 0; dx < dotSize; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < width && ny < height) {
              const idx = (ny * width + nx) * 4;
              const cx = dotSize / 2 - 0.5,
                cy = dotSize / 2 - 0.5;
              const dist = Math.sqrt((dx - cx) ** 2 + (dy - cy) ** 2);
              const radius = isDot ? dotSize / 2.2 : dotSize / 3.5;
              const v = dist < radius ? 0 : 255;
              out[idx] = out[idx + 1] = out[idx + 2] = v;
              out[idx + 3] = 255;
            }
          }
        }
      }
    }
    return new ImageData(out, width, height);
  }

  // Random threshold (experimental)
  if (pattern === 10) {
    const out = new Uint8ClampedArray(data);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pxIndex = (y * width + x) * 4;
        const t = Math.random() * 255;
        const value = out[pxIndex] < t ? 0 : 255;
        out[pxIndex] = out[pxIndex + 1] = out[pxIndex + 2] = value;
        out[pxIndex + 3] = 255;
      }
    }
    return new ImageData(out, width, height);
  }

  // Dot diffusion (simple, experimental)
  if (pattern === 11) {
    const out = new Uint8ClampedArray(data);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pxIndex = (y * width + x) * 4;
        const mask = (x & 1) ^ (y & 1) ? threshold : 255 - threshold;
        const value = out[pxIndex] < mask ? 0 : 255;
        out[pxIndex] = out[pxIndex + 1] = out[pxIndex + 2] = value;
        out[pxIndex + 3] = 255;
      }
    }
    return new ImageData(out, width, height);
  }

  // Sierra Lite
  if (pattern === 12) {
    const matrix = [
      [0, 0, 2],
      [1, 1, 0],
    ];
    return errorDiffusion(matrix, 4, true);
  }

  // Two-Row Sierra
  if (pattern === 13) {
    const matrix = [
      [0, 0, 0, 4, 3],
      [1, 2, 3, 2, 1],
    ];
    return errorDiffusion(matrix, 16, true);
  }

  // Stevenson-Arce
  if (pattern === 14) {
    const matrix = [
      [0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0],
      [12, 0, 26, 0, 30, 0, 30, 0, 26, 0, 12],
      [0, 12, 0, 26, 0, 12, 0, 26, 0, 12, 0],
    ];
    return errorDiffusion(matrix, 200, false);
  }

  // Simple Threshold (binary)
  if (pattern === 15) {
    const out = new Uint8ClampedArray(data);
    for (let i = 0; i < out.length; i += 4) {
      const value = out[i] < threshold ? 0 : 255;
      out[i] = out[i + 1] = out[i + 2] = value;
      out[i + 3] = 255;
    }
    if (options.invert) {
      for (let i = 0; i < out.length; i += 4) {
        out[i] = 255 - out[i];
        out[i + 1] = 255 - out[i + 1];
        out[i + 2] = 255 - out[i + 2];
      }
    }
    return new ImageData(out, width, height);
  }

  // fallback: just return as is
  let result = new ImageData(data, width, height);
  if (options.invert) {
    for (let i = 0; i < result.data.length; i += 4) {
      result.data[i] = 255 - result.data[i];
      result.data[i + 1] = 255 - result.data[i + 1];
      result.data[i + 2] = 255 - result.data[i + 2];
    }
  }
  return result;
}
