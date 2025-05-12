import React from 'react'
import { ChevronsLeft } from 'lucide-react'
import ClientFirstSection from './clientFirstSection'
import FormCheckbox from '../ui/FormCheckbox'
import EnhancedInput from '../ui/EnhancedInput'

const ClientCategorySection: React.FC = () => {
    return (
        <div className="flex flex-col items-start w-full gap-4 p-3 bg-white rounded-md shadow-sm xl:flex-row sm:p-4">
            <ClientFirstSection />
            <div className="flex flex-col w-full xl:max-w-[451px] gap-3 sm:gap-4 p-3 sm:p-4 rounded-md bg-blue-50">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="flex flex-col items-start w-full gap-3 sm:flex-row sm:items-center sm:w-auto">
                        <EnhancedInput
                            id="discounts"
                            name="discounts"
                            label="Rémise"
                            placeholder="--"
                            className="w-full sm:max-w-[232px]"
                            labelClassName="bg-blue-50 top-[-0.7rem]"
                            icon={
                                <span className="text-muted-foreground">%</span>
                            }
                        />
                        <div className="flex items-center flex-1 gap-3 w-[200px]">
                            <FormCheckbox
                                id="bLocal"
                                name="bLocal"
                                label="Local Client"
                            />
                        </div>
                    </div>
                    <div className="w-[35px] h-[41px] hidden sm:flex items-center justify-center bg-[#d9d9d9]">
                        <ChevronsLeft className="size-6 text-black/[23%]" />
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <EnhancedInput
                        id="creditLimit"
                        name="creditLimit"
                        label="Credit Limit"
                        placeholder="--"
                        className="w-full sm:max-w-[232px]"
                        labelClassName="bg-blue-50 top-[-0.7rem]"
                    />
                    <FormCheckbox
                        id="bCreditAllowed"
                        name="bCreditAllowed"
                        label="Credit"
                    />
                </div>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <EnhancedInput
                        id="moDiscounts"
                        name="moDiscounts"
                        label="Main d'oeuvre remise"
                        placeholder="--"
                        className="w-full sm:max-w-[232px]"
                        labelClassName="bg-blue-50 top-[-0.7rem]"
                    />
                    <FormCheckbox
                        id="bDoubtful"
                        name="bDoubtful"
                        label="Clients Douteux"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <EnhancedInput
                        id="proformaValidity"
                        name="proformaValidity"
                        label="Proforma Validity"
                        placeholder="--"
                        className="w-full sm:max-w-[232px]"
                        labelClassName="bg-blue-50 top-[-0.7rem]"
                    />
                </div>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <EnhancedInput
                        id="partsDiscounts"
                        name="partsDiscounts"
                        label="Fournitures remise"
                        placeholder="--"
                        className="w-full sm:max-w-[232px]"
                        labelClassName="bg-blue-50 top-[-0.7rem]"
                    />
                    <FormCheckbox
                        id="bSupplier"
                        name="bSupplier"
                        label="Supprimer"
                    />
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-3 mt-2 sm:grid-cols-4">
                    <FormCheckbox
                        id="bTaxExempt"
                        name="bTaxExempt"
                        label="Exo. TVA"
                    />
                    <div className="col-span-1 sm:col-span-2">
                        <FormCheckbox
                            id="bNoTax"
                            name="bNoTax"
                            label="Pas TVA Non Declare"
                        />
                    </div>
                    <FormCheckbox
                        id="bSaleCredit"
                        name="bSaleCredit"
                        label="Vente Credit"
                    />
                    <FormCheckbox id="bJma" name="bJma" label="JMA" />
                    <div className="col-span-1 sm:col-span-2">
                        <FormCheckbox
                            id="bFiscalCell"
                            name="bFiscalCell"
                            label="Cellule Fiscal"
                        />
                    </div>
                    <FormCheckbox
                        id="bA4Print"
                        name="bA4Print"
                        label="A4 Print"
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientCategorySection
