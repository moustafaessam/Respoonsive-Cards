import "./styles.css";
import Text from "./Text";
import ServiceContainer from "./ServiceContainer";
import ServiceBox from "./ServiceBox";

function App() {
  return (
    <>
      <Text />
      <ServiceContainer>
        <ServiceBox
          header="Supervisor"
          text="Monitors activity to identify project roadblocks"
          image="./images/icon-supervisor.svg"
          borderColor={"cyan"}
          imageAlt="Supervisor"
        />
        <div
          style={{
            display: "flex",
            gap: "3rem",
            flexDirection: "column",
            flexShrink: "1",
          }}
        >
          <ServiceBox
            header="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            image="./images/icon-team-builder.svg"
            borderColor={"red"}
            imageAlt="Team Builder"
          />
          <ServiceBox
            header="Karma"
            text="Regularly evaluates our talent to ensure quality"
            image="./images/icon-karma.svg"
            borderColor={"orange"}
            imageAlt="bulb"
          />
        </div>
        <ServiceBox
          header="Calculator"
          text="Uses data from past projects to provide better delivery estimates"
          image="./images/icon-calculator.svg"
          borderColor={"blue"}
          imageAlt="calculator"
        />
      </ServiceContainer>
    </>
  );
}

export default App;
