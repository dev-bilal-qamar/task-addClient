import React from 'react'
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { X, Save, Loader } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { ClientFormValues, initialValues } from '@/@types/client'
import PersonalDetailsSection from './PersonalDetailsSection'
import ClientCategorySection from './ClientCategorySection'

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format'),
    telephone: Yup.string(),
    firstName: Yup.string(),
    lastName: Yup.string(),
    creditLimit: Yup.number().min(0, 'Must be a positive number'),
    discounts: Yup.number()
        .min(0, 'Must be a positive number')
        .max(100, 'Cannot exceed 100%'),
    moDiscounts: Yup.number()
        .min(0, 'Must be a positive number')
        .max(100, 'Cannot exceed 100%'),
    partsDiscounts: Yup.number()
        .min(0, 'Must be a positive number')
        .max(100, 'Cannot exceed 100%'),
})

const ClientAddForm: React.FC = () => {
    const { toast } = useToast()

    const handleSubmit = async (
        values: ClientFormValues,
        { setSubmitting, resetForm }: any,
    ) => {
        try {
            values.clientName = [
                values.firstName,
                values.middleName,
                values.lastName,
            ]
                .filter(Boolean)
                .join(' ')

            values.clientType = {
                ctID: values.clientTypeId,
                ctDesc:
                    values.clientTypeId === 1
                        ? 'Individual'
                        : values.clientTypeId === 2
                          ? 'DTE'
                          : 'Corporate',
            }

            const token = localStorage.getItem('token') || ''

            // API call with Axios
            const response = await axios.post(
                'https://jmotor.vps.webdock.cloud/api/clients/add',
                values,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            )

            toast({
                title: 'Success',
                description: 'Client added successfully',
            })

            resetForm({ values: initialValues })
        } catch (error) {
            console.error('Error adding client:', error)
            toast({
                title: 'Error',
                description: 'Failed to add client',
            })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="flex flex-col gap-4">
                        <PersonalDetailsSection />
                        <ClientCategorySection />
                        <div className="flex justify-end p-4 space-x-2 ">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                <X size={16} />
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader
                                            size={16}
                                            className="animate-spin"
                                        />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save size={16} />
                                        Save
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ClientAddForm
