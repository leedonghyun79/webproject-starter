# Project Contract — WebProject Starter (NestJS + Next.js 풀스택 템플릿)

**목표:** PixelConnect 신규 프로젝트의 NestJS + Next.js 모노레포 초기 세팅 도구  
**사용:** 이 폴더를 복사해서 새 프로젝트로 시작 → PRD 전달하면 Claude가 자동으로 구현·리뷰·학습까지 진행

## Stack & Commands

**Monorepo:** client (Next.js/TS) + server (NestJS/TS/PostgreSQL/TypeORM/JWT)

```bash
npm install                      # 전체 의존성
cd client && npm run dev        # localhost:3000
cd server && npm run dev        # localhost:3000 (기본값)
npm run test                    # 테스트
```

## Always Applied Rules (자동 적용)

1. ✅ `.env*` 파일 절대 금지 (열기·수정 불가)
2. ✅ **PRD/요구사항 전달** → 자동으로 `prd` 스킬 (질문 1회 → 플랜 확인 1회 → 자동 진행)
3. ✅ **3개 이상 파일 수정 필요** → 자동으로 `plan` 스킬 (확인 후 진행)
4. ✅ **원인 모를 버그 발생** → 자동으로 `debug` 스킬 (체계적 분석)
5. ✅ **수정 후 자동으로** 빌드·테스트 실행 + 결과 보고
6. ✅ **구현 완료 후 자동으로** `review` 스킬 (체크리스트)
7. ✅ **리뷰/버그 해결 후 자동으로** `learn` 스킬 (`docs/learnings.md`에 3줄 기록)

## Workflow

```
PRD 전달
└─ prd: 질문 → 플랜 저장 → 확인받기 (1회)
   └─ 자동 구현 (plan 포함, 태스크별 커밋)
      └─ 자동 리뷰 (review)
         └─ 자동 학습 기록 (learn)
```

## See Also

- 프로젝트 표준, 폴더 구조 → `/webdev-setting` 스킬
- NestJS 스캐폴딩 → `nestjs-boilerplate` 스킬
- 스킬 목록 → `.claude/skills/` (plan, debug, review, learn, prd)

## 사용 방법

1. **이 폴더를 복사** → 새 프로젝트명으로 생성
2. **PRD/요구사항 문서 작성** → Loopa의 CLAUDE.md 규칙 적용
3. **Claude에 PRD 전달** → `prd` 스킬 자동 시작
4. **질문 답변 + 플랜 확인** (1회씩) → 자동 구현·리뷰·학습
