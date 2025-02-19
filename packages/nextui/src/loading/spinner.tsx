import React, { CSSProperties } from 'react';
import withDefaults from '../utils/with-defaults';
import useTheme from '../use-theme';
import { NextUIThemes } from '../theme';

interface Props {
  size: string;
  color: string;
  labelStyle?: CSSProperties;
  className?: string;
}

const defaultProps = {
  className: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;
export type SpinnerProps = Props & typeof defaultProps & NativeAttrs;

const getSpans = (color: string, theme: NextUIThemes) => {
  return [...new Array(12)].map((_, index) => (
    <span key={`spinner-${index}`}>
      <style jsx>{`
        span {
          background-color: ${color};
          position: absolute;
          top: -3.9%;
          width: 24%;
          height: 8%;
          left: -10%;
          border-radius: ${theme.layout.radius};
          animation: spinner 1.2s linear 0s infinite normal none running;
        }
        span:nth-child(1) {
          animation-delay: -1.2s;
          transform: rotate(0deg) translate(146%);
        }
        span:nth-child(2) {
          animation-delay: -1.1s;
          transform: rotate(30deg) translate(146%);
        }
        span:nth-child(3) {
          animation-delay: -1s;
          transform: rotate(60deg) translate(146%);
        }
        span:nth-child(4) {
          animation-delay: -0.9s;
          transform: rotate(90deg) translate(146%);
        }

        span:nth-child(5) {
          animation-delay: -0.8s;
          transform: rotate(120deg) translate(146%);
        }
        span:nth-child(6) {
          animation-delay: -0.7s;
          transform: rotate(150deg) translate(146%);
        }

        span:nth-child(7) {
          animation-delay: -0.6s;
          transform: rotate(180deg) translate(146%);
        }
        span:nth-child(8) {
          animation-delay: -0.5s;
          transform: rotate(210deg) translate(146%);
        }
        span:nth-child(9) {
          animation-delay: -0.4s;
          transform: rotate(240deg) translate(146%);
        }
        span:nth-child(10) {
          animation-delay: -0.3s;
          transform: rotate(270deg) translate(146%);
        }
        span:nth-child(11) {
          animation-delay: -0.2s;
          transform: rotate(300deg) translate(146%);
        }
        span:nth-child(12) {
          animation-delay: -0.1s;
          transform: rotate(330deg) translate(146%);
        }
        @keyframes spinner {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.15;
          }
        }
      `}</style>
    </span>
  ));
};

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({
  children,
  size,
  color,
  className,
  labelStyle,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div className={`spinner ${className}`} {...props}>
      <div className="container">{getSpans(color, theme)}</div>
      {children && <label style={labelStyle}>{children}</label>}
      <style jsx>{`
        .spinner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          width: ${size};
          height: ${size};
        }
        .container {
          width: 100%;
          height: 100%;
          position: relative;
          left: 50%;
          top: 50%;
        }
      `}</style>
    </div>
  );
};

const MemoSpinner = React.memo(Spinner);

export default withDefaults(MemoSpinner, defaultProps);
