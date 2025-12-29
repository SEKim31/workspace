"use client"

import { useEffect, useState } from "react"

// SSR 하이드레이션 이슈 방지를 위한 마운트 상태 훅
// 클라이언트에서만 렌더링해야 하는 컴포넌트에 사용
export function useMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
