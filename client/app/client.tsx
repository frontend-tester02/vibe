'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useTRPC } from '../trpc/client'

const ClientPage = () => {
	const trpc = useTRPC()
	const { data } = useSuspenseQuery(
		trpc.createAI.queryOptions({ text: 'Shokhrukh' })
	)

	return <div>{JSON.stringify(data)}</div>
}

export default ClientPage
