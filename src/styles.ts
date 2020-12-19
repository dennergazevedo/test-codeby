import styled from 'styled-components';

/** Assets */
import Background from './assets/background.png';
import img01 from './assets/img01.png';
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';
import img05 from './assets/img05.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  background-image: url(${Background});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  img {
    width: 180px;
  }

  h1 {
    margin-top: 100px;
    font-size: 80px;
    text-align: center;
    color: #fff;
    line-height: 100px;
    width: 50vw;
    min-width: 350px;
    font-weight: 600;

    @media only screen and (max-width: 600px) {
      font-size: 60px;
      line-height: 80px;
    }

    @media only screen and (max-width: 800px) {
      font-size: 70px;
      line-height: 80px;
      width: 70vw;
    }

    @media only screen and (max-width: 1300px) {
      margin-top: 50px;
    }
  }

  button {
    background-color: #fff;
    color: #4287f5;
    padding: 15px 100px;
    border: none;
    font-weight: 600;
    margin-top: 100px;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
      color: #215ebf;
    }

    @media only screen and (max-width: 800px) {
      margin-top: 50px;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80vw;
  margin-top: 50px;
  color: #333;

  @media only screen and (max-width: 1200px) {
    width: 90vw;
  }

  h2 {
    font-weight: 500;
  }

  h1 {
    font-size: 70px;
    font-weight: 600;

    @media only screen and (max-width: 600px) {
      font-size: 60px;
    }

    @media only screen and (max-width: 400px) {
      font-size: 40px;
    }
  }
`;

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const Nature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  padding-top: 10px;
  height: 45vh;
  min-width: 350px;
  background-image: url(${img01});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;

  h2 {
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px) {
    height: 35vh;
  }
`;

export const Daily = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  padding-top: 10px;
  height: 45vh;
  width: 55vw;
  min-width: 350px;
  background-image: url(${img02});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;

  h2 {
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px) {
    width: 50vw;
    height: 35vh;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Together = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  padding-top: 10px;
  height: 45vh;
  width: 100%;
  min-width: 350px;
  background-image: url(${img03});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;

  h2 {
    font-weight: 500;
  }
`;

export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
  padding-top: 10px;
  height: 45vh;
  min-width: 350px;
  background-image: url(${img05});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;

  h2 {
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px) {
    height: 35vh;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Analysis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 50px;
  padding-top: 10px;
  height: 45vh;
  width: 55vw;
  min-width: 350px;
  background-image: url(${img04});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;

  h2 {
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px) {
    width: 50vw;
    height: 35vh;
  }
`;

export const Plans = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  background-color: #f2f2f2;
  padding: 80px 0px;

  h2 {
    font-weight: 500;
  }

  h1 {
    font-size: 70px;
    font-weight: 600;

    @media only screen and (max-width: 600px) {
      font-size: 60px;
    }

    @media only screen and (max-width: 400px) {
      font-size: 40px;
    }
  }
`;

export const TitlePlans = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GraphDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  align-items: flex-end;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    width: 90vw;
  }

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Graph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  margin: 5px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  height: 130px;
  width: 100%;
  background-color: #215ebf;
  color: #fff;

  h2 {
    font-weight: 700;
    font-size: 40px;

    @media only screen and (max-width: 1200px) {
      font-size: 35px;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 26px;

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }
`;

interface ISize {
  height: string;
}

export const Size = styled.div<ISize>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: #4287f5;
  height: ${props => props.height};
  padding: 20px;

  span {
    font-size: 14px;
    color: #fff;
  }
`;
