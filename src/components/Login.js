import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <Signup>GET IT ALL THERE</Signup>
          <Description>
            Coming July 9. Get Premier Access to Black Widow for $29.99 with a
            Disney+ subscription, and watch as many times as you like.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`;
const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5em;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login;
