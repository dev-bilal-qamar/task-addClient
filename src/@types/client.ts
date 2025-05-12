export interface ClientType {
    ctID: number
    ctDesc: string
}

export interface ClientFormValues {
    firstName: string
    middleName: string
    lastName: string
    clientName: string
    abbr: string
    company: string
    designation: string
    nrcNo: string
    idNatNo: string
    tvaNo: string
    noImpot: string
    bBCCompulsory: boolean

    clientType: ClientType
    clientTypeId: number
    acType: string
    factType: string
    telephone: string
    email: string
    discounts: number
    address: string
    homeAddress: string
    creditLimit: number
    moDiscounts: number
    partsDiscounts: number
    proformaValidity: number
    postalCode: string
    city: string
    town: string
    province: string
    country: string
    customersSegmentId: number

    bTaxExempt: boolean
    bNoTax: boolean
    bSaleCredit: boolean
    bJma: boolean
    bFiscalCell: boolean
    bA4Print: boolean
    bCreditAllowed: boolean
    bDoubtful: boolean
    bLocal: boolean
}

export const initialValues: ClientFormValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    clientName: '',
    abbr: '',
    company: '',
    designation: '',
    nrcNo: '',
    idNatNo: '',
    tvaNo: '',
    noImpot: '',
    bBCCompulsory: false,

    clientType: { ctID: 0, ctDesc: '' },
    clientTypeId: 0,
    acType: '',
    factType: '',
    telephone: '',
    email: '',
    discounts: 0,
    address: '',
    homeAddress: '',
    creditLimit: 0,
    moDiscounts: 0,
    partsDiscounts: 0,
    proformaValidity: 30,
    postalCode: '',
    city: '',
    town: '',
    province: '',
    country: '',
    customersSegmentId: 0,

    bTaxExempt: false,
    bNoTax: false,
    bSaleCredit: false,
    bJma: false,
    bFiscalCell: false,
    bA4Print: false,
    bCreditAllowed: false,
    bDoubtful: false,
    bLocal: false,
}
