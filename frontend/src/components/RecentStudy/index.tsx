import styled from "styled-components";
import Card from "../Card";

const RecentStudy = () => {
  return (
    <div>
      <h3>最近の学習</h3>
      <CardContainer>
        <ContainerContent>
          <Card id="5" title="React入門" totalStudyTime={10} tags={["React", "JavaScript", "Web開発"]} />
        </ContainerContent>
        <ContainerContent>
          <Card id="4" title="React入門" totalStudyTime={10} tags={["React", "JavaScript", "Web開発"]} />
        </ContainerContent>
      </CardContainer>
    </div>
  );
};

export default RecentStudy;


const CardContainer = styled.div`
  display: flex;
`;

const ContainerContent = styled.div`
  margin: 8px;
`;
