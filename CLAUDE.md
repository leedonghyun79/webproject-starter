# Project Contract — Loopa (학습용 모노레포)

**목표:** 당근마켓 클론으로 NestJS + Next.js 풀스택 학습

## Stack & Commands

**Monorepo:** client (Next.js/TS) + server (NestJS/TS/PostgreSQL/TypeORM/JWT)

```bash
npm install                      # 전체 의존성
cd client && npm run dev        # localhost:3000
cd server && npm run dev        # localhost:3000 (기본값)
npm run test                    # 테스트
```

## Always Applied Rules

1. ✅ `.env*` 파일 절대 금지 (열기·수정 불가)
2. ✅ **3개 이상 파일 수정 전** `/plan` 실행하고 확인받기
3. ✅ **수정 후 반드시** 빌드·테스트 실행해서 결과 보고하기
4. ✅ **버그는 원인 확인 후** 수정 (원인 모를 땐 `/debug` 사용)
5. ✅ **해결한 학습 내용** `docs/learnings.md`에 3줄씩 기록하기

## Workflow

**새 기능/큰 수정:** `/plan` → 구현 → `/review` → `/learn`  
**원인 모를 버그:** `/debug` → 원인 찾기 → 수정 → `/learn`

## See Also

- 프로젝트 표준, 폴더 구조 → `pixelconnect-standards` 스킬
- NestJS 스캐폴딩 → `nestjs-boilerplate` 스킬
- `/plan`, `/debug`, `/review`, `/learn` 스킬은 `.claude/skills/` 참조
