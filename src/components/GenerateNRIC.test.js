import { render, fireEvent } from "@testing-library/react";
import { GenerateNRIC, HeartSvg } from "./HelperFunctions";
import GenerateButton from "./GenerateButton";


test("GenerateNRIC", () => {
  const regex = /[STFG]\d{7}[A-Z]/;
  expect(GenerateNRIC()).toMatch(regex);
});

it("checkButtonRender", () => {
  const { queryByTitle } = render(<GenerateButton />);
  const btn = queryByTitle("generateButton");
  expect(btn).toBeTruthy();
});

describe("generateRandomNric", () => {
  it("matches regex", () => {
    const nric = GenerateNRIC();

    const regex = /[STFG]\d{7}[A-Z]/;
    expect(nric).toMatch(regex);
  });
});

test("HearSvg", () => {
  expect(HeartSvg()).toBeTruthy();
});


