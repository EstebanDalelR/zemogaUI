import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { page } = router.query

  return (
    <>
      <h3>
        {page}
      </h3>
    </>
  )
}