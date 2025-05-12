import React from 'react'
import {
    accountTypeOptions,
    clientTypeOptions,
    commercialOptions,
    countryOptions,
    factureTypeOptions,
    segmentOptions,
} from '.'
import { Field } from 'formik'
import EnhancedSelect from '../ui/EnhancedSelect'
import EnhancedInput from '../ui/EnhancedInput'

const ClientFirstSection: React.FC = () => {
    return (
        <div className="flex flex-col flex-1 w-full gap-3 sm:gap-4">
            <h2 className="mb-1 text-sm font-medium sm:mb-2">
                Client Category
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                <div>
                    <EnhancedSelect
                        id="clientTypeId"
                        name="clientTypeId"
                        label="Client Type"
                        options={clientTypeOptions}
                        placeholder="Select"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedSelect
                        id="acType"
                        name="acType"
                        label="Account Type"
                        options={accountTypeOptions}
                        placeholder="Select"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedSelect
                        id="factType"
                        name="factType"
                        label="Fac. Type"
                        options={factureTypeOptions}
                        placeholder="Select"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedInput
                        id="telephone"
                        name="telephone"
                        label="Telephone"
                        placeholder="--"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
            </div>

            <div>
                <EnhancedInput
                    id="email"
                    name="email"
                    label="Email IDs"
                    placeholder="--"
                    labelClassName="top-[-0.7rem]"
                />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <div className="relative mt-2">
                    <label
                        htmlFor="address"
                        className="absolute -top-2.5 left-2 px-1 bg-white text-xs text-gray-600 z-10"
                    >
                        Address
                    </label>
                    <div className="h-24 p-2 border border-gray-200 rounded-md bg-yellow-50">
                        <Field
                            as="textarea"
                            id="address"
                            name="address"
                            placeholder="--"
                            className="w-full h-full bg-transparent border-none outline-none resize-none"
                        />
                    </div>
                </div>
                <div className="relative mt-2">
                    <label
                        htmlFor="homeAddress"
                        className="absolute -top-2.5 left-2 px-1 bg-white text-xs text-gray-600 z-10"
                    >
                        Home Address
                    </label>
                    <div className="h-24 p-2 border border-gray-200 rounded-md bg-yellow-50">
                        <Field
                            as="textarea"
                            id="homeAddress"
                            name="homeAddress"
                            placeholder="--"
                            className="w-full h-full bg-transparent border-none outline-none resize-none"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                <div>
                    <EnhancedInput
                        id="postalCode"
                        name="postalCode"
                        label="Postal Code"
                        placeholder="--"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedInput
                        id="city"
                        name="city"
                        label="City"
                        placeholder="--"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedInput
                        id="town"
                        name="town"
                        label="Villa"
                        placeholder="--"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedInput
                        id="province"
                        name="province"
                        label="Province"
                        placeholder="--"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
                <div>
                    <EnhancedSelect
                        id="country"
                        name="country"
                        label="Country"
                        options={countryOptions}
                        placeholder="Select"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedSelect
                        id="customersSegmentId"
                        name="customersSegmentId"
                        label="Segment"
                        options={segmentOptions}
                        placeholder="Select"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
                <div>
                    <EnhancedSelect
                        id="commercial"
                        name="commercial"
                        label="Commercial"
                        options={commercialOptions}
                        placeholder="Select"
                        labelClassName="top-[-0.7rem]"
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientFirstSection
