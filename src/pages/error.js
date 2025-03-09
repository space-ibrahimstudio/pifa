import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@ibrahimstudio/button";
import { ISHome } from "@ibrahimstudio/icons";
import useGraph from "../components/content/graph";
import { SEO } from "../libs/plugins/seo";
import Page, { Container, Section } from "../components/layout/frames";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { H1, P } = useGraph();

  const id = "error-404-not-found";

  return (
    <Fragment>
      <SEO title="404 Not Found" route="/404" isNoIndex />
      <Page pageid={id} isFullscreen>
        <Container minHeight="100vh" alignItems="center" justifyContent="center" gap="var(--pixel-30)">
          <Section alignSelf="unset" justifyContent="center" cwidth="100%" maxWidth="var(--pixel-550)" cheight="auto">
            <svg width="100%" height="100%" viewBox="0 0 458 358" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.05" d="M228.74 357.32C355.07 357.32 457.48 349.749 457.48 340.41C457.48 331.071 355.07 323.5 228.74 323.5C102.41 323.5 0 331.071 0 340.41C0 349.749 102.41 357.32 228.74 357.32Z" fill="#2F318B" />
              <path
                opacity="0.1"
                d="M411.24 107.37C411.24 102.07 406.94 97.76 401.63 97.76C401.1 97.76 400.59 97.81 400.09 97.9C397.9 93.84 393.62 91.08 388.69 91.08C388.53 91.08 388.37 91.1 388.22 91.1C388.52 89.91 388.69 88.66 388.69 87.37C388.69 78.88 381.81 72 373.32 72C364.83 72 357.95 78.88 357.95 87.37C357.95 88.66 358.13 89.9 358.42 91.1C358.26 91.1 358.11 91.08 357.95 91.08C350.8 91.08 345 96.88 345 104.03C345 111.18 350.8 116.98 357.95 116.98H402.89V116.89C407.6 116.28 411.24 112.26 411.24 107.37Z"
                fill="#00A2E9"
              />
              <path
                opacity="0.1"
                d="M308.8 53.32C308.8 48.77 305.11 45.08 300.56 45.08C300.11 45.08 299.67 45.13 299.24 45.2C297.37 41.72 293.69 39.35 289.46 39.35C289.32 39.35 289.19 39.37 289.05 39.37C289.31 38.35 289.46 37.28 289.46 36.18C289.46 28.9 283.56 23 276.28 23C269 23 263.1 28.9 263.1 36.18C263.1 37.28 263.25 38.35 263.51 39.37C263.37 39.37 263.24 39.35 263.1 39.35C256.97 39.35 252 44.32 252 50.45C252 56.58 256.97 61.55 263.1 61.55H301.64V61.47C305.68 60.95 308.8 57.5 308.8 53.31V53.32Z"
                fill="#00A2E9"
              />
              <path
                opacity="0.1"
                d="M103.8 144.32C103.8 139.77 100.11 136.08 95.56 136.08C95.11 136.08 94.67 136.13 94.24 136.2C92.37 132.72 88.69 130.35 84.46 130.35C84.32 130.35 84.19 130.37 84.05 130.37C84.31 129.35 84.46 128.28 84.46 127.18C84.46 119.9 78.56 114 71.28 114C64 114 58.1 119.9 58.1 127.18C58.1 128.28 58.25 129.35 58.51 130.37C58.37 130.37 58.24 130.35 58.1 130.35C51.97 130.35 47 135.32 47 141.45C47 147.58 51.97 152.55 58.1 152.55H96.64V152.47C100.68 151.95 103.8 148.5 103.8 144.31V144.32Z"
                fill="#00A2E9"
              />
              <path d="M228.51 339.64C274.024 339.64 310.92 302.744 310.92 257.23C310.92 211.716 274.024 174.82 228.51 174.82C182.996 174.82 146.1 211.716 146.1 257.23C146.1 302.744 182.996 339.64 228.51 339.64Z" fill="#2F318B" />
              <path d="M228.51 309.11C257.163 309.11 280.39 285.883 280.39 257.23C280.39 228.578 257.163 205.35 228.51 205.35C199.857 205.35 176.63 228.578 176.63 257.23C176.63 285.883 199.857 309.11 228.51 309.11Z" fill="white" />
              <path d="M129.02 276.88C134.48 276.88 136.44 278.84 136.44 284.3V293.68C136.44 299.14 134.91 301.1 129.02 301.1H113.96V329.69C113.96 335.15 112 337.11 106.54 337.11H95.85C90.39 337.11 88.43 335.15 88.43 329.69V301.1H16.42C10.96 301.1 9 299.14 9 293.68V285.82C9 282.11 9.87 279.27 11.62 276.87L84.07 186.96C86.91 183.47 90.4 181.72 94.54 181.72H106.54C111.99 181.72 113.96 183.25 113.96 189.14V276.86H129.02V276.88ZM88.43 218.4L41.08 276.88H88.43V218.4Z" fill="#00A2E9" />
              <path
                d="M440.67 276.88C446.13 276.88 448.09 278.84 448.09 284.3V293.68C448.09 299.14 446.56 301.1 440.67 301.1H425.61V329.69C425.61 335.15 423.65 337.11 418.19 337.11H407.5C402.04 337.11 400.08 335.15 400.08 329.69V301.1H328.07C322.61 301.1 320.65 299.14 320.65 293.68V285.82C320.65 282.11 321.52 279.27 323.27 276.87L395.72 186.96C398.56 183.47 402.05 181.72 406.19 181.72H418.19C423.64 181.72 425.61 183.25 425.61 189.14V276.86H440.67V276.88ZM400.08 218.4L352.73 276.88H400.08V218.4Z"
                fill="#00A2E9"
              />
              <g opacity="0.58">
                <path d="M408.35 164.19C408.35 164.19 394.64 160.44 391.65 147.68C391.65 147.68 412.9 143.39 413.5 165.32L408.34 164.19H408.35Z" fill="#00A2E9" />
              </g>
              <g opacity="0.73">
                <path d="M410.03 162.83C410.03 162.83 400.45 147.68 408.88 133.52C408.88 133.52 425.04 143.78 417.86 162.86L410.03 162.83Z" fill="#00A2E9" />
              </g>
              <path d="M412.5 162.84C412.5 162.84 417.56 146.84 432.86 143.81C432.86 143.81 435.73 154.2 422.95 162.88L412.49 162.84H412.5Z" fill="#00A2E9" />
              <path d="M402.56 162.48L405.33 181.5L422.84 181.57L425.42 162.57L402.56 162.48Z" fill="#2F318B" />
              <path d="M238.48 149C238.48 149 240.74 159.89 239.76 167.42C239.36 170.48 236.51 172.66 233.46 172.22C229.67 171.67 224.71 169.83 222.79 164.14L218.35 154.89C218.35 154.89 215.77 149 221.46 143.78C227.15 138.57 237.43 142.3 238.48 149Z" fill="#F4A28C" />
              <path d="M219.15 156.57L217.71 192.97L237.83 192.33L230.8 166.1L219.15 156.57Z" fill="#F4A28C" />
              <path d="M235.8 149.79C233.88 150.12 230.34 150.53 225.53 150.21C225.53 150.21 229.55 154.61 226.73 160.31C223.91 166.01 218.03 164.37 218.03 164.37L216.53 150.17C215.96 146.04 217.68 141.93 221.04 139.47C222.41 138.47 223.94 137.45 225.5 136.6C229.39 134.48 235.69 136.49 239.03 133.3C240.49 131.9 242.93 132.59 243.46 134.54C244.61 138.78 244.64 145.66 239.09 148.71C238.07 149.27 236.95 149.59 235.81 149.78L235.8 149.79Z" fill="#2F318B" />
              <path d="M227.87 159.84C227.87 159.84 227.28 155.6 224.13 156.31C220.98 157.02 221.79 163.15 226.19 163.21L227.87 159.85V159.84Z" fill="#F4A28C" />
              <path d="M239.55 155.93L243.13 159.82C244.01 160.78 243.6 162.33 242.35 162.72L238.22 164.02L239.54 155.93H239.55Z" fill="#F4A28C" />
              <g opacity="0.31">
                <path d="M232.58 171.78C232.58 171.78 228.81 171.47 225.66 168.69C225.66 168.69 226.73 175.27 234.77 180.94L232.58 171.77V171.78Z" fill="#CE8172" />
              </g>
              <path d="M217.71 192.97L237.83 192.33C237.83 192.33 269.42 186.96 280.39 212.73C291.36 238.5 277.29 274.92 277.29 274.92C277.29 274.92 265.9 313.37 217.77 309.1C217.77 309.1 177.72 306.78 173.2 251.89C173 249.5 172.61 247.12 172.1 244.78C170.24 236.19 169.17 210.14 217.71 192.97Z" fill="#00A2E9" />
              <g opacity="0.08">
                <path d="M190.79 227.19C190.79 227.19 201.52 228.35 216.41 253.3C231.31 278.25 260.55 269.11 277.04 250.65L246.38 291.13L212.11 288.39L193.47 238.77L190.78 227.19H190.79Z" fill="#000001" />
              </g>
              <path d="M308.251 169.456L302.363 170.242L304.653 187.38L310.54 186.593L308.251 169.456Z" fill="#FFD200" />
              <g opacity="0.08">
                <path d="M308.251 169.456L302.363 170.242L304.653 187.38L310.54 186.593L308.251 169.456Z" fill="#000001" />
              </g>
              <path d="M311.574 181.612L302.514 182.823L305.457 204.847L314.516 203.636L311.574 181.612Z" fill="#2F318B" />
              <path d="M299.94 133.96C289.27 135.38 281.78 145.19 283.21 155.85C284.63 166.52 294.44 174.01 305.1 172.58C315.77 171.16 323.26 161.35 321.83 150.69C320.41 140.02 310.6 132.53 299.94 133.96ZM304.34 166.91C296.81 167.92 289.88 162.62 288.88 155.09C287.87 147.56 293.17 140.63 300.7 139.63C308.23 138.62 315.16 143.92 316.16 151.45C317.17 158.98 311.87 165.91 304.34 166.91Z" fill="#FFD200" />
              <path d="M302.56 167.18C310.204 167.18 316.4 160.984 316.4 153.34C316.4 145.696 310.204 139.5 302.56 139.5C294.916 139.5 288.72 145.696 288.72 153.34C288.72 160.984 294.916 167.18 302.56 167.18Z" fill="white" />
              <path d="M172.68 229.88C174.83 221.38 186.17 219.73 190.79 227.19C196.55 236.5 204.11 250.21 210.2 266.46C221.71 297.16 278.18 276.92 299.02 205.35L310.91 212.73C310.91 212.73 294.5 305.69 228.5 309.1C228.5 309.1 187.31 317.46 174.8 266.9C174.8 266.9 171.66 257.37 171.38 251.99L170.5 245.93C170.5 245.93 170.02 239.34 172.63 230.04C172.63 230.04 172.64 229.98 172.67 229.87L172.68 229.88Z" fill="#00A2E9" />
              <g opacity="0.39">
                <path d="M172.68 229.88C174.83 221.38 186.17 219.73 190.79 227.19C196.55 236.5 204.11 250.21 210.2 266.46C221.71 297.16 278.18 276.92 299.02 205.35L310.91 212.73C310.91 212.73 294.5 305.69 228.5 309.1C228.5 309.1 187.31 317.46 174.8 266.9C174.8 266.9 171.66 257.37 171.38 251.99L170.5 245.93C170.5 245.93 170.02 239.34 172.63 230.04C172.63 230.04 172.64 229.98 172.67 229.87L172.68 229.88Z" fill="white" />
              </g>
              <path d="M253.401 223.078C254.036 222.96 254.46 222.38 254.349 221.78C254.238 221.181 253.635 220.79 253 220.907C252.366 221.024 251.942 221.605 252.053 222.204C252.164 222.804 252.767 223.195 253.401 223.078Z" fill="#2F318B" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M244.156 225.16L246.049 235.411L248.091 235.034L247.4 231.296C248.068 231.64 248.846 231.776 249.638 231.63C251.598 231.268 252.843 229.34 252.478 227.364C252.113 225.387 250.261 224.032 248.302 224.394C247.509 224.54 246.831 224.946 246.33 225.506L246.197 224.783L244.156 225.16ZM246.865 228.401C247.066 229.487 248.07 230.174 249.071 229.989C250.073 229.804 250.765 228.803 250.565 227.717C250.364 226.631 249.36 225.944 248.358 226.129C247.357 226.314 246.665 227.315 246.865 228.401Z"
                fill="#2F318B"
              />
              <path d="M258.614 219.87L258.925 221.558L258.415 221.652C258.133 221.705 257.945 221.963 257.994 222.229L258.061 222.591L259.209 222.379L259.521 224.067L258.373 224.279L259.398 229.827L257.357 230.204L255.931 222.486C255.721 221.353 256.523 220.256 257.721 220.035L258.614 219.87Z" fill="#2F318B" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M265.715 221.177L265.835 221.825C265.182 221.524 264.435 221.413 263.674 221.554C261.684 221.922 260.404 223.851 260.77 225.832C261.136 227.813 263.021 229.158 265.011 228.79C265.771 228.65 266.43 228.279 266.932 227.765L267.052 228.413L269.093 228.036L267.756 220.8L265.715 221.177ZM264.954 227.054C265.913 226.877 266.585 225.888 266.384 224.795C266.182 223.702 265.2 223.018 264.241 223.195C263.282 223.372 262.61 224.362 262.812 225.455C263.013 226.548 263.995 227.232 264.954 227.054Z"
                fill="#2F318B"
              />
              <path d="M252.448 223.628L253.785 230.864L255.826 230.487L254.489 223.251L252.448 223.628Z" fill="#2F318B" />
              <path d="M301.93 207.15C301.93 207.15 303.14 191.84 309.44 191.86C315.74 191.89 330.59 203.23 307.68 210.72L301.93 207.15Z" fill="#F4A28C" />
              <path opacity="0.15" d="M155.7 123.4C189.776 123.4 217.4 95.776 217.4 61.7C217.4 27.624 189.776 0 155.7 0C121.624 0 94 27.624 94 61.7C94 95.776 121.624 123.4 155.7 123.4Z" fill="#FFF000" />
              <path d="M155.7 94.06C173.572 94.06 188.06 79.5719 188.06 61.7C188.06 43.828 173.572 29.34 155.7 29.34C137.828 29.34 123.34 43.828 123.34 61.7C123.34 79.5719 137.828 94.06 155.7 94.06Z" fill="#FFF000" />
            </svg>
          </Section>
          <Section alignSelf="unset" justifyContent="center" cwidth="100%" maxWidth="var(--pixel-830)" cheight="auto" gap="var(--pixel-10)">
            <H1 align="center" color="var(--color-secondary)">
              Sepertinya, halaman yang kamu tuju tidak ada.
            </H1>
            <P align="center">Mungkin kamu menuliskan URL yang tidak valid, atau halaman yang kamu tuju telah dialihkan.</P>
          </Section>
          <Button id="back" buttonText="Kembali ke Beranda" onClick={() => navigate("/")} startContent={<ISHome />} />
        </Container>
      </Page>
    </Fragment>
  );
};

export default ErrorPage;
