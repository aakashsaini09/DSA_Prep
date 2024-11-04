import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Button asChild>
      <Link href={'/login'}>Go to login page</Link>
      </Button>
    </>
  )
}

export default page
