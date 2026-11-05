import { describe, it, expect } from "vitest";
import { projects } from "../data/projects.js";

const ACCENTS = ["pink", "lemon", "mint", "cobalt"];
const STATUSES = ["live", "in-progress", "coursework"];

describe("projects data", () => {
  it("has at most one featured project", () => {
    const featured = projects.filter((p) => p.featured && !p.draft);
    expect(featured.length).toBeLessThanOrEqual(1);
  });

  it.each(projects.map((p) => [p.title, p]))(
    "%s has the required fields and valid values",
    (_title, project) => {
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(Array.isArray(project.stack)).toBe(true);
      expect(ACCENTS).toContain(project.accent);
      expect(STATUSES).toContain(project.status);
    },
  );
});
