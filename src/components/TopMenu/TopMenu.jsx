import './TopMenu.css';

import logo from './logo.svg';

export function TopMenu() {
    return (
        <section className={'menu-container'}>

            <div className={'left-side'}>

                <img className='logo' src={logo} alt="" />

            {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1115.6mm" height="287.77mm" viewBox="0 0 3162.33 815.73"><g id="SvgjsG2864"><path d="M328.73,424.73H327c-13.8.55-33.71.46-72.19.83a4.61,4.61,0,0,0-.06,9.21h.14c38.43-.36,58.28-.26,72.46-.82h0c6-.22,13.52,2.7,21.85,7.82s17.35,12.26,26.59,19.61c18.47,14.7,37.46,30.64,56.81,31.91h0c19.05,1.3,44.67,2.4,75.52,3.32,6.09.19,15.59,3.79,23.67,10.22s14.78,15.47,16.86,26.1a4.6,4.6,0,0,0,9.07-1.58,1.29,1.29,0,0,0,0-.19c-2.6-13.3-10.76-24-20.17-31.53s-20-11.94-29.11-12.21c-30.79-.92-56.34-2-75.19-3.31h0c-14.33-.94-33.21-15.22-51.68-29.93-9.24-7.35-18.46-14.69-27.5-20.25-8.48-5.22-16.88-9-25.33-9.19Z" style="fill:#fff;fill-rule:evenodd"/><path d="M817.56,483.25c-2.43,0-4.9.16-7.4.42-20,2.13-42.65,11.33-65.71,22.8S698,531.75,677,543.33s-39.61,20.91-51.88,23.49c-94.07,19.75-141.32,9.65-203.25,10.95a4.6,4.6,0,0,0,.19,9.2c60.83-1.28,109.65,8.86,205-11.14,14.65-3.08,33.34-12.76,54.44-24.44S725.9,526,748.55,514.71s44.68-20,62.58-21.89,30.93,2.18,39.35,17h0a27.5,27.5,0,0,1,3,20.19c-1.5,7.17-5.54,15-11.94,23.2-12.81,16.4-34.91,34.07-62.46,51.53C724,639.67,647.18,674,578.62,700.18c-41.06,15.69-90.5,4.23-145.56-10.75S317.58,656.2,254.56,660.6a4.6,4.6,0,1,0,.46,9.19h.17c60.84-4.25,120.23,13.51,175.46,28.53S537.2,725.85,581.9,708.78c68.92-26.34,146.08-60.73,202.15-96.25,28-17.77,50.82-35.75,64.79-53.65,7-8.94,11.8-17.92,13.7-27a37.45,37.45,0,0,0-4.06-26.61h0c-8.93-15.72-23.92-22.1-40.92-22Z" style="fill:#fff;fill-rule:evenodd"/><path d="M85.84,354a4.6,4.6,0,1,0-.13,9.2h76.87A30.44,30.44,0,0,1,193,393.54V695a30.43,30.43,0,0,1-30.37,30.36H85.84a4.61,4.61,0,0,0-.17,9.21h76.91A39.72,39.72,0,0,0,202.15,695V393.54A39.72,39.72,0,0,0,162.58,354Z" style="fill:#fff;fill-rule:evenodd"/><path d="M129.36,649.08a19.51,19.51,0,1,0,19.51,19.51A19.6,19.6,0,0,0,129.36,649.08Zm0,9.2a10.31,10.31,0,1,1-10.3,10.31A10.23,10.23,0,0,1,129.36,658.28Z" style="fill:#fff;fill-rule:evenodd"/><path d="M412.93,81.16c-23.12-.09-45.29,5.65-63.88,16.52-31.31,18.31-52.3,51.6-49.72,94.88h0c3.51,57.83,36.63,97.94,78.38,129.52,41.55,31.42,91.85,55,131.76,80.48a4.75,4.75,0,0,0,6.15,0c39.91-25.5,90.19-49,131.74-80.46,41.75-31.58,74.88-71.69,78.38-129.52h0c3.25-54-30.29-92.17-74.7-105.74s-99.87-3.24-141.72,37.66a4.6,4.6,0,0,0,6.27,6.74,1.21,1.21,0,0,0,.16-.16c39.5-38.6,91.48-48,132.6-35.44S719.56,142,716.55,192h0c-3.31,54.62-34.09,92-74.74,122.74-39.84,30.13-88.93,53.34-129.27,78.88-40.35-25.54-89.44-48.75-129.28-78.88C342.61,284,311.83,246.63,308.52,192h0c-2.39-40.09,16.47-69.6,45.18-86.39s67.44-20.46,104.08-7.19a4.6,4.6,0,1,0,3.34-8.57l-.2-.08a143,143,0,0,0-48-8.62Z" style="fill:#fff;fill-rule:evenodd"/><path d="M632.18,136.42a4.6,4.6,0,0,0-1.29,9c20.87,7.44,35.58,25,34,51a4.6,4.6,0,1,0,9.18.65V197c1.87-29.89-16-51.73-40-60.3a4.59,4.59,0,0,0-1.8-.28Z" style="fill:#fff;fill-rule:evenodd"/></g><g id="SvgjsG2865"><path d="M1022.66,529.57V287.42h87.65c77.25,0,115.45,48.6,115.45,121s-38.2,121.15-115.45,121.15Zm50.28-44.41h34.85c44.58,0,65-27.81,65-76.75s-20.44-76.74-65-76.74h-34.85v153.5Zm315.41,47.76c-71.22,0-123.84-48.59-123.84-124.51,0-76.08,52.62-124.34,123.84-124.34,71.05,0,123.67,48.26,123.67,124.34C1512,484.32,1459.4,532.92,1388.35,532.92Zm0-46.08c41.73,0,73.73-29.33,73.73-78.43,0-48.93-32-78.09-73.73-78.09s-73.73,29.16-73.73,78.09C1314.62,457.51,1346.62,486.84,1388.35,486.84Zm343.58-199.42H1782V529.57h-58.15L1616.64,356.46V529.57h-50.11V287.42H1624l107.92,172.11V287.42ZM2015,529.57l-17.6-49.94H1895.69l-17.6,49.94h-51.44l89.15-242.15h61.5l89.16,242.15H2015Zm-104.56-92h72.22l-36-102.73Zm341-150.15v44.24H2194V529.57h-49.77V331.66h-57.82V287.42Zm186.72,44.25h-89.82v55H2428v43.74h-79.6v54.8h89.82v44.41H2297.79V287.43h140.42v44.24ZM2522,532.92a27.72,27.72,0,0,1-27.48-27.48c0-15.08,12.57-27.82,27.48-27.82a28.08,28.08,0,0,1,27.82,27.82A27.79,27.79,0,0,1,2522,532.92Zm184.71,0c-53.12,0-94.68-27.14-94.68-88.14V287.43h50.28V437.91c0,36.87,19.6,50.61,44.4,50.61,25,0,44.75-13.91,44.75-50.61V287.43h50.27V444.78c0,61-41.73,88.14-95,88.14Zm323-3.35-17.6-49.94H2910.4l-17.6,49.94h-51.44l89.15-242.15H2992l89.15,242.15h-51.45Zm-104.56-92h72.22l-36-102.73Z" style="fill:#fff"/></g></svg> */}
            {/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="1115.6mm" height="287.77mm" viewBox="0 0 3162.33 815.73">

<defs><style>.cls-1,.cls-2{fill:#fff;}.cls-1{fill-rule:evenodd;}</style></defs><g id="SvgjsG2864"><path class="cls-1" d="M328.73,424.73H327c-13.8.55-33.71.46-72.19.83a4.61,4.61,0,0,0-.06,9.21h.14c38.43-.36,58.28-.26,72.46-.82h0c6-.22,13.52,2.7,21.85,7.82s17.35,12.26,26.59,19.61c18.47,14.7,37.46,30.64,56.81,31.91h0c19.05,1.3,44.67,2.4,75.52,3.32,6.09.19,15.59,3.79,23.67,10.22s14.78,15.47,16.86,26.1a4.6,4.6,0,0,0,9.07-1.58,1.29,1.29,0,0,0,0-.19c-2.6-13.3-10.76-24-20.17-31.53s-20-11.94-29.11-12.21c-30.79-.92-56.34-2-75.19-3.31h0c-14.33-.94-33.21-15.22-51.68-29.93-9.24-7.35-18.46-14.69-27.5-20.25-8.48-5.22-16.88-9-25.33-9.19Z"/><path class="cls-1" d="M817.56,483.25c-2.43,0-4.9.16-7.4.42-20,2.13-42.65,11.33-65.71,22.8S698,531.75,677,543.33s-39.61,20.91-51.88,23.49c-94.07,19.75-141.32,9.65-203.25,10.95a4.6,4.6,0,0,0,.19,9.2c60.83-1.28,109.65,8.86,205-11.14,14.65-3.08,33.34-12.76,54.44-24.44S725.9,526,748.55,514.71s44.68-20,62.58-21.89,30.93,2.18,39.35,17h0a27.5,27.5,0,0,1,3,20.19c-1.5,7.17-5.54,15-11.94,23.2-12.81,16.4-34.91,34.07-62.46,51.53C724,639.67,647.18,674,578.62,700.18c-41.06,15.69-90.5,4.23-145.56-10.75S317.58,656.2,254.56,660.6a4.6,4.6,0,1,0,.46,9.19h.17c60.84-4.25,120.23,13.51,175.46,28.53S537.2,725.85,581.9,708.78c68.92-26.34,146.08-60.73,202.15-96.25,28-17.77,50.82-35.75,64.79-53.65,7-8.94,11.8-17.92,13.7-27a37.45,37.45,0,0,0-4.06-26.61h0c-8.93-15.72-23.92-22.1-40.92-22Z"/><path class="cls-1" d="M85.84,354a4.6,4.6,0,1,0-.13,9.2h76.87A30.44,30.44,0,0,1,193,393.54V695a30.43,30.43,0,0,1-30.37,30.36H85.84a4.61,4.61,0,0,0-.17,9.21h76.91A39.72,39.72,0,0,0,202.15,695V393.54A39.72,39.72,0,0,0,162.58,354Z"/><path class="cls-1" d="M129.36,649.08a19.51,19.51,0,1,0,19.51,19.51A19.6,19.6,0,0,0,129.36,649.08Zm0,9.2a10.31,10.31,0,1,1-10.3,10.31A10.23,10.23,0,0,1,129.36,658.28Z"/><path class="cls-1" d="M412.93,81.16c-23.12-.09-45.29,5.65-63.88,16.52-31.31,18.31-52.3,51.6-49.72,94.88h0c3.51,57.83,36.63,97.94,78.38,129.52,41.55,31.42,91.85,55,131.76,80.48a4.75,4.75,0,0,0,6.15,0c39.91-25.5,90.19-49,131.74-80.46,41.75-31.58,74.88-71.69,78.38-129.52h0c3.25-54-30.29-92.17-74.7-105.74s-99.87-3.24-141.72,37.66a4.6,4.6,0,0,0,6.27,6.74,1.21,1.21,0,0,0,.16-.16c39.5-38.6,91.48-48,132.6-35.44S719.56,142,716.55,192h0c-3.31,54.62-34.09,92-74.74,122.74-39.84,30.13-88.93,53.34-129.27,78.88-40.35-25.54-89.44-48.75-129.28-78.88C342.61,284,311.83,246.63,308.52,192h0c-2.39-40.09,16.47-69.6,45.18-86.39s67.44-20.46,104.08-7.19a4.6,4.6,0,1,0,3.34-8.57l-.2-.08a143,143,0,0,0-48-8.62Z"/><path class="cls-1" d="M632.18,136.42a4.6,4.6,0,0,0-1.29,9c20.87,7.44,35.58,25,34,51a4.6,4.6,0,1,0,9.18.65V197c1.87-29.89-16-51.73-40-60.3a4.59,4.59,0,0,0-1.8-.28Z"/></g><g id="SvgjsG2865"><path class="cls-2" d="M1022.66,529.57V287.42h87.65c77.25,0,115.45,48.6,115.45,121s-38.2,121.15-115.45,121.15Zm50.28-44.41h34.85c44.58,0,65-27.81,65-76.75s-20.44-76.74-65-76.74h-34.85v153.5Zm315.41,47.76c-71.22,0-123.84-48.59-123.84-124.51,0-76.08,52.62-124.34,123.84-124.34,71.05,0,123.67,48.26,123.67,124.34C1512,484.32,1459.4,532.92,1388.35,532.92Zm0-46.08c41.73,0,73.73-29.33,73.73-78.43,0-48.93-32-78.09-73.73-78.09s-73.73,29.16-73.73,78.09C1314.62,457.51,1346.62,486.84,1388.35,486.84Zm343.58-199.42H1782V529.57h-58.15L1616.64,356.46V529.57h-50.11V287.42H1624l107.92,172.11V287.42ZM2015,529.57l-17.6-49.94H1895.69l-17.6,49.94h-51.44l89.15-242.15h61.5l89.16,242.15H2015Zm-104.56-92h72.22l-36-102.73Zm341-150.15v44.24H2194V529.57h-49.77V331.66h-57.82V287.42Zm186.72,44.25h-89.82v55H2428v43.74h-79.6v54.8h89.82v44.41H2297.79V287.43h140.42v44.24ZM2522,532.92a27.72,27.72,0,0,1-27.48-27.48c0-15.08,12.57-27.82,27.48-27.82a28.08,28.08,0,0,1,27.82,27.82A27.79,27.79,0,0,1,2522,532.92Zm184.71,0c-53.12,0-94.68-27.14-94.68-88.14V287.43h50.28V437.91c0,36.87,19.6,50.61,44.4,50.61,25,0,44.75-13.91,44.75-50.61V287.43h50.27V444.78c0,61-41.73,88.14-95,88.14Zm323-3.35-17.6-49.94H2910.4l-17.6,49.94h-51.44l89.15-242.15H2992l89.15,242.15h-51.45Zm-104.56-92h72.22l-36-102.73Z"/></g>


</svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3162.3274780426595 815.7306295393921">
                    <g transform="scale(8.116373902132999) translate(10, 10)">
                        <defs id="SvgjsDefs2863"><linearGradient id="SvgjsLinearGradient2868"><stop id="SvgjsStop2869" stopColor="#b88746" offset="0"/><stop id="SvgjsStop2870" stopColor="#fdf5a6" offset="1"/></linearGradient></defs><g id="SvgjsG2864" featureKey="symbolFeature-0" transform="matrix(1.1338353776447287,0,0,1.1338353776447287,-8.503606379812698,-16.43957491855702)" fill="#fff"><g xmlns="http://www.w3.org/2000/svg" transform="translate(0,-952.36218)"><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:;enable-background:accumulate;" d="m 34.401292,1004.1943 c -0.0612,-10e-4 -0.1224,-10e-4 -0.1837,10e-4 a 0.50001816,0.50001816 0 0 0 -0.0013,0 c -1.499,0.059 -3.6623,0.05 -7.8445,0.09 a 0.50001816,0.50001816 0 1 0 0.0094,0.9999 c 4.1762,-0.04 6.3326,-0.029 7.8732,-0.09 0,0 10e-4,0 0.0013,0 0.649,-0.023 1.4697,0.2936 2.3742,0.8497 0.9051,0.5563 1.886,1.3331 2.8896,2.1317 2.0068,1.5971 4.0702,3.3297 6.173,3.4676 l 0,-3e-4 c 2.0708,0.1407 4.8543,0.2608 8.2072,0.3609 0.6618,0.02 1.6938,0.4118 2.5711,1.1102 0.8773,0.6984 1.6064,1.6808 1.8331,2.8362 a 0.50001816,0.50001816 0 1 0 0.9811,-0.1925 c -0.2833,-1.4446 -1.1691,-2.6121 -2.1917,-3.4261 -1.0226,-0.814 -2.1754,-1.2972 -3.1636,-1.3271 -3.346,-0.1 -6.1219,-0.2198 -8.1706,-0.3591 a 0.50001816,0.50001816 0 0 0 -0.001,-3e-4 c -1.557,-0.1021 -3.6084,-1.6542 -5.6163,-3.2519 -1.0038,-0.7989 -2.0053,-1.597 -2.9882,-2.2012 -0.9214,-0.5664 -1.8338,-0.9787 -2.7523,-0.9983 z" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:;enable-background:accumulate;" d="m 87.519792,1010.5539 c -0.264,10e-4 -0.5324,0.017 -0.804,0.046 -2.1734,0.2315 -4.6341,1.2312 -7.1402,2.4773 -2.506,1.2461 -5.052,2.7463 -7.3276,4.0057 -2.2758,1.2594 -4.3038,2.2721 -5.6369,2.5523 -10.2226,2.1459 -15.3564,1.0481 -22.0864,1.1893 a 0.50011235,0.50011235 0 1 0 0.0212,1 c 6.6092,-0.1388 11.9148,0.9633 22.2708,-1.2106 1.5918,-0.3347 3.6222,-1.3869 5.9156,-2.6561 2.2934,-1.2692 4.8271,-2.7613 7.2883,-3.985 2.4611,-1.2238 4.8551,-2.1714 6.8008,-2.3786 1.9456,-0.2072 3.3604,0.2359 4.276,1.8474 0,10e-5 0,2e-4 0,3e-4 0.4015,0.7079 0.4943,1.414 0.3313,2.1936 -0.1632,0.7796 -0.6023,1.6309 -1.2978,2.522 -1.3911,1.7821 -3.7927,3.7022 -6.7871,5.5993 -5.9886,3.7942 -14.3382,7.5223 -21.7882,10.3697 -4.4619,1.7043 -9.8341,0.4596 -15.8168,-1.1678 -5.9829,-1.6273 -12.5491,-3.6118 -19.3973,-3.1335 a 0.50001816,0.50001816 0 1 0 0.0694,0.9974 c 6.611,-0.4617 13.0639,1.4686 19.0653,3.1011 6.0015,1.6324 11.5785,2.9926 16.4361,1.1371 7.4891,-2.8623 15.8734,-6.5987 21.9664,-10.459 3.0466,-1.9302 5.5228,-3.8848 7.0406,-5.8293 0.7588,-0.9723 1.2819,-1.9472 1.488,-2.9324 0.2061,-0.9851 0.0756,-1.9823 -0.4403,-2.8916 a 0.50001816,0.50001816 0 0 0 0,-3e-4 c -0.9707,-1.7089 -2.5992,-2.4024 -4.4472,-2.3939 z" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:;enable-background:accumulate;" d="m 8.0076917,996.50575 a 0.50001816,0.50001816 0 1 0 0,0.99994 l 8.3394003,0 c 1.8172,0 3.2998,1.48264 3.2998,3.29981 l 0,32.7578 c 0,1.8172 -1.4826,3.2998 -3.2998,3.2998 l -8.3394003,0 a 0.50001816,0.50001816 0 1 0 0,0.9999 l 8.3394003,0 c 2.3626,0 4.2998,-1.9371 4.2998,-4.2997 l 0,-32.7578 c 0,-2.3626 -1.9372,-4.29975 -4.2998,-4.29975 l -8.3394003,0 z" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:;enable-background:accumulate;" d="m 12.737392,1028.5736 c -1.1634,0 -2.1199,0.9566 -2.1199,2.1199 0,1.1703 0.9602,2.1199 2.1199,2.1199 1.1666,0 2.1198,-0.9533 2.1198,-2.1199 0,-1.1596 -0.9495,-2.1199 -2.1198,-2.1199 z m 0,1 c 0.6295,0 1.1199,0.4996 1.1199,1.1199 0,0.6333 -0.4867,1.1199 -1.1199,1.1199 -0.6203,0 -1.12,-0.4903 -1.12,-1.1199 0,-0.6165 0.5034,-1.1199 1.12,-1.1199 z" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:;enable-background:accumulate;" d="m 43.551592,966.86139 c -2.513,-0.0105 -4.922,0.61307 -6.942,1.79458 -3.4021,1.98989 -5.6828,5.60754 -5.4025,10.31059 a 0.50001816,0.50001816 0 0 0 0,6e-4 c 0.3806,6.28418 3.9799,10.64252 8.5169,14.07379 4.5154,3.41483 9.9806,5.97368 14.3173,8.74535 a 0.50001816,0.50001816 0 0 0 0.3387,0.1225 0.50001816,0.50001816 0 0 0 0.3303,-0.1237 c 4.3363,-2.77121 9.8005,-5.32987 14.3151,-8.74415 4.537,-3.43127 8.1364,-7.78961 8.5169,-14.07379 a 0.50001816,0.50001816 0 0 0 0,-3e-4 c 0.353,-5.86632 -3.2909,-10.01524 -8.1173,-11.48989 -4.8263,-1.47465 -10.8522,-0.35176 -15.3997,4.09286 a 0.50001816,0.50001816 0 1 0 0.6988,0.71496 c 4.2919,-4.19484 9.9404,-5.2168 14.4085,-3.85164 4.4679,1.36514 7.7385,5.04061 7.4116,10.4734 0,10e-5 0,2e-4 0,3e-4 -0.3595,5.93489 -3.7047,9.99592 -8.122,13.33665 -4.3289,3.27392 -9.6636,5.79649 -14.0475,8.5713 -4.3839,-2.77481 -9.7186,-5.29738 -14.0475,-8.5713 -4.4173,-3.34067 -7.7624,-7.40162 -8.122,-13.33634 0,-2e-4 0,-4e-4 0,-6e-4 -0.2595,-4.35605 1.7895,-7.56275 4.9094,-9.38753 3.1199,-1.82486 7.3287,-2.22314 11.3102,-0.78151 a 0.50001816,0.50001816 0 1 0 0.3406,-0.93994 c -1.7258,-0.62489 -3.4942,-0.92903 -5.2138,-0.93619 z" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:;enable-background:accumulate;" d="m 67.375492,972.86538 a 0.50001816,0.50001816 0 0 0 -0.1394,0.97276 c 2.2676,0.80852 3.8656,2.71516 3.6885,5.54745 a 0.50004553,0.50004553 0 1 0 0.9981,0.0625 c 0.2029,-3.24732 -1.7389,-5.62041 -4.351,-6.55177 a 0.50001816,0.50001816 0 0 0 -0.1962,-0.0309 z" fillOpacity="1" fillRule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></g><g id="SvgjsG2865" featureKey="nameFeature-0" transform="matrix(1.0571020170547658,0,0,1.0571020170547658,112.13914743705668,12.96317241418881)" fill="#fff"><path d="M3.6523 40 l0 -28.223 l10.215 0 c9.0039 0 13.457 5.6641 13.457 14.102 c0 8.457 -4.4531 14.121 -13.457 14.121 l-10.215 0 z M9.5117 34.8242 l4.0625 0 c5.1953 0 7.5781 -3.2422 7.5781 -8.9453 s-2.3828 -8.9453 -7.5781 -8.9453 l-4.0625 0 l0 17.891 z M46.2740703125 40.39063 c-8.3008 0 -14.434 -5.6641 -14.434 -14.512 c0 -8.8672 6.1328 -14.492 14.434 -14.492 c8.2813 0 14.414 5.625 14.414 14.492 c0 8.8477 -6.1328 14.512 -14.414 14.512 z M46.2740703125 35.0195 c4.8633 0 8.5938 -3.418 8.5938 -9.1406 c0 -5.7031 -3.7305 -9.1016 -8.5938 -9.1016 s-8.5938 3.3984 -8.5938 9.1016 c0 5.7227 3.7305 9.1406 8.5938 9.1406 z M86.318671875 11.777000000000001 l5.8398 0 l0 28.223 l-6.7773 0 l-12.5 -20.176 l0 20.176 l-5.8398 0 l0 -28.223 l6.6992 0 l12.578 20.059 l0 -20.059 z M119.3114609375 40 l-2.0508 -5.8203 l-11.855 0 l-2.0508 5.8203 l-5.9961 0 l10.391 -28.223 l7.168 0 l10.391 28.223 l-5.9961 0 z M107.1244609375 29.277 l8.418 0 l-4.1992 -11.973 z M146.87546875 11.777000000000001 l0 5.1563 l-6.6992 0 l0 23.066 l-5.8008 0 l0 -23.066 l-6.7383 0 l0 -5.1563 l19.238 0 z M168.6381640625 16.934 l-10.469 0 l0 6.4063 l9.2773 0 l0 5.0977 l-9.2773 0 l0 6.3867 l10.469 0 l0 5.1758 l-16.367 0 l0 -28.223 l16.367 0 l0 5.1563 z M178.408221875 40.39063 c-1.7383 0 -3.2031 -1.4453 -3.2031 -3.2031 s1.4648 -3.2422 3.2031 -3.2422 c1.7773 0 3.2422 1.4844 3.2422 3.2422 s-1.4648 3.2031 -3.2422 3.2031 z M199.9369609375 40.39063 c-6.1914 0 -11.035 -3.1641 -11.035 -10.273 l0 -18.34 l5.8594 0 l0 17.539 c0 4.2969 2.2852 5.8984 5.1758 5.8984 c2.9102 0 5.2148 -1.6211 5.2148 -5.8984 l0 -17.539 l5.8594 0 l0 18.34 c0 7.1094 -4.8633 10.273 -11.074 10.273 z M237.5780625 40 l-2.0508 -5.8203 l-11.855 0 l-2.0508 5.8203 l-5.9961 0 l10.391 -28.223 l7.168 0 l10.391 28.223 l-5.9961 0 z M225.3910625 29.277 l8.418 0 l-4.1992 -11.973 z"/></g>
                    </g>
                </svg> */}
            </div>
            <div className={'right-side'}>
                <div className={'menu-divider'}/>
                <div className={'disabled'}>
                    <p>DONATE</p>
                    <p className={'coming-soon'}>coming soon</p>
                </div>
                <div className={'menu-divider'}/>
                <p className={'right-side-link'}>ABOUT US</p>
                <div className={'menu-divider'}/>
                <p className={'right-side-link lang-select'}>EN<span><i class="fa-sharp fa-solid fa-chevron-down"></i></span></p>
            </div>
        </section>
    )
}
