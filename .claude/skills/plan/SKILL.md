---
name: plan
description: 새 기능이나 3개 이상 파일 수정 작업 전에 가벼운 설계 수립하고 확인받기
---

## 구현 설계 (경량)

**자동 호출:** 3개 이상 파일 수정이 필요한 작업이 시작되었을 때

### Step 1: 목표 정의 (1줄)
```
예: "User 로그인 폼 추가 (Next.js 페이지 + NestJS 엔드포인트)"
```

### Step 2: 작은 태스크로 쪼개기 (체크박스)
```
- [ ] API 엔드포인트 설계 (NestJS POST /auth/login)
- [ ] DB 스키마 확인 (users 테이블)
- [ ] Next.js 폼 컴포넌트 (client/components/LoginForm)
- [ ] 통합 테스트
```

### Step 3: 파일 목록
```
client/pages/login.tsx
client/components/LoginForm.tsx
server/src/auth/auth.controller.ts
server/src/auth/auth.service.ts
```

### Step 4: 리스크/의존성
```
- JWT 토큰 저장 위치 (localStorage vs. cookie)
- CORS 설정 확인
```

---

**그다음:** 사람이 "좋아"하면 구현 시작 → 각 태스크마다 작은 커밋 → 완료 후 자동으로 `/review` 실행
