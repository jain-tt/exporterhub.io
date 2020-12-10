import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const CardExporter = ({ exporter, cardClick }) => {
  const {
    exporter_id,
    name,
    description,
    stars,
    logo_url,
    official,
    category
  } = exporter;

  return (
    <Div onClick={() => cardClick(exporter_id)}>
      <header>
        <span>
          <Icon>
            <AiFillStar />
          </Icon>
          {stars}
        </span>
        {/* <span>★{stars}</span> */}
      </header>
      <Article>
        <div>
          <img src={logo_url} alt={name} />
        </div>
        <Section>
          <span>{name}</span>
          <div>
            <span>{official}</span>
            <span>{category}</span>
          </div>
          <p>{description}</p>
        </Section>
      </Article>
    </Div>
  );
};

const Div = styled.div`
  width: ${({ theme }) => theme.width.card}px;
  height: 320px;
  transition: 0.1s ease-in-out;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({ theme }) =>
    (theme.width.content - theme.width.card * 3) / 2}px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  padding: 0 20px;
  &:hover {
    transform: scale(1.05);
  }
  @media ${({ theme }) => theme.media.mobile} {
    height: 120px;
    width: 100%;
    align-items: flex-start;
    padding: 0 30px;
    margin-right: 0%;
  }
  header {
    width: 100%;
    font-size: 12px;
    text-align: end;
    padding: 20px 0;
    @media ${({ theme }) => theme.media.mobile} {
      padding: 15px 0;
    }
  }
`;

const Article = styled.article`
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    flex-direction: row;
  }
  div {
    text-align: center;
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 35px;
      @media ${({ theme }) => theme.media.mobile} {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
    margin-left: 20px;
    align-items: flex-start;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
  }
  div {
    color: gray;
    margin-bottom: 20px;
    span {
      &:first-child {
        margin-right: 20px;
      }
      font-weight: 400;
      font-size: 14px;
    }
  }
  p {
    display: -webkit-box;
    text-align: center;
    font-size: 14px;
    white-space: normal;
    line-height: 1.2;
    height: 2.4em;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;

const Icon = styled.span`
  vertical-align: middle;
`;

export default withRouter(CardExporter);
