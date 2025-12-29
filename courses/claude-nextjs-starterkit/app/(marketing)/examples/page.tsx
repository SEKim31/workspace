"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { toast } from "sonner"
import {
  Bell,
  Check,
  ChevronRight,
  Loader2,
  Mail,
  Plus,
  Send,
  Trash,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

// 예제 페이지
export default function ExamplesPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="container py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* 헤더 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            컴포넌트 예제
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            스타터킷에 포함된 UI 컴포넌트들의 실제 동작 예제입니다.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {/* 버튼 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">버튼</h2>
            <p className="mt-2 text-muted-foreground">
              다양한 스타일과 상태의 버튼 컴포넌트입니다.
            </p>
            <Separator className="my-6" />

            <div className="space-y-6">
              {/* 버튼 변형 */}
              <div>
                <h3 className="mb-4 text-sm font-medium">버튼 스타일</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>기본</Button>
                  <Button variant="secondary">보조</Button>
                  <Button variant="destructive">삭제</Button>
                  <Button variant="outline">외곽선</Button>
                  <Button variant="ghost">고스트</Button>
                  <Button variant="link">링크</Button>
                </div>
              </div>

              {/* 버튼 크기 */}
              <div>
                <h3 className="mb-4 text-sm font-medium">버튼 크기</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">작은 버튼</Button>
                  <Button>기본 버튼</Button>
                  <Button size="lg">큰 버튼</Button>
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* 버튼 상태 */}
              <div>
                <h3 className="mb-4 text-sm font-medium">버튼 상태</h3>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>비활성화</Button>
                  <Button onClick={handleLoadingDemo} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "로딩 중..." : "로딩 데모"}
                  </Button>
                </div>
              </div>

              {/* 아이콘 버튼 */}
              <div>
                <h3 className="mb-4 text-sm font-medium">아이콘 버튼</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    이메일 보내기
                  </Button>
                  <Button variant="outline">
                    <Send className="mr-2 h-4 w-4" />
                    전송
                  </Button>
                  <Button variant="destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    삭제
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* 입력 필드 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">입력 필드</h2>
            <p className="mt-2 text-muted-foreground">
              폼에서 사용하는 입력 컴포넌트입니다.
            </p>
            <Separator className="my-6" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">비밀번호</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">비활성화</Label>
                <Input id="disabled" disabled placeholder="비활성화된 입력" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="readonly">읽기 전용</Label>
                <Input id="readonly" readOnly value="읽기 전용 값" />
              </div>
            </div>
          </section>

          {/* 카드 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">카드</h2>
            <p className="mt-2 text-muted-foreground">
              콘텐츠를 그룹화하는 카드 컴포넌트입니다.
            </p>
            <Separator className="my-6" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* 기본 카드 */}
              <Card>
                <CardHeader>
                  <CardTitle>기본 카드</CardTitle>
                  <CardDescription>카드 설명이 여기에 표시됩니다.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    카드 내용이 여기에 들어갑니다. 다양한 콘텐츠를 담을 수 있습니다.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">확인</Button>
                </CardFooter>
              </Card>

              {/* 프로필 카드 */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" alt="프로필" />
                    <AvatarFallback>홍길</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">홍길동</CardTitle>
                    <CardDescription>프론트엔드 개발자</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    React와 Next.js를 주로 사용하는 개발자입니다.
                  </p>
                </CardContent>
              </Card>

              {/* 통계 카드 */}
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>총 방문자</CardDescription>
                  <CardTitle className="text-3xl">1,234</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    지난 주 대비 <span className="text-green-500">+12%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 배지 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">배지</h2>
            <p className="mt-2 text-muted-foreground">
              상태나 카테고리를 표시하는 배지 컴포넌트입니다.
            </p>
            <Separator className="my-6" />

            <div className="flex flex-wrap gap-4">
              <Badge>기본</Badge>
              <Badge variant="secondary">보조</Badge>
              <Badge variant="destructive">삭제</Badge>
              <Badge variant="outline">외곽선</Badge>
            </div>
          </section>

          {/* 토스트 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">토스트 알림</h2>
            <p className="mt-2 text-muted-foreground">
              사용자에게 피드백을 제공하는 토스트 알림입니다.
            </p>
            <Separator className="my-6" />

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                onClick={() => toast("기본 알림", { description: "알림 내용입니다." })}
              >
                기본 알림
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.success("성공!", { description: "작업이 완료되었습니다." })
                }
              >
                성공 알림
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.error("오류 발생", { description: "다시 시도해주세요." })
                }
              >
                오류 알림
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.warning("주의", { description: "확인이 필요합니다." })
                }
              >
                경고 알림
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.info("정보", { description: "참고할 내용입니다." })
                }
              >
                정보 알림
              </Button>
            </div>
          </section>

          {/* 스켈레톤 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">스켈레톤 로딩</h2>
            <p className="mt-2 text-muted-foreground">
              콘텐츠 로딩 중 표시하는 플레이스홀더입니다.
            </p>
            <Separator className="my-6" />

            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </section>

          {/* 아바타 섹션 */}
          <section>
            <h2 className="text-2xl font-bold">아바타</h2>
            <p className="mt-2 text-muted-foreground">
              사용자 프로필을 표시하는 아바타 컴포넌트입니다.
            </p>
            <Separator className="my-6" />

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="" alt="사용자" />
                <AvatarFallback>홍길</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
