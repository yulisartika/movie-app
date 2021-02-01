import React from "react";
import { Feature, OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Button to="/signup">Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Ready to watch? Sign up now</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      {/* <JumbotronContainer /> */}
      {/* <FaqsContainer /> */}
      <FooterContainer />
    </>
  );
}
