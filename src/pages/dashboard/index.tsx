import ClientAddForm from '@/components/client/ClientAddForm'
import { HomeIcon } from 'lucide-react'

const ClientAddPage = () => {
    return (
        <div className="p-2">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h1 className="text-xl font-medium">Client (ADD)</h1>
                    <p className="text-sm text-gray-500">Add Client Details</p>
                </div>
                <div className="flex items-center">
                    <span className="flex items-center gap-1">
                        <HomeIcon className="w-4 h-4 text-gray-400" />
                        <span className="mr-2 text-sm text-gray-400">Home</span>
                    </span>
                    <span className="text-sm text-gray-400">/</span>
                    <span className="ml-2 text-sm text-blue-600">
                        Add Article
                    </span>
                </div>
            </div>

            <ClientAddForm />
        </div>
    )
}

export default ClientAddPage
