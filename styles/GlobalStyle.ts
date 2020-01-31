import { createGlobalStyle } from 'styled-components';
import {
	primary,
} from './Colors';

// @ts-ignore
import Helvetica from 'Public/fonts/Helvetica/Helvetica.otf';
// @ts-ignore
import HelveticaSvg from 'Public/fonts/Helvetica/Helvetica.svg';
// @ts-ignore
import HelveticaBold from 'Public/fonts/Helvetica/Helvetica-Bold.otf';
// @ts-ignore
import HelveticaBoldSvg from 'Public/fonts/Helvetica/Helvetica-Bold.svg';
// @ts-ignore
import HelveticaLight from 'Public/fonts/Helvetica/Helvetica-Light.otf';
// @ts-ignore
import HelveticaLightSvg from 'Public/fonts/Helvetica/Helvetica-Light.svg';
// @ts-ignore
import HelveticaOblique from 'Public/fonts/Helvetica/Helvetica-Oblique.otf';
// @ts-ignore
import HelveticaObliqueSvg from 'Public/fonts/Helvetica/Helvetica-Oblique.svg';

interface Size {
	width?: number;
	height?: number;
}

export default createGlobalStyle`
	@font-face {
		font-family: "Helvetica";
		src:
		  url(${HelveticaSvg}) format("svg"),
		  url(${Helvetica}) format("opentype");
    font-display: swap;
	}
	@font-face {
		font-family: "HelveticaBold";
		src:
		  url(${HelveticaBoldSvg}) format("svg"),
		  url(${HelveticaBold}) format("opentype");
    font-display: swap;
	}
	@font-face {
		font-family: "HelveticaLight";
		src:
		  url(${HelveticaLightSvg}) format("svg"),
		  url(${HelveticaLight}) format("opentype");
    font-display: swap;
	}
	@font-face {
		font-family: "HelveticaOblique";
		src:
		  url(${HelveticaObliqueSvg}) format("svg"),
		  url(${HelveticaOblique}) format("opentype");
    font-display: swap;
	}
  body {
  	--fullHeight: ${({ height }: Size) => height}px;
  	--fullWidth: ${({ width }: Size) => width}px;
 		--color-primary: ${primary};
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Helvetica', "Arial", sans-serif;
  }
  .page-transition-enter {
	  opacity: 0;
	}
	.page-transition-enter-active {
	  opacity: 1;
	  transition: opacity 300ms;
	}
	.page-transition-exit {
	  opacity: 1;
	}
	.page-transition-exit-active {
	  opacity: 0;
	  transition: opacity 300ms;
	}
`;
