import { FC, useState, useContext, useEffect } from 'react';
import { isAddress } from 'ethers';
import { AuthContext } from '../AuthContext';
import { getAddress } from 'ethers';
import Modal from 'components/Modal/Modal';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  const [addressInput, setAddressInput] = useState('');
  const [isValid, setIsValid] = useState(true);
  const { logIn } = useContext(AuthContext);

  useEffect(() => {
    const handleRawMetamask = async () => {
      try {
        // @ts-ignore
        if (window?.ethereum?.isConnected()) {
          // @ts-ignore
          const [account] = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          setAddressInput(getAddress(account));
        }
      } catch (error) {
        // @ts-ignore
        const [{ caveats }] = await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });
        const [account] = caveats[0].value;
        setAddressInput(getAddress(account));
      }
    };
    handleRawMetamask();
  }, [setAddressInput]);

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
    <Modal
      headingText="Login"
      subHeadingText="Login using your wallet address"
      onClose={onClose}
      submitButtonText="Login"
      onSubmit={handleLogin}
      form={
        <>
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
        </>
      }
    />
  );
};

export default LoginModal;
