const { getMedian } = require("./median");

describe("getMedian", () => {
  it("should get median from an unsorted, odd list", () =>
    expect(getMedian([5, 2, 4, 1, 3])).toBe(3));

  it("should get median of an even list with outlier", () =>
    expect(getMedian([50, 3, 1, 1, 2])).toBe(2));

  it("should get median of an odd list", () =>
    expect(getMedian([2, 3, 4, 5])).toBe(3.5));
<<<<<<< HEAD
=======

  it("should ensure that the sort is working", () => {
    expect(getMedian([11, 1, 2, 3, 4])).toBe(3);
  });
>>>>>>> ea0b447967b7bc353f7c2a3243c1d29e174f594e
});
