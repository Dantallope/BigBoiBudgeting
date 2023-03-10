import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <Container>
      <Title animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        BIG BOI BUDGETING
      </Title>
      <Paragraph
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        A passive-aggressive budget tracker project could be described as a tool that helps users take control of their finances in a lighthearted and humorous way. It uses passive-aggressive prompts to encourage users to stay on track with their budget, while also providing helpful insights and feedback to help them make better financial decisions.
      </Paragraph>
      <Image src="../images/bbb.png" alt="Description of the image" />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
  max-width: 800px;
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;

export default HomePage;
