import api from "../../api";

it("calls search data", async () => {
  const sectionList = await api.getDashboardData();
  sectionList.every((sectionItem) => {
    expect(sectionItem).toMatchObject({
      Brand: expect.any(String),
      Variety: expect.any(String),
      Stars: expect.any(Number),
      Style: expect.any(String),
      Country: expect.any(String)
    });
  });
});
