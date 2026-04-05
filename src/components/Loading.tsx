import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Spinning animation for the loader ring
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const twinkleAnimation = keyframes`
  0%, 100% {
    opacity: 0.14;
  }
  50% {
    opacity: 0.28;
  }
`;

const driftAnimation = keyframes`
  from {
    background-position: 0 0, 24px 10px, 68px 22px, 110px 6px;
  }
  to {
    background-position: 140px 0, 164px 10px, 208px 22px, 250px 6px;
  }
`;

const LoadingWrapper = styled.div<{ $isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(160deg, rgba(15, 12, 41, 0.98), rgba(48, 43, 99, 0.98), rgba(36, 36, 62, 0.98));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${({ $isLoading }) => ($isLoading ? "none" : fadeOut)} 0.5s ease-out forwards;
  pointer-events: ${({ $isLoading }) => ($isLoading ? "all" : "none")};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle, rgba(255, 255, 255, 0.9) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(196, 181, 253, 0.7) 0 0.8px, transparent 1.2px),
      radial-gradient(circle, rgba(147, 197, 253, 0.72) 0 1px, transparent 1.4px),
      radial-gradient(circle, rgba(255, 255, 255, 0.55) 0 0.7px, transparent 1px);
    background-size: 180px 60px;
    opacity: 0.18;
    pointer-events: none;
    animation: ${twinkleAnimation} 6.5s ease-in-out infinite, ${driftAnimation} 26s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(167, 139, 250, 0.1), transparent 35%, transparent 65%, rgba(96, 165, 250, 0.1)),
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08), transparent 0 16%),
      radial-gradient(circle at 78% 40%, rgba(167, 139, 250, 0.08), transparent 0 18%);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top: 5px solid #fac82d;
  animation: ${spin} 1.2s linear infinite;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  z-index: 1;
`;

interface LoadingProps {
  minDuration?: number;
}

const Loading = ({ minDuration = 1500 }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShouldRender(false), 500);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!shouldRender) return null;

  return (
    <LoadingWrapper $isLoading={isLoading}>
      <LoaderContainer>
        <SpinnerRing />
        <Logo src="/assets/images/Logo-uri/ESU_logo.png" alt="Loading..." />
      </LoaderContainer>
    </LoadingWrapper>
  );
};

export default Loading;
