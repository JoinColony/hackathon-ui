import { FC, useState, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { isAddress } from 'ethers';
import { AuthContext } from '../AuthContext';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  const [addressInput, setAddressInput] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { logIn } = useContext(AuthContext);

  const handleLogin = () => {
    if (isAddress(addressInput)) {
      logIn(addressInput);
      setIsValid(true);
      onClose();
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
        <div className="absolute top-[-4px] right-[-4px] bottom-[-4px] left-[-4px] [filter:blur(4px)] z-[2] bg-light-base-sprite" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white shadow-[0px_10px_30px_rgba(0,_0,_0,_0.05)] w-[485px] overflow-hidden flex flex-col items-center justify-start z-[3] text-sm">
        <div className="self-stretch bg-white flex flex-col items-center justify-start relative gap-[16px] text-base">
          <div className="self-stretch bg-white flex flex-col pt-6 px-6 pb-0 items-start justify-start z-[0]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch relative leading-[24px] font-semibold">
                Login
              </div>
              <div className="self-stretch relative text-sm leading-[20px] text-light-gray-600">
                Login using your wallet address
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="my-0 mx-auto absolute top-[16px] right-[16px] rounded-lg overflow-hidden flex flex-row p-2.5 items-center justify-center z-[1]"
          >
            <FaTimes className="relative w-[18px] h-[18px] text-[#98A2B3]" />
          </button>
          <div className="self-stretch h-5 hidden z-[2]" />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 hidden z-[3]"
            alt=""
            src="/divider2.svg"
          />
        </div>
        <div className="self-stretch bg-white flex flex-col pt-6 px-6 pb-0 items-start justify-start">
          <div className="w-[432.5px] flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="relative leading-[20px] font-medium">
                Wallet address
              </div>
            </div>
            <input
              type="text"
              value={addressInput}
              className={`self-stretch rounded bg-white py-3 px-3.5 border-[1px] border-solid ${
                isValid ? 'border-light-gray-300' : 'border-red-500'
              } leading-[20px]`}
              onChange={(event) => setAddressInput(event.target.value)}
            />
            {!isValid && <p className="text-red-500">Invalid address</p>}
          </div>
        </div>
        <div className="self-stretch flex flex-row pt-8 px-6 pb-6 items-start justify-start gap-[12px]">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg bg-white flex flex-row py-2.5 px-4 items-center justify-center border-[1px] border-solid border-light-gray-100 text-black focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 rounded-lg bg-blue-600 flex flex-row py-2.5 px-4 items-center justify-center text-white focus:outline-none"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;