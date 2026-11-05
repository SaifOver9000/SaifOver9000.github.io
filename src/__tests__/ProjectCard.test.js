import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ProjectCard from "../components/ProjectCard.vue";

const baseProject = {
  title: "Test Project",
  kicker: "Web app",
  summary: "A project used in tests.",
  highlights: ["First highlight"],
  stack: ["Vue 3", "Vite"],
  status: "live",
  accent: "mint",
  links: { live: "https://example.com", code: "", caseStudy: "" },
};

describe("ProjectCard", () => {
  it("renders the title, summary and stack", () => {
    const wrapper = mount(ProjectCard, { props: { project: baseProject } });
    expect(wrapper.text()).toContain("Test Project");
    expect(wrapper.text()).toContain("A project used in tests.");
    expect(wrapper.findAll('[aria-label="Tech stack"] li')).toHaveLength(2);
  });

  it("only shows buttons for links that are filled in", () => {
    const wrapper = mount(ProjectCard, { props: { project: baseProject } });
    const links = wrapper.findAll("a");
    expect(links).toHaveLength(1);
    expect(links[0].attributes("href")).toBe("https://example.com");
  });

  it('shows "Links coming soon" when there are no links', () => {
    const project = {
      ...baseProject,
      links: { live: "", code: "", caseStudy: "" },
    };
    const wrapper = mount(ProjectCard, { props: { project } });
    expect(wrapper.find("a").exists()).toBe(false);
    expect(wrapper.text()).toContain("Links coming soon");
  });

  it("falls back to the Live status for an unknown status", () => {
    const project = { ...baseProject, status: "unknown" };
    const wrapper = mount(ProjectCard, { props: { project } });
    expect(wrapper.text()).toContain("Live");
  });
});
