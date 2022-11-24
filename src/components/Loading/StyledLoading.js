import styled from 'styled-components';

export const StyledLoading = styled.div`
  position: absolute;
  left: 45%;
  top: 50%;
  font-size: 60px;

  p {
    animation: myAnim 2s ease 1s infinite normal backwards;
    @keyframes myAnim {
      0% {
        transform: scale3d(1, 1, 1);
      }

      30% {
        transform: scale3d(1.25, 0.75, 1);
      }

      40% {
        transform: scale3d(0.75, 1.25, 1);
      }

      50% {
        transform: scale3d(1.15, 0.85, 1);
      }

      65% {
        transform: scale3d(0.95, 1.05, 1);
      }

      75% {
        transform: scale3d(1.05, 0.95, 1);
      }

      100% {
        transform: scale3d(1, 1, 1);
      }
    }
  }
`;
