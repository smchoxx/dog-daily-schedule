import React from 'react';
import styled from 'styled-components';

const Footer = props => {
  return (
    <>
      <FooterBox>
        <FooterInfo>
          <FooterTitle>항해99 4주차 미니프로젝트 - 15조</FooterTitle>
          <FooterText>
            조성민 | 박시준 | 오성현 | 이민국 | 이종찬 | 정희윤
          </FooterText>
        </FooterInfo>
      </FooterBox>
    </>
  );
};

const FooterBox = styled.div`
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #343434;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterInfo = styled.div`
  max-width: 1000px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterTitle = styled.p`
  margin: 5px 0;
  border-bottom: 1px solid white;
  padding-bottom: 3px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const FooterText = styled.p`
  margin: 15px 0 0 0;
  font-size: 1rem;
`;

export default Footer;
