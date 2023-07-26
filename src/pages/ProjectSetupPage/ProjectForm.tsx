import { CheckCircle } from 'icons/CheckCircle';
import React, { useState } from 'react';

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <label
        htmlFor={id}
        className="text-custom-color font-inter text-base font-normal leading-6 w-1/3"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3"
      />
    </div>
  );
};

const SubmitButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="flex justify-center items-start px-4 py-2 space-x-2.5 bg-light-blue-400 rounded-md text-white"
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (id: string) => (value: string) => {
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(formState);
  };

  const fields: { id: FieldKeys; label: string }[] = [
    { id: FieldKeys.ProjectTitle, label: 'Project title' },
    { id: FieldKeys.ProjectWebsite, label: 'Project website' },
    { id: FieldKeys.ColonyUrl, label: 'Colony URL' },
    { id: FieldKeys.ColonyAddress, label: 'Colony address' },
    { id: FieldKeys.ProjectDescription, label: 'Project description' },
  ];

  return (
    <>
      <h3 className="text-lg font-semibold">Project Overview</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start space-y-8 w-full max-w-screen-xl"
      >
        {fields.map((field) => (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            value={formState[field.id]}
            onChange={handleChange(field.id)}
          />
        ))}

        <div className="w-full flex justify-end">
          {!isSubmitted ? (
            <SubmitButton />
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
