import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  background-color: #f9f0ff;
  height: 100vh;
  overflow: auto;
`;
