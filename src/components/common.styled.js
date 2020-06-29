import styled from "styled-components";
import {Col} from "react-bootstrap";

export const Styledh2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  margin: 0 0 20px 0;
  font-weight: 800;
  font-size: 36px;
  color: #333;
`;
export const Styledh3 = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;
export const Styledh4 = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  color: #333;
  font-weight: 600;
`;
export const Styledh5 = styled.h5`
  text-transform: uppercase;
  font-weight: 700;
  line-height: 20px;
`;

export const StyledpP = styled.p`
  font-size: 15px;
  color: #777;
`;

export const SectionTitlep = styled(StyledpP)`
  font-size: 18px;
`;

export const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 520px;
  margin-top: 10px;
  background: #fff;
  border-right: 0;
  box-shadow: 0 0 50px rgba(0,0,0,0.06);
  @media (max-width: 768px) {
    margin: 50px 0;
  }
`;

export const Styledul = styled.ul`
  list-style: none;
  padding: 0;
  webkit-padding: 0;
  moz-padding: 0;
`;

export const Styledol = styled.ol`
  list-style: none;
  padding: 0;
  webkit-padding: 0;
  moz-padding: 0;
`;

export const Styledhr = styled.hr`
  height: 2px;
  width: 70px;
  text-align: center;
  position: relative;
  background: #1E7A46;
  margin-bottom: 20px;
  border: 0;
`;

export const SectionTitle = styled(Col)`
  margin-bottom: 70px;
`;

export const SectionTitleh2 = styled(Styledh2)`
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  
  ::after{
    position: absolute;
    content: "";
    background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    height: 4px;
    width: 60px;
    bottom: 0;
    margin-left: -30px;
    left: 50%;
  }
`;

export const StyledI = styled.i`
  font-size: 38px;
  margin-bottom: 20px;
  transition: all 0.5s;
  color: #fff;
  width: 100px !important;
  height: 100px !important;
  padding: 23px 0;
  border-radius: 50%;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  box-shadow: 10px 10px 10px rgba(0,0,0,.05);
  display: inline-block;
`;