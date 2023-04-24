import styled from "styled-components";

const Card = () => {
  return (
    <Wrapper className="l-wrapper">
      <CardContainer className="card">
        <CardHeader className="card__header">
          <CardTitle className="card__title">教材</CardTitle>
          <CardThumbnail className="card__thumbnail">
            <CardImage
              src="https://shibajuku.net/wp/wp-content/uploads/2020/02/seigiT.jpg"
              alt="手書きの「正義」という文字が縦に大きくマジックで書かれている白いTシャツ"
              className="card__image"
            />
          </CardThumbnail>
        </CardHeader>
        <CardBody className="card__body">
          <CardText className="card__text">
            ごく普通の生地の白いTシャツに油性マジックで「正義」と書いただけの架空の半袖Tシャツです。
          </CardText>
          <CardText className="card__text -number">&yen; 15,000</CardText>
        </CardBody>
      </CardContainer>
    </Wrapper>
  );
};

export default Card;


const Wrapper = styled.div`
  margin: 3rem auto;
  width: 400px;
`;

const CardContainer = styled.article`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  text-decoration: none;
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardTitle = styled.h3`
  padding: 1rem 1rem 0;
  font-size: 1.25rem;
  order: 1;
`;

const CardThumbnail = styled.figure`
  margin: 0;
  order: 0;
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardText = styled.p`
  font-size: 0.75rem;

  & + & {
    margin-top: 0.5rem;
  }

  &.-number {
    text-align: right;
  }
`;
