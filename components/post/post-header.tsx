import styled from "styled-components";
import { Metadata, Post } from "../../lib/posts";
import { AccentPrimary, AccentSecondary } from "../../lib/themes";
import { PostImage } from "./post-image";
import Timestamp from "./timestamp";

const Container = styled.div`
  padding-bottom: 1rem;
  border-bottom: 2px solid ${AccentPrimary};
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  padding-left: 1rem;

  color: ${AccentPrimary};
  border-left: 3px solid ${AccentPrimary};
`;

const Subtitle = styled.span`
  font-weight: bolder;
  border-left: 3px solid ${AccentSecondary};
  padding-left: 1rem;
  display: block;
  margin: 1rem 0;
  color: ${AccentSecondary};
`;

export default function PostHeader(props: Post) {
  return (
    <Container>
      <Title>{props.title}</Title>

      {props.date && (
        <Subtitle>
          <Timestamp date={props.date} />
        </Subtitle>
      )}

      {props.coverImage && (
        <a href={props.coverImage} target="_blank" rel="noreferrer">
          <PostImage src={props.coverImage} />
        </a>
      )}
    </Container>
  );
}
