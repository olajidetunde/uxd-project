import React, { useState, useEffect } from "react";
import Data from "./Data";
import { FeedbackContainer, SlideWrap, Slider, Header, LeftArrow, RightArrow, Name, School, Quote} from "./FeedbackStyles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Feedback = () => {

  const [Students] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = Students.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, Students]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <FeedbackContainer id="feedback">
      <Header>Feedback from students</Header>
      <SlideWrap>
        {Students.map((item, indexStudents) => {
          const { id, name, school, quote } = item;
          let position = "nextSlide";
          if (indexStudents === index) {
            position = "activeSlide";
          }
          if (
            indexStudents === index - 1 ||
            (index === 0 && indexStudents === Students.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <Slider className={position} key={id}>
              {/* <Img src="" alt="" /> */}
              <Name>{name}</Name>
              <School>{school}</School>
              <Quote>{quote}</Quote>
            </Slider>
          );
        })}
        <LeftArrow onClick={() => setIndex(index - 1)}>
          <FiArrowLeft/>
        </LeftArrow>
        <RightArrow onClick={() => setIndex(index + 1)}>
          <FiArrowRight/>
        </RightArrow>
      </SlideWrap>
    </FeedbackContainer>
  );
};

export default Feedback;
