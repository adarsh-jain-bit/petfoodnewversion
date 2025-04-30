"use client";
import React from "react";

import { SectionWrapper, SubSectionWrapper } from "@src/theme/Global.styles";
import Slider from "@src/components/heroSection/Slider";
import BrandSection from "./BrandSection";
import CategorySection from "./CategorySection";
import PriceSection from "./PriceSection";
import LearnWithPet from "./LearnWithPet";

const Hero = () => {
  return (
    <>
      <Slider />
      <SubSectionWrapper>
      <BrandSection category="cat" />

      </SubSectionWrapper>
      <SubSectionWrapper>
      <BrandSection category="dog" />
      </SubSectionWrapper>
      <SubSectionWrapper>
      <BrandSection category="bird" />
      </SubSectionWrapper>
      <SectionWrapper>
      <CategorySection/>
      </SectionWrapper>
      <SubSectionWrapper>
        <PriceSection />
      </SubSectionWrapper>
      <SubSectionWrapper>
         <LearnWithPet/>
      </SubSectionWrapper>
    </>
  );
};

export default Hero;
