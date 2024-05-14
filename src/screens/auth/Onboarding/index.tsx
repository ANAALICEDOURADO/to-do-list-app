import LogoOnboarding1 from "../../../assets/onboard1.svg";
import LogoOnboarding2 from "../../../assets/onboard2.svg";
import { Container } from "../../../global/styles/styles";
import { StatusBar } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../../global/styles/theme";
import * as S from "./styles";
import { Spacer } from "../../../components/Spacer";
import { dataContent } from "./utils/dataContent";
import { useState } from "react";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNextPress = () => {
    if (currentIndex < Object.keys(dataContent).length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleStartBtn = () => {};

  return (
    <Container style={{ marginTop: StatusBar.currentHeight }}>
      {currentIndex === 1 ? (
        <LogoOnboarding1 width={400} height={400} />
      ) : (
        <LogoOnboarding2 width={420} height={400} />
      )}

      <S.AreaContent>
        <Spacer height={40} />

        <S.AreaIndicator>
          <S.Indicator active={currentIndex === 1} />
          <S.Indicator active={currentIndex === 2} />
        </S.AreaIndicator>
        <S.Title>{dataContent[currentIndex].title}</S.Title>
        <S.Subtitle>{dataContent[currentIndex].subtitle}</S.Subtitle>
        <S.AreaBtn>
          {currentIndex === 1 ? (
            <S.NextBtn onPress={handleNextPress}>
              <S.BtnText>
                <FontAwesome5
                  name="arrow-right"
                  size={30}
                  color={theme.colors.third}
                />
              </S.BtnText>
            </S.NextBtn>
          ) : (
            <S.StartBtn onPress={handleStartBtn}>
              <S.BtnText>Comece agora!</S.BtnText>
            </S.StartBtn>
          )}
        </S.AreaBtn>
      </S.AreaContent>
    </Container>
  );
};

export default Onboarding;
