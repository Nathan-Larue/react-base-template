import logo from "./logo.svg";
import * as S from "./styles";

function App() {
  return (
    <S.App>
      <S.AppHeader>
        <S.AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <S.AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.AppLink>
      </S.AppHeader>
    </S.App>
  );
}

export default App;
