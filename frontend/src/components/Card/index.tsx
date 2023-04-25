import styled from "styled-components";
import LiveTvIcon from "@mui/icons-material/LiveTv";

interface CardProps {
  title: string;
  totalStudyTime: number | string;
  tags: string[];
}

const Card = ({ title, totalStudyTime, tags }: CardProps) => {
  return (
    <Wrapper>
      <CardContainer>
        <CardHeader>
          <CardThumbnail>
            <CardImage
              src="https://shibajuku.net/wp/wp-content/uploads/2020/02/seigiT.jpg"
              alt="手書きの「正義」という文字が縦に大きくマジックで書かれている白いTシャツ"
              className="card__image"
            />
          </CardThumbnail>
        </CardHeader>
        <CardBody>
          <LiveTvIcon />
          <CardTextBox>
            <CardTitle>{title}</CardTitle>
            <TotalStudyTime>トータル勉強時間: {totalStudyTime} h</TotalStudyTime>
            <Tag>{tags}</Tag>
          </CardTextBox>
        </CardBody>
      </CardContainer>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 250px;
`;

const CardContainer = styled.article`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
`;

const CardHeader = styled.div``;

const CardThumbnail = styled.figure`
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  padding: 0.8rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const TotalStudyTime = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const Tag = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const CardTextBox = styled.div`
  margin-left: 1rem;
`;
