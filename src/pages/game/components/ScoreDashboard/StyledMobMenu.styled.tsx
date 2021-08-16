import styled from 'styled-components';

interface Styled {
    open: boolean
}

export const StyledMobWrapper = styled.div<Styled>`
  @media (max-width: 1200px) {
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
    background: white;
    transition-timing-function: ease;
    transition-duration: .4s;
    z-index: 19;
    &.container {
        visibility: ${({open}) => open ? 'hidden' : 'visible'}; 
        transition-timing-function: ease;
        transition-duration: .4s;
      }
    }
`;