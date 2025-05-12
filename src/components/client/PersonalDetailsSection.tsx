import React from 'react'
import EnhancedInput from '../ui/EnhancedInput'
import FormCheckbox from '../ui/FormCheckbox'
import { Field, useField } from 'formik'

const PersonalDetailsSection: React.FC = () => {
    const [nouveauField] = useField('nouveau')

    return (
        <div className="p-3 bg-white rounded-md shadow-sm sm:p-4">
            <h2 className="mb-3 text-sm font-medium sm:mb-4">
                Personal Details
            </h2>
            ={' '}
            <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:mb-4">
                <div className="relative mt-2">
                    <label
                        htmlFor="nouveau"
                        className="absolute -top-2.5 left-2 px-1 bg-white text-xs text-gray-600 z-10"
                    >
                        Nouveau
                    </label>
                    <div className="relative">
                        <Field
                            id="nouveau"
                            name="nouveau"
                            type="text"
                            placeholder="--"
                            className="w-full h-10 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            value={nouveauField.value || ''}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start col-span-1 gap-3 sm:flex-row sm:items-center sm:col-span-3 sm:gap-4">
                    <EnhancedInput
                        id="company"
                        name="company"
                        label="Company Name"
                        placeholder="--"
                        className="flex-1 w-full"
                        labelClassName="top-[-0.7rem]"
                    />
                    <FormCheckbox
                        id="bBCCompulsory"
                        name="bBCCompulsory"
                        label="RC Obligatoire"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:mb-4">
                <EnhancedInput
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="middleName"
                    name="middleName"
                    label="Middle Name"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="clientName"
                    name="clientName"
                    label="Société"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
            </div>
            <div className="grid grid-cols-1 gap-3 mb-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:mb-4">
                <EnhancedInput
                    id="abbr"
                    name="abbr"
                    label="Abbreviation"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="designation"
                    name="designation"
                    label="Designation"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="nrcNo"
                    name="nrcNo"
                    label="N.R.C"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="noImpot"
                    name="noImpot"
                    label="N° Import"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                <EnhancedInput
                    id="idNatNo"
                    name="idNatNo"
                    label="ID NAT."
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
                <EnhancedInput
                    id="tvaNo"
                    name="tvaNo"
                    label="TVA"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
            </div>
        </div>
    )
}

export default PersonalDetailsSection
