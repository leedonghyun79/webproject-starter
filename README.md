# 🚀 Loopa — NestJS + Next.js 초기 세팅 템플릿

> **신규 PixelConnect 프로젝트의 자동 워크플로우 보일러플레이트**  
> PRD(요구사항)만 전달하면 Claude가 설계 → 구현 → 리뷰 → 학습까지 **자동으로 진행**합니다.

## 📋 개요

**Loopa**는 PixelConnect의 모든 NestJS + Next.js 신규 프로젝트를 위한 **초기 세팅 템플릿**입니다.

### 🎯 목적
- **보일러플레이트**: 새 프로젝트는 이 폴더를 복사해서 시작
- **자동 워크플로우**: PRD를 전달하면 Claude가 plan → 구현 → review → learn 자동 진행
- **토큰 효율**: 경량 하네스로 필요한 절차만 실행 (70~80% 토큰 절감)

## ✨ 특징

| 기능 | 설명 |
|------|------|
| **자동 워크플로우** | PRD → 자동 plan/구현/review/learn |
| **경량 하네스** | 항상 켜진 규칙 5줄 + 필요할 때만 스킬 호출 |
| **토큰 효율화** | 승인 지점 1회 (70~80% 절감) |
| **로컬 스킬** | plan, debug, review, learn, prd 탑재 |
| **학습 기록** | 배운 점 자동 기록 (docs/learnings.md) |
| **안전 규칙** | .env 금지, 큰 작업은 승인 먼저 |

## 🚀 시작 방법

### 1️⃣ 새 프로젝트 생성

```bash
cp -r ~/projects/loopa ~/projects/my-project
cd ~/projects/my-project
npm install
cd client && npm install
cd ../server && npm install
```

### 2️⃣ 환경 설정

`.env.local` 생성 (`.env.example` 참고):
```bash
DATABASE_URL=postgresql://user:password@localhost/mydb
JWT_SECRET=your_secret_key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 3️⃣ PRD 작성

`docs/` 폴더에 마크다운으로 요구사항 정의

### 4️⃣ Claude에 전달

```
"이거 PRD야. 구현해줄 수 있어?" + [문서 첨부]
```

자동 진행:
1. prd 스킬: 질문(1회) → 플랜 생성
2. 사용자: "좋아" 확인(1회)
3. 자동: 구현 → 리뷰 → 학습

## 📊 자동 워크플로우

```
PRD 전달
  ↓ prd 스킬 (질문 1회)
플랜 생성 + 확인 (1회)
  ↓ 사용자 승인
자동 구현 (plan 스킬)
  ↓ 빌드/테스트
자동 리뷰 (review 스킬)
  ↓ 체크리스트
자동 학습 (learn 스킬)
  ↓
완료 + docs/learnings.md 업데이트
```

## 🎯 스킬 설명

### 1. **prd** - PRD 기반 자동 워크플로우
- 모호한 점 질문 (1회, 최대 3개)
- 플랜 생성 → `docs/plans/`
- 사용자 확인 후 자동 진행

### 2. **plan** - 설계 및 태스크 분해
- 목표 정의
- 태스크 체크박스
- 파일 목록 & 리스크

### 3. **debug** - 버그 원인 분석
- 현상 진단 → 범위 좁혀가기 → 원인 파악
- 자동 수정 → learn 자동 호출

### 4. **review** - 코드 리뷰 (자동/수동)
- 빌드 & 테스트 ✅
- 코드 정확성 (로직, 타입, 예외)
- 보안 (.env, XSS, SQL injection)
- 아키텍처 & 문서

### 5. **learn** - 학습 내용 기록

```markdown
**배운 점:** [1줄 핵심]
**언제 쓸까:** [재사용 시점]
**예시:** [구체적 예]
```

## 📁 폴더 구조

```
loopa/
├── README.md
├── CLAUDE.md
├── .claude/skills/          # 5개 스킬 탑재
├── src/
│   ├── client/              # Next.js
│   └── server/              # NestJS
├── tests/
├── docs/
│   ├── learnings.md         # 학습 로그 (자동 기록)
│   └── superpowers/
│       ├── specs/           # 설계서
│       └── plans/           # 구현 플랜
└── .gitignore
```

## 🛠️ 명령어

```bash
# 개발 서버
cd client && npm run dev      # localhost:3000
cd server && npm run dev      # localhost:3001

# 빌드
npm run build

# 테스트
npm test

# 린트
npm run lint
```

## 🔴 주의사항

1. **`.env*` 파일 금지** - 열기, 수정 불가
2. **큰 작업은 승인 먼저** - 파일 삭제, DB 변경
3. **무단 패키지 설치 금지** - 먼저 물어보기
4. **커밋 메시지** - `feat:`, `fix:`, `refactor:` 접두사
5. **작은 단위 커밋** - 한 Task = 1~3개 커밋

## 📚 Stack

**Client:** Next.js 14+ / TypeScript / Tailwind CSS / Axios
**Server:** NestJS 10+ / PostgreSQL / TypeORM / JWT + Passport
**Common:** Node.js 18+ / npm

## ❓ FAQ

**Q: Loopa를 새 프로젝트로 어떻게 쓰나요?**  
A: 폴더 복사 → PRD 작성 → Claude에 전달 → 자동 진행

**Q: 사용자는 언제 개입하나요?**  
A: 총 2번 (질문 답변 1회 + 플랜 확인 1회)

**Q: 토큰은 얼마나 절감되나요?**  
A: 기존 대비 70~80% 절감

**Q: 버그가 나면?**  
A: Claude에 설명 → debug 스킬 자동 시작 → 자동 수정 → learn 자동 기록

---

**Made with ❤️ for PixelConnect**

Last Updated: 2026-09-30
