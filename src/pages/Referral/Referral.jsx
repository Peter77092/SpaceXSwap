import "./Referral.css";
import { Card, CardHeader, Divider, Image } from "@nextui-org/react";
import { useData } from "@/components/Context.jsx";
// import { useInitData } from "@tma.js/sdk-react";

/**
 * @returns {JSX.Element}
 */
export function Referral() {
  const { referrals } = useData();
  // const initData = useInitData();
  // const refLink = "t.me/spacexswapbot?start=" + initData.user.id;
  const refLink = "t.me/spacexswapbot?start=" + 124578;
  return (
    <div className="games text-pink-100">
      <div className="referralLink">
        <Card className="max-w-80 bg-transparent">
          <CardHeader className="flex flex-col gap-3">
            <Image
              alt="nextui logo"
              height={60}
              radius="sm"
              src="./coin.png"
              width={60}
            />
            <div className="flex flex-col w-60">
              <p className="text-lg text-pink-100 font-bold my-2">
                Invite Your Friends
              </p>
              <p className="text-small text-gray-400">
                {"As they join the game, you'll be rewarded with "}
                <b>25K Tokens</b> and{" "}
                <i>2% of their tapping income without any limitation</i>
              </p>
            </div>
          </CardHeader>
          <Divider className="my-1" />
          <div className="grid w-full max-w-[80vw] items-center gap-1.5">
            <div className="flex items-center space-x-2">
              <input
                className="flex h-10 w-full break-all rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                type="text"
                id="text"
                value={refLink}
                disabled={true}
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary-200 text-pink-200 h-10 px-4 py-2"
                type="button"
                onClick={() => {
                  const inputValue = document.getElementById("text").value;
                  navigator.clipboard.writeText(inputValue).then(() => {
                    // utils.shareURL(refLink, 'Lets Play Space X Swap And Earn Tokens!');
                    const el = document.getElementById("btn_copy");
                    el.innerHTML = `
    <title xmlns="http://www.w3.org/2000/svg">check_fill</title>
    <g xmlns="http://www.w3.org/2000/svg" id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="System" transform="translate(-192.000000, -48.000000)">
            <g id="check_fill" transform="translate(192.000000, 48.000000)">
                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

</path>
                <path d="M21.5456,5.11107 C22.1314,5.69686 22.1314,6.6466 21.5456,7.23239 L10.3026,18.4754 C9.6778,19.1002 8.66474,19.1002 8.0399,18.4754 L2.45376,12.8892 C1.86797,12.3035 1.86797,11.3537 2.45376,10.7679 C3.03954,10.1821 3.98929,10.1821 4.57508,10.7679 L9.17127,15.3641 L19.4243,5.11107 C20.0101,4.52528 20.9599,4.52528 21.5456,5.11107 Z" id="路径" fill="#09244B">

</path>
            </g>
        </g>
    </g>
`;
                    setTimeout(() => {
                      el.innerHTML = `
    <title xmlns="http://www.w3.org/2000/svg">copy_3_fill</title>
    <g xmlns="http://www.w3.org/2000/svg" id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="File" transform="translate(-144.000000, -336.000000)">
            <g id="copy_3_fill" transform="translate(144.000000, 336.000000)">
                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

</path>
                <path d="M9,2 C7.89543,2 7,2.89543 7,4 L7,5 C7,5.55228 7.44772,6 8,6 C8.55228,6 9,5.55228 9,5 L9,4 L10,4 C10.5523,4 11,3.55228 11,3 C11,2.44772 10.5523,2 10,2 L9,2 Z M14,2 C13.4477,2 13,2.44772 13,3 C13,3.55228 13.4477,4 14,4 L15,4 C15.5523,4 16,3.55228 16,3 C16,2.44772 15.5523,2 15,2 L14,2 Z M19,2 C18.4477,2 18,2.44772 18,3 C18,3.55228 18.4477,4 19,4 L20,4 L20,5 C20,5.55228 20.4477,6 21,6 C21.5523,6 22,5.55228 22,5 L22,4 C22,2.89543 21.1046,2 20,2 L19,2 Z M22,9 C22,8.44772 21.5523,8 21,8 C20.4477,8 20,8.44772 20,9 L20,10 C20,10.5523 20.4477,11 21,11 C21.5523,11 22,10.5523 22,10 L22,9 Z M22,14 C22,13.4477 21.5523,13 21,13 C20.4477,13 20,13.4477 20,14 L20,15 L19,15 C18.4477,15 18,15.4477 18,16 C18,16.5523 18.4477,17 19,17 L20,17 C21.1046,17 22,16.1046 22,15 L22,14 Z M4,7 C2.89543,7 2,7.89543 2,9 L2,20 C2,21.1046 2.89543,22 4,22 L15,22 C16.1046,22 17,21.1046 17,20 L17,9 C17,7.89543 16.1046,7 15,7 L4,7 Z" id="形状" fill="#09244B">

</path>
            </g>
        </g>
    </g>
`;
                    }, 1000);
                  });
                }}
              >
                <svg
                  id={"btn_copy"}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <title xmlns="http://www.w3.org/2000/svg">copy_3_fill</title>
                  <g
                    xmlns="http://www.w3.org/2000/svg"
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="File"
                      transform="translate(-144.000000, -336.000000)"
                    >
                      <g
                        id="copy_3_fill"
                        transform="translate(144.000000, 336.000000)"
                      >
                        <path
                          d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                          id="MingCute"
                          fillRule="nonzero"
                        ></path>
                        <path
                          d="M9,2 C7.89543,2 7,2.89543 7,4 L7,5 C7,5.55228 7.44772,6 8,6 C8.55228,6 9,5.55228 9,5 L9,4 L10,4 C10.5523,4 11,3.55228 11,3 C11,2.44772 10.5523,2 10,2 L9,2 Z M14,2 C13.4477,2 13,2.44772 13,3 C13,3.55228 13.4477,4 14,4 L15,4 C15.5523,4 16,3.55228 16,3 C16,2.44772 15.5523,2 15,2 L14,2 Z M19,2 C18.4477,2 18,2.44772 18,3 C18,3.55228 18.4477,4 19,4 L20,4 L20,5 C20,5.55228 20.4477,6 21,6 C21.5523,6 22,5.55228 22,5 L22,4 C22,2.89543 21.1046,2 20,2 L19,2 Z M22,9 C22,8.44772 21.5523,8 21,8 C20.4477,8 20,8.44772 20,9 L20,10 C20,10.5523 20.4477,11 21,11 C21.5523,11 22,10.5523 22,10 L22,9 Z M22,14 C22,13.4477 21.5523,13 21,13 C20.4477,13 20,13.4477 20,14 L20,15 L19,15 C18.4477,15 18,15.4477 18,16 C18,16.5523 18.4477,17 19,17 L20,17 C21.1046,17 22,16.1046 22,15 L22,14 Z M4,7 C2.89543,7 2,7.89543 2,9 L2,20 C2,21.1046 2.89543,22 4,22 L15,22 C16.1046,22 17,21.1046 17,20 L17,9 C17,7.89543 16.1046,7 15,7 L4,7 Z"
                          id="形状"
                          fill="#09244B"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="sr-only">Copy to clipboard</span>
              </button>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex flex-col items-center gap-3 w-[75%] max-w-screen-md mt-5">
        <span className="text-pink-200 text-center font-bold w-auto">
          {referrals === 0
            ? "You Have 0 Friends!!!"
            : "You Have Successfully Invited " + referrals + " Friends"}
        </span>
        <span className="text-pink-200 text-center font-bold w-auto">
          {referrals === 0
            ? "Invite your friends and family to earn 25k"
            : "Keep up the good work!!"}
        </span>
        <span className="text-pink-100 text-center font-normal w-auto">
          Your Total Referral Rewards:{" "}
          {Number(referrals * 25000).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
