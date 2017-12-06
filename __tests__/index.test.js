import Uuid from "../index"

describe("Uuid", () => {
  it("returns a Uuid", () => {
    const uuid = Uuid.get();

    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
    expect(uuid).toEqual(expect.stringMatching(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/));
  });
});
