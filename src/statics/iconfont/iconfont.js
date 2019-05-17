import { createGlobalStyle } from 'styled-components';

export const IconFontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1558056291460'); /* IE9 */
    src: url('./iconfont.eot?t=1558056291460#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVgAAsAAAAACjwAAAUUAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDbAqGaIVtATYCJAMgCxIABCAFhG0HbRvkCFGUT06U7AtsG96kQm7ZMO7wzmPuqhDg+WfXA4AFABZQYHcm23kkHv5/v1/73Hue8D7iDZJopJs0EonIIpFZZJLYxDYlTyge+rA5Tf2YtPxPx7NR71HXQpP7Hdlx9ilKF9oMF6EC2NJHHcLTLmn7uAzMKCWZoHRPpXtKwbt9yGnu4t8D/4cKLw7HrfMCmm9ZLnMM7rKyNO68C2yMTWMKLrEALecMltc1qRrgl5cTGCzzDI5Prm5hLrF2gbhzVsG8pJQ92NBL2pahKb6BRl+e0UvAZ/z5+CeJOUVTsa6Xt8cp7P20Jb3+f3UdqsHbenqoo6jYAZJ4ajU+qmlwx8hgf0u6Aib1ivZnWOQj0NgtWfwE5WwWDZOm+V880Oo0UlUE0YJwXMLchDp+Ap9Cy0+E2SbCIddA5AO5hCgQchWisaBQ+EWyL1TYh0OmgRngP3EPTLwbC+O5IUpsKrOr0ZgepNZNXM3nC5fD1NU7OY5kn1iueUYJAnaac9oqFE/Gh3FE6j8UTj6iL1p41EZ19WGA0oegEqNFMLXKlBKBZdZTkCzKxwqzcqA6zOqWAXodnLwGxysusdQwzlN81i08byIIKVcFbIoVx4Vd5wiWKC8QWntt8D/Ae07W0mLZUJZgyc235DL3+ggZG112kktel8qWOR5KTWV2Z8pYgpnntZYL6UPibuky5+rhvtPBXiw/Z4ExXKSbVX8RmwLAEHiMxNxApJmZ0njfRHLXPkDvx6bcRJBO4jAHWJZACBIRhEwpT1HFBJpLyzzCG9uB1UcppKUVoXBZhEZ1VYQyvhCpainNdCUd9+zxpwepGpJwXqUWuzez12S+6jHV+YrTH+abHjMlXVPpsrUz20GNvz0jlxyQK0IdlB/gtKhLWzwDkTlQ/pR5qqAVwQ8FAiN9uSb+Vnu0mCS0dKgBi3DxsR3U6FiXZA+ntApdSpLTC2MT+jfpdNmFGgyFje4Muh7rxaBJYjqjUlvn2wCN0gs1Tgvz/q2GspRPSUKLYrCu9BS7aDRNRJjHGIbV50VqxmjGYlRIjInDVPQdiEocM/bI15fTlqdiy/YTW1rcfBNnTDE0FeuO6ECrCsqu5Xbottnsdom0sgO3PVrT36UmvWvVjKhqTMK7a1Jr0cyyrhpdSWH0mLHyEC80L86LcynuVK1VIePD4mrKTqsY6oUY21c5mIHfh7Kz77u0hqETdu2agIYOspdCD4v//MnDuRHLfw+V8v+PMoEBQM+gFT0OQG/tRuUA9NQxkcH/m+66iAagNgfj8EX/RF6/6Hq+nn5fqBr4VaEeS/BDnAZ9Hk4SmP+ZyGjWD1kp4WtS4zBVn1a2X/R1WSnWMl6Yak8UDAb8iNZZf2uaF0CuD73GAhSdJah6K4jE7EBjZBdavT0YbDsdPTKHjUSOYcsXgTDtG4pJ36Ga9oNIzC80Fv1DazpGMLiKnSlH1sItD5mUUIqbZ3S6qY3QyDLJvCbbl4qLnBh/T9w5D8ZBVI2cUk28Ro/uwSYiBg03FZ6Q1agsG2y5yUlLkIm06zA0bWcKdFPB0hFGFEFSaOMZcrRGzYSlxbL2/mvE6pUU7slpU98jrOOqR7FANAJxKqxH5TxL7c4DKyGEkVoZrFFBJ9CTkgcbqG1vlCOaCGQz/K21kBYyY4XB/uLqTpfBgB2+jxI1Mppoo4s+xoweXJ2RYonj3Xnralv2dTJ76VXdZW5pIrtNVd5Ue/bcV6rZuOG+GndjFAA=') format('woff2'),
    url('./iconfont.woff?t=1558056291460') format('woff'),
    url('./iconfont.ttf?t=1558056291460') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1558056291460#iconfont') format('svg'); /* iOS 4.1- */
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;