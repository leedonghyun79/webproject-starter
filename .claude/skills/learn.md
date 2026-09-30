---
name: learn
description: 구현·리뷰 후 배운 점을 3줄로 기록 (재사용 가능한 지식으로)
---

## /learn — 학습 내용 기록 (3줄 원칙)

**언제:** `/review` 통과 후, 또는 버그 해결 후 즉시

### 기록 장소
`docs/learnings.md` 파일에 추가

### 3줄 형식

```markdown
## [날짜] [주제]

**배운 점:** [1줄 핵심]
**언제 쓸까:** [언제/어디서 재사용할 수 있는가]
**예시/코드:**
```

### 예시

```markdown
## 2026-09-30 NestJS JWT 쿠키 설정

**배운 점:** res.cookie()는 Response 객체의 메서드인데, Controller에서 직접 써야 한다 (Service에선 안 됨).
**언제 쓸까:** 모든 쿠키 기반 인증 구현 시. 특히 OAuth 콜백 처리할 때.
**예시:** 
\`\`\`typescript
@Post('login')
login(@Res() res: Response, @Body() dto: LoginDto) {
  res.cookie('token', jwtToken, { httpOnly: true });
  res.json({ success: true });
}
\`\`\`

---

## 2026-09-30 Next.js 환경변수 (client/.env.local)

**배운 점:** Next.js에서 NEXT_PUBLIC_* 접두사 없는 환경변수는 서버사이드에서만 쓸 수 있다.
**언제 쓸까:** API_URL을 클라이언트에서 접근하려 할 때.
**예시:** NEXT_PUBLIC_API_URL=http://localhost:3000 (public으로 변경)
```

---

**규칙:**
- ⏰ 한 번에 3줄 이상 안 씀 (짧고 임팩트 있게)
- 🎯 "왜"에 집중 (What은 코드에 있으니까)
- 🔄 같은 주제 반복 땐 기존 항목 업데이트
