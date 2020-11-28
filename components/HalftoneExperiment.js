const xStart = 127
const xStop = 473
const yStart = 5
const yStop = 113
const size = 20
const cols = Array.from(Array(Math.ceil((xStop - xStart) / size)), (_, x) => x)
const rows = Array.from(Array(Math.ceil((yStop - yStart) / size)), (_, x) => x)

export default function HalftoneExperiment() {
  return (
    <svg
      width="529"
      height="143"
      viewBox="0 0 529 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feoffset in="blur" dx="4" dy="4" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="fancy-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <mask id="text-clip">
        <path
          d="M0.859375 62.4688C0.859375 57.3125 1.46875 52.3672 2.6875 47.6328C3.95312 42.8516 5.73438 38.3984 8.03125 34.2734C10.3281 30.1484 13.0938 26.3984 16.3281 23.0234C19.6094 19.6484 23.2656 16.7656 27.2969 14.375C31.3281 11.9375 35.6875 10.0625 40.375 8.75C45.1094 7.4375 50.0781 6.78125 55.2812 6.78125C59.4062 6.78125 63.0156 7.0625 66.1094 7.625C69.25 8.14062 71.9688 8.82031 74.2656 9.66406C76.6094 10.4609 78.5547 11.3516 80.1016 12.3359C81.6953 13.3203 83.0078 14.2578 84.0391 15.1484C83.9922 15.1484 83.9688 15.3125 83.9688 15.6406C83.9688 16.3438 84.0156 17.6328 84.1094 19.5078C84.25 21.3828 84.3906 23.4688 84.5312 25.7656C84.7188 28.0625 84.8594 30.4062 84.9531 32.7969C85.0938 35.1406 85.1641 37.1797 85.1641 38.9141C85.1641 39.1953 85.0703 39.5234 84.8828 39.8984C84.6953 40.2266 84.2266 40.3906 83.4766 40.3906C83.0547 40.3906 82.5391 40.3203 81.9297 40.1797C80.9453 39.8984 79.7031 39.2656 78.2031 38.2812C76.7031 37.25 74.9453 36.1953 72.9297 35.1172C70.9609 33.9922 68.7344 33.0078 66.25 32.1641C63.8125 31.2734 61.1406 30.8281 58.2344 30.8281C54.3906 30.8281 50.8984 31.6016 47.7578 33.1484C44.6172 34.6484 41.9453 36.7344 39.7422 39.4062C37.5391 42.0781 35.8281 45.2656 34.6094 48.9688C33.3906 52.625 32.7812 56.6328 32.7812 60.9922C32.7812 64.8359 33.2031 68.5156 34.0469 72.0312C34.8906 75.5 36.1562 78.5469 37.8438 81.1719C39.5781 83.7969 41.7109 85.9062 44.2422 87.5C46.8203 89.0469 49.7969 89.8203 53.1719 89.8203C55.8438 89.8203 58.2109 89.7266 60.2734 89.5391C62.3359 89.3516 64.2578 89.0469 66.0391 88.625C67.8203 88.2031 69.5547 87.6406 71.2422 86.9375C72.9766 86.2344 74.8281 85.3438 76.7969 84.2656C76.8906 84.2188 77.125 84.1953 77.5 84.1953C77.8281 84.1953 78.0391 84.3359 78.1328 84.6172C78.2734 84.8516 78.3438 85.3672 78.3438 86.1641V94.6016C78.3438 96.1484 78.3203 97.6719 78.2734 99.1719C78.2734 100.625 78.25 101.938 78.2031 103.109C78.2031 104.281 78.1797 105.242 78.1328 105.992C78.1328 106.695 78.1094 107.047 78.0625 107.047C75.9062 108.406 73.5859 109.508 71.1016 110.352C68.6641 111.242 66.1328 111.922 63.5078 112.391C60.9297 112.906 58.3281 113.234 55.7031 113.375C53.0781 113.562 50.5469 113.656 48.1094 113.656C41.5 113.656 35.3125 112.414 29.5469 109.93C23.7812 107.398 18.7656 103.883 14.5 99.3828C10.2812 94.8828 6.95312 89.4922 4.51562 83.2109C2.07812 76.9297 0.859375 70.0156 0.859375 62.4688ZM127.141 113.656C120.531 113.656 114.719 112.578 109.703 110.422C104.734 108.266 100.562 105.406 97.1875 101.844C93.8125 98.2344 91.2812 94.1094 89.5938 89.4688C87.9062 84.7812 87.0625 79.9297 87.0625 74.9141C87.0625 69.8984 87.8828 65.1406 89.5234 60.6406C91.1641 56.0938 93.4609 52.0391 96.4141 48.4766C99.3672 44.8672 102.906 41.8672 107.031 39.4766C111.156 37.0391 115.703 35.3984 120.672 34.5547C121.422 34.5078 121.797 34.3438 121.797 34.0625C121.797 33.5469 121.727 33.0781 121.586 32.6562C121.492 32.1875 121.445 31.7891 121.445 31.4609C121.445 30.9453 121.539 30.5938 121.727 30.4062C121.914 30.2188 122.125 30.125 122.359 30.125C131.312 30.125 138.93 31.1562 145.211 33.2188C151.492 35.2344 156.602 38 160.539 41.5156C164.477 45.0312 167.336 49.1797 169.117 53.9609C170.898 58.7422 171.789 63.875 171.789 69.3594C171.789 76.3438 170.617 82.5781 168.273 88.0625C165.93 93.5469 162.719 98.1875 158.641 101.984C154.609 105.781 149.875 108.664 144.438 110.633C139.047 112.648 133.281 113.656 127.141 113.656ZM114.133 74.1406C114.133 76.6719 114.391 79.1797 114.906 81.6641C115.469 84.1484 116.359 86.3984 117.578 88.4141C118.844 90.4297 120.484 92.0703 122.5 93.3359C124.516 94.5547 127.023 95.1641 130.023 95.1641C132.18 95.0703 134.055 94.6016 135.648 93.7578C137.289 92.8672 138.695 91.7422 139.867 90.3828C141.039 88.9766 142 87.4062 142.75 85.6719C143.547 83.9375 144.156 82.1562 144.578 80.3281C145.047 78.4531 145.375 76.625 145.562 74.8438C145.75 73.0625 145.844 71.4453 145.844 69.9922C145.844 67.5547 145.469 65.1641 144.719 62.8203C144.016 60.4766 142.961 58.4141 141.555 56.6328C140.148 54.8516 138.391 53.4219 136.281 52.3438C134.219 51.2188 131.828 50.6562 129.109 50.6562C126.297 50.6562 123.93 51.5 122.008 53.1875C120.086 54.8281 118.539 56.8672 117.367 59.3047C116.242 61.7422 115.422 64.3203 114.906 67.0391C114.391 69.7109 114.133 72.0781 114.133 74.1406ZM179.875 62.4688C179.875 57.3125 180.484 52.3672 181.703 47.6328C182.969 42.8516 184.75 38.3984 187.047 34.2734C189.344 30.1484 192.109 26.3984 195.344 23.0234C198.625 19.6484 202.281 16.7656 206.312 14.375C210.344 11.9375 214.703 10.0625 219.391 8.75C224.125 7.4375 229.094 6.78125 234.297 6.78125C238.422 6.78125 242.031 7.0625 245.125 7.625C248.266 8.14062 250.984 8.82031 253.281 9.66406C255.625 10.4609 257.57 11.3516 259.117 12.3359C260.711 13.3203 262.023 14.2578 263.055 15.1484C263.008 15.1484 262.984 15.3125 262.984 15.6406C262.984 16.3438 263.031 17.6328 263.125 19.5078C263.266 21.3828 263.406 23.4688 263.547 25.7656C263.734 28.0625 263.875 30.4062 263.969 32.7969C264.109 35.1406 264.18 37.1797 264.18 38.9141C264.18 39.1953 264.086 39.5234 263.898 39.8984C263.711 40.2266 263.242 40.3906 262.492 40.3906C262.07 40.3906 261.555 40.3203 260.945 40.1797C259.961 39.8984 258.719 39.2656 257.219 38.2812C255.719 37.25 253.961 36.1953 251.945 35.1172C249.977 33.9922 247.75 33.0078 245.266 32.1641C242.828 31.2734 240.156 30.8281 237.25 30.8281C233.406 30.8281 229.914 31.6016 226.773 33.1484C223.633 34.6484 220.961 36.7344 218.758 39.4062C216.555 42.0781 214.844 45.2656 213.625 48.9688C212.406 52.625 211.797 56.6328 211.797 60.9922C211.797 64.8359 212.219 68.5156 213.062 72.0312C213.906 75.5 215.172 78.5469 216.859 81.1719C218.594 83.7969 220.727 85.9062 223.258 87.5C225.836 89.0469 228.812 89.8203 232.188 89.8203C234.859 89.8203 237.227 89.7266 239.289 89.5391C241.352 89.3516 243.273 89.0469 245.055 88.625C246.836 88.2031 248.57 87.6406 250.258 86.9375C251.992 86.2344 253.844 85.3438 255.812 84.2656C255.906 84.2188 256.141 84.1953 256.516 84.1953C256.844 84.1953 257.055 84.3359 257.148 84.6172C257.289 84.8516 257.359 85.3672 257.359 86.1641V94.6016C257.359 96.1484 257.336 97.6719 257.289 99.1719C257.289 100.625 257.266 101.938 257.219 103.109C257.219 104.281 257.195 105.242 257.148 105.992C257.148 106.695 257.125 107.047 257.078 107.047C254.922 108.406 252.602 109.508 250.117 110.352C247.68 111.242 245.148 111.922 242.523 112.391C239.945 112.906 237.344 113.234 234.719 113.375C232.094 113.562 229.562 113.656 227.125 113.656C220.516 113.656 214.328 112.414 208.562 109.93C202.797 107.398 197.781 103.883 193.516 99.3828C189.297 94.8828 185.969 89.4922 183.531 83.2109C181.094 76.9297 179.875 70.0156 179.875 62.4688ZM306.156 113.656C299.547 113.656 293.734 112.578 288.719 110.422C283.75 108.266 279.578 105.406 276.203 101.844C272.828 98.2344 270.297 94.1094 268.609 89.4688C266.922 84.7812 266.078 79.9297 266.078 74.9141C266.078 69.8984 266.898 65.1406 268.539 60.6406C270.18 56.0938 272.477 52.0391 275.43 48.4766C278.383 44.8672 281.922 41.8672 286.047 39.4766C290.172 37.0391 294.719 35.3984 299.688 34.5547C300.438 34.5078 300.812 34.3438 300.812 34.0625C300.812 33.5469 300.742 33.0781 300.602 32.6562C300.508 32.1875 300.461 31.7891 300.461 31.4609C300.461 30.9453 300.555 30.5938 300.742 30.4062C300.93 30.2188 301.141 30.125 301.375 30.125C310.328 30.125 317.945 31.1562 324.227 33.2188C330.508 35.2344 335.617 38 339.555 41.5156C343.492 45.0312 346.352 49.1797 348.133 53.9609C349.914 58.7422 350.805 63.875 350.805 69.3594C350.805 76.3438 349.633 82.5781 347.289 88.0625C344.945 93.5469 341.734 98.1875 337.656 101.984C333.625 105.781 328.891 108.664 323.453 110.633C318.062 112.648 312.297 113.656 306.156 113.656ZM293.148 74.1406C293.148 76.6719 293.406 79.1797 293.922 81.6641C294.484 84.1484 295.375 86.3984 296.594 88.4141C297.859 90.4297 299.5 92.0703 301.516 93.3359C303.531 94.5547 306.039 95.1641 309.039 95.1641C311.195 95.0703 313.07 94.6016 314.664 93.7578C316.305 92.8672 317.711 91.7422 318.883 90.3828C320.055 88.9766 321.016 87.4062 321.766 85.6719C322.562 83.9375 323.172 82.1562 323.594 80.3281C324.062 78.4531 324.391 76.625 324.578 74.8438C324.766 73.0625 324.859 71.4453 324.859 69.9922C324.859 67.5547 324.484 65.1641 323.734 62.8203C323.031 60.4766 321.977 58.4141 320.57 56.6328C319.164 54.8516 317.406 53.4219 315.297 52.3438C313.234 51.2188 310.844 50.6562 308.125 50.6562C305.312 50.6562 302.945 51.5 301.023 53.1875C299.102 54.8281 297.555 56.8672 296.383 59.3047C295.258 61.7422 294.438 64.3203 293.922 67.0391C293.406 69.7109 293.148 72.0781 293.148 74.1406ZM413.102 69.9922C413.242 68.4922 413.383 66.9219 413.523 65.2812C413.711 63.6406 413.922 61.9297 414.156 60.1484C413.078 57.3359 411.555 55.0625 409.586 53.3281C407.617 51.5469 405.156 50.6562 402.203 50.6562C399.297 50.6562 396.836 51.5 394.82 53.1875C392.805 54.8281 391.188 56.8672 389.969 59.3047C388.75 61.7422 387.859 64.3203 387.297 67.0391C386.781 69.7109 386.523 72.0781 386.523 74.1406C386.523 76.6719 386.664 79.1797 386.945 81.6641C387.273 84.1484 387.766 86.3984 388.422 88.4141C389.125 90.4297 390.039 92.0703 391.164 93.3359C392.289 94.5547 393.695 95.1641 395.383 95.1641C399.508 95.0234 402.859 94.0859 405.438 92.3516C408.016 90.6172 410.078 88.5078 411.625 86.0234L413.102 69.9922ZM437.641 102.898C437.641 102.992 437.617 103.109 437.57 103.25C437.57 103.344 437.57 103.438 437.57 103.531C437.57 103.766 437.57 103.953 437.57 104.094C437.617 104.234 437.641 104.375 437.641 104.516C437.641 104.938 437.477 105.289 437.148 105.57C436.867 105.805 436.094 106.086 434.828 106.414L415.984 112.531C415.469 112.719 414.789 112.953 413.945 113.234C413.102 113.516 412.281 113.656 411.484 113.656C410.828 113.656 410.242 113.492 409.727 113.164C409.258 112.836 409.023 112.227 409.023 111.336C409.023 110.492 409.023 109.812 409.023 109.297C409.07 108.781 409.094 108.312 409.094 107.891C409.141 107.422 409.188 106.93 409.234 106.414C409.328 105.898 409.422 105.219 409.516 104.375C406 107.188 402.367 109.438 398.617 111.125C394.914 112.812 391 113.656 386.875 113.656C382.375 113.656 378.367 112.578 374.852 110.422C371.383 108.312 368.453 105.477 366.062 101.914C363.672 98.3047 361.844 94.2031 360.578 89.6094C359.359 84.9688 358.75 80.1406 358.75 75.125C358.75 68.6094 359.805 62.6797 361.914 57.3359C364.07 51.9453 366.977 47.3516 370.633 43.5547C374.289 39.7109 378.555 36.7578 383.43 34.6953C388.305 32.5859 393.484 31.5312 398.969 31.5312C401.922 31.5312 404.734 32.3047 407.406 33.8516C410.125 35.3984 412.68 37.3906 415.07 39.8281C415.211 37.5312 415.375 35.0469 415.562 32.375C415.75 29.6562 415.938 26.9141 416.125 24.1484C416.312 21.3359 416.5 18.5703 416.688 15.8516C416.875 13.1328 417.039 10.6484 417.18 8.39844C417.18 7.97656 417.32 7.64844 417.602 7.41406C417.93 7.13281 418.727 6.82813 419.992 6.5L439.75 1.78906C440.266 1.69531 440.945 1.48438 441.789 1.15625C442.633 0.828125 443.453 0.664062 444.25 0.664062C444.859 0.664062 445.422 0.804688 445.938 1.08594C446.5 1.36719 446.781 1.90625 446.781 2.70312C446.781 2.79687 446.758 3.00781 446.711 3.33594C446.711 3.61719 446.711 3.80469 446.711 3.89844L437.641 102.898ZM483.344 142.062C483.25 142.25 483.133 142.391 482.992 142.484C482.898 142.625 482.711 142.695 482.43 142.695C482.148 142.695 481.938 142.672 481.797 142.625C480.109 142.016 478.516 141.5 477.016 141.078C475.516 140.656 474.016 140.258 472.516 139.883C471.062 139.555 469.562 139.227 468.016 138.898C466.469 138.617 464.828 138.289 463.094 137.914C462.625 137.82 462.25 137.656 461.969 137.422C461.734 137.234 461.617 136.883 461.617 136.367C461.617 136.227 461.688 135.875 461.828 135.312C462.016 134.797 462.438 133.695 463.094 132.008C463.75 130.367 464.758 127.953 466.117 124.766C467.477 121.625 469.352 117.383 471.742 112.039C471.039 109.695 470.242 106.883 469.352 103.602C468.461 100.32 467.5 96.7344 466.469 92.8438C465.484 88.9531 464.453 84.8516 463.375 80.5391C462.297 76.1797 461.195 71.7969 460.07 67.3906C458.992 62.9375 457.891 58.5547 456.766 54.2422C455.688 49.8828 454.633 45.7344 453.602 41.7969C453.273 41.0469 453.086 40.4375 453.039 39.9688C452.992 39.4531 452.969 39.0312 452.969 38.7031C452.969 38.0469 453.344 37.625 454.094 37.4375C457.75 36.6406 461.547 35.8203 465.484 34.9766C469.422 34.0859 473.148 32.9609 476.664 31.6016C476.805 31.5547 477.016 31.5312 477.297 31.5312C477.906 31.5312 478.234 31.7656 478.281 32.2344L486.859 79.4844C487.047 78.9219 487.398 77.9141 487.914 76.4609C488.477 74.9609 489.109 73.1797 489.812 71.1172C490.562 69.0547 491.383 66.7812 492.273 64.2969C493.164 61.8125 494.078 59.2812 495.016 56.7031C495.953 54.125 496.867 51.5703 497.758 49.0391C498.695 46.4609 499.562 44.0703 500.359 41.8672C501.156 39.6641 501.836 37.7188 502.398 36.0312C503.008 34.3438 503.477 33.0781 503.805 32.2344C503.992 31.7656 504.344 31.5312 504.859 31.5312C505 31.5312 505.094 31.5547 505.141 31.6016C505.188 31.6016 505.281 31.6016 505.422 31.6016C508.938 32.9609 512.547 34.0859 516.25 34.9766C519.953 35.8203 523.633 36.6406 527.289 37.4375C528.18 37.625 528.625 38.1406 528.625 38.9844C528.625 39.5938 528.344 40.5312 527.781 41.7969L498.812 107.258L483.344 142.062Z"
          fill="white"
        />
      </mask>
      <g mask="url(#text-clip)">
        <rect x="0" y="0" width="529" height="143" fill="#1DD1A1" />
        <g style={{ filter: 'url(#fancy-goo)' }}>
          {cols.map((col) =>
            rows.map((row) => {
              const x = xStart + col * size + size / 2
              const y = yStart + row * size + size / 2
              const radius =
                (col / cols.length) * size + (row / rows.length) * (size / 11)

              return (
                <circle
                  key={`${col}-${row}`}
                  cx={x}
                  cy={y}
                  r={radius}
                  fill="#48DBFB"
                />
              )
            })
          )}
        </g>
        <rect x="353" y="0" width="206" height="143" fill="#48DBFB" />
      </g>
    </svg>
  )
}
