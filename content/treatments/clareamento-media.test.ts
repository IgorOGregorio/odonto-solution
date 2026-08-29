import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";

import {
  clareamentoPageGallery,
  clareamentoPhotos,
  clareamentoProcedure,
} from "@/content/treatments/clareamento-media";

describe("clareamento media", () => {
  it("exports a curated gallery and a 3-step procedure carousel", () => {
    expect(clareamentoPhotos).toHaveLength(6);
    expect(clareamentoProcedure).toHaveLength(3);
    expect(clareamentoProcedure.map((item) => item.kind)).toEqual([
      "video",
      "video",
      "image",
    ]);
    expect(clareamentoPageGallery()).toEqual(clareamentoPhotos);
  });

  it("ends the procedure carousel with the november result photo", () => {
    const result = clareamentoProcedure.at(-1);
    expect(result?.kind).toBe("image");
    expect(result?.title).toBe("Resultado");
    expect(result?.src).toBe(
      "/images/clareamento/fotos/13-novembro-resultado.jpg",
    );
  });

  it("references files that exist in public/", () => {
    const publicDir = path.resolve(process.cwd(), "public");

    for (const item of [...clareamentoPhotos, ...clareamentoProcedure]) {
      expect(existsSync(path.join(publicDir, item.src))).toBe(true);
    }
  });
});
