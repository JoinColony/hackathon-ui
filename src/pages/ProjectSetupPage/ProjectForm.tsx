import { AuthContext } from 'components/AuthContext';
import { ethers } from 'ethers';
import useApi from 'hooks/useApi';
import { CheckCircle } from 'icons/CheckCircle';
import React, { useContext, useState } from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
  error: string | null;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  required,
  error,
}) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <label
        htmlFor={id}
        className="text-custom-color font-inter text-base font-normal leading-6 w-1/3"
      >
        {required ? label + '*' : label}
      </label>
      <div className="w-full">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3"
          required={required}
        />
        <div className="text-red-400 mt-1 h-4 text-sm">{error}</div>
      </div>
    </div>
  );
};

interface SubmitButtonProps {
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="disabled:bg-light-gray-300 disabled:cursor-not-allowed flex justify-center items-start px-4 py-2 space-x-2.5 bg-light-blue-400 rounded-md text-white"
    >
      Submit Project
    </button>
  );
};

interface FormState {
  projectTitle: string;
  projectWebsite: string;
  colonyUrl: string;
  colonyAddress: string;
  projectDescription: string;
}

interface ErrorState {
  projectTitle: string | null;
  projectWebsite: string | null;
  colonyUrl: string | null;
  colonyAddress: string | null;
  projectDescription: string | null;
}

enum FieldKeys {
  ProjectTitle = 'projectTitle',
  ProjectWebsite = 'projectWebsite',
  ColonyUrl = 'colonyUrl',
  ColonyAddress = 'colonyAddress',
  ProjectDescription = 'projectDescription',
}

const ProjectForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    projectTitle: '',
    projectWebsite: '',
    colonyUrl: '',
    colonyAddress: '',
    projectDescription: '',
  });
  const [errorState, setErrorState] = useState<ErrorState>({
    projectTitle: null,
    projectWebsite: null,
    colonyUrl: null,
    colonyAddress: null,
    projectDescription: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { postData } = useApi();
  const authContext = useContext(AuthContext);
  const handleChange = (id: string) => (value: string) => {
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const validateForm = (formState: FormState) => {
    const { colonyAddress } = formState;
    const isAddress = ethers.isAddress(colonyAddress);
    if (!isAddress) {
      setErrorState({
        ...errorState,
        colonyAddress: 'Address must be a valid address',
      });
    } else {
      setErrorState({
        ...errorState,
        colonyAddress: null,
      });
    }
    return isAddress;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(formState)) {
      setIsSubmitted(true);
      await postData('projects', {
        info: JSON.stringify({ ...formState, updates: [] }),
        owner: authContext.address,
      });
    }
  };

  const fields: {
    id: FieldKeys;
    label: string;
    required: boolean;
    pattern?: string;
  }[] = [
    { id: FieldKeys.ProjectTitle, label: 'Project title', required: true },
    { id: FieldKeys.ProjectWebsite, label: 'Project website', required: false },
    { id: FieldKeys.ColonyUrl, label: 'Colony URL', required: false },
    {
      id: FieldKeys.ColonyAddress,
      label: 'Colony address',
      required: true,
      pattern: '^0x[a-fA-F0-9]{40}$',
    },
    {
      id: FieldKeys.ProjectDescription,
      label: 'Project description',
      required: true,
    },
  ];

  return (
    <>
      <h3 className="text-lg font-semibold">Project Overview</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-y-4 w-full max-w-screen-xl"
      >
        {fields.map(({ id, label, required }) => (
          <TextField
            key={id}
            id={id}
            label={label}
            value={formState[id]}
            onChange={handleChange(id)}
            required={required}
            error={errorState[id]}
          />
        ))}

        <div className="w-full flex justify-end">
          {!isSubmitted ? (
            <SubmitButton disabled={!authContext.loggedIn} />
          ) : (
            <div className="border flex items-center gap-x-2 w-2/3 text-left py-3 px-6 text-sm font-semibold rounded-md bg-light-green-100 border-light-green-400">
              <CheckCircle />
              Your project has been submitted
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
