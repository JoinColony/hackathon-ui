import { FunctionComponent } from "react";

const VotePage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-start justify-start text-left text-5xl text-light-base-black font-text-small-medium">
      <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start">
        <div className="w-[1280px] h-[72px] flex flex-row py-0 px-8 box-border items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="relative leading-[30px] font-semibold">
              Budgetbox
            </div>
            <div className="flex flex-row items-center justify-start gap-[4px] text-base text-light-gray-900">
              <div className="rounded-md bg-gray-50 overflow-hidden flex flex-row py-2 px-3 items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[24px] font-medium">
                    Projects
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-white overflow-hidden flex flex-row py-2 px-3 items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[24px] font-medium">
                    Leaderboards
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-white overflow-hidden flex flex-row py-2 px-3 items-center justify-start">
                <div className="flex flex-row items-center justify-start">
                  <div className="relative leading-[24px] font-medium">
                    Admin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px] text-center text-xs text-white">
            <div className="self-stretch rounded-lg bg-light-blue-400 flex flex-row py-2 px-3 items-center justify-center border-[1px] border-solid border-light-blue-400">
              <div className="relative leading-[18px] font-medium">
                Create new voting project
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="rounded-md bg-white overflow-hidden flex flex-row p-2.5 items-start justify-start">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/settings.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <img
                className="rounded-[200px] w-10 h-10 object-cover"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/divider.svg"
        />
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/divider.svg"
        />
      </div>
      <div className="self-stretch rounded-tl-21xl rounded-tr-none rounded-br-none rounded-bl-21xl bg-white h-[861px] flex flex-col pt-12 px-0 pb-24 box-border items-start justify-start gap-[32px] text-[30px] text-light-gray-900">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="w-[1280px] flex flex-col py-0 px-8 box-border items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="w-[1216px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                    <div className="flex-1 relative leading-[38px] font-semibold">
                      Animal Pool
                    </div>
                    <div className="relative text-base leading-[24px] font-semibold text-light-blue-400">
                      Funding Pool $100,000
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <div className="rounded-lg hidden" />
                  <div className="rounded-lg hidden" />
                  <div className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-5xl">
          <div className="w-[1280px] flex flex-col py-0 px-8 box-border items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 rounded-lg bg-white overflow-hidden flex flex-row p-6 items-center justify-between border-[1px] border-solid border-light-gray-200">
                  <div className="hidden flex-col items-start justify-start">
                    <img
                      className="relative w-[34px] h-[34px] overflow-hidden shrink-0"
                      alt=""
                      src="/coin.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
                    <img
                      className="relative w-[106px] h-[106px] object-cover"
                      alt=""
                      src="/blockie-6@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="flex flex-row items-center justify-start">
                          <div className="flex flex-row items-end justify-start gap-[10px]">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative leading-[30px] font-semibold">
                                Rabbit
                              </div>
                            </div>
                            <div className="hidden flex-row pt-0 px-0 pb-[3px] items-center justify-start gap-[4px] text-sm">
                              <div className="relative leading-[20px] font-medium">
                                CLNY
                              </div>
                              <img
                                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                                alt=""
                                src="/coin.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative text-sm leading-[20px] font-medium text-light-gray-600 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 rounded-lg bg-white overflow-hidden flex flex-row p-6 items-center justify-between border-[1px] border-solid border-light-gray-200">
                  <div className="hidden flex-col items-start justify-start">
                    <img
                      className="relative w-[34px] h-[34px] overflow-hidden shrink-0"
                      alt=""
                      src="/coin.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-start gap-[24px]">
                    <img
                      className="relative w-[106px] h-[106px] object-cover"
                      alt=""
                      src="/blockie-61@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-center justify-center gap-[16px]">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="flex flex-row items-center justify-start">
                          <div className="flex flex-row items-end justify-start gap-[10px]">
                            <div className="flex flex-row items-center justify-start">
                              <div className="relative leading-[30px] font-semibold">
                                Cow
                              </div>
                            </div>
                            <div className="hidden flex-row pt-0 px-0 pb-[3px] items-center justify-start gap-[4px] text-sm">
                              <div className="relative leading-[20px] font-medium">
                                CLNY
                              </div>
                              <img
                                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                                alt=""
                                src="/coin.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative text-sm leading-[20px] font-medium text-light-gray-600 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[10px] text-xs text-light-gray-600">
            <div className="relative leading-[18px]">
              Unsure of the project?
            </div>
            <div className="rounded-lg bg-white flex flex-row py-2 px-3 items-center justify-center text-center text-light-gray-700 border-[1px] border-solid border-light-gray-300">
              <div className="relative leading-[18px] font-medium">
                Skip to the next voting option
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotePage;
