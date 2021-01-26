import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

// const Background = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `
const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;

@media screen and (max-width: 500px){
  margin: auto;
  padding: 15px;
}

`;

export default function Home() {
  const routes = useRouter();
  const [name, setName] = useState('');

  // const [disable, setDisable] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    routes.push(`/quiz?name=${name}`);
  }
  return (

    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Mostre todo seu conhecimento!</h1>
          </Widget.Header>
          <Widget.Content>
            <p> Olá tudo baum?</p>
            <form onSubmit={handleSubmit}>

              <Widget.Input
                placeholder="Preencha seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Widget.Button type="submit" disabled={name.length === 0}> JOGAR </Widget.Button>
            </form>

          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>
            <h1> Segundo Widget</h1>
            <p>Conteúdo do Segundo Container</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EdsonGomesJR" />
    </QuizBackground>

  );
}
