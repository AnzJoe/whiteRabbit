import api from "../../api";

it("calls search data", async () => {
  const sectionList = await api.getDashboardData();
  sectionList.every((employee) => {
    expect(employee).toMatchObject({
      name: expect.any(String)
    });
  });
});
