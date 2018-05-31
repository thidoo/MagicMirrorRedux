import { shallow } from "enzyme";
import CurrentWeather from "../CurrentWeather";

describe("Current weather", () => {
  it("Should show button", () => {
    const wrapper = shallow(<CurrentWeather />);

    expect(wrapper.find("Button").exists()).toBe(true);
  });
});
