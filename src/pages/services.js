import React from "react";
import styled from "styled-components";

// Import image file
import budgetImage from "../images/budget.png";

const ImportanceOfBudgeting = () => {
  return (
    <Container>
      <Header>
        <Title>Why Budget Tracking Is Important and the servies we provide</Title>
      </Header>
      <ImageContainer>
        <Image src={budgetImage} alt="Budgeting Image" />
      </ImageContainer>
      <Content>
        <Section>
          <Subtitle>Control Your Finances</Subtitle>
          <Text>
            Budget tracking allows you to take control of your finances by
            keeping track of where your money is going. By monitoring your
            spending habits, you can identify areas where you can cut back and
            save money.
          </Text>
        </Section>
        <Section>
          <Subtitle>Set Financial Goals</Subtitle>
          <Text>
            Budget tracking helps you set and achieve financial goals. By
            creating a budget and sticking to it, you can save money for a down
            payment on a house, a vacation, or other long-term goals.
          </Text>
        </Section>
        <Section>
          <Subtitle>Reduce Stress</Subtitle>
          <Text>
            Financial stress is a major source of stress for many people. By
            budget tracking, you can reduce stress and anxiety by knowing
            exactly where your money is going and having a plan in place to
            achieve your financial goals.
          </Text>
        </Section>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 2rem 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Section = styled.div`
  margin: 2rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export default ImportanceOfBudgeting;
