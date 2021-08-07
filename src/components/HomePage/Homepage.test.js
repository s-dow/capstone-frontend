import { timeGreeting } from "./HomePage";

describe("greeting", () => {
  it("should say good morning before or at 11 am", () => {
    const time = 10;
    expect(timeGreeting(time)).toEqual("Good Morning!");
  });

  it("should say good afternoon after 11 am and before 4pm", () => {
    const time = 14;
    expect(timeGreeting(time)).toEqual("Good Afternoon!");
  });

  it("should say good evening after 4pm", () => {
    const time = 19;
    expect(timeGreeting(time)).toEqual("Good Evening!");
  });

  it("should say good evening at midnight", () => {
    const time = 0;
    expect(timeGreeting(time)).toEqual("Good Evening!");
  });
});
