import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { trpc, getQueryClient } from '../trpc/server'
import { Suspense } from 'react'
import ClientPage from './client'
const Page = async () => {
	const queryClient = getQueryClient()
	void queryClient.prefetchQuery(
		trpc.createAI.queryOptions({ text: 'Shokhrukh' })
	)

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<p>Loading...</p>}>
				<ClientPage />
			</Suspense>
		</HydrationBoundary>
	)
}

export default Page
