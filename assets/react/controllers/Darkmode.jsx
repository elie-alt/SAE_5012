// // Thème sombre
// const darkTheme = {
//     backgroundColor: '#333',
//     textColor: '#fff',
//   };
  
//   // Thème clair
//   const lightTheme = {
//     backgroundColor: '#fff',
//     textColor: '#333',
//   };
  
//   // Composant React
//   const Darkmode = ({ isDarkMode }) => {
//     const theme = isDarkMode ? darkTheme : lightTheme;
  
//     return (
//       <ThemeProvider theme={theme}>
//         <StyledApp>
//           <h1>Welcome to My App</h1>
//           <p>This is a sample component with a dynamic theme.</p>
//         </StyledApp>
//       </ThemeProvider>
//     );
//   };
  
//   // Styled component
//   const StyledApp = styled.div`
//     background-color: ${(props) => props.theme.backgroundColor};
//     color: ${(props) => props.theme.textColor};
//   `;
  
//   export default Darkmode;
  