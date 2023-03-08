import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';

const HomePage = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const paragraph = paragraphRef.current;

    // Animate title fade-in on mount
    const titleVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const titleTransition = {
      duration: 1,
    };

    const titleAnimation = titleVariants && (
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={titleTransition}
      >
        BIG BOI BUDGETING
      </motion.h1>
    );

    // Animate paragraph slide-in on mount
    const paragraphVariants = {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    };

    const paragraphTransition = {
      duration: 1,
    };

    const paragraphAnimation = paragraphVariants && (
      <motion.p
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        transition={paragraphTransition}
      >
        A passive-aggressive budget tracker project could be described as a tool that helps users take control of their finances in a lighthearted and humorous way. It uses passive-aggressive prompts to encourage users to stay on track with their budget, while also providing helpful insights and feedback to help them make better financial decisions.
      </motion.p>
    );

    // Add animations to DOM nodes
    if (title) ReactDOM.render(titleAnimation, title);
    if (paragraph) ReactDOM.render(paragraphAnimation, paragraph);
  }, []);

  return (
    <Container>
      <Title ref={titleRef}></Title>
      <Paragraph ref={paragraphRef}></Paragraph>
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

const Title = styled.h1`
  font-size: 4rem;
`;

const Paragraph = styled.p`

  font-size: 10rem;
  margin-top: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;


export default HomePage;
