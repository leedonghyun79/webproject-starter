---
name: nextjs-boilerplate
description: Next.js 프로젝트 자동 생성 — 표준 폴더 구조 + 설정 파일
---

# NextJS Boilerplate — 프로젝트 생성

현재 client 폴더 구조를 기반으로 새로운 Next.js 프로젝트를 자동 생성합니다.

## 📍 프로젝트 생성 경로

생성할 프로젝트 경로를 입력해주세요:

| 옵션 | 설명 | 실행 명령어 |
|------|------|-----------|
| 기본값 | new-nextjs-project 생성 | `npm run create-nextjs` |
| 커스텀 경로 | 원하는 경로에 생성 | `npm run create-nextjs ./my-app` |
| 절대 경로 | 절대 경로 지정 | `npm run create-nextjs /home/projects/app` |

**입력 예시:**
- `./my-nextjs-project` — 현재 디렉토리 아래
- `~/projects/my-app` — 홈 디렉토리 기준
- `D:\projects\my-app` (Windows) — 절대 경로

## 🚀 사용법

### 기본값 (new-nextjs-project 생성)
```bash
npm run create-nextjs
```

### 커스텀 경로에 생성
```bash
npm run create-nextjs ./my-nextjs-app
npm run create-nextjs /absolute/path/to/project
```

### 프로젝트 시작하기
```bash
cd new-nextjs-project
npm install
npm run dev
```

## 📁 생성되는 구조

```
project/
├── src/
│   ├── app/
│   │   ├── (common)/              # 공통 영역 (라우트 그룹)
│   │   │   ├── components/
│   │   │   ├── config/
│   │   │   ├── constants/
│   │   │   └── utils/
│   │   ├── (domains)/             # 도메인 라우팅 (라우트 그룹)
│   │   │   ├── (auth)/
│   │   │   ├── (dashboard)/
│   │   │   └── (settings)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── lib/
│   ├── store/
│   ├── types/
│   └── utils/
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── .gitignore
```

## 📝 명명 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase.tsx | UserProfile.tsx |
| 함수/변수 | camelCase | formatDate, apiUrl |
| 파일 | kebab-case.ts | user-config.ts |
| 상수 | UPPER_SNAKE_CASE | API_BASE_URL |
| 폴더 | 소문자 또는 (라우트그룹) | (auth), components |

## ⚙️ 설정 파일 자동 복사

- ✅ `next.config.ts` — Next.js 설정
- ✅ `tsconfig.json` — TypeScript 설정  
- ✅ `tailwind.config.ts` — Tailwind CSS
- ✅ `postcss.config.mjs` — PostCSS
- ✅ `eslint.config.mjs` — ESLint
- ✅ `.gitignore` — Git 제외 파일
- ✅ `package.json` — 의존성

## 💡 팁

- **라우트 그룹** `(폴더명)`은 URL에 영향 없음 → 구조 정리용
- **공통 컴포넌트** → `(common)/components/`
- **도메인 특화 컴포넌트** → 각 도메인 폴더 내에서만
- **config/constants** → `(common)/`에만 배치

## ⚠️ 주의

- `.env*` 파일은 절대 커밋 금지
- 외부 패키지 추가 전에 검토하기
- 큰 변경은 항상 plan 스킬 먼저 사용

---

**명령어:** `/nextjs-boilerplate`  
**버전:** 1.0.0  
**마지막 업데이트:** 2026-09-30
