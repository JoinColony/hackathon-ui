import { Link } from 'react-router-dom';
import CircleComponent from 'components/UserCircleAvatar';

const VotePage = () => {
  return (
    <div className="w-[1440px] mx-auto flex justify-center items-center">
      <div className="w-full h-full pt-12 pb-24 bg-white rounded-tl-[40px] rounded-bl-[40px] flex-col justify-start items-start gap-8 inline-flex">
        <form>
          <div className="self-stretch w-full h-full flex-col justify-start items-center gap-6 flex">
            <div className="w-full h-full px-8 flex-col justify-start items-start gap-6 flex mb-16">
              <div className="self-stretch h-full flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                      <div className="grow shrink basis-0 text-gray-900 text-3xl font-semibold leading-[38px]">Colony Pool</div>
                      <Link to="#" className="text-blue-400 text-base font-semibold leading-normal">Funding Pool $100,000</Link>
                    </div>
                    <div className="self-stretch justify-start items-center gap-1 inline-flex">
                      <div className="grow shrink basis-0 text-gray-500 text-base font-normal leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                      <div className="justify-start items-center gap-1 flex">
                        <div className="w-4 h-4 relative" />
                        <Link to="#" className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-blue-400">Funding Pool $100,000</Link>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 flex">
                    <div className="rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-full flex-col justify-start items-center gap-6 flex">
            <div className="h-full px-8 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <button type="submit" className="grow shrink basis-0 h-full p-6 bg-white rounded-lg border border-gray-200 justify-between items-center gap-6 flex hover:bg-blue-400">
                  <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                    <div className="self-stretch h-full flex-col justify-center items-center gap-4 flex">
                      <div className="self-stretch h-full flex-col justify-start items-center gap-4 flex">
                        <CircleComponent name="Dog" />
                        <div className="justify-start items-center gap-3 inline-flex">
                          <div className="justify-start items-end gap-2.5 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-gray-900 text-2xl font-semibold leading-[30px]">Dog</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch text-center text-slate-600 text-sm font-medium leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </button>
                <button type="submit" className="grow shrink basis-0 h-full p-6 bg-white rounded-lg border border-gray-200 justify-between items-center gap-6 flex hover:bg-blue-400">
                  <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                    <div className="self-stretch h-full flex-col justify-center items-center gap-4 flex">
                      <div className="self-stretch h-full flex-col justify-start items-center gap-4 flex">
                        <CircleComponent name="Cat" />
                        <div className="justify-start items-center gap-3 inline-flex">
                          <div className="justify-start items-end gap-2.5 flex">
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-gray-900 text-2xl font-semibold leading-[30px]">Cat</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch text-center text-slate-600 text-sm font-medium leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
              <div className="justify-start items-center gap-1 flex">
                <Link to="#" className="text-center text-gray-900 text-xs font-medium leading-[18px] hover:text-blue-400">View league</Link>
              </div>
              <div className="px-3 py-2 bg-white rounded-lg border border-gray-300 justify-center items-center gap-2 flex hover:bg-blue-400 cursor-pointer">
                <button type="submit" className="text-center text-slate-700 text-xs font-medium leading-[18px]">Skip choice</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default VotePage;
