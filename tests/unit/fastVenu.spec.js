import { FastVenuCreator } from "@/model/fastVenuCreator.js";

describe("fastVenu", () => {
  it("constructor works", () => {
    let fastVenuInstance = new FastVenuCreator("b");
    expect(fastVenuInstance.onKey).toStrictEqual("b");
    expect(fastVenuInstance.urlList).toStrictEqual([]);
  });

  it("will fail on empty url list", () => {
    let fastVenuInstance = new FastVenuCreator();
    expect(fastVenuInstance.setUpOnUrls([])).toStrictEqual(0);
  });

  it("will fail on without object", () => {
    let fastVenuInstance = new FastVenuCreator();
    let domElement;
    expect(fastVenuInstance.setUpOnElement(domElement)).toStrictEqual(0);
  });

  it("toggling", () => {
    let fastVenuInstance = new FastVenuCreator();
    expect(fastVenuInstance.created).toStrictEqual(false);
    fastVenuInstance.toggle();
    expect(fastVenuInstance.created).toStrictEqual(true);
  });

  it("strips html tags", () => {
    let fastVenuInstance = new FastVenuCreator();
    let html = "<p>Hello!</p>";
    expect(fastVenuInstance.stripHtmlTags(html)).toStrictEqual("Hello!");
  });

  // it("returns optionText correctly", () => {
  // let fastVenuInstance = new FastVenuCreator();
  // new html element
  // set inner html
  // divide getOptionText into smaller functions
  // });
});
