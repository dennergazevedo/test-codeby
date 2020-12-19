import React from 'react';

/** Global Styles */
import GlobalStyles from './global/styles';

/** Styled Components */
import {
  Container,
  Banner,
  Body,
  ItemDiv,
  Nature,
  Daily,
  Together,
  Analysis,
  Pictures,
  Plans,
  TitlePlans,
  GraphDiv,
  Graph,
  Title,
  Size,
} from './styles';

/** Assets */
import logomarca from './assets/logo.png';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Banner>
          <img src={logomarca} alt="LOGO" />
          <h1>we have ideas to growth your business</h1>
          <button type="button">SEE NOW</button>
        </Banner>
        <Body>
          <h1>categories</h1>
          <h2>discover new possibilities to help you today</h2>
          <ItemDiv>
            <Nature>
              <h1>nature</h1>
              <h2>Lorem ipsum dolor sit amet</h2>
            </Nature>

            <Daily>
              <h1>daily</h1>
              <h2>Praesent tincidunt consectetur diam</h2>
            </Daily>
          </ItemDiv>

          <ItemDiv>
            <Together>
              <h1>together</h1>
              <h2>
                Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum
              </h2>
            </Together>
          </ItemDiv>

          <ItemDiv>
            <Analysis>
              <h1>analysis</h1>
              <h2>Duis sollicitudin mauris vitae venenatis aliquet</h2>
            </Analysis>

            <Pictures>
              <h1>pictures</h1>
              <h2>Quisque eu nisl purus</h2>
            </Pictures>
          </ItemDiv>
        </Body>
        <Plans>
          <TitlePlans>
            <h1>growth plans</h1>
            <h2>take your business to the next level</h2>
          </TitlePlans>
          <GraphDiv>
            <Graph>
              <Title>
                <h2>$ 100</h2>
                <h3>100 + hours</h3>
              </Title>
              <Size height="130px">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Size>
            </Graph>

            <Graph>
              <Title>
                <h2>$ 150</h2>
                <h3>180 + hours</h3>
              </Title>
              <Size height="180px">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Size>
            </Graph>

            <Graph>
              <Title>
                <h2>$ 200</h2>
                <h3>260 + hours</h3>
              </Title>
              <Size height="230px">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Size>
            </Graph>

            <Graph>
              <Title>
                <h2>$ 250</h2>
                <h3>380 + hours</h3>
              </Title>
              <Size height="280px">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Size>
            </Graph>

            <Graph>
              <Title>
                <h2>$ 300</h2>
                <h3>420 + hours</h3>
              </Title>
              <Size height="330px">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Size>
            </Graph>

            <Graph>
              <Title>
                <h2>$ 350</h2>
                <h3>520 + hours</h3>
              </Title>
              <Size height="380px">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Size>
            </Graph>
          </GraphDiv>
        </Plans>
      </Container>
    </>
  );
};

export default App;
